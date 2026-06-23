# Project Specs — Omnigrid Digital

## What the app does & who uses it
Single-page marketing website for Omnigrid Digital, a Toronto-based digital marketing agency. Prospective local-business clients visit the site to learn about services, view case studies, meet the team, explore pricing, and submit a contact/audit request.

## Tech stack
- **Framework:** Next.js 15 (App Router) with TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion + GSAP (ScrollTrigger)
- **3D:** Three.js via @splinetool/react-spline (Globe component in contact section)
- **UI primitives:** shadcn/ui (Button, Card, Badge, Separator)
- **Email:** Nodemailer (contact form API route)
- **Font:** Plus Jakarta Sans (Google Fonts)
- **Hosting:** TBD (likely Vercel)

## Pages & user flows
All public, no authentication.

| Route | Description |
|-------|-------------|
| `/` | Single-page site with anchor-linked sections |

### Page sections (in order)
1. **Nav** — fixed top bar with section links + "Get a Free Audit" CTA
2. **Hero** — headline, subtext, two CTAs, trust names
3. **Services** — Web Design, Paid Ads, Video Production cards
4. **Why Us** — sticky left text + scrolling right list of differentiators
5. **Work** — portfolio cards with stat callouts (GSAP scroll animation)
6. **Team** — 5-member grid with avatar placeholders
7. **Pricing** — Foundation / Catalyst / Venture plans
8. **Contact** — full-bleed Globe background + ContactForm
9. **Footer** — links, copyright, support email

## Data models
No database. All content is static, hardcoded in `app/page.tsx`.

Contact form submissions are sent via `app/api/contact/route.ts` using Nodemailer — email is delivered directly, nothing stored.

## Third-party services
- **Nodemailer** — transactional email for contact form
- **Google Fonts** — Plus Jakarta Sans via Next.js font loader
- **Spline** — 3D globe scene in contact section

## Environment variables needed
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` (or equivalent) for Nodemailer
