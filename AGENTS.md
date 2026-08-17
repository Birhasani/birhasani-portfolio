# Repository Guidelines

## Project

This is Birhasani Raka Abiansyah's English-language portfolio for international Product Designer and UI/UX Designer opportunities.

## Stack

- Next.js App Router
- TypeScript strict mode
- Tailwind CSS
- Motion for selective animation
- Lucide React icons

## Architecture

- Prefer React Server Components.
- Add `"use client"` only when browser state, event handlers, or Motion require it.
- Keep portfolio content separate from presentation components.
- Store project facts in typed data files.
- Build reusable case-study components.
- Avoid unnecessary dependencies.
- Do not add a CMS, database, authentication, or contact-form backend.

## Design

- Use a dominant warm white with elegant pastel orange and blue accents.
- Keep the visual direction editorial, spacious, and professional.
- Avoid generic SaaS-dashboard styling.
- Avoid excessive gradients, glassmorphism, 3D effects, parallax, and custom cursors.
- Keep animations subtle and respect `prefers-reduced-motion`.

## Content Integrity

- Never invent metrics, testimonials, research findings, awards, company facts, or user quotes.
- Preserve project status accurately.
- Treat BECATUR as an academic prototype, not a launched product.
- Use dummy or redacted data for Mahija and Widya.
- Add `TODO` markers wherever verified information or assets are missing.

## Accessibility

- Use semantic HTML.
- Ensure keyboard navigation and visible focus states.
- Meet WCAG AA color contrast.
- Add meaningful image alt text.
- Do not communicate meaning with color alone.

## Quality

After every implementation phase, run:

```bash
npm run lint
npm run build
```

Before considering a phase complete:

- Check mobile, tablet, and desktop layouts.
- Check for horizontal overflow.
- Review the final diff.
- Report files changed and remaining `TODO` items.

Do not push to GitHub or deploy unless the user explicitly requests it.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
