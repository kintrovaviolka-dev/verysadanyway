#!/usr/bin/env python3
"""Prepare lossless source PDFs and phone-oriented previews for the Resus mode."""

from pathlib import Path
import shutil
import subprocess
import sys
from PIL import Image

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
        rendered.unlink()
        print(f"Prepared {asset_name}")


if __name__ == "__main__":
    main()
