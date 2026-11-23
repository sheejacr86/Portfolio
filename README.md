# Kalari with Sagar — Dil Sagar Portfolio Clone

An exact, pixel-perfect clone of [sagarkalari.co.in](https://sagarkalari.co.in/) showcasing the work, practice, performance archive, masterclasses, and choreography of **Dil Sagar** (Kalaripayattu artiste, contemporary dancer, choreographer, and teacher).

---

## 🥋 Features & Sections

1. **Preloader Animation**:
   - Malayalam calligraphy `കളരി` center reveal with smooth scale-in transition.
   - Live percentage counter (`000` to `100`) with easing and auto-dismissal.

2. **Hero Section**:
   - Parallax background imagery with authentic photographic color grading and gradient vignetting.
   - Giant Malayalam `കളരി` watermark (`font-mal`).
   - Split-line typography: Solid bone font for `DIL` and gold-outlined text (`text-outline-gold`) for `SAGAR`.
   - Animated scroll cue with keyframe expansion and contraction.
   - Interactive CTA buttons: "Explore the work" and "Book a workshop".

3. **Infinite Marquee**:
   - Smooth continuous horizontal ticker displaying `"Kalaripayattu"`, `"Contemporary Dance"`, `"Choreography"`, `"Movement Arts"`, `"Self-Defence"`, and `"Workshops"`.
   - Alternating typography with terracotta diamond separator glyphs (`#C25E3E`).
   - Pause on hover interaction.

4. **About / The Practice (01)**:
   - High-contrast portrait of Dil Sagar with subtle border styling.
   - Large `"1983"` faint outline watermark.
   - Detailed biography spanning his roots at Vallabhatta Kalari Sangam to the Venice Biennale.
   - 3 Stat highlight cards: *1983 Training since*, *3× State champion*, and *2× National champion*.

5. **Selected Works (03)**:
   - Interactive accordion of landmark productions (*Beyond the Walls for Men*, *City Maps*, *Purushartha*, *Transavatar*, *Ashank*, *Chandra*, *Yudha Kahaandam*, *Sougandya Parvam*, *Mamangam*).
   - Expandable performance details, dates, touring venues, and archival stage photography.
   - **Download CV (PDF)**: Built-in `jsPDF` vector PDF resume generator with custom styling and layout.

6. **In Motion / Video Gallery (04)**:
   - Responsive grid of stage and film choreography video embeds (*Chandra*, *Sougandhya Parvam*).
   - Aspect ratio constraints (`aspect-video`) with dark matte frames.

7. **The Journey Timeline (06)**:
   - Chronological breakdown from 1983 to the present day.
   - Terracotta year indicators and elegant serif headings.

8. **In Performance / Photography Gallery (05)**:
   - Multi-column masonry photo grid with archival performance stills, newspaper clippings, and rehearsals.
   - Subtle grayscale-to-color shift, scale-up hover transitions, and slide-up captions.

9. **Classes & Workshops (07)**:
   - 3 structured format cards (*Kalaripayattu & Fitness* for corporates, *Kalaripayattu & Movement* for dancers, *Kalaripayattu — The Martial Art* for self-defence).
   - "What you can book" offering tags and institutions/companies masterclasses list.

10. **Interactive Contact & Enquiry (08)**:
    - Direct contact links: phone (`+91 97458 56669`), email (`dilsagarm@gmail.com`), blog link, and WhatsApp button.
    - Enquiry form with validation, select dropdown, message textarea, and submission handling.
    - Custom styled Sonner toast notifications matching the dark/gold color palette.

11. **Navigation & Mobile Responsiveness**:
    - Fixed top bar that adds a blurred glass background (`backdrop-blur-md bg-ink/80`) on scroll.
    - Animated smooth scrolling driven by Lenis.
    - Fullscreen mobile slide-down menu with staggered navigation links and contact info.

---

## 🎨 Design System

### Colors
- **Ink (`#0C0A08`)**: Deep obsidian dark background
- **Coal (`#161109`)**: Card and panel background
- **Gold (`#C9A15C`)**: Primary accent and titles
- **Gild (`#E4C287`)**: Hover state gold
- **Bone (`#EFE7DA`)**: Primary readable typography
- **Sand (`#A6937B`)**: Muted secondary text
- **Terra (`#C25E3E`)**: Terracotta accent indicators and numbers

### Typography
- **Serif**: `Fraunces` (Google Fonts)
- **Sans-serif**: `Instrument Sans` (Google Fonts)
- **Monospace**: `Fragment Mono` (Google Fonts)
- **Malayalam**: `Noto Sans Malayalam` (Google Fonts)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run preview
```
