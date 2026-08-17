# Asset Manifest

## Audit scope and production rules

Audited source directory: `Birhasani-Portfolio-Assets/`. The archive remains read-only; production files listed below are proposed derivatives, not existing files.

- Screenshots and raster composites: WebP by default; AVIF for photo-heavy imagery when it remains visually accurate.
- Simple diagrams and icons: SVG exported from the original editable source. Do not trace a raster screenshot and call it a source-quality vector.
- PDF: only the downloadable resume.
- Motion: MP4 only when movement communicates behavior a static poster cannot. Never ship the supplied GIFs directly.
- Project cards use `16:9`. Case-study heroes use `16:9`. Portrait evidence uses `4:5`; readable process diagrams may use their natural ratio in a zoomable figure.
- Card images embedded inside an already descriptive linked card use `alt=""` to avoid repetition. The same image used as a case-study hero uses the specified descriptive alt text.
- Do not publish any file marked **BLOCKED**, **REDACT**, or **TODO** until its stated condition is resolved.

## Audit summary

- Exact SHA-256 duplicate: `00-profile/profile-potrait.jpg` and `00-profile/profile-square.jpg` are the same 400×400 file.
- Low resolution: both profile JPEGs; all five Widya GIFs (192–200 px square); `widya-robotics-logo.png` (actually a 128×124 WebP); `becatur-logo.png` (actually a 256×79 WebP); and both BECATUR persona images (742×614 and 870×724) for full-width display.
- Mislabelled formats: `widya-robotics-logo.png` and `becatur-logo.png` contain WebP data despite their `.png` extensions.
- No other exact file duplicates were found.
- Hard content block: `widya-feedback-state.png` contains unsupported testimonials and impact claims. It must not be published or used as factual evidence.

## Profile and resume

| Available source | Audit | Production filename | Ratio | Required alt / handling |
| --- | --- | --- | --- | --- |
| `00-profile/profile-potrait.jpg` | 400×400; exact duplicate of `profile-square.jpg`; low resolution | `profile/birhasani-raka-abiansyah.avif` | 1:1 | `Portrait of Birhasani Raka Abiansyah wearing a dark collared shirt.` Use at modest rendered size only. |
| `00-profile/profile-square.jpg` | Exact duplicate; do not create a second derivative | None | 1:1 | Duplicate—reference the single production portrait. |
| `01-resume/Birhasani-Raka-Abiansyah-Resume.pdf` | Only approved PDF delivery type; review contents before launch | `resume/birhasani-raka-abiansyah-resume.pdf` | Document | Link label: `Download Birhasani Raka Abiansyah's resume (PDF)`. |

## Telusur Mahija

### Selection

- **Project card:** `mahija-cover-dashboard.png` → `projects/mahija/mahija-dashboard-card.webp`, 16:9, `alt=""` inside the descriptive card.
- **Case-study hero:** the same source → `projects/mahija/mahija-dashboard-hero.webp`, 16:9. Alt: `Telusur Mahija case-study cover showing a program-monitoring dashboard with summary metrics and charts.`
- **Redaction:** every Mahija visual is **REDACT** until the owner confirms all names, phone numbers, addresses, program labels, record counts, analytics, account labels, and internal navigation are dummy or approved. `mahija-beneficiary-management.png` is highest risk because it visibly includes a full name, phone number, address, and community details.

### Available files

All sources are 1672×941 PNG (16:9).

| Available source | Production filename | Required alt text | Audit / use |
| --- | --- | --- | --- |
| `02-mahija/mahija-cover-dashboard.png` | `projects/mahija/mahija-dashboard-card.webp`; `projects/mahija/mahija-dashboard-hero.webp` | Hero alt defined above | Strongest balanced overview; **REDACT** metrics/account labels before use |
| `02-mahija/mahija-dashboard.png` | `projects/mahija/mahija-dashboard-overview.webp` | `Telusur Mahija dashboard overview with program KPIs, participation trends, and program distribution.` | Strong case-study evidence; **REDACT** |
| `02-mahija/mahija-beneficiary-management.png` | `projects/mahija/mahija-beneficiary-management-redacted.webp` | `Telusur Mahija beneficiary-management interface connecting individual, community, area, and participation records.` | **REDACT REQUIRED:** name, phone, address, locations, counts, and account data |
| `02-mahija/mahija-program-management.png` | `projects/mahija/mahija-program-management-redacted.webp` | `Telusur Mahija program-management interface showing program details and linked agenda sessions.` | **REDACT REQUIRED:** coordinator, locations, dates, program names, counts, account data |
| `02-mahija/mahija-monitoring-evaluation.png` | `projects/mahija/mahija-monitoring-evaluation-redacted.webp` | `Telusur Mahija monitoring and evaluation interface with progress, outcome, and evaluation summaries.` | **REDACT REQUIRED:** metrics, geographic labels, program categories, account data |
| `02-mahija/mahija-responsive.png` | `projects/mahija/mahija-responsive-layouts-redacted.webp` | `Telusur Mahija dashboard adapted across desktop, tablet, and mobile layouts.` | Strong responsive evidence; **REDACT** visible data/account labels |
| `02-mahija/mahija-information-architecture.png` | `projects/mahija/mahija-information-architecture.svg` | `Information architecture for Telusur Mahija, grouping dashboard, master data, programs, monitoring, reports, and settings.` | **TODO:** export source-quality SVG; review internal module names |
| `02-mahija/mahija-main-user-flow.png` | `projects/mahija/mahija-admin-user-flow.svg` | `Primary Telusur Mahija administrator flow from account access through program creation, monitoring, evaluation, and reporting.` | **TODO:** export source-quality SVG; review internal workflow detail |
| `02-mahija/mahija-design-system.png` | `projects/mahija/mahija-design-system.webp` | `Telusur Mahija design-system foundation with logo variants, colors, typography, components, and icons.` | Useful system evidence; **REDACT** sample metrics if not confirmed dummy |

## Widya Robotics — Notulensi.id and Transkripsi.id

### Selection

- **Project card:** `widya-cover.png` → `projects/widya/widya-notulensi-card.webp`, 16:9, `alt=""` inside the descriptive card.
- **Case-study hero:** `widya-before-after.png` → `projects/widya/widya-notulensi-before-after-hero.webp`, 16:9. Alt: `Before-and-after comparison of redesigned Notulensi dashboard and meeting-history screens.`
- **Redaction:** all product screenshots are **REDACT** until workspace names, people, transcript text, meeting names, dates, credit balances, account initials, and other customer/internal data are replaced with dummy content. The PostHog capture must remove the visible email, user/session metadata, URLs, location, and project details.

### Available files

| Available source | Source size / ratio | Production filename | Required alt text | Audit / use |
| --- | --- | --- | --- | --- |
| `03-widya/widya-cover.png` | 7680×4320, 16:9 | `projects/widya/widya-notulensi-card.webp` | `Notulensi product screens across landing, dashboard, and meeting-history views.` | Strongest card; oversized; **REDACT** workspace/account content |
| `03-widya/widya-before-after.png` | 14472×8140, ~16:9 | `projects/widya/widya-notulensi-before-after-hero.webp` | Hero alt defined above | Strongest outcome evidence; oversized; **REDACT** names, transcripts, meetings, dates, balances, account data |
| `03-widya/widya-posthog.png` | 1624×950, ~12:7 | `projects/widya/widya-posthog-analysis-redacted.webp` | `PostHog session-recording interface used to identify usability issues for Widya products.` | **REDACT REQUIRED:** email, session metadata, URLs, location, and project identifiers; crop to analysis context |
| `03-widya/widya-ux-error-list.png` | 1600×824, ~2:1 | `projects/widya/widya-usability-findings-redacted.webp` | `Figma board organizing usability problems identified through product-behavior analysis.` | Text is too small at card size; **REDACT** collaborator/account details and confidential notes; use as zoomable evidence only |
| `03-widya/widya-component-library.png` | 1122×1402, 4:5 | `projects/widya/widya-notulensi-component-library.webp` | `Notulensi design-system summary showing color, typography, logo, component, and illustration foundations.` | Good portrait evidence; review third-party client logos and use at 4:5 |
| `03-widya/widya-feedback-state.png` | 1122×1402, 4:5 | None | None | **BLOCKED:** contains unsupported named testimonial, five-star ratings, customer quote, business-impact claims, and fabricated quantitative framing; do not publish |
| `03-widya/Widya-rive-animation-1.gif` | 200×200, 1:1 | `projects/widya/widya-rive-waveform-poster.webp`; optional `widya-rive-waveform.mp4` | `Animated orange audio waveform icon created for Notulensi.` | Low resolution; use MP4 only if the motion behavior itself is discussed |
| `03-widya/Widya-rive-animation-2.gif` | 192×192, 1:1 | `projects/widya/widya-rive-transition-02-poster.webp`; optional `.mp4` equivalent | `Second Rive loading or transition animation created for Notulensi.` | Low resolution; first frame appears blank; **TODO:** verify full animation and meaningful behavior |
| `03-widya/Widya-rive-animation-3.gif` | 200×200, 1:1 | `projects/widya/widya-rive-transcript-poster.webp`; optional `widya-rive-transcript.mp4` | `Animated stack of transcript cards created for Notulensi.` | Low resolution; prefer static poster unless movement demonstrates state change |
| `03-widya/Widya-rive-animation-4.gif` | 200×200, 1:1 | `projects/widya/widya-rive-progress-poster.webp`; optional `widya-rive-progress.mp4` | `Animated progress indicator created for Notulensi.` | Low resolution; first frame is nearly blank; **TODO:** verify full animation |
| `03-widya/Widya-rive-animation-5.gif` | 200×200, 1:1 | `projects/widya/widya-rive-document-poster.webp`; optional `widya-rive-document.mp4` | `Animated document icon created for Notulensi.` | Low resolution; prefer static poster unless movement is essential |

## BECATUR

### Selection

- **Project card:** `becatur-cover.png` → `projects/becatur/becatur-card.webp`, 16:9, `alt=""` inside the descriptive card.
- **Case-study hero:** `becatur-final-prototype.png` → `projects/becatur/becatur-prototype-hero.webp`, 16:9. Alt: `BECATUR high-fidelity academic prototype across traveler, driver, administrator, and informational web experiences.`
- **Accuracy/privacy:** remove App Store and Google Play badges wherever visible because the product was not launched. Confirm that all displayed names, portraits, maps, license plates, chats, and profile photos are licensed dummy content. Anonymize research notes. The two persona images are **BLOCKED** until portrait rights are confirmed or a non-identifying replacement is supplied.

### Available files

| Available source | Source size / ratio | Production filename | Required alt text | Audit / use |
| --- | --- | --- | --- | --- |
| `04-becatur/becatur-cover.png` | 1672×941, 16:9 | `projects/becatur/becatur-card.webp` | `BECATUR academic prototype shown across traveler, driver, administrator, and informational interfaces.` | Strongest card; **REDACT** store-launch cues and confirm names/photos are dummy/licensed |
| `04-becatur/becatur-customer-app.png` | 1672×941, 16:9 | `projects/becatur/becatur-traveler-app.webp` | `BECATUR traveler-app prototype showing destination search, ride reservation, live tracking, payment, and rewards.` | Remove App Store/Google Play badges; confirm portraits and names are dummy/licensed |
| `04-becatur/becatur-driver-app.png` | 1672×941, 16:9 | `projects/becatur/becatur-driver-app.webp` | `BECATUR driver-app prototype showing availability, reservation acceptance, navigation, chat, and earnings.` | Remove store badges; confirm names, portraits, chat, maps, plate, and earnings are dummy/licensed |
| `04-becatur/becatur-final-prototype.png` | 1672×941, 16:9 | `projects/becatur/becatur-prototype-hero.webp` | Hero alt defined above | Strongest hero; label nearby as academic prototype; confirm displayed identities/data |
| `04-becatur/becatur-information-architecture.png` | 32768×25464, ~1.29:1 | `projects/becatur/becatur-information-architecture.svg` | `Information architecture mapping traveler and becak-driver reservation, tracking, chat, profile, reward, and payment flows.` | Oversized raster; **TODO:** export accessible source-quality SVG and provide adjacent text summary |
| `04-becatur/becatur-key-findings.png` | 32768×17463, ~1.88:1 | `projects/becatur/becatur-research-findings-redacted.webp` | `Affinity-board synthesis of traveler and becak-driver research findings.` | **REDACT REQUIRED:** participant names/attribution; oversized; verify all findings against research source before use |
| `04-becatur/becatur-sus-comparison.png` | 1672×941, 16:9 | `projects/becatur/becatur-sus-comparison.webp` | `SUS scores improving from 70.66 to 82.50 for travelers and from 67.75 to 81.25 for drivers across two iterations.` | Strong testing evidence; pair with semantic data table and equal-partner credit |
| `04-becatur/becatur-user-persona-1.png` | 742×614, ~6:5 | `projects/becatur/becatur-traveler-persona.webp` only if rights cleared | `Traveler persona summarizing goals, frustrations, technology use, and motivations.` | Low resolution for full width; **BLOCKED/TODO:** confirm portrait license and that content is research-grounded |
| `04-becatur/becatur-user-persona-2.png` | 870×724, ~6:5 | `projects/becatur/becatur-driver-persona.webp` only if rights cleared | `Becak-driver persona summarizing customer, technology, reservation, and income needs.` | Low resolution for full width; heading duplication visible; **BLOCKED/TODO:** confirm portrait license and content accuracy |
| `04-becatur/becatur-traveler-flow.png` | 16320×7744, ~2.11:1 | `projects/becatur/becatur-traveler-flow.svg` | `Traveler flow covering account access, reservation, tracking, feedback, rewards, profile, and payment.` | Oversized raster; **TODO:** export SVG; use natural ratio in zoomable figure |
| `04-becatur/becatur-driver-flow.png` | 14080×7616, ~1.85:1 | `projects/becatur/becatur-driver-flow.svg` | `Driver flow covering account access, order acceptance, pickup, trip completion, chat, profile, and earnings.` | Oversized raster; **TODO:** export SVG; use natural ratio in zoomable figure |
| `04-becatur/becatur-admin-flow.png` | 30656×7616, ~4:1 | `projects/becatur/becatur-admin-flow.svg` | `Administrator flow mapping account, fleet, reservation, customer, payment, reporting, and support tasks.` | Extremely wide/oversized; **TODO:** export SVG and divide into labeled accessible sections |

## Avalon AI x Matahari

### Selection

- **Project card:** `avalon-cover.png` → `projects/avalon/avalon-ai-matahari-card.avif`, 16:9, `alt=""` inside the descriptive card.
- **Future case-study hero:** `avalon-main-screens.png` → `projects/avalon/avalon-ai-main-screens-hero.avif`, 16:9. Alt: `Aura Intelligence experience across web and mobile screens for personal color analysis and fashion recommendations.`
- No dedicated case-study route is planned for the first release. Keep the status caption “Used during Matahari's Ramadan event.” Do not use the banner's “Grand Launching” wording as evidence of a general public launch.

### Available files

All sources are 1672×941 PNG (16:9).

| Available source | Production filename | Required alt text | Audit / use |
| --- | --- | --- | --- |
| `05-avalon/avalon-cover.png` | `projects/avalon/avalon-ai-matahari-card.avif` | `Aura Intelligence shown across an in-store capture experience, mobile preferences, and a web recommendation interface.` | Strongest card; confirm model/product-image licenses |
| `05-avalon/avalon-main-screens.png` | `projects/avalon/avalon-ai-main-screens-hero.avif` | Hero alt defined above | Strongest broad product evidence; confirm model/product-image licenses |
| `05-avalon/avalon-detail-screens.png` | `projects/avalon/avalon-ai-interface-details.avif` | `Aura Intelligence tone palette, product detail, and AI recommendation interface.` | Good detail evidence; verify product data is dummy/approved |
| `05-avalon/avalon-user-flow.png` | `projects/avalon/avalon-ai-user-flow.avif` | `Four-step web and mobile flow from image capture and preferences to loading and fashion recommendations.` | Strong process evidence; confirm model-image rights |
| `05-avalon/avalon-wireframe.png` | `projects/avalon/avalon-ai-wireframes.avif` | `Web and mobile wireframes for capture, preference, loading, and recommendation states.` | Secondary process evidence; image-heavy, so do not convert to pseudo-vector SVG |
| `05-avalon/avalon-banner.png` | `projects/avalon/avalon-ai-event-banner.avif` | `Aura Intelligence event banner for Avalon AI and Matahari at Tunjungan Plaza in February 2025.` | Use only as event artifact with contextual caption; “Grand Launching” must not imply ongoing public launch |

## ITS Website Team

### Selection

- **Project card:** `cover.png` → `projects/its/its-website-team-card.webp`, 16:9, `alt=""` inside the descriptive card.
- **Future case-study hero:** `its-team-process.png` → `projects/its/its-team-process-hero.webp`, 16:9. Alt: `Six-step ITS website team workflow from unit requests through UX review, redesign decisions, and team execution.`
- No dedicated case-study route is planned for the first release. Public-site screenshots contain identifiable people and public statistics; confirm the images may be republished and avoid implying that visible figures are the source of the approximately 30% PPID outcome.

### Available files

All sources are 1672×941 PNG (16:9).

| Available source | Production filename | Required alt text | Audit / use |
| --- | --- | --- | --- |
| `06-its-website/cover.png` | `projects/its/its-website-team-card.webp` | `ITS website and PPID portal showcase with examples of the landing page, statistics, facilities, and annual reports.` | Strongest project card; public photography needs republication approval |
| `06-its-website/main-landing-page.png` | `projects/its/its-main-landing-page.webp` | `ITS main website landing page with scholarship feature, service navigation, news, and agenda content.` | Product evidence; verify public photography rights |
| `06-its-website/its-ppid.png` | `projects/its/its-ppid-portal.webp` | `ITS PPID public-information portal with service, information, mobile-app, and news sections.` | Strong PPID overview |
| `06-its-website/its-ppid-statistik.png` | `projects/its/its-ppid-statistics.webp` | `ITS PPID public-information statistics interface with request and response-time charts.` | Do not connect displayed values to the 30% outcome without source verification |
| `06-its-website/its-ppid-facilities.png` | `projects/its/its-ppid-facilities.webp` | `ITS PPID facilities page showing the service desk, accessibility ramp, and support access.` | Identifiable people visible; confirm public-photo republication rights |
| `06-its-website/its-ppid-annual-reports.png` | `projects/its/its-ppid-annual-reports.webp` | `ITS PPID annual-report archive with report covers and year navigation.` | Good content-structure evidence |
| `06-its-website/its-team-process.png` | `projects/its/its-team-process-hero.webp` | Hero alt defined above | Strongest leadership/process hero; diagram is already legible at 16:9 |

## BALIMASK3D

- **Available files:** none in the source archive.
- **Project card:** `TODO`; no visual can be selected or named truthfully.
- **Case-study hero:** `TODO`; no visual can be selected or named truthfully.
- **Required assets:** `TODO` obtain an approved cover, an input/output reconstruction comparison, and a pipeline or evaluation visual. Suggested filenames may be assigned only after real files exist.
- **Alt text and ratio:** `TODO` derive from the supplied visuals; target 16:9 for card/hero and natural ratio for technical evidence.
- Do not use a generic AI/3D stock image as a substitute.

## Logos

Logos supplement visible organization names and normally use `alt=""` when adjacent text already identifies the organization.

| Available source | Audit | Production filename | Intended ratio / action |
| --- | --- | --- | --- |
| `08-logos/mahija-logo.png` | 1160×488 PNG; usable raster | `logos/mahija-logo.webp` | Natural ~2.38:1; **TODO** request SVG if available |
| `08-logos/widya-robotics-logo.png` | Mislabelled 128×124 WebP; very low resolution, text is not legible at useful size | None | **TODO:** obtain official SVG or higher-resolution transparent original |
| `08-logos/becatur-logo.png` | Mislabelled 256×79 WebP; low resolution | None | **TODO:** obtain source SVG from the design files |
| `08-logos/avalon-logo.svg` | Native 971×775 viewBox; unusually tall mark | `logos/avalon-ai-mark.svg` | Preserve SVG and natural ratio; inspect excess canvas |
| `08-logos/matahari-logo.svg` | Native 200×38 viewBox | `logos/matahari-logo.svg` | Preserve SVG and natural ~5.26:1 ratio |
| `08-logos/its-logo.png` | 779×508 PNG with large white canvas | `logos/its-logo.webp` | Crop only transparent/empty canvas; **TODO** request official SVG |

## Certificates and other evidence

Certificates remain internal reference evidence by default. Do not copy them into `public/`; the resume is the only approved PDF delivery.

| Available source | Audit / production disposition |
| --- | --- |
| `09-certificates/BIRHASANI RAKA A.pdf` | Reference only; identify award and inspect personal data before any proposed use |
| `09-certificates/BIRHASANI RAKA ABIANSYAH.tif` | 3250×2250 TIF; reference only; no production filename |
| `09-certificates/Birhasani_Raka_Abiansyah_UIUX.png` | 1123×794 PNG; reference only; verify issuer/context |
| `09-certificates/Digistar Class_Birhasani Raka Abiansyah.pdf` | Reference evidence for Digistar; do not publish as PDF |
| `09-certificates/SERTIFIKAT PANITIA FORDA_ttd1-1409 (1).pdf` | Reference only; likely unrelated to concise portfolio narrative |
| `09-certificates/Sertifikat SIC6 (1).pdf` | Reference only; identify achievement before use |
| `09-certificates/Sertifikat Stage 1 - Samsung Innovation Campus Batch 5 (2023_2024).pdf` | Reference only |
| `09-certificates/Sertifikat Stage 2 - Samsung Innovation Campus Batch 5 (2023_2024).pdf` | Reference only |

## Production TODO checklist

- `TODO`: Approve and produce fully dummy/redacted Mahija and Widya derivatives.
- `TODO`: Remove unsupported Widya feedback/testimonial artwork from the publication set.
- `TODO`: Confirm BECATUR portrait/map/photo licensing, anonymize research notes, and remove app-store launch cues.
- `TODO`: Obtain source-quality SVG exports for Mahija and BECATUR diagrams.
- `TODO`: Obtain official vector logos for Widya Robotics, BECATUR, Mahija, and ITS where available.
- `TODO`: Verify third-party photo/model/logo republication rights for Avalon and ITS screenshots.
- `TODO`: Supply real BALIMASK3D assets; do not invent substitutes.
- `TODO`: Validate the resume contents and choose the single duplicate profile source to retain when production assets are created.
