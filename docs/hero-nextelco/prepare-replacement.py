"""Build the hero film from the user's Downloads/1.mp4 and Downloads/2.mp4.

Usage: python docs/hero-nextelco/prepare-replacement.py FIRST_MP4 SECOND_MP4
The originals remain untouched; no generation services or credits are used.
"""
import argparse
import subprocess
import tempfile
from pathlib import Path

import cv2
import imageio_ffmpeg
from PIL import Image

parser = argparse.ArgumentParser()
parser.add_argument("first", type=Path)
parser.add_argument("second", type=Path)
args = parser.parse_args()
output = Path(__file__).resolve().parents[2] / "public" / "media" / "erp"
output.mkdir(parents=True, exist_ok=True)
ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()

def duration(path):
    capture = cv2.VideoCapture(str(path))
    value = capture.get(cv2.CAP_PROP_FRAME_COUNT) / capture.get(cv2.CAP_PROP_FPS)
    capture.release()
    return value

total = duration(args.first) + duration(args.second)
normalize = "scale=960:540:force_original_aspect_ratio=decrease,pad=960:540:(ow-iw)/2:(oh-ih)/2:color=0x060b17,fps=24,setsar=1,settb=AVTB,format=yuv420p"
filters = (
    f"[0:v]{normalize}[a];[1:v]{normalize}[b];"
    "[a][b]concat=n=2:v=1:a=0,format=yuv420p[v]"
)

with tempfile.TemporaryDirectory(prefix="nextelco-replacement-") as temporary:
    master = Path(temporary) / "joined.mp4"
    subprocess.run([ffmpeg, "-y", "-loglevel", "error", "-i", str(args.first), "-i", str(args.second),
                    "-filter_complex", filters, "-map", "[v]", "-an", "-c:v", "libx264", "-crf", "17", str(master)], check=True)
    for name, extra in [
        ("business-control.mp4", ["-c:v", "libx264", "-crf", "24", "-preset", "slow", "-movflags", "+faststart"]),
        ("business-control-mobile.mp4", ["-vf", "scale=640:360", "-c:v", "libx264", "-crf", "25", "-preset", "slow", "-movflags", "+faststart"]),
        ("business-control.webm", ["-c:v", "libvpx-vp9", "-crf", "33", "-b:v", "0", "-row-mt", "1"]),
    ]:
        subprocess.run([ffmpeg, "-y", "-loglevel", "error", "-i", str(master), "-an", *extra,
                        "-pix_fmt", "yuv420p", str(output / name)], check=True)
    capture = cv2.VideoCapture(str(master))
    capture.set(cv2.CAP_PROP_POS_MSEC, 600)
    ok, frame = capture.read()
    assert ok
    poster = Image.fromarray(cv2.cvtColor(frame, cv2.COLOR_BGR2RGB))
    poster.save(output / "business-control-poster.webp", quality=86)
    poster.resize((640, 360), Image.Resampling.LANCZOS).save(output / "business-control-poster-mobile.webp", quality=83)
    capture.release()

for path in sorted(output.glob("business-control*")):
    print(f"{path.name}: {path.stat().st_size:,} bytes")
print(f"Sequence: 1 -> 2; clean editorial cut, full final frame preserved; {total:.2f} seconds")
