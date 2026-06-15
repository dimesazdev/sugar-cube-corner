# Sugar Cube Corner Brand Identity

This file documents the current visual identity used in the website so future design and development changes stay consistent.

## Brand Feel

Sugar Cube Corner should feel warm, playful, sweet, welcoming, and polished. The visual language is built around homemade waffles, coffee, small colorful sugar-cube accents, and a friendly cafe atmosphere in Skopje.

The design should avoid looking corporate or cold. It should feel personal and local, but still clean enough for a modern QR menu and mobile-first browsing.

## Logo

Primary logo asset:

- `/public/scc-logo-white.png`

Current usage:

- Navbar logo
- Footer logo
- Menu-only route navbar

Favicon/apple touch icon:

- `/public/scc-transparent.png`

Guidelines:

- Keep the logo on soft tinted backgrounds so the gold and light details remain visible.
- Avoid placing the logo directly on pure white if it becomes low contrast.
- Do not stretch, crop, recolor, or add heavy effects to the logo.

## Typography

Fonts are loaded in `src/routes/__root.tsx` from Google Fonts.

Display font:

- `Fraunces`
- CSS token: `--font-display`
- Used for headings, section titles, brand-like labels, and menu item names.
- Reason: expressive, warm, slightly editorial, and a good match for a boutique dessert/cafe brand.

Body font:

- `Plus Jakarta Sans`
- CSS token: `--font-sans`
- Used for navigation, body copy, buttons, reviews, menu descriptions, and UI text.
- Reason: clean, readable, modern, and highly legible on mobile.

Current CSS source:

- `src/styles.css`

## Color System

Colors are defined as OKLCH tokens in `src/styles.css`. Use the CSS variables instead of hard-coded color values wherever possible.

Core neutrals:

| Token | Value | Role |
| --- | --- | --- |
| `--background` | `oklch(0.99 0.01 90)` | Main warm page background |
| `--foreground` | `oklch(0.2 0.04 300)` | Primary text color |
| `--card` | `oklch(1 0 0)` | Menu/review/card surfaces |
| `--border` | `oklch(0.92 0.02 300)` | Soft separators and card borders |
| `--secondary` | `oklch(0.95 0.04 90)` | Subtle button and background fill |
| `--muted` | `oklch(0.96 0.02 90)` | Quiet UI surfaces |

Brand colors:

| Token | Value | Role |
| --- | --- | --- |
| `--primary` | `oklch(0.72 0.18 0)` | Main CTA/accent color, currently a coral-pink tone |
| `--pink` | `oklch(0.82 0.13 0)` | Sweet accent, about section, pancakes category, sugar-cube particles |
| `--yellow` | `oklch(0.91 0.15 95)` | Waffle/golden accent, stars, waffles category |
| `--mint` | `oklch(0.88 0.11 165)` | Freshness accent, reviews section, extras category |
| `--sky` | `oklch(0.85 0.1 230)` | Light refreshing accent, location section, cold drinks category |
| `--lavender` | `oklch(0.82 0.1 300)` | Soft supporting accent, used in gradients and cube bursts |
| `--coral` | `oklch(0.78 0.16 30)` | Warm food/coffee accent, coffee category |
| `--ring` | `oklch(0.75 0.15 350)` | Focus ring color |
| `--destructive` | `oklch(0.6 0.22 27)` | Error/destructive actions only |

Usage guidance:

- Use `--primary` for main CTAs and important action states.
- Use `--foreground` for text and avoid pure black.
- Use `--background`, `--secondary`, and light color mixes for large page backgrounds.
- Use `--pink`, `--yellow`, `--mint`, `--sky`, `--lavender`, and `--coral` as a balanced candy/cafe palette, not as full-page solid blocks except in menu category cards.
- Keep category colors consistent:
  - Coffee: `--coral`
  - Cold drinks: `--sky`
  - Waffles: `--yellow`
  - Pancakes: `--pink`
  - Extras: `--mint`
- Use yellow for rating stars and waffle/golden emphasis.
- Use red/dark red sparingly for Google Maps review CTA styling only, where it helps the external action stand out.

## Section Backgrounds

Sections use soft background bands in `src/styles.css`:

- About: `.section-band-pink`
- Menu: `.section-band-cream`
- Reviews: `.section-band-mint`
- Location: `.section-band-sky`

Guidelines:

- Keep section backgrounds gentle and seamless.
- Use subtle gradients and `color-mix()` rather than harsh blocks.
- Do not introduce heavy decorative orbs or noisy backgrounds.

## Motifs

### Sugar Cube Motif

The small 3D cube motif is a core visual element.

Source:

- `src/components/site/Cube.tsx`

Used in:

- About feature cards
- Hero fallback
- CTA hover/focus burst particles
- Menu category click burst on desktop/tablet

Guidelines:

- Keep cubes small when used as interactive particles.
- Use brand colors only: `--pink`, `--yellow`, `--mint`, `--sky`, `--lavender`, `--coral`.
- Cube bursts should feel like soft candy/sugar pops, not explosions.

### Waffle Grid Motif

Source:

- `.waffle-grid` utility in `src/styles.css`

Used in:

- Hero fallback visual treatment

Guidelines:

- Use sparingly as a subtle texture.
- Keep opacity low.

## Icon System

Icon pack:

- `lucide-react`
- Package version currently listed in `package.json`
- License: open-source icon library suitable for commercial use.

Current notable icons:

- Home button on menu-only page: `Home`
- Reviews external link: `ExternalLink`
- Menu mobile category icons:
  - Coffee: `Coffee`
  - Cold drinks: `CupSoda`
  - Waffles: `Grid3X3`
  - Pancakes: `Layers`
  - Extras: `IceCreamBowl`

Guidelines:

- Prefer `lucide-react` icons for UI actions and menu/category icons.
- Keep icon stroke widths light to medium.
- Avoid emoji as interface icons.
- Use icons to support labels, not replace important text unless the control has an accessible label.

## Layout And Components

General style:

- Rounded cards and controls.
- Warm shadows via `.cube-shadow`.
- Clean spacing, readable text, and mobile-first layout.

Border radius:

- Global radius token: `--radius: 1rem`
- Cards often use `rounded-2xl` or `rounded-3xl`.
- Buttons commonly use `rounded-full`.

Cards:

- Use `bg-card`, `border-border`, and `.cube-shadow`.
- Keep cards distinct but not overly heavy.

Menu:

- Desktop/tablet: category tabs with color underline/active fill.
- Mobile: large colored category cards that drill into category detail.
- Category detail header uses the active category color.
- Menu items keep a colored line above the item name.

## Animation And Interaction

Scroll reveal:

- Source: `.scroll-reveal` in `src/styles.css` and `src/components/site/ScrollReveal.tsx`
- Timing: approximately `720ms`
- Feel: soft lift/fade, clean and calm.

Cube burst:

- Source: `src/components/site/CubeBurstLink.tsx`
- Duration: approximately `680ms`
- Used on CTA hover/focus and menu category clicks.
- Respects `prefers-reduced-motion`.

Mobile menu drilldown:

- Uses light slide/fade transitions through `tw-animate-css` utility classes.
- Back button and category title stay in the same sticky colored row.

Guidelines:

- Keep movement soft, bouncy, and polished.
- Do not create layout shift.
- Respect `prefers-reduced-motion`.
- Avoid heavy animation loops except intentional media, such as the hero video and about carousel.

## Media

Hero animation:

- `/public/waffle.mov`

About gallery:

- `/public/about-gallery/about-1.jpg?v=2`
- `/public/about-gallery/about-2.jpg?v=2`
- `/public/about-gallery/about-3.jpg?v=2`
- `/public/about-gallery/about-4.jpg?v=2`
- `/public/about-gallery/about-5.jpg?v=2`
- `/public/about-gallery/about-6.jpg?v=2`

Guidelines:

- Food imagery should be bright, appetizing, and real.
- Keep the carousel aspect ratio consistent with source images.
- Avoid dark, generic stock-like imagery.

## Language And Tone

Primary language:

- Macedonian

Secondary language:

- English

Tone:

- Friendly
- Warm
- Local
- Simple and inviting

Avoid:

- Corporate wording
- Over-explaining UI features in visible page copy
- Generic marketing filler

## Implementation References

Main token and animation file:

- `src/styles.css`

Text dictionary:

- `src/lib/i18n.tsx`

Core site components:

- `src/components/site/Header.tsx`
- `src/components/site/Hero.tsx`
- `src/components/site/About.tsx`
- `src/components/site/Menu.tsx`
- `src/components/site/Reviews.tsx`
- `src/components/site/Location.tsx`
- `src/components/site/Footer.tsx`

Standalone QR menu route:

- `src/routes/menu.tsx`

## Change Rules

When making future visual changes:

1. Update this file if colors, fonts, logo assets, icon systems, motion rules, or major layout patterns change.
2. Prefer existing tokens before adding new colors.
3. Keep the menu data and layout shared between the homepage and QR menu route.
4. Test mobile and desktop after changing menu, header, footer, or global styles.
5. Run `npm run lint` and `npm run build` before delivery.
