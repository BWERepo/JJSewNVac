"""Download the prototype's royalty-free Unsplash photos as resized WebP files.

Photos are served from /public/images rather than hotlinked, so the site keeps
working (and stays fast) no matter what happens upstream. Credits live in
src/data/photos.ts. Re-run with `npm run images` after changing the list.
"""
import pathlib
import urllib.request

OUT = pathlib.Path(__file__).resolve().parent.parent / "public" / "images"

# name -> (Unsplash image path, widths to generate)
PHOTOS = {
    "hero-quilt": ("photo-1516707471165-777029111409", (900, 1600, 2400)),
    "sewing-hands": ("photo-1517840545241-b491010a8af4", (800, 1400)),
    "fabric-shelves": ("photo-1681003564665-62848f8d481e", (800, 1400)),
    "learning-machine": ("photo-1641320197434-6ae0ca235048", (800, 1400)),
    "vacuum-home": ("photo-1758523670739-0d26a3ee976d", (800, 1400)),
    "thread-wall": ("photo-1692972622641-fe6bf95aaca7", (800, 1400)),
    "embroidery-stitch": ("photo-1630930737762-95fba69e2dad", (800, 1400)),
    "quilt-stitching": ("photo-1692561141101-c1528235e6bf", (800, 1400)),
    "serger-dials": ("photo-1759310224827-b125f9b25785", (800, 1400)),
    "quilt-blue": ("photo-1752752309455-a4f00ba787ef", (800, 1400)),
    "embroidery-hoop": ("photo-1772351720165-d9218e428cf0", (800, 1400)),
    "quilt-cathedral": ("photo-1602730273286-22b077c994de", (800, 1400)),
    "living-room-rug": ("photo-1550581190-9c1c48d21d6c", (800, 1600)),
    "presser-foot": ("photo-1625479144604-ae69462778b7", (800, 1400)),
    "quilt-railing": ("photo-1755138207288-b5c8fb5b8614", (900, 1600, 2400)),
    "machine-moody": ("photo-1606501126768-b78d4569d3f9", (900, 1600, 2400)),
    "bright-living-room": ("photo-1628744876497-eb30460be9f6", (900, 1600, 2400)),
    "quilt-fence": ("photo-1755138452921-650d508d6b54", (800, 1400)),
    "fabric-rolls": ("photo-1705250466297-90035b3a2b26", (800, 1400)),
}


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for name, (path, widths) in PHOTOS.items():
        for w in widths:
            dest = OUT / f"{name}-{w}.webp"
            if dest.exists():
                continue
            url = f"https://images.unsplash.com/{path}?w={w}&q={60 if w >= 1400 else 66}&fm=webp&fit=max"
            req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(req, timeout=60) as r:
                dest.write_bytes(r.read())
            print(f"{dest.name}: {dest.stat().st_size // 1024} KB")


if __name__ == "__main__":
    main()
