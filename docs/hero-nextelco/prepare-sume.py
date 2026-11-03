"""Prepare the user's portrait Sume video without altering its sequence or final frame.

Usage: python docs/hero-nextelco/prepare-sume.py SOURCE_MP4
The downloaded original is preserved. No generation services are used.
"""
import argparse
import subprocess
from pathlib import Path

import cv2
import imageio_ffmpeg
from PIL import Image

parser = argparse.ArgumentParser()
parser.add_argument("source", type=Path)
args = parser.parse_args()
output = Path(__file__).resolve().parents[2] / "public" / "media" / "erp"
output.mkdir(parents=True, exist_ok=True)
ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()

for suffix, width, crf in [("", 720, 23), ("-mobile", 480, 24)]:
    target = output / f"business-transformation{suffix}.mp4"
    subprocess.run([
        ffmpeg, "-y", "-loglevel", "error", "-i", str(args.source),
        "-map", "0:v:0", "-an", "-vf", f"scale={width}:-2,setsar=1",
        "-c:v", "libx264", "-crf", str(crf), "-preset", "medium",
        "-pix_fmt", "yuv420p", "-movflags", "+faststart", str(target),
    ], check=True)
    capture = cv2.VideoCapture(str(target))
    capture.set(cv2.CAP_PROP_POS_MSEC, 200)
    ok, frame = capture.read()
    assert ok, "Could not extract the poster"
    Image.fromarray(cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)).save(
        output / f"business-transformation-poster{suffix}.webp", quality=85
    )
    print(f"{target.name}: {int(capture.get(cv2.CAP_PROP_FRAME_WIDTH))}x"
          f"{int(capture.get(cv2.CAP_PROP_FRAME_HEIGHT))}; "
          f"{capture.get(cv2.CAP_PROP_FRAME_COUNT) / capture.get(cv2.CAP_PROP_FPS):.6f}s; "
          f"{target.stat().st_size:,} bytes", flush=True)
    capture.release()
