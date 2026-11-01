"""Outline glyphs from the variable fonts into SVG path data (step 1 of the brand build).

Usage: python -I outline.py Fraunces-var.ttf Outfit-var.ttf glyphs.json
Fonts: the full Google Fonts variable TTFs (ofl/fraunces, ofl/outfit in github.com/google/fonts).
The app's bundled woff2 in src/assets/fonts only carries wght 400-600, so the 900/SOFT 100
wordmark needs the full file. Needs fonttools (pip install fonttools); no brotli needed for TTF.
Output is a 100-unit glyph space, y down, baseline at 0. Then run compose.py.
"""
import json, sys
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen

def outline(path, axes, text, tracking_em=0.0, size=1.0):
    f = instantiateVariableFont(TTFont(path), axes, inplace=False)
    upm = f['head'].unitsPerEm
    cmap = f.getBestCmap(); gs = f.getGlyphSet(); hmtx = f['hmtx']
    s = size / upm
    x = 0.0; d = []
    for ch in text:
        g = cmap[ord(ch)]
        pen = SVGPathPen(gs)
        # flip y, scale to size, translate
        gs[g].draw(TransformPen(pen, (s, 0, 0, -s, x, 0)))
        p = pen.getCommands()
        if p: d.append(p)
        x += hmtx[g][0] * s + tracking_em * size
    x -= tracking_em * size
    return {'d': ' '.join(d), 'advance': x, 'ascender': f['hhea'].ascent * s, 'descender': f['hhea'].descent * s,
            'capHeight': f['OS/2'].sCapHeight * s, 'xHeight': f['OS/2'].sxHeight * s}

fr = sys.argv[1]; ou = sys.argv[2]
out = {
  'pmp': outline(fr, {'wght': 900, 'SOFT': 100, 'opsz': 144, 'WONK': 0}, 'pmp', tracking_em=-0.04, size=100),
  'p':   outline(fr, {'wght': 900, 'SOFT': 100, 'opsz': 144, 'WONK': 0}, 'p', size=100),
  'tag': outline(ou, {'wght': 600}, '28-DAYS PATH', tracking_em=0.2, size=100),
}
json.dump(out, open(sys.argv[3], 'w'))
for k, v in out.items(): print(k, round(v['advance'],1), 'xh', round(v['xHeight'],1), 'cap', round(v['capHeight'],1), 'desc', round(v['descender'],1), 'len', len(v['d']))
