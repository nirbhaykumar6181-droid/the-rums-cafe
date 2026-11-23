# Product requirements

## Customer-facing pages
- Home: brand-led cinematic introduction, clear navigation and calls to action.
- About: approved story, team and venue information.
- Menu: categories, descriptions, dietary/allergen information and prices only when supplied and approved.
- Gallery: responsive image experience using approved assets and alt text.
- Reservations: date, time, party size and contact details; server-confirmed availability; clear success/error states.
- Contact: verified address, hours, contact channels and map link.

## Reservation workflow
1. Validate all fields server-side.
2. Check date, opening hours, blocked periods, party size and seating capacity.
3. Create reservation atomically to prevent overlapping allocation.
4. Return a non-guessable booking reference.
5. Send confirmation only after successful persistence.
6. Support admin confirmation/cancellation and audit status changes.

## Admin
- Authenticated, role-protected dashboard.
- View/filter reservations and update statuses.
- Manage operating hours, closures and bookable slots.
- Manage tables/seating capacity.
- Manage menu, gallery and public business details.
- Basic booking metrics and audit history.

## Non-functional
Responsive, accessible, performant, SEO-ready after verified metadata, resilient error handling, spam controls, privacy-conscious data collection and reduced-motion support.
