"""Prepare the authorized Higgsfield master for the Nextelco hero.

Usage: python docs/hero-nextelco/prepare-film.py PATH_TO_MASTER
Requires opencv-python, Pillow and imageio-ffmpeg. No external generation calls.
"""
import argparse
import subprocess
import tempfile
from pathlib import Path

import cv2
import imageio_ffmpeg
import numpy as np
from PIL import Image

parser = argparse.ArgumentParser()
parser.add_argument("source", type=Path)
args = parser.parse_args()
root = Path(__file__).resolve().parents[2]
output = root / "public" / "media" / "erp"
output.mkdir(parents=True, exist_ok=True)
ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()
capture = cv2.VideoCapture(str(args.source))
count = int(capture.get(cv2.CAP_PROP_FRAME_COUNT))
fps = capture.get(cv2.CAP_PROP_FPS)
width, height = int(capture.get(3)), int(capture.get(4))
assert (width, height, count) == (1366, 768, 141), "Masks belong to this specific master"

# Hand-tracked masks follow the ground lettering and the extraneous skyline.
# They never touch the retail, inventory, delivery or finance spaces.
letter_start = np.array([[175, 218], [260, 200], [385, 335], [310, 360]], np.float32)
letter_end = np.array([[10, 232], [105, 210], [310, 370], [220, 405]], np.float32)
sky_start = np.array([[780, 190], [1090, 245], [1090, 365], [780, 285]], np.float32)
sky_end = np.array([[750, 160], [1100, 235], [1100, 330], [750, 245]], np.float32)

with tempfile.TemporaryDirectory(prefix="nextelco-film-") as temporary:
    clean = Path(temporary) / "clean.mp4"
    pipe = subprocess.Popen([
        ffmpeg, "-y", "-loglevel", "error", "-f", "rawvideo", "-pix_fmt", "bgr24",
        "-s", f"{width}x{height}", "-r", str(fps), "-i", "-", "-an",
        "-c:v", "libx264", "-crf", "15", "-pix_fmt", "yuv420p", str(clean),
    ], stdin=subprocess.PIPE)
    review = []
    for index in range(count):
        ok, frame = capture.read()
        assert ok
        t = index / (count - 1)
        mask = np.zeros((height, width), np.uint8)
        cv2.fillPoly(mask, [np.rint(letter_start * (1 - t) + letter_end * t).astype(np.int32)], 255)
        # Only remove the bright lettering inside the tracked region. Keeping
        # the dark ground intact preserves the diagonal silhouette of the slab.
        bright = (frame.max(axis=2) > 110) | ((frame[:, :, 0].astype(int) > frame[:, :, 2].astype(int) + 25) & (frame[:, :, 0] > 80))
        mask = cv2.dilate((bright & (mask > 0)).astype(np.uint8) * 255, np.ones((9, 9), np.uint8))
        frame = cv2.inpaint(frame, mask, 7, cv2.INPAINT_TELEA)
        sky_mask = np.zeros((height, width), np.uint8)
        cv2.fillPoly(sky_mask, [np.rint(sky_start * (1 - t) + sky_end * t).astype(np.int32)], 255)
        # Protect the real delivery van from the backdrop cleanup.
        van_region = frame[200:420, 740:1000].min(axis=2) > 160
        n, labels, stats, centers = cv2.connectedComponentsWithStats(van_region.astype(np.uint8))
        if n > 1:
            vx, vy, vw, vh, area = stats[1 + np.argmax(stats[1:, cv2.CC_STAT_AREA])]
            sky_mask[max(0, 200 + vy - 14):200 + vy + vh + 14, 740 + vx - 14:740 + vx + vw + 14] = 0
        alpha = cv2.GaussianBlur(sky_mask, (15, 15), 0).astype(np.float32)[:, :, None] / 255
        # Reconstruct the smooth studio backdrop from unobstructed samples,
        # rather than cloning an unrelated strip with a visible hard edge.
        samples = np.zeros((height, width), np.uint8)
        samples[60:165:8, 720:1330:8] = 1
        samples[165:370:8, 1130:1330:8] = 1
        sy, sx = np.where(samples)
        def surface(x, y):
            x, y = x / width, y / height
            return np.stack([np.ones_like(x), x, y, x*x, x*y, y*y], axis=-1)
        fit = np.linalg.lstsq(surface(sx, sy), frame[sy, sx].astype(float), rcond=None)[0]
        ys, xs = np.where(alpha[:, :, 0] > 0)
        predicted = np.clip(surface(xs, ys) @ fit, 0, 255)
        blend = alpha[ys, xs]
        frame[ys, xs] = np.rint(frame[ys, xs] * (1 - blend) + predicted * blend).astype(np.uint8)
        pipe.stdin.write(frame.tobytes())
        if index in (0, 67, 140):
            review.append(Image.fromarray(cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)))
        if index == 0:
            poster = Image.fromarray(cv2.cvtColor(frame, cv2.COLOR_BGR2RGB))
            poster.resize((1280, 720), Image.Resampling.LANCZOS).save(output / "ecosystem-poster.webp", quality=85)
            poster.resize((768, 432), Image.Resampling.LANCZOS).save(output / "ecosystem-poster-mobile.webp", quality=82)
    pipe.stdin.close()
    assert pipe.wait() == 0
    capture.release()

    # A forward/reverse editorial loop has identical boundary frames. The scene
    # contains no travelling vehicles or human action that would run backwards.
    loop = "[0:v]split[a][b];[b]reverse,setpts=PTS-STARTPTS[r];[a][r]concat=n=2:v=1:a=0,scale={size},setsar=1[v]"
    for name, size, codec in [
        ("ecosystem.mp4", "1280:720", ["-c:v", "libx264", "-crf", "25", "-preset", "slow", "-movflags", "+faststart"]),
        ("ecosystem-mobile.mp4", "768:432", ["-c:v", "libx264", "-crf", "26", "-preset", "slow", "-movflags", "+faststart"]),
        ("ecosystem.webm", "1280:720", ["-c:v", "libvpx-vp9", "-crf", "35", "-b:v", "0", "-row-mt", "1"]),
    ]:
        subprocess.run([ffmpeg, "-y", "-loglevel", "error", "-i", str(clean),
                        "-filter_complex", loop.format(size=size), "-map", "[v]", "-an",
                        *codec, "-pix_fmt", "yuv420p", str(output / name)], check=True)

sheet = Image.new("RGB", (width, height * len(review)))
for index, frame in enumerate(review):
    sheet.paste(frame, (0, index * height))
sheet.save(Path(__file__).with_name("clean-frames.jpg"), quality=90)
for path in output.iterdir():
    print(f"{path.name}: {path.stat().st_size:,} bytes")
