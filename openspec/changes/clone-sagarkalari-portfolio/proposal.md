# Proposal

## Why

To establish an exact, high-fidelity digital presence for Dil Sagar (`Kalari with Sagar`), cloning the official portfolio at `https://sagarkalari.co.in/`. This preserves the artist's four-decade archival record of Kalaripayattu and contemporary choreography while providing visitors with an immersive, responsive platform to explore works, watch video performances, download his CV, and submit booking enquiries.

## What Changes

- Recreate the full web application architecture using React 18, Vite, and Tailwind CSS.
- Implement an authentic cultural visual identity with custom typography (Fraunces, Instrument Sans, Fragment Mono, Noto Sans Malayalam) and an earthen palette (Ink, Coal, Gold, Gild, Terra, Bone, Sand).
- Introduce a preloader animation with Malayalam script (`കളരി`) and a percentage counter that smoothly unveils the site.
- Build interactive sections:
  - Hero with parallax imagery, headline masking, and animated scroll indicator.
  - Infinite marquee ticker highlighting practice areas.
  - About section with high-contrast portrait, stat counters, and four-decade biography.
  - Selected Works accordion detailing productions with venue listings, notes, and photos.
  - In Motion video gallery embedding high-definition choreography sequences.
  - The Journey timeline chronologically mapping milestones from 1983 to the present.
  - Performance photo gallery with responsive masonry layout, grayscale-to-color shift, and hover captions.
  - Classes & workshops breakdown for corporates, dance companies, and martial arts students.
  - Contact section with telephone, email, WhatsApp links, and enquiry form with real-time feedback toasts.
  - Vector PDF generation for downloading Dil Sagar's comprehensive curriculum vitae.

## Capabilities

### New Capabilities

- `portfolio-experience`: Core interactive presentation covering the preloader, hero, marquee, biography, selected works accordion, video showcase, timeline, and photo gallery.
- `enquiry-booking`: Interactive booking and inquiry system enabling users to submit requests for community classes, corporate workshops, and choreographic commissions.
- `cv-export`: Client-side vector PDF generation module enabling visitors to download a printable, formatted CV document.

### Modified Capabilities

*(None — this is a new project)*

## Impact

- **Frontend**: Full React 18 component hierarchy with Framer Motion, Lenis smooth scrolling, Sonner toasts, and Tailwind CSS.
- **APIs**: Mock/production endpoint at `/api/enquiries` accepting POST payloads.
- **Assets**: Optimized Google Web Fonts, SVG branding, and external media assets referenced from the artist's archive.
- **Dependencies**: React, Vite, Tailwind CSS, Framer Motion, Lenis, jsPDF, Sonner, and React Query.
