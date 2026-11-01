"""Compose the brand SVGs from glyphs.json (step 2 of the brand build).

Usage: python -I compose.py glyphs.json out/
Writes pmp-path-logo.svg, pmp-path-logo-dark.svg, pmp-path-logo-tile.svg and icon.svg.
Copy icon.svg to public/ and the three logos to public/brand/. Colours are the app tokens
(--ink #142339, --on-ink #eef1f6, --accent #b4530a, --on-ink-accent #f6c08a); keep them in sync
with src/styles.css. icon.svg is full-bleed for "maskable": keep its content inside the central
80% circle. The route (4 markers = 4 weeks, last one amber = exam day) is drawn by route().
"""
import json, re, sys, os
g = json.load(open(sys.argv[1])); out = sys.argv[2]; os.makedirs(out, exist_ok=True)
rnd = lambda d: re.sub(r'-?\d+\.\d+', lambda m: ('%.2f' % float(m.group())).rstrip('0').rstrip('.'), d)
PMP, P, TAG = rnd(g['pmp']['d']), rnd(g['p']['d']), rnd(g['tag']['d'])
pw, pxh, pdesc = g['pmp']['advance'], g['pmp']['xHeight'], -g['pmp']['descender']
tw, tcap = g['tag']['advance'], g['tag']['capHeight']

def route(x, y, w, ink, amber, stroke=1.2, r=3.2, rl=4.2):
    xs = [x + w*i/3 for i in range(4)]
    s = f'<path d="M{xs[0]:.1f} {y}H{xs[3]:.1f}" stroke="{ink}" stroke-opacity=".55" stroke-width="{stroke}"/>'
    for i, cx in enumerate(xs[:3]):
        s += f'<circle cx="{cx:.1f}" cy="{y}" r="{r}" fill="none" stroke="{ink}" stroke-width="{stroke*1.3:.2f}"/>'
    s += f'<circle cx="{xs[3]:.1f}" cy="{y}" r="{rl}" fill="{amber}"/>'
    return s

def lockup(ink, amber, bg=None, name='lockup'):
    # 100-unit glyph space scaled 2x: wordmark 376 wide, x-height 96, descender 51
    W = 440
    sc = 2.0; x0 = (W - pw*sc)/2; base = 40 + pxh*sc          # top margin 40, baseline
    ry = base + pdesc*sc + 26                                    # route line
    ts = 0.26; tx = (W - tw*ts)/2; ty = ry + 34 + tcap*ts        # tagline baseline
    H = int(ty + 40)
    s = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}" role="img" aria-label="PMP 28-days path">'
    if bg: s += f'<rect width="{W}" height="{H}" fill="{bg}"/>'
    s += f'<g transform="translate({x0:.1f} {base:.1f}) scale({sc})"><path d="{PMP}" fill="{ink}"/></g>'
    s += route(W/2 - pw*sc*0.3, round(ry,1), pw*sc*0.6, ink, amber)
    s += f'<g transform="translate({tx:.1f} {ty:.1f}) scale({ts})"><path d="{TAG}" fill="{ink}"/></g></svg>'
    open(f'{out}/{name}.svg','w').write(s)

def tile(ink_bg, fg, amber, name):
    W = 512
    sc = 2.1; x0 = (W - pw*sc)/2; base = 138 + pxh*sc
    ry = base + pdesc*sc + 30
    ts = 0.3; tx = (W - tw*ts)/2; ty = ry + 42 + tcap*ts
    s = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {W}" width="{W}" height="{W}" role="img" aria-label="PMP 28-days path">'
    s += f'<rect width="{W}" height="{W}" rx="36" fill="{ink_bg}"/>'
    s += f'<g transform="translate({x0:.1f} {base:.1f}) scale({sc})"><path d="{PMP}" fill="{fg}"/></g>'
    s += route(W/2 - pw*sc*0.3, round(ry,1), pw*sc*0.6, fg, amber, stroke=1.4, r=3.6, rl=4.8)
    s += f'<g transform="translate({tx:.1f} {ty:.1f}) scale({ts})"><path d="{TAG}" fill="{fg}"/></g></svg>'
    open(f'{out}/{name}.svg','w').write(s)

def icon(name):
    # maskable: full-bleed ink, content inside the central 80% circle
    W = 512; sc = 4.6; p_w = g['p']['advance']
    x0 = (W - p_w*sc)/2 - 14; base = (W - (pxh+pdesc)*sc)/2 + pxh*sc - 4
    s = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {W}" width="{W}" height="{W}" role="img" aria-label="PMP Path">'
    s += f'<rect width="{W}" height="{W}" fill="#142339"/>'
    s += f'<g transform="translate({x0:.1f} {base:.1f}) scale({sc})"><path d="{P}" fill="#eef1f6"/></g>'
    s += f'<circle cx="{x0 + p_w*sc + 40:.1f}" cy="{base:.1f}" r="30" fill="#f6c08a"/></svg>'
    open(f'{out}/{name}.svg','w').write(s)

lockup('#142339', '#b4530a', name='pmp-path-logo')
lockup('#eef1f6', '#f6c08a', name='pmp-path-logo-dark')
tile('#142339', '#eef1f6', '#f6c08a', 'pmp-path-logo-tile')
icon('icon')
print(os.listdir(out)); print([os.path.getsize(f'{out}/{f}') for f in os.listdir(out)])
