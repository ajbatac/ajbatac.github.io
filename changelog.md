# Changelog

All notable technical changes to this project will be documented in this file.

## [Unreleased]

### Added
- **Recently built apps**: Added WPEG Classifieds, Explore WPEG, Winnipeg Jobs, Quilala, Erutrepa, and aHREFna to the portfolio.

### Changed
- Renamed the Recent Products section to Recently built apps.
- Refreshed the WPEG Portal, Pixel IQ, and FOSSY names and descriptions.
- Added site favicons or logos beside app titles, with a neutral fallback for unavailable legacy assets.
- Reworked links, app buttons, featured cards, and interaction states into a restrained grayscale system for cleaner employer-focused scanning.
- Renamed Email Signatures to EmailSig, refreshed its description, and removed the legacy tracking query from its URL.
- Marked Email IQ as archived in the portfolio and documentation.

## [v2.6.2] - 2026-06-26

### Added
- **Versioning & Source Control**: Added a dedicated section to showcase experience across Git, GitHub, GitLab, Bitbucket, and SVN version control systems.

## [v2.6.1] - 2026-06-26

### Changed
- **Summary & Skills Refresh**: Enhanced the professional summary and skill sets across the portfolio and README to reflect expertise in modern hosting platforms (Vercel, Netlify, Cloudflare), RAG (Retrieval-Augmented Generation), and System/Software Design Documents (SDD).
- **Metadata Keywords**: Updated SEO metadata keywords for better discoverability of newly listed technologies.

## [v2.6.0] - 2026-06-10

### Added
- **Recent Product Additions**: Added four static project cards to `index.html`.
  - Mekeni: Filipino-Canadian business directory.
  - Pixel IQ: AI-powered image intelligence platform.
  - FOSSY: Curated FOSS directory and contributor discovery surface.
  - WPEG.app: Winnipeg micro-apps portal.

### Changed
- **Static UI Refresh**: Reworked `css/style.css` around a lighter editorial portfolio layout.
  - Simplified typography to one readable sans-serif system.
  - Removed dark glassmorphism and script-dependent visual states.
  - Added print-oriented styles for resume-style output.
- **Pure HTML/CSS Contract**: Removed JavaScript-powered controls from the deployed pages.
  - Removed theme toggle, font sizer, dynamic back-to-top button, and analytics script tags from `index.html`.
  - Removed the shared script include from `changelog.html`.
  - Deleted the unused `js/script.js` file.
- **Source of Truth Cleanup**: Removed the stale duplicate Next/TypeScript portfolio surface under `hosting/`.
  - Firebase hosting serves the repository root, so the static `index.html` remains authoritative.

### Technical Details
- **Files Affected**:
  - `index.html`: Static markup, project additions, script removal, version update.
  - `css/style.css`: UI, typography, layout, responsive, and print refresh.
  - `changelog.html`, `changelog.md`, `rss.xml`, `sitemap.xml`, `README.md`: Version and release metadata.
  - `tests/test_index.py`: Updated tests for static HTML/CSS behavior.
  - `firebase.json`: Removed obsolete JavaScript cache target and ignored non-site files.
- **Dependencies**: Removed unused Node/Next/TypeScript project files.

---

## [v2.5.0] - 2026-03-18

### Added
- **Public-facing Changelog**: Implemented unified `/changelog` page for high-level release notes.
  - Linked to `changelog.html` via `firebase.json` rewrite.
  - Omitted technical details for public security.
- **Project RSS Feed**: Established validated XML feed at `/changelog/rss`.
  - Linked to `rss.xml` via `firebase.json` rewrite.
- **Search Engine Optimization**: Standardized project discovery directives.
  - Created/Updated `sitemap.xml` with priority routes.
  - Added sitemap link to `robots.txt`.

### Changed
- **Avatar Positioning**: Enhanced the profile image centering logic in `css/style.css:116-125`.
  - Switched from inline-block to `display: block` with `margin: 0 auto`.
- **Version Tracking (v2.5.0)**: Updated project milestone across multiple files.
  - Footer in `index.html:508`: updated version and wrapped in clickable link to `/changelog`.
  - Meta tags and documentation in `README.md`.

### Technical Details
- **Files Affected**:
  - `index.html`: Footer and versioning update.
  - `css/style.css`: Profile image styling.
  - `firebase.json`: Routing for new static pages.
  - `changelog.html`: Public release page.
  - `rss.xml`: Content syndication feed.
  - `sitemap.xml`, `robots.txt`: SEO directives.
- **Code Snippets**:
  - CSS centering: `.profile-img { display: block; margin: 0 auto; }`
  - Footer link: `<a href="/changelog">v2.5.0</a>`
- **Dependencies**: None.

---

## [v1.0.0] - 2026-01-13

### Added
- **Version Tracking**: Introduced version numbering system in footer (`index.html:438`)
  - Version format: `v1.0.0` following semantic versioning
  - Displayed in footer alongside copyright notice

- **Business Summary Section**: New comprehensive section showcasing professional competencies (`index.html:97-167`)
  - Strategic & Business Skills: Digital Transformation Strategy, Stakeholder Management, Budget Management, Vendor Management, Product Management, Business Development, Change Management
  - Technical Leadership Skills: Technical Architecture, DevOps, Cloud Infrastructure Management, Security & Compliance, Performance Optimization, CI/CD Pipeline Development
  - Team & People Management Skills: Team Building, Mentoring & Coaching, Hiring & Talent Acquisition, Performance Management, Cross-functional Collaboration
  - Process & Project Skills: Agile/Scrum Methodologies, Quality Assurance Management, Documentation, Risk Management
  - Soft Skills: Critical Thinking, Inclusive Leadership, Public Speaking, Community Building, Client Relations
  - Emerging Tech Skills: Artificial Intelligence/AI Integration, Agentic AI Development, API Development & Integration, Automation
  - Material icon: `business_center`

- **Jump Links Navigation**: Added "Business Summary" to quick navigation (`index.html:73`)

### Changed
- **Footer Copyright Year**: Updated from dynamic year display to static "2026" (`index.html:438`)
  - Previous: `© <span id="current-year"></span> Allan Batac Inc. All rights reserved.`
  - Current: `© 2026 Allan Batac Inc. All rights reserved. | v1.0.0`
  - Note: This was later superseded in v2.6.0 when the unused script file was removed.

- **Icon System**: migrated all icons from emoji/text to Google Material Icons (`index.html:30-32`)
  - Added Material Symbols Outlined stylesheet
  - Icons now use: `<span class="material-symbols-outlined">icon_name</span>`
  - Contact icons: phone, mail, work, code, language (`index.html:60-67`)
  - Section icons: description, business_center, build, apartment, workspace_premium, school, rocket_launch (`index.html:83-290`)

### Technical Details
- **File Path**: `/Users/ajbatac/ajbatac.github.io/index.html`
- **Key Lines**:
  - Line 31-32: Material Icons stylesheet integration
  - Line 73: Business Summary jump link
  - Line 97-167: Complete Business Summary section with skill categories
  - Line 438: Footer with version display
- **Dependencies**: Google Material Symbols Outlined font
- **Version Format**: Semantic versioning (MAJOR.MINOR.PATCH)

### Documentation
- **README.md**: Updated with "Recent Updates" section providing high-level overview of v1.0.0 changes
- **changelog.md**: Created to track detailed technical changes, file paths, and code references

---

## Version History
- **v2.6.2** (2026-06-26): Versioning & source control skill additions (Git, GitHub, GitLab, Bitbucket, SVN)
- **v2.6.1** (2026-06-26): Summary & skills update (Vercel, Netlify, Cloudflare, RAG, SDD)
- **v2.6.0** (2026-06-10): Static UI refresh, pure HTML/CSS delivery, new project cards
- **v1.0.0** (2026-01-13): Initial versioning, Business Summary addition, 2026 checkpoint update
