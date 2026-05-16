# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Flash Service is a static affiliate website for a 1xBet sports-betting agent in Togo (West Africa). The site is deployed on GitHub Pages at `https://faleryo.github.io/flash-service/`. Content is in French, targeting Togolese users. The promo code is **CMD10** (300% welcome bonus, up to 130 000 XOF).

There is no build system, no package manager, and no compilation step — everything is served directly as static files.

## Development Workflow

**Previewing the site:**
Open any HTML file directly in a browser. On a Mac/Linux machine:
```bash
open index.html                   # production landing page
open "Flash Service.html"         # design canvas (React/JSX, loads full-page.jsx)
open flash-canvas.html            # multi-variant design canvas
```

For local development with live-reload, any static file server works:
```bash
python3 -m http.server 8080
# or
npx serve .
```

There are no tests, no linter config, and no CI pipeline.

## Architecture: Two Distinct File Types

The repo contains two separate things that look similar but work differently:

### 1. Production site (`index.html`, `blog/*.html`)
- **Pure HTML + CSS + vanilla JS**, no external JS framework, no build step
- All styles are inline `<style>` blocks; all scripts are inline `<script>` blocks
- Uses CSS custom properties (design tokens) defined in `:root` at the top of each file
- Interactive features (bonus calculator slider, FAQ accordion, counter animation) are wired up with `document.querySelector` at the bottom of the file inside `window.addEventListener('load', ...)` and `IntersectionObserver` calls

### 2. Design canvas / prototyping files (`Flash Service.html`, `flash-canvas.html`, `hero-d*.jsx`, `variants/*.jsx`)
- Use **React 18 + Babel standalone loaded from CDN** — JSX is transpiled in-browser at runtime, no compilation
- `.jsx` files are loaded via `<script type="text/babel" src="...">` — they are NOT Node.js modules
- Components are assigned to `window` globals (see `shared.jsx`) so they can be referenced across files
- `shared.jsx` exports the `HF` token object and reusable primitives (`Logo`, `Badge`, `BtnPrimary`, etc.) via `Object.assign(window, { ... })`
- `design-canvas.jsx` provides the Figma-like canvas wrapper (`DesignCanvas`, `DCSection`, `DCArtboard`)
- `tweaks-panel.jsx` provides a live-tweak sidebar (`TweaksPanel`, `useTweaks`, and control helpers)

### Design canvas component pattern
Variant components (`V1Mobile` through `V5Mobile` in `variants/`) accept props `{ promo, bonusMax, sections }` where `sections` is a feature-flag object (e.g. `{ hero: true, calculator: true, faq: true }`). This lets the canvas host toggle sections via the tweaks panel without editing component code.

## Design Systems

Two token sets live in `design-systems/`:

| Directory | Theme | When to use |
|---|---|---|
| `flash-custom/` | Dark (navy + orange accent + blue CTA) | Original Flash Service brand |
| `1xbet-official/` | Light (white bg + blue corporate header + **lime green CTA**) | Pages imitating the official 1xBet UI |

### Critical color rules (apply to both systems)
- **Orange (`--accent` / `#f5a623`)** → bonus amounts, promo code CMD10, XOF figures only. **Never on a CTA button.**
- **Flash-custom**: CTA buttons use `--blue` (`#1652f0`)
- **1xbet-official**: CTA buttons ("S'inscrire", "Se connecter", "Déposer") use `--green` (`#92C638`, lime green)
- **`--accent-dark` (`#c47d00`)** → orange text on light backgrounds only

### Typography
**Flash-custom / prototypes:**
- `--ff-display` → `'Fraunces', serif` (italic bold, hero headings)
- `--ff-ui` → `'Syne', sans-serif` (body, buttons, labels)
- `--ff-mono` → `'JetBrains Mono', monospace` (numbers, codes, tags)

**Production index.html (1xBet official theme):**
- `--ff-ui` / `--ff-display` → `'Inter', system-ui, sans-serif`
- `--ff-mono` → `'JetBrains Mono', monospace`

## Key Business Logic

The bonus calculator formula is consistent across all files:
```js
bonus = Math.min(deposit * 3, 130000)  // 300% up to 130 000 XOF cap
```

The affiliate link domain is `reffpa.com` (used in CTAs like "Activer CMD10 →"). The WhatsApp contact is a persistent FAB (floating action button) in the bottom-right corner of mobile frames.

## SEO / Metadata

`index.html` contains full SEO metadata: Open Graph, Twitter Card, local geo meta tags (Lomé, Togo), and structured data. `sitemap.xml` and `robots.txt` exist at the root. The canonical URL is `https://faleryo.github.io/flash-service/`.
