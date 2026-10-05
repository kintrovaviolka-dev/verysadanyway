#!/usr/bin/env python3
"""Prepare source PDFs and complete, phone-sized diagram crops for Resus mode."""

from pathlib import Path
import shutil
import subprocess
import sys
from PIL import Image, ImageChops

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "algoritmy"
OUTPUT = ROOT / "public" / "algoritmy"
PDFTOPPM = shutil.which("pdftoppm")

ALGORITHMS = [
    ("resuscitace dospelych.pdf", "adult-cardiac-arrest", True),
    ("dospeli tachykardie algoritmus.pdf", "adult-tachycardia", True),
    ("dospeli bradykardie algoritmus.pdf", "adult-bradycardia", True),
    ("dospeli hyperkalemie algoritmus.pdf", "adult-hyperkalemia", True),
    ("20-hyperkalaemia-a-cs-v1-1.pdf", "adult-hyperkalemia-erc", False),
    ("dospeli hypokalemie algoritmus.pdf", "adult-hypokalemia", True),
    ("dospeli hypotermie algoritmus.pdf", "adult-hypothermia", True),
    ("dospeli koronarni tromboza algoritmus.pdf", "acute-coronary-thrombosis", True),
    ("resuscitace deti.pdf", "pediatric-resuscitation", True),
    ("resuscitace novorozenec.pdf", "neonatal-resuscitation", True),
    (" traumaticka zastava oběhu.pdf", "traumatic-cardiac-arrest", True),
]

# Four overlapping columns by two overlapping rows fit on a phone. The overlap
# keeps an entire decision box visible when it falls near a page-grid boundary;
# together the cards still retain every pixel of the source diagram.
PANEL_COLUMNS = 4
PANEL_ROWS = 2


def trim_page_margin(image):
    """Remove only the outer white page margin, never any diagram content."""
    rgb = image.convert("RGB")
    white = Image.new("RGB", rgb.size, "white")
    bounds = ImageChops.difference(rgb, white).getbbox()
    if not bounds:
        return image
    left, top, right, bottom = bounds
    padding = 24
    return image.crop((
        max(0, left - padding),
        max(0, top - padding),
        min(image.width, right + padding),
        min(image.height, bottom + padding),
    ))


def panel_bounds(width, height, column, row):
    """Return a generously overlapping phone window over the source diagram."""
    if width >= height:
        panel_width = round(width * 0.44)
        panel_height = round(height * 0.62)
    else:
        panel_width = round(width * 0.65)
        panel_height = round(height * 0.58)
    panel_width = min(width, panel_width)
    panel_height = min(height, panel_height)
    left = round(column * (width - panel_width) / (PANEL_COLUMNS - 1))
    top = round(row * (height - panel_height) / (PANEL_ROWS - 1))
    return left, top, left + panel_width, top + panel_height


def main():
    if not PDFTOPPM:
        raise SystemExit("pdftoppm is required; install Poppler before preparing resus assets.")
    OUTPUT.mkdir(parents=True, exist_ok=True)
    for source_name, asset_name, rotate in ALGORITHMS:
        source = SOURCE / source_name
        if not source.exists():
            raise SystemExit(f"Missing source PDF: {source}")
        shutil.copy2(source, OUTPUT / f"{asset_name}.pdf")
        temporary = OUTPUT / f".{asset_name}-render"
        subprocess.run([
            PDFTOPPM, "-f", "1", "-l", "1", "-singlefile", "-r", "180", "-png",
            str(source), str(temporary)
        ], check=True)
        rendered = temporary.with_suffix(".png")
        with Image.open(rendered) as page:
            upright = page.rotate(-90, expand=True) if rotate else page.copy()
            upright.save(OUTPUT / f"{asset_name}.webp", "WEBP", quality=92, method=6)
            phone_canvas = trim_page_margin(upright)
            width, height = phone_canvas.size
            panel_number = 1
            for row in range(PANEL_ROWS):
                for column in range(PANEL_COLUMNS):
                    left, top, right, bottom = panel_bounds(width, height, column, row)
                    panel = phone_canvas.crop((left, top, right, bottom))
                    panel.save(
                        OUTPUT / f"{asset_name}-panel-{panel_number}.webp",
                        "WEBP", quality=96, method=6
                    )
                    panel_number += 1
        rendered.unlink()
        print(f"Prepared {asset_name} with {PANEL_COLUMNS * PANEL_ROWS} phone panels")


if __name__ == "__main__":
    main()
