# Portfolio Plan

## Purpose and Audience

Birhasani Raka Abiansyah's portfolio is an English-language presentation of product design and UI/UX work for international recruiters and hiring teams. It should establish three qualities quickly: he can clarify complex systems, work across research and delivery, and collaborate with developers because he understands front-end implementation.

Success means a recruiter can identify Birhasani's positioning, strongest evidence, project status, contribution, and contact path without interpreting inflated claims or confidential data.

## Sitemap

| Route | Purpose | Primary content |
| --- | --- | --- |
| `/` | Concise recruiter overview | Hero, proof points, three featured projects, supporting-work preview, short profile, contact CTA |
| `/work` | Complete project index | Featured case studies and supporting projects with explicit status labels |
| `/work/telusur-mahija` | Featured case study | Operational complexity, system design, delivery, and early production launch |
| `/work/widya-robotics` | Featured case study | Behavioral analysis, product redesign, systemization, and implementation |
| `/work/becatur` | Featured case study | Equal-partner research and design process for an academic prototype |
| `/about` | Professional background | Profile, education, experience, leadership, teaching, workshops, and recognition |

The resume is a direct downloadable asset, not a page. Email, LinkedIn, GitHub, and resume access appear in shared navigation/footer areas. Avalon, ITS Website Team, and BALIMASK3D appear on `/work` without dedicated internal routes in the first release.

## Information Architecture and Route Strategy

- Store portfolio facts in typed data files, separate from React presentation components.
- Generate the three featured project routes statically from their slugs. Unknown project slugs use the standard not-found response.
- Link supporting work only when a verified destination exists. BALIMASK3D may link to its GitHub repository; missing live URLs remain `TODO`.
- Each case study follows a consistent narrative: overview, context, problem, role and team, process and decisions, selected evidence, output, impact/status, and next-project navigation.
- Status labels must distinguish production work, implemented work, event deployment, academic prototypes, and research prototypes.

## Future Content Model

The implementation should introduce typed `Profile`, `ProofPoint`, `Project`, `ProjectMetric`, and `ProjectAsset` records. `Project` should include:

```ts
type ProjectStatus =
  | "production"
  | "implemented"
  | "event-deployed"
  | "academic-prototype"
  | "research-prototype";

type ProjectProminence = "featured" | "supporting";
```

Project records should hold slug, title, organization, role, type, timeline, team/credit, summary, context, problem, process, outputs, verified outcomes, technologies, status, privacy notes, links, and asset references. Metrics must retain their qualifier and context rather than becoming unsupported headline claims.

## Component Inventory

### Shared shell

- Site header with name, Work, About, resume, and accessible mobile navigation
- Footer with email, LinkedIn, GitHub, location, and resume
- Skip link, page container, section heading, status badge, and text link/button primitives

### Portfolio modules

- Hero and proof-point strip
- Featured-project card and supporting-project card
- Project metadata list and outcome summary
- Case-study section, image figure, comparison figure, metric callout, process steps, and project pagination
- Profile summary, experience timeline, education block, recognition list, and contact CTA

Prefer Server Components. Isolate only interactive navigation and selective Motion wrappers as Client Components.

## Image Requirements

- Copy approved assets into `public/` only during implementation; preserve the source archive unchanged.
- Use `next/image` for raster images with intrinsic dimensions, responsive `sizes`, and appropriate priority only for above-the-fold media.
- Create optimized derivatives for exceptionally large Widya and BECATUR flow exports; do not ship source-scale files directly.
- Review every Mahija and Widya image for identities, internal information, analytics details, and real records. Publish only dummy, anonymized, or redacted content.
- Write contextual alt text describing the design evidence and its relevance. Decorative brand marks use empty alt text when adjacent text supplies the name.
- Animated GIFs require a static alternative and must not autoplay essential information. Prefer a user-controlled or reduced-motion-safe presentation.

See [ASSET_MANIFEST.md](./ASSET_MANIFEST.md) for file-level status.

## Accessibility Strategy

- Use semantic landmarks, one logical `h1` per page, ordered headings, lists, figures, and descriptive link text.
- Ensure full keyboard operation, a visible skip link, strong focus indicators, and no keyboard traps.
- Meet WCAG AA contrast for text and interactive states; accent colors alone must never convey status or selection.
- Provide meaningful alt text, captions where context is needed, and textual equivalents for charts such as BECATUR's SUS comparison.
- Keep tap targets at least 44 by 44 CSS pixels where practical and preserve readable line lengths and zoom behavior.
- Test at mobile, tablet, and desktop widths, at 200% zoom, and with reduced motion enabled.

## Animation Strategy

- Use Motion selectively for short opacity/translate entrances, small card feedback, and navigation transitions that improve orientation.
- Keep transitions generally between 150–400 ms with restrained easing; do not animate large layout shifts.
- Respect `prefers-reduced-motion` by removing nonessential movement and showing content immediately.
- Do not use parallax, scroll-jacking, 3D effects, custom cursors, or animation that delays reading or interaction.

## SEO Strategy

- Provide unique English titles and descriptions for Home, Work, About, and every featured case study.
- Use canonical URLs after the production domain is confirmed, plus `robots.txt` and a generated sitemap.
- Create project-specific Open Graph images after approved imagery is selected; use one portfolio fallback image.
- Add accurate `Person` structured data for Birhasani and `CreativeWork` data for case studies only when supported by public facts.
- Keep headings and visible copy descriptive. Do not hide keyword lists or overstate product results.

## Implementation Phases

1. **Content foundation:** add typed profile/project data, validate claims, prepare approved assets, and establish metadata constants.
2. **Design foundation:** implement tokens, typography, layout primitives, shared navigation/footer, accessibility defaults, and reduced-motion utilities.
3. **Core pages:** build Home, Work, and About responsively with the shared project components.
4. **Featured case studies:** build the three static project routes and their evidence modules.
5. **Quality and launch preparation:** optimize media, complete SEO/social assets, test accessibility and responsive behavior, and resolve publication TODOs.

After every phase, run `npm run lint` and `npm run build`, inspect mobile/tablet/desktop layouts and horizontal overflow, review the final diff, and report changed files and remaining TODOs.

## Acceptance Criteria

- All public claims match [CONTENT_BRIEF.md](./CONTENT_BRIEF.md), and every project has an accurate status and contribution statement.
- Mahija and Widya show no beneficiary identities, private records, or unapproved internal information.
- BECATUR is described as an unlaunched academic prototype created with an equal design partner.
- All routes, navigation, resume download, external links, and not-found behavior work with keyboard and pointer input.
- Pages meet WCAG AA contrast, honor reduced motion, contain useful metadata, and have no horizontal overflow at target widths.
- Images are responsive, optimized, correctly described, and do not cause avoidable layout shift.
- Lint and production build pass without errors.
- No CMS, database, authentication, contact-form backend, GitHub push, or deployment is introduced without an explicit request.

## Open Decisions

- `TODO`: Confirm the production domain for canonical URLs and structured data.
- `TODO`: Supply or approve live links for Mahija, Widya products, Avalon, and ITS sites if they should be public.
- `TODO`: Approve redacted/dummy-data versions of all Mahija and Widya visuals before publication.
- `TODO`: Supply BALIMASK3D visuals and approve portfolio/social-preview artwork.
