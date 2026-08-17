# Design System

## Direction

The portfolio should feel editorial, spacious, calm, and credible. Warm white is dominant; pastel orange and blue provide restrained emphasis. The visual language should support long-form case studies and clear evidence rather than resemble a SaaS dashboard.

Avoid excessive gradients, glassmorphism, 3D effects, parallax, decorative data visualizations, and custom cursors.

## Color Tokens

| Token | Value | Use |
| --- | --- | --- |
| `background` | `#FBF7F0` | Dominant page background |
| `surface` | `#FFFDFC` | Cards and media surfaces |
| `ink` | `#18212B` | Primary text |
| `muted-ink` | `#59616A` | Secondary text on light backgrounds |
| `border` | `#DCD5CB` | Rules, dividers, and card outlines |
| `orange` | `#C8642F` | Accessible links, focus accents, and small highlights |
| `orange-soft` | `#F4D8C4` | Decorative panels and tags with dark text |
| `blue` | `#416F94` | Accessible links and active accents |
| `blue-soft` | `#D9E8F2` | Decorative panels and tags with dark text |
| `focus` | `#174F7A` | Focus ring |
| `error` | `#A43A3A` | Error text and borders, paired with a label/icon |

Use `ink` on soft accent colors. Do not use the soft colors as text. Validate every final foreground/background combination against WCAG AA; normal text requires at least 4.5:1 and large text at least 3:1. Never communicate project status with color alone.

## Typography

Use an editorial serif for display text and a readable sans-serif for body and interface text.

- **Display:** `Instrument Serif`, Georgia, `Times New Roman`, serif; regular weight only
- **Body/UI:** `Manrope`, Inter, `Segoe UI`, sans-serif; 400, 500, 600, and 700 as needed
- Load fonts with `next/font` and use `display: swap`. If external font retrieval becomes a build constraint, use the documented fallback stacks without changing layout hierarchy.

Recommended fluid scale:

| Style | Size | Line height | Use |
| --- | --- | --- | --- |
| Display | `clamp(3rem, 7vw, 6.75rem)` | 0.95–1.0 | Home headline |
| H1 | `clamp(2.5rem, 5vw, 5rem)` | 1.0 | Page and case-study title |
| H2 | `clamp(2rem, 3.5vw, 3.5rem)` | 1.05 | Major sections |
| H3 | `clamp(1.35rem, 2vw, 1.75rem)` | 1.2 | Subsections/cards |
| Lead | `clamp(1.125rem, 1.5vw, 1.375rem)` | 1.55 | Introductory copy |
| Body | `1rem` | 1.65 | Main copy |
| Small | `0.875rem` | 1.5 | Metadata and captions |

Keep prose near 65–72 characters per line. Avoid all-caps paragraphs; short eyebrows may use modest letter spacing.

## Spacing and Layout

Use a 4 px base unit with an intentional scale: `4, 8, 12, 16, 24, 32, 48, 64, 80, 112, 144` px. Prefer generous section spacing over decorative separators.

- Content max width: 1280 px
- Reading column: 720 px maximum
- Page gutters: 20 px mobile, 32 px tablet, 48–64 px desktop
- Grid: 4 columns mobile, 8 tablet, 12 desktop
- Breakpoint intent: mobile below 640 px, tablet 640–1023 px, desktop 1024 px and above
- Corner radii: 8 px controls, 16 px cards, 24 px large media frames; avoid pill shapes except compact status tags
- Shadows: optional and very soft; borders and spacing should define hierarchy first

Layouts must work from 320 px wide, remain readable at 200% zoom, and never introduce horizontal page scrolling.

## Core Components

### Navigation and actions

- Text links use a visible underline or another non-color cue on hover/focus.
- Primary actions use strong contrast and concise verbs. Secondary actions remain visually quieter but equally keyboard accessible.
- Focus rings use a 2 px `focus` outline with at least 2 px offset and must never be removed without an equivalent.
- Mobile navigation must preserve reading order, announce expanded state, close with Escape, and return focus appropriately.

### Project cards

Cards include title, organization/product, role, timeline, status text, concise outcome-led summary, and an image when approved. The entire card may have one clear link, but avoid invalid nested interactive elements. Featured cards receive more visual space, not more promotional language.

### Case-study content

Use reusable metadata lists, evidence figures, process sections, metric callouts, comparison modules, and next-project navigation. Figures need alt text and, where necessary, captions. Charts require a nearby textual interpretation and data table or equivalent.

### Status labels

Use explicit text: “Production,” “Implemented,” “Event deployment,” “Academic prototype,” or “Research prototype.” Pair color with text and optional Lucide icons; do not use color-only dots.

## Imagery

- Display product work in clean, warm-neutral frames that do not alter the design artifact.
- Preserve screenshots' aspect ratios. Do not crop away evidence or enlarge low-resolution media beyond useful clarity.
- Use logos as supporting identifiers, never as decorative wallpaper.
- Avoid image carousels when a scannable editorial sequence is clearer.
- Require privacy approval for Mahija and Widya images before public use.

## Motion

Motion must clarify hierarchy or interaction, not compete with content.

- Entrance: opacity `0 → 1` and vertical offset no greater than 16 px, 250–400 ms
- Hover/press: scale changes no greater than 1–2%, 150–220 ms
- Stagger: 40–80 ms between related items, used sparingly
- Easing: restrained ease-out; no springy or elastic movement for primary reading content
- Animate only transform and opacity when possible

When `prefers-reduced-motion: reduce` is active, remove entrances, stagger, animated scrolling, and looping effects; show final states immediately. Animated Widya GIFs need static alternatives and must not be the only way to understand a result.

## Accessibility Checklist

- Semantic landmarks and ordered heading hierarchy
- Skip link and visible keyboard focus
- 44 px practical target size for controls
- WCAG AA text and state contrast
- Meaningful image alt text and empty alt for redundant decoration
- Labels in addition to color or icons
- Reduced-motion behavior
- Screen-reader-readable external-link and download purpose
- No hover-only content or interaction

## Design TODOs

- `TODO`: Validate the complete token palette in implemented components and browser contrast tooling.
- `TODO`: Confirm final Open Graph image composition after approved project imagery is selected.
- `TODO`: Confirm whether approved profile photography should lead the About page or remain secondary.
