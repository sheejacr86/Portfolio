# Proposal

## Why

The portfolio website currently displays cloned placeholder copy and incomplete biographical details. Updating the website with Dil Sagar MB's comprehensive and accurate artistic background—spanning four decades of Kalaripayattu, contemporary dance, international performances, film choreography, masterclasses, and teaching—establishes an authentic, professional, and engaging digital presence without altering the existing visual design, animations, or responsive behavior.

## What Changes

- Update Hero section titles, description, and call-to-action buttons to reflect Dil Sagar MB's professional identity and philosophy.
- Update the About page with Dil Sagar MB's biographical narrative, 5 core practice pillars (Kalaripayattu, Contemporary Dance, Choreography, Teaching & Training, Movement Research), and artistic philosophy.
- Update the Works page and data with selected stage productions (*Ashank*, *Yudhakandam*, *Sougandhya Parvam*, *Purushartha*, *Transavatar*, *Nagaranthara*), film/commercial choreography (*Chandra*, *Olipporu*, *Vegam*, *Kalliyath TMT*), and international collaborations.
- Update the Journey timeline with Dil Sagar's complete milestone chronology from 1983 (Vallabhatta Kalari Sangam) through 2025 (Kilkari Bihar) and today.
- Update the Classes & Workshops section with structured cards for Kalaripayattu, Kalari for Dancers & Performers, and Contemporary Movement, alongside updated audience offerings and corporate workshop details.
- Update the Contact section and metadata with accurate contact details (phone, email, location in Kerala, India) and form button copy ("Send Message").
- Update the CV PDF generator (`src/data/cv.js`) so exported documents align with the updated biography, credentials, timeline, and artistic repertoire.

## Capabilities

### New Capabilities

None.

### Modified Capabilities

- `portfolio-experience`: Update page content, section headings, biographies, works catalogue, journey milestones, class formats, and contact details across the portfolio presentation.
- `cv-export`: Synchronize the exported vector PDF resume with the updated biographical data, timeline milestones, and production credits.

## Impact

- Affects data layer: `src/data/content.js` and `src/data/cv.js`.
- Affects presentation components: `src/components/Hero.jsx`, `src/components/About.jsx`, `src/components/Works.jsx`, `src/components/Journey.jsx`, `src/components/Classes.jsx`, `src/components/Contact.jsx`.
- Zero impact on website styling, Tailwind classes, animations, layout structures, routing, external assets, or dependencies.
