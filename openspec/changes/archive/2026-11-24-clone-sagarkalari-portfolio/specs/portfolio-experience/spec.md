# Spec Delta

## Purpose

Provides an immersive, responsive digital showcase presenting Dil Sagar's Kalaripayattu and contemporary dance repertoire, biography, media, and training offerings.

## ADDED Requirements

### Requirement: Preloader presentation
The system SHALL present a preloader animation with Malayalam script and a numeric counter that counts to 100 before smoothly revealing the site content.

#### Scenario: Site load completes
- **WHEN** the user visits the home page
- **THEN** the preloader displays the counter from 0 to 100 and transitions out to reveal the main portfolio

### Requirement: Hero banner display
The system SHALL present the hero section displaying artist headlines, masked typography, cultural watermark, background photography, and primary call-to-action buttons.

#### Scenario: Viewing hero section
- **WHEN** the hero section enters the viewport
- **THEN** the headline "DIL SAGAR" renders with dual styling and the CTA buttons scroll to relevant sections on click

### Requirement: Infinite practice marquee
The system SHALL display an infinite horizontal ticker showcasing core disciplines with alternating styling and pause-on-hover interaction.

#### Scenario: Hovering marquee
- **WHEN** the user hovers over the moving marquee banner
- **THEN** the horizontal scroll animation pauses until the cursor leaves

### Requirement: Selected works accordion
The system SHALL display an interactive accordion of Dil Sagar's productions that expands to show performance details, venues, and archival imagery.

#### Scenario: Expanding a production row
- **WHEN** the user clicks on a production item row
- **THEN** the row expands smoothly to reveal the notes, venues, and production photograph

### Requirement: Archival video embed showcase
The system SHALL provide responsive video iframes displaying selected stage and film choreography sequences.

#### Scenario: Viewing choreography videos
- **WHEN** the user scrolls to the "In motion" section
- **THEN** the video players render embedded clips with titles and release years

### Requirement: Performance photo gallery
The system SHALL display a responsive multi-column masonry gallery with image hover effects and archival performance captions.

#### Scenario: Hovering a gallery photo
- **WHEN** the user moves the mouse over a gallery photograph
- **THEN** the image transitions to full color, scales slightly, and slides in the performance caption
