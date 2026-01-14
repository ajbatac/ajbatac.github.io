# Changelog

All notable technical changes to this project will be documented in this file.

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
  - Note: JavaScript year setter still present in `js/script.js:108-111` but no longer used

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
- **v1.0.0** (2026-01-13): Initial versioning, Business Summary addition, 2026 checkpoint update
