# CV Export Specification

## Purpose

Generates and downloads a clean, printable vector PDF curriculum vitae summarizing Dil Sagar's career, training, championships, and choreographic works.

## Requirements

### Requirement: Vector CV generation and download
The system SHALL generate an A4 formatted PDF document in memory using vector drawing primitives and trigger browser file download.

#### Scenario: User clicks Download CV
- **WHEN** the user clicks the "Download CV (PDF)" button in the Selected Works section
- **THEN** the system generates `dil-sagar-cv.pdf` with formatted headers, chronology, and contact information and prompts the file save dialog
