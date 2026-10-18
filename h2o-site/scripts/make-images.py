"""Make web-sized WebP copies of the original property photos.

Usage (from the h2o-site folder):
    npm run images   (originals in DOCC/property_photos, outside the repo)

Writes public/images/<slug>-<width>.webp and src/data/images.json.
The originals are never copied into the site. Once Sanity is live, the team
uploads photos there instead and this script is only needed for seed images.
"""
import json, os, sys
from PIL import Image, ImageOps

Image.MAX_IMAGE_PIXELS = None
SRC = sys.argv[1]
HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(HERE, 'public', 'images')
MANIFEST = os.path.join(HERE, 'src', 'data', 'images.json')
BIG = (800, 1400, 2000)   # full-width backgrounds and room heroes
CARD = (800, 1400)        # cards and galleries

# slug: (path under the photo folder, widths)
PICKS = {
    'hero-riverside-deck':   ('OPEN SPACE/Riverside Area.jpg', BIG),
    'mill-channel':          ('OPEN SPACE/DSC01219.jpg', BIG),
    'cottage-dusk-path':     ('OPEN SPACE/DSC01144.jpg', BIG),
    'cottage-dusk-lit':      ('OPEN SPACE/Riverside Seating Area/DSC01123.jpg', BIG),
    'lawn-dusk':             ('OPEN SPACE/DSC01250.jpg', BIG),
    'lawn-day':              ('OPEN SPACE/Open Lawn.jpg', BIG),
    'path-marigolds-dusk':   ('OPEN SPACE/DSC01242.jpg', BIG),
    'courtyard-dusk':        ('OPEN SPACE/DSC01246.jpg', BIG),
    'thali-on-leaf':         ('DINING/DSC00939.jpg', CARD),
    'thali-clay-bowls':      ('DINING/DSC00945.jpg', CARD),
    'dining-hall':           ('DINING/DSC01201.jpg', BIG),
    'art-craft-session':     ('OPEN SPACE/ART & CRAFT/DSC00983.jpg', CARD),
    'art-studio':            ('OPEN SPACE/ART & CRAFT/DSC00977.jpg', CARD),
    'art-wall':              ('OPEN SPACE/ART & CRAFT/DSC01004.jpg', CARD),
    'yoga-on-lawn':          ('OPEN SPACE/DSC01022.jpg', CARD),
    'riverside-verandah':    ('OPEN SPACE/Riverside Seating Area/DSC01040.jpg', BIG),
}

# every photo in each room folder becomes part of that room's gallery
ROOMS = {
    '101': '101 Large Double Room',
    '102': '102 Twin Room',
    '103': '103 Duplex COTTAGE',
    '104': '104 FAMILY HALL',
    '105': '105 RIVERSIDE COTTAGE',
    '106': '106 Anandam 1 with attached washroom',
    '107': '107 Riverside Family Room',
}
for num, folder in ROOMS.items():
    files = sorted(f for f in os.listdir(os.path.join(SRC, folder)) if f.lower().endswith('.jpg'))
    for i, f in enumerate(files, 1):
        PICKS[f'room-{num}-{i:02d}'] = (f'{folder}/{f}', BIG)

os.makedirs(OUT, exist_ok=True)
manifest = {}
for slug, (rel, widths) in PICKS.items():
    im = Image.open(os.path.join(SRC, rel))
    im.draft('RGB', (max(widths), max(widths)))
    im = ImageOps.exif_transpose(im).convert('RGB')
    made = []
    for w in widths:
        if w > im.width and made:
            break
        w = min(w, im.width)
        h = round(im.height * w / im.width)
        path = os.path.join(OUT, f'{slug}-{w}.webp')
        if not os.path.exists(path):
            im.resize((w, h), Image.LANCZOS).save(path, 'WEBP', quality=78, method=5)
        made.append(w)
    manifest[slug] = {'src': rel, 'widths': made, 'ratio': round(im.width / im.height, 4)}
    print(slug, made)

with open(MANIFEST, 'w', encoding='utf-8') as fh:
    json.dump(manifest, fh, indent=1)
