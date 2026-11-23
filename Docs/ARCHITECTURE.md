# Architecture

## Application
- Next.js App Router is the web application and server boundary.
- React + TypeScript for typed UI and server components.
- Tailwind CSS for responsive styling.
- Framer Motion for carefully scoped motion.

## Backend
- Supabase PostgreSQL stores reservations, availability, settings, menu and gallery metadata.
- Supabase Auth handles admin identity. Authorization must be enforced server-side and with database RLS.
- Supabase Storage stores approved cafe imagery.
- Resend sends booking confirmation and operational emails from server-only code.

## Reservation integrity
Availability must be checked on the server. A final reservation write must be concurrency-safe at the database layer (transaction/constraint or a single database function), not only by a client-side availability check. Define booking states and time-zone handling before implementation. Never expose service-role credentials to browser code.

## Trust boundaries
- Public browser: anon Supabase key only; only explicitly public data.
- Server routes/actions: validate inputs, rate-limit, verify origin/session, and use least-privilege credentials.
- Admin: authenticated and role-authorized on every protected request.
- Secrets: environment variables only; never commit `.env.local`.

## Deployment
Preview deploys first, then production after cafe approval, migrations, smoke tests and domain authorization. The cafe should own its hosting, domain, database and billing accounts.
