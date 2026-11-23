# Portfolio Experience Specification

## Purpose

Provides an immersive, responsive digital showcase presenting Dil Sagar's Kalaripayattu and contemporary dance repertoire, biography, media, and training offerings.

## Requirements

### Requirement: Preloader presentation
The system SHALL present a preloader animation with Malayalam script and a numeric counter that counts to 100 before smoothly revealing the site content.

#### Scenario: Site load completes
- **WHEN** the user visits the home page
- **THEN** the preloader displays the counter from 0 to 100 and transitions out to reveal the main portfolio

### Requirement: Hero banner display
The system SHALL present the hero section displaying artist headlines, profession subtitle ("Kalaripayattu Artist · Movement Practitioner · Choreographer"), artistic description, masked typography, cultural watermark, background photography, and primary call-to-action buttons ("Explore My Journey" and "Discover My Works").

#### Scenario: Viewing hero section
- **WHEN** the hero section enters the viewport
- **THEN** the headline "DIL SAGAR" renders with dual styling, the profession subtitle and philosophy copy are visible, and clicking "Explore My Journey" or "Discover My Works" scrolls smoothly to the Journey or Works section

### Requirement: Infinite practice marquee
The system SHALL display an infinite horizontal ticker showcasing core disciplines with alternating styling and pause-on-hover interaction.

#### Scenario: Hovering marquee
- **WHEN** the user hovers over the moving marquee banner
- **THEN** the horizontal scroll animation pauses until the cursor leaves

### Requirement: Selected works accordion
The system SHALL display an interactive accordion of Dil Sagar's productions—including stage productions (*Ashank*, *Yudhakandam*, *Sougandhya Parvam*, *Purushartha*, *Transavatar*, *Nagaranthara*) and film/commercial choreography (*Chandra*, *Olipporu*, *Vegam*, *Kalliyath TMT*)—that expands to show performance details, venues, and archival imagery.

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

### Requirement: About practice and philosophy presentation
The system SHALL present Dil Sagar MB's biographical background, five movement practice areas (Kalaripayattu, Contemporary Dance, Choreography, Teaching & Training, Movement Research), artistic philosophy on curiosity and discipline, and the 3× State Champion accolade within the Artistic Philosophy block.

#### Scenario: Viewing the About section
- **WHEN** the user navigates to the About section
- **THEN** the section displays the heading "Movement is my language. Kalari is my foundation.", the biographical narrative, practice pillars, and philosophy

#### Scenario: Viewing the Artistic Philosophy section
- **WHEN** the user views the Artistic Philosophy section on the About page
- **THEN** the section displays the philosophy narrative alongside the accolade "3× State Champion — Kerala Kalaripayat Association — three years in a row" styled with a gold accent border

### Requirement: Comprehensive journey chronology
The system SHALL present Dil Sagar's milestone timeline spanning 1983 through 2025 and continuing practice today with dates, titles, and descriptive summaries.

#### Scenario: Scrolling through journey timeline
- **WHEN** the user views the Journey section
- **THEN** the timeline renders chronological milestones from 1983 Vallabhatta Kalari Sangam roots up to 2025 Kilkari Bihar and today

### Requirement: Classes and training offerings
The system SHALL present structured training format cards for Kalaripayattu, Kalari for Dancers & Performers, and Contemporary Movement, alongside corporate workshop options and booking audiences.

#### Scenario: Browsing class formats
- **WHEN** the user views the Classes & Workshops section
- **THEN** the three core format cards render with structured curriculum points, corporate workshop descriptions, and target audience tags

### Requirement: Direct contact and enquiry channel
The system SHALL display Dil Sagar's verified contact details (phone, email, Kerala location, blog) and an enquiry submission form with "Send Message" action.

#### Scenario: Submitting contact enquiry
- **WHEN** the user fills out the contact form with their details and message
- **THEN** the submit button reads "Send Message" and submits the enquiry
