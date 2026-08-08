# Frontis Tech — frontistech.com

Marketing website for **Frontis Tech LLC** · _Connections That Convert_

Built with Next.js (App Router) + Tailwind CSS v4, Poppins via `next/font`.
All 11 launch pages are fully static — no server runtime needed.

## Commands

```bash
npm install       # install dependencies
npm run dev       # local development → http://localhost:3000
npm run build     # production build (all routes prerendered static)
npm run start     # serve the production build
npx eslint app components lib   # lint
```

## Structure

| Path | What it is |
| --- | --- |
| `app/` | One folder per page (11 launch pages + 404, sitemap, robots) |
| `components/` | Header (dropdown + mobile menu), Footer, CtaBand, PageHero, Reveal, icons, blocks |
| `lib/site.ts` | **Single source of truth**: company info, email, service + industry data, form endpoint |
| `public/brand/` | Web-optimized logo exports (trimmed from `/Images` originals) |
| `scripts/process-assets.mjs` | Regenerates `public/brand` + favicons from the original logo files |

## Contact form backend (already connected)

Submissions post to a Google Apps Script web app bound to the
**"Frontis Tech Website Leads"** Google Sheet. Each submission appends a row to
the "Leads" tab and sends an email alert to the recipient configured as
`NOTIFY_EMAIL` in the script. The script source is versioned at
`scripts/google-apps-script-form.gs`; the live copy is managed from the sheet
via Extensions > Apps Script (project "Frontis Tech Form Backend").

- Change the alert recipient: edit `NOTIFY_EMAIL` in the Apps Script and
  Deploy > Manage deployments > edit > New version.
- Switch backends (e.g. Formspree): set `NEXT_PUBLIC_FORM_ENDPOINT` in Vercel;
  it overrides the built-in default in `lib/site.ts`.

## Deployment (per brief)

1. Push this folder to a Git repo → import into Vercel (defaults are fine).
2. Point `frontistech.com` at Vercel; manage DNS (and email MX) in Cloudflare.
   SSL is automatic on Vercel.
3. Verify the site in Google Search Console **before launch** and submit
   `https://frontistech.com/sitemap.xml` on launch day.

## Content placeholders awaiting real data

- **Phone number** — brief says a US (Texas area code) number is coming; add it in `components/Footer.tsx` and `app/contact/page.tsx` when available.
- **Mailing address** — add once the virtual office is established.
- **ISO 27001 / SOC 2** — listed as "in progress" on the Compliance page. Update only when certified.
- **Phase 2 pages** (Case Studies, Careers, Blog) — intentionally not built; add them when real content exists.

## SEO already in place

Unique title/description per page · one H1 per page · alt text on all images ·
Organization schema (home) · Service schema (each service page) ·
`sitemap.xml` + `robots.txt` · OG image (`public/brand/og.png`).
