# Design

## Context

The project recreates the single-page application for `https://sagarkalari.co.in/` using modern web tooling. See `proposal.md` for motivation.

The application combines high-end visual design with responsive typography, smooth inertial scrolling, client-side vector document generation, and interactive form handling with toast feedback.

## Goals / Non-Goals

**Goals:**
- Deliver a 100% faithful replication of the layout, typography, animations, and color scheme.
- Single-page application architecture using React 18, Vite, and Tailwind CSS.
- Smooth inertial scrolling via Lenis for seamless desktop and mobile navigation.
- Declarative motion transitions using Framer Motion (`whileInView`, `AnimatePresence`).
- Autonomous vector PDF resume compilation using `jsPDF` without external backend PDF generation dependencies.
- Local API mock plugin within Vite dev and preview servers to guarantee fully operational enquiry form handling.

**Non-Goals:**
- Multi-page routing (the application is fundamentally designed as a fluid single-page portfolio).
- Server-side database persistence for inquiries (handled via API endpoint integration and direct WhatsApp/phone fallback).
- User authentication or administration dashboard.

## Decisions

- **Vite over Create React App / Next.js**:
  - *Rationale*: Extreme build speed, native ES modules, lightweight footprint, and straightforward static bundle generation with `@vitejs/plugin-react`.
  - *Alternatives considered*: Next.js (unnecessary server runtime overhead for a portfolio that deploys statically on Cloudflare / Netlify / Vercel).

- **Tailwind CSS with Custom Theme Tokens**:
  - *Rationale*: Exact hex matching (`#0C0A08`, `#161109`, `#C9A15C`, `#E4C287`, `#C25E3E`, `#EFE7DA`, `#A6937B`) and keyframe definitions (`marquee-x`, `scroll-cue`) allow granular fidelity while preserving clean utility classes.

- **Client-Side jsPDF Generation for CV**:
  - *Rationale*: Instant zero-latency downloads without requiring server-side headless browser rendering or external PDF microservices.

- **Vite Middleware API Plugin**:
  - *Rationale*: Intercepts `POST /api/enquiries` directly during development and preview to give realistic 200 OK responses and verify user toast feedback.

## Risks / Trade-offs

- **[Risk] High-resolution imagery loading latency on slow networks** → *Mitigation*: Native `loading="lazy"` attribute on image assets and CSS photo grading filters to maintain aesthetic fidelity while images stream.
- **[Risk] Inertial smooth-scroll conflicts with native touch scrolling on mobile** → *Mitigation*: Lenis smoothly adapts to wheel events on desktop and falls back gracefully or observes reduced-motion user preferences.
