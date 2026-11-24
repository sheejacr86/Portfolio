# Spec Delta

## Purpose

Enables visitors, dance companies, and corporate clients to submit booking requests and enquiries with instant validation and user feedback.

## ADDED Requirements

### Requirement: Contact channels display
The system SHALL display direct contact avenues including telephone numbers with click-to-call links, direct email, blog link, and a WhatsApp initiation link.

#### Scenario: Interacting with phone or WhatsApp
- **WHEN** the user clicks on a telephone or WhatsApp link
- **THEN** the system triggers the native dialer or redirects to the WhatsApp messaging interface

### Requirement: Enquiry form validation and submission
The system SHALL validate required enquiry fields (Name, Phone/Email) and submit the form payload to the backend endpoint.

#### Scenario: Valid form submission
- **WHEN** the user fills in valid details and clicks "Send enquiry"
- **THEN** the system posts the data to the enquiry endpoint and displays a success toast notification

#### Scenario: Submission failure
- **WHEN** the enquiry endpoint returns an error or fails to connect
- **THEN** the system displays a descriptive error toast advising the user to contact via WhatsApp or phone
