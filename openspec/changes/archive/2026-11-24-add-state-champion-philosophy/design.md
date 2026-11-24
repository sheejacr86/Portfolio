# Design: State Champion Accolade Integration

## Context

See `proposal.md` for motivation. The About section in `src/components/About.jsx` contains the artist portrait, introduction, five practice pillars, artistic philosophy, and statistics grid.

## Goals / Non-Goals

**Goals:**
- Present "3× State Champion / Kerala Kalaripayat Association — three years in a row." within the Artistic Philosophy block.
- Use a minimalist gold accent left-border (`border-l-2 border-gold/60 py-1 pl-4`) that matches the site's editorial visual language.
- Ensure responsive padding and legible typography on mobile and desktop viewports.

**Non-Goals:**
- Modifying any other section, component, layout, or style.
- Introducing new external assets or dependencies.

## Decisions

### Decision 1: Inline Left-Border Accented Callout
- **Choice:** Nest a clean `div` with `border-l-2 border-gold/60` directly beneath the two philosophy paragraphs.
- **Rationale:** Preserves natural reading flow without interrupting the grid or clashing with the bottom stats row.

## Risks / Trade-offs

- **[Visual Redundancy with Stats]** The stats row also lists championships.
  → *Mitigation:* The subtle typography and specific organization text ("Kerala Kalaripayat Association — three years in a row") contextually anchors it as a foundational credential within his philosophy.
