#!/usr/bin/env python3
"""
ebook_to_pdf.py
Automatically screenshots each page of an on-screen ebook reader and
combines the captures into a single PDF.

HOW IT WORKS
  1. You open and (ideally) full-screen your ebook reader.
  2. The script gives you a few seconds to click into the reader window.
  3. For each page it: takes a screenshot -> saves it -> turns the page.
  4. When finished it stitches all screenshots into one PDF.

SETUP (run once in PowerShell / Command Prompt):
    pip install pyautogui img2pdf

USAGE:
    python ebook_to_pdf.py            # do a capture run
    python ebook_to_pdf.py --locate   # helper: print live mouse coordinates
"""

import argparse
import time
from pathlib import Path

import pyautogui

# ----------------------------------------------------------------------
# CONFIGURATION  --  edit these to match your setup
# ----------------------------------------------------------------------

# Upper bound on pages to capture. Set this higher than your book length;
# the duplicate-detection below will stop early when the page stops turning.
MAX_PAGES = 500

# Seconds to wait AFTER turning a page before screenshotting.
# Increase if you ever catch a half-rendered page.
PAGE_RENDER_DELAY = 1.2

# Seconds to get ready before capture starts (use this to click into
# the reader and make sure it has keyboard focus).
START_DELAY = 5

# Capture region: None = whole screen, or (left, top, width, height) to
# crop out toolbars/margins. Use --locate to find the pixel coordinates.
CAPTURE_REGION = None
# e.g. CAPTURE_REGION = (100, 80, 1400, 1900)

# How to turn the page -- choose ONE:
#   "key"   -> press a keyboard key (most reliable across readers)
#   "click" -> click the on-screen "next" button at NEXT_BUTTON_XY
NEXT_METHOD = "key"
NEXT_KEY = "right"               # try "right", "pagedown", "space", or "down"
NEXT_BUTTON_XY = (1850, 1000)    # only used when NEXT_METHOD = "click"

# Stop automatically when a freshly captured page is identical to the
# previous one (page didn't advance -> almost certainly the end of the book).
STOP_ON_DUPLICATE = True

# Where screenshots and the final PDF go.
OUTPUT_DIR = Path("ebook_capture")
PDF_NAME = "ebook.pdf"

# ----------------------------------------------------------------------

pyautogui.FAILSAFE = True  # emergency abort: slam the mouse into a screen corner


def locate():
    """Print the live mouse position so you can find coordinates."""
    print("Move the mouse to a point to read its coordinates.")
    print("Press Ctrl+C to stop.\n")
    try:
        while True:
            x, y = pyautogui.position()
            print(f"  x={x:5d}  y={y:5d}", end="\r", flush=True)
            time.sleep(0.05)
    except KeyboardInterrupt:
        print("\nDone.")


def turn_page():
    if NEXT_METHOD == "key":
        pyautogui.press(NEXT_KEY)
    elif NEXT_METHOD == "click":
        pyautogui.click(*NEXT_BUTTON_XY)
    else:
        raise ValueError(f"Unknown NEXT_METHOD: {NEXT_METHOD!r}")


def capture():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    print(f"Starting in {START_DELAY}s -- click into your ebook window now.")
    print("(Abort any time by shoving the mouse into a screen corner.)")
    for s in range(START_DELAY, 0, -1):
        print(f"  {s}...", end=" ", flush=True)
        time.sleep(1)
    print("\nCapturing.\n")

    saved = []
    prev_bytes = None

    for i in range(1, MAX_PAGES + 1):
        img = pyautogui.screenshot(region=CAPTURE_REGION)

        if STOP_ON_DUPLICATE and prev_bytes is not None and img.tobytes() == prev_bytes:
            print(f"Page {i} is identical to the previous one -- "
                  "assuming end of book and stopping.")
            break
        prev_bytes = img.tobytes()

        path = OUTPUT_DIR / f"page_{i:04d}.png"
        img.save(path)
        saved.append(path)
        print(f"  saved {path.name}")

        turn_page()
        time.sleep(PAGE_RENDER_DELAY)

    print(f"\nCaptured {len(saved)} page(s).")
    return saved


def build_pdf(images):
    if not images:
        print("No images captured -- nothing to combine.")
        return

    pdf_path = OUTPUT_DIR / PDF_NAME
    try:
        import img2pdf
        with open(pdf_path, "wb") as f:
            f.write(img2pdf.convert([str(p) for p in images]))
    except ImportError:
        # Fallback if img2pdf isn't installed (pyautogui already pulls in Pillow).
        from PIL import Image
        pages = [Image.open(p).convert("RGB") for p in images]
        pages[0].save(pdf_path, save_all=True, append_images=pages[1:])

    print(f"\nDone -> {pdf_path.resolve()}")


def main():
    parser = argparse.ArgumentParser(description="Screenshot an ebook into a PDF.")
    parser.add_argument("--locate", action="store_true",
                        help="print live mouse coordinates and exit")
    args = parser.parse_args()

    if args.locate:
        locate()
        return

    build_pdf(capture())


if __name__ == "__main__":
    main()
