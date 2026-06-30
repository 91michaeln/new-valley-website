from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public/images/media/Luciebascoul_New Valley 3.jpg"
OUTPUT = ROOT / "public/images/banner-new-valley-clean.jpg"

# Output size: final non-home banner asset dimensions.
# Keep this wide enough for desktop headers while preserving a slim banner crop.
OUTPUT_SIZE = (2400, 900)

# Left crop area: upper/left tree and leaves where the logo sits naturally.
# Format: (left, top, right, bottom) in source image pixels.
LEFT_CROP = (0, 0, 2933, 1100)

# Right crop area: darker foliage from the same original photo for nav contrast.
# Format: (left, top, right, bottom) in source image pixels.
RIGHT_CROP = (2500, 0, 5433, 1100)

# Blend width: horizontal feather in final output pixels.
# Increase for a softer transition, decrease for a tighter join.
BLEND_START_X = 760
BLEND_WIDTH = 900


def build_gradient_mask(size: tuple[int, int]) -> Image.Image:
    width, height = size
    mask = Image.new("L", size, 0)
    pixels = mask.load()
    blend_end_x = BLEND_START_X + BLEND_WIDTH

    for x in range(width):
        if x <= BLEND_START_X:
            value = 0
        elif x >= blend_end_x:
            value = 255
        else:
            progress = (x - BLEND_START_X) / BLEND_WIDTH
            # Smoothstep feather keeps the seam gentle and photographic.
            value = round((progress * progress * (3 - 2 * progress)) * 255)

        for y in range(height):
            pixels[x, y] = value

    return mask


def main() -> None:
    source = Image.open(SOURCE).convert("RGB")
    left = source.crop(LEFT_CROP).resize(OUTPUT_SIZE, Image.Resampling.LANCZOS)
    right = source.crop(RIGHT_CROP).resize(OUTPUT_SIZE, Image.Resampling.LANCZOS)
    mask = build_gradient_mask(OUTPUT_SIZE)
    banner = Image.composite(right, left, mask)
    banner.save(OUTPUT, "JPEG", quality=94, optimize=True, progressive=True)


if __name__ == "__main__":
    main()
