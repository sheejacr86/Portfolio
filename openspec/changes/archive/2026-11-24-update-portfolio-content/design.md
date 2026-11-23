# Design: Portfolio Website Content Update

## Context

The portfolio application is built with React 18, Vite, Tailwind CSS, Lenis smooth scrolling, and Framer Motion. Content is separated cleanly into structured data stores (`src/data/content.js`, `src/data/cv.js`) and section components (`src/components/Hero.jsx`, `About.jsx`, `Works.jsx`, `Journey.jsx`, `Classes.jsx`, `Contact.jsx`). See `proposal.md` for background and motivation.

## Goals / Non-Goals

**Goals:**
- Update all copy, biographies, works, timeline milestones, training formats, and contact metadata accurately according to the provided biographical details for Dil Sagar MB.
- Maintain existing visual design, typography, spacing, color palette (`#0C0A08`, `#C9A15C`, `#EFE7DA`, `#161109`, `#C25E3E`), animations, and responsive layouts across mobile and desktop.
- Retain all existing image assets, photo ratios, and media embed placements.
- Ensure seamless compilation (`npm run build`) and zero regressions in navigation or interactive accordions.

**Non-Goals:**
- Redesigning UI components, changing layouts, or restructuring grid systems.
- Introducing new routes or removing existing pages/sections.
- Modifying CSS styling, typography sizes, or animation parameters.
- Adding unverified claims, external links, or unprovided media assets.

## Decisions

### Decision 1: Structured Content vs In-Component Markup
- **Choice:** Maintain the existing pattern of housing repeated data structures (works, timeline, format cards, contact information) in `src/data/content.js`, while placing narrative copy (About introduction, philosophy, hero headline/description) directly in their respective JSX components.
- **Rationale:** Preserves the codebase architecture cleanly without refactoring component contracts.
- **Alternatives Considered:** Extracting all text into an external JSON/i18n file was considered, but rejected as an unnecessary architecture change that could introduce regression risk.

### Decision 2: Harmonizing Practice Pillars & Philosophy in About.jsx
- **Choice:** Incorporate the 4 biographical paragraphs, 5 practice areas, and artistic philosophy within `src/components/About.jsx` utilizing the existing typographic hierarchy and subtle card styling.
- **Rationale:** Ensures readability without disrupting the responsive 12-column layout or the large year background watermark.
- **Alternatives Considered:** Splitting practice pillars into a new sub-component was rejected to avoid component bloat.

### Decision 3: PDF CV Generator Synchronization in cv.js
- **Choice:** Update `downloadCV` in `src/data/cv.js` to draw directly from the updated bio, works list, and milestone entries, outputting a clean vector PDF titled for Dil Sagar MB.
- **Rationale:** Keeps the downloaded artifact consistent with the on-screen content.

## Risks / Trade-offs

- **[Text Length Variations]** Longer descriptions in certain journey milestones or works accordion items could cause unexpected line wraps on small screens.
  → *Mitigation:* Verified text wrapping classes (`leading-relaxed`, `text-sm sm:text-base`) accommodate the updated copy gracefully.
- **[Preservation of Test IDs]** Automated test IDs (e.g. `data-testid="about-portrait"`, `data-testid="work-row-..."`) must be maintained.
  → *Mitigation:* All component test IDs and IDs used for smooth scroll targeting will be preserved.
