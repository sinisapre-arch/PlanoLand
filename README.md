# PlanoLand — Team Page

Exact replica of the [L.BURO team page](https://lburo.ru/op/team/) layout, structure, typography, and styling — built with Next.js 16, Tailwind v4, and TypeScript.

## Quick start

```bash
npm install
npm run dev    # http://localhost:3001/team/
npm run build  # static export to ./out
```

The root `/` redirects to `/team/`.

## Project structure

```
PlanoLand/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout (fonts, metadata, noise overlay, scroll progress)
│   │   ├── globals.css      # Tailwind v4 @theme inline + all design tokens + component styles
│   │   ├── page.tsx          # Redirects to /team/
│   │   └── team/
│   │       └── page.tsx     # The team page (header, hero, cards, blockquotes, form, footer)
├── public/
│   └── assets/              # ← ALL IMAGES GO HERE (see below)
├── next.config.ts          # Static export config
├── tsconfig.json
└── package.json
```

## Image folder structure

All images live under `public/assets/`. Each subfolder has a `PLACE_IMAGES_HERE.txt` explaining what to drop in. Replace the placeholder `.webp` files with real photos.

```
public/assets/
├── team/                    # Team member portraits
│   ├── valery-fedotov.webp  # ← Replace with real photo (4:5 portrait)
│   ├── petr-lari.webp       # ← Replace with real photo (4:5 portrait)
│   └── PLACE_IMAGES_HERE.txt
├── hero/                    # Hero background images
│   └── PLACE_IMAGES_HERE.txt
├── form/                    # Form section images (reserved)
│   └── PLACE_IMAGES_HERE.txt
├── footer/                  # Footer background images
│   └── PLACE_IMAGES_HERE.txt
├── portfolio/
│   ├── private-gardens/     # Private garden project images
│   └── public-spaces/       # Public space project images
├── services/                # Service images
├── blog/                    # Blog post cover images
├── catalogs/                # Downloadable PDFs
│   └── PLACE_FILES_HERE.txt
└── ui/                      # Logos, icons, noise texture
    ├── logo.svg             # PlanoLand logo
    ├── icon-download.svg
    └── noise-texture.svg
```

### How to add images

1. Drop your image files into the appropriate folder (e.g., `public/assets/team/valery-fedotov.webp`).
2. Use WebP format for photos, SVG for icons/logos.
3. Tell me when images are uploaded and I'll wire them into the page.

## Design system (from L.BURO)

| Token         | Value       | Usage                        |
|---------------|-------------|------------------------------|
| `--color-1`   | `#ffffff`   | White text/bg                |
| `--color-2`   | `#000000`   | Black text                   |
| `--color-4`   | `#EBE8E6`   | Page background (warm grey)  |
| `--color-5`   | `#6C6B6B`   | Muted text                   |
| `--color-6`   | `#B9B3B3`   | Borders, hover states        |
| `--color-gold`| `#C9A962`   | Gold accent                  |

**Fonts:** Cormorant Garamond (headings, via Google Fonts) + Inter (body, via Google Fonts)

**Breakpoints:** Mobile-first; `@media (min-width: 1200px)` and `@media (min-width: 1441px)` for large screens.

## What's replicated

- ✅ Header with scope switch (Частные сады / Общественные пространства)
- ✅ Logo, navigation (6 items), phone numbers, language switcher
- ✅ Hero section with award announcement + heading
- ✅ Two team member cards (card-owner layout with photo, name, role, bio)
- ✅ Two blockquotes (primary large + secondary bordered)
- ✅ Contact form (phone, name, area, checkbox, button)
- ✅ Catalog download button
- ✅ Footer with logo, phones, email, social links, addresses, legal links, copyright
- ✅ Noise texture overlay
- ✅ Scroll progress bar
- ✅ Cookie consent panel
- ✅ CSS @keyframes animations as fallback
- ✅ Responsive (mobile + desktop)

## Tech stack

- Next.js 16 (App Router, static export)
- Tailwind v4 (@theme inline)
- TypeScript
- lucide-react (icons)
- Google Fonts (Cormorant Garamond + Inter)