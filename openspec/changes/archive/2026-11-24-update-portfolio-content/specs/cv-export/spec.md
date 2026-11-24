# Spec Delta: CV Export

## MODIFIED Requirements

### Requirement: Vector CV generation and download
The system SHALL generate an A4 formatted PDF document in memory using vector drawing primitives reflecting Dil Sagar MB's full professional biography, credentials, productions, and timeline through 2025, and trigger browser file download.

#### Scenario: User clicks Download CV
- **WHEN** the user clicks the "Download CV (PDF)" button in the Selected Works section
- **THEN** the system generates `dil-sagar-cv.pdf` with updated credentials, chronology up to 2025, productions list, and contact details, and prompts the file save dialog
