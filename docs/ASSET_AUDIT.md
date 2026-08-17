# Asset Audit

## Scope and result

Audit completed against `source-assets/approved-public/` on 17 August 2026. All 61 files were inspected by content: 50 static images (including 6 logos and 2 raster certificates), 5 animated GIFs, and 6 certificate PDFs. Raster dimensions were read from the files; GIFs were inspected at multiple frames; embedded certificate pages were extracted for visual review. Source files remain unchanged.

The public interface now has **zero visible development placeholders**. BaliMask3D remains intentionally text-led because no approved-public BaliMask3D media exists.

## Published assets

| Group | Approved files reviewed | Published derivatives | Use |
| --- | ---: | ---: | --- |
| Profile | 2 JPG, 400×400, exact duplicates | 1 WebP | About portrait |
| Mahija | 9 PNG, 1672×941 (16:9) | 9 WebP | Cover, architecture, flow, system, responsive and product evidence |
| Widya | 6 PNG + 5 GIF | 4 WebP + 5 GIF + 5 posters | Cover, issue synthesis, comparison, system and controlled motion |
| BECATUR | 12 PNG | 9 WebP | Cover, research, architecture, flows and prototype screens |
| Avalon | 6 PNG, 1672×941 | 4 WebP | Cover, flow, main screens and event banner |
| ITS Website | 7 PNG, 1672×941 | 4 WebP | Cover, team process, PPID portal and annual reports |
| Logos | 2 SVG + 4 PNG | 0 | Redundant with labeled project artwork; raster quality is inconsistent |
| Certificates | 6 PDF + PNG + TIF | 0 | Do not substantiate the portfolio’s selected recognition claims or would add unrelated evidence |

Large BECATUR and Widya boards were resized to a maximum width of 3600 px and encoded as high-quality WebP. Standard 1672×941 compositions retain their original dimensions. GIFs retain their original animation and use separately generated static posters.

## Privacy and integrity exclusions

| File | Decision | Exact concern |
| --- | --- | --- |
| `widya/widya-posthog.png` | Rejected | Visibly exposes a personal email address, session durations, geographic/device details, URLs, event activity, and analytics identifiers. |
| `widya/widya-feedback-state.png` | Rejected | Contains unsupported named testimonials, five-star ratings, satisfaction labels, and business-impact claims that conflict with the verified content rules. |

No other approved-public asset showed an obvious password, token, API key, government identifier, phone number, personal email, or private beneficiary record during visual review.

## Intentionally unused assets and reasons

- `profile/profile-square.jpg`: byte-identical duplicate of `profile-potrait.jpg`.
- `becatur/becatur-sus-comparison.png`: redundant with the existing accessible numeric SUS component.
- `becatur/becatur-user-persona-1.png` and `becatur-user-persona-2.png`: low-resolution persona portraits are less direct evidence than the approved research synthesis and flows.
- `avalon/avalon-detail-screens.png` and `avalon-wireframe.png`: visually repetitive within a concise supporting-project page; main screens and user flow communicate the decisions more clearly.
- `its-website/its-ppid-facilities.png`, `its-ppid-statistik.png`, and `main-landing-page.png`: redundant with the curated PPID overview; the statistics image must not be mistaken for evidence of the separate approximately 30% outcome.
- All six project logos: already present within the approved project compositions and unnecessary as separate decorative marks.
- All eight certificates: unrelated to, or insufficient evidence for, the three selected recognition statements; publishing them would add personal-document clutter without improving recruiter comprehension.

## Duplicate and quality findings

- The two profile JPGs are exact SHA-256 duplicates.
- Card and hero placements intentionally reuse a single strongest cover per project without creating duplicate public files.
- Some project cover imagery repeats interfaces later shown in detail; it is reused by URL, not copied again.
- No broken public image references remain. The previous six Widya duplicate files and previous duplicate profile derivative were removed from `public/` after route migration.
