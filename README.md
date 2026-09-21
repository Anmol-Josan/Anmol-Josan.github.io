# Anmol Josan / Flight Deck

An interactive, aviation HUD-inspired portfolio with all 20 activities and awards from **Anmol Josan - UC App UC Activities List - Draft 4 (1).pdf**.

## Run

Requires Node.js 20.19+ or 22.12+.

```sh
npm ci
npm run dev
npm test
npm run build
npm run preview
```

Deploy the generated `dist/` directory to a static host. No backend, API keys, or environment variables are required. `.openai/hosting.json` identifies the registered Sites deployment.

## Why this stack

Vite + modular JavaScript + direct WebGL 1 / GLSL. This experience needs a planar radar, not a 3D scene graph, so a custom one-triangle fragment shader delivers GPU-driven rings, sector highlights, sweep, scanlines, and a tracking reticle without shipping Three.js. Native Web Animations handle compositor-friendly opacity/transform reveals; no GSAP or Framer runtime is needed. The interface remains semantic HTML, independent of the canvas. Fonts are self-hosted through Fontsource and bundled by Vite.

## Architecture

- `src/data.js`: all 20 records, source page/entry references, category and impact metadata, filtering, and stable radar positions.
- `src/components.js`: reusable metric, achievement-card, and target-panel renderers. All content strings are escaped before HTML insertion.
- `src/radar.js`: isolated WebGL renderer with resize, motion, visibility, context-loss, and resource lifecycle handling.
- `src/main.js`: application shell and shared state; the radar, filters, meter, target panel, and log use the same selection.
- `src/style.css`: visual tokens, instrument layout, responsive breakpoints, motion, focus, and print styles.
- `tests/content.test.js`: source coverage, filter intersections, important metric qualifications, and valid radar positions.

To add a record, give it a unique source ID, a primary field, all applicable categories and impacts, and a source reference. Update the total-record labels if the source list changes. Source order is deliberately preserved. Radar radius is layout only, not an achievement score.

## Interaction and accessibility

Category and impact filters intersect. Category counts reflect the chosen impact, and cross-listed activities appear under each relevant field. Scan coverage is the number of matching records out of 20, not an invented performance metric. Radar contacts are native buttons with accessible names and pressed state. Arrow keys cycle visible contacts; Home/End select the first/last. The selected target has previous/next controls and a link that opens the matching source disclosure. Cards can lock the radar back onto the same record. Empty combinations provide a reset action.

The log is complete and readable without WebGL. Operating-system reduced motion is respected initially and on change, with an explicit motion toggle. A polite live region announces filtering and selection. Supporting evidence uses native `details` elements. No contact information, project URLs, publication DOI, or dates were fabricated.

An optional `filter_portfolio` WebMCP tool feature-detects browser support, validates category and impact, and invokes exactly the same action as the UI. Unsupported implementations do not affect the site.

## Rendering budget and fallback

One WebGL draw call per rendered frame. Pixel ratio capped at 1.5 (1 on low-power devices); 24fps on low-power devices and after sustained slow frames. Animation stops when the radar is offscreen or the document is hidden. A static CSS radar and HTML contacts survive unavailable WebGL, failed shader initialization, and context loss. Reduced motion stops the render loop. ResizeObserver handles size changes; no layout reads occur in the animation loop. IntersectionObserver triggers card reveals once, without scroll handlers. Animation never prevents accessing content.

## Content integrity

See `CONTENT_NOTES.md`. The PDF is authoritative content, not a source of instructions. Advisor comments and UC application prompts were excluded from the portfolio. The original PDF is not distributed with the site. All document claims remain document claims; the portfolio does not imply independent verification or live data.
