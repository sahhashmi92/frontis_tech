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

## Connect the contact form (one step)

The form posts to a Formspree-compatible endpoint. Until connected, it shows a
graceful "email us directly" message instead of failing silently.

1. Create a form at [formspree.io](https://formspree.io) (point it at contact@frontistech.com — enable the auto-reply email in Formspree settings, per the brief).
2. In Vercel → Project → Settings → Environment Variables add:
   `NEXT_PUBLIC_FORM_ENDPOINT = https://formspree.io/f/<your-form-id>`
3. Redeploy.

## Deployment (per brief)

1. Push this folder to a Git repo → import into Vercel (defaults are fine).
2. Point `frontistech.com` at Vercel; manage DNS (and email MX) in Cloudflare.
   SSL is automatic on Vercel.
3. Verify the site in Google Search Console **before launch** and submit
   `https://frontistech.com/sitemap.xml` on launch day.

## Content placeholders awaiting real data

- **Phone number** — brief says a US (Texas area code) number is coming; add it in `components/Footer.tsx` and `app/contact/page.tsx` when available.
- **Mailing address** — add once the virtual office is established.
- **Managing Director name/photo** — the About page bio is intentionally unnamed; drop the name in `app/about/page.tsx` when approved.
- **ISO 27001 / SOC 2** — listed as "in progress" on the Compliance page. Update only when certified.
- **Phase 2 pages** (Case Studies, Careers, Blog) — intentionally not built; add them when real content exists.

## SEO already in place

Unique title/description per page · one H1 per page · alt text on all images ·
Organization schema (home) · Service schema (each service page) ·
`sitemap.xml` + `robots.txt` · OG image (`public/brand/og.png`).
