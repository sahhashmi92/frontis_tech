# Brief Verification Checklist

Every requirement from `Frontis-Tech-Website-Brief.docx`, checked against the
built site. Status: ✅ implemented and verified · 📋 needs client input · ⏳ launch-day action.

## 1. Brand reference

| Requirement | Status | Where / evidence |
| --- | --- | --- |
| Company name "Frontis Tech LLC" | ✅ | Footer, schema, copyright |
| Tagline "Connections That Convert" | ✅ | Hero eyebrow, footer, home title, OG alt |
| Domain frontistech.com | ✅ | `lib/site.ts`, sitemap, robots, schema |
| Primary color Deep Blue #0f2660 | ✅ | `--color-navy` token, used site-wide |
| Secondary color Salmon #ff751f | ✅ | `--color-orange` token, CTAs + accents |
| Supporting #FFFFFF / #F5F7FA / #1E293B | ✅ | Backgrounds, `--color-surface`, `--color-ink` |
| Bold geometric sans headings (Montserrat/Poppins/Inter) | ✅ | Poppins 600/700 via next/font |
| Body same family, min 16px | ✅ | Poppins 400, body copy 16px+ (small print is secondary labels only) |
| NOT positioned as call center / BPO | ✅ | Grep-verified: zero occurrences of "BPO", "call center" |
| Full-service operations & technology partner on every page | ✅ | Hero, footer blurb, About, service pages |
| No jargon/buzzwords ("synergy", "cutting-edge", "passionate") | ✅ | Grep-verified: zero occurrences |
| No mention of Pakistan / offshore | ✅ | Grep-verified: zero occurrences; "global delivery" framed as advantage |

## 2. Sitemap & navigation

| Requirement | Status |
| --- | --- |
| 11 launch pages (Home, About, Hub, 5 services, Industries, Compliance, Contact) | ✅ all return 200, statically prerendered |
| Phase 2 pages NOT built (Case Studies, Careers, Blog) | ✅ intentionally absent |
| Nav order: Home, About, Services (dropdown), Industries, Compliance, Contact | ✅ one row, no clutter |
| Services dropdown reveals all five service pages | ✅ + "View all services" link |
| Contact as salmon CTA button | ✅ |

## 3. Page-by-page

### Home
- ✅ Hero: multi-service partner headline, tagline, support sentence (14 words ≤ 20), "Talk to Us" (salmon) + "Our Services" (outlined deep blue)
- ✅ Services strip: 5 equal cards, deep-blue line-art icons, 2-word titles, ≤15-word descriptions (8–11 words each), Learn More links
- ✅ Why Frontis Tech: the 4 suggested value props, no "passionate" phrasing
- ✅ Industries strip: 5 visual tiles (Health Insurance, Solar, Home Services, Auto Insurance, General SMB) linking to Industries anchors
- ✅ Compliance/trust strip: narrow band, 2 lines, TCPA + data security, no certification claims
- ✅ Closing CTA: deep-blue band, white headline, salmon button, 22-word copy (≤30)

### About
- ✅ Our Story: 3 short paragraphs, problem→solution, not a memoir
- ✅ How We Work: US client management + global operations framed as advantage, no apologies
- 📋 Leadership: bio written per brief (IT + operations background, engineering foundation, founder-operator); **name/photo pending client**
- ✅ Values: Transparency, Compliance, Accountability, Partnership (numbered editorial list)
- ✅ CTA: "See how we work, or just reach out"

### Services Hub
- ✅ Intro 27 words (≤50), fewer-vendors framing
- ✅ 5 cards with 2–3 sentence descriptions matching the brief's five card specs, Learn More links

### Customer Acquisition & Contact Center Operations
- ✅ Hero leads with outcome ("Turn prospects into customers at scale"), "call center" never the first word
- ✅ What We Do: all 10 items (live transfers with real-time handoff note, outbound, inbound, appointments, retention, sales ops, multilingual, QA, reporting, campaign management)
- ✅ Industry use cases: Health Insurance (ACA/Medicare), Solar, Home Services, Auto Insurance, General Sales Ops
- ✅ Compliance callout as a feature: TCPA-conscious dialing, DNC scrubbing, recording/retention, QA monitoring, CMS-aware scripting; "built for regulated industries" tone
- ✅ How It Works: the 4 steps from the brief
- ✅ Who It's For + link back to Industries
- ✅ CTA: "Talk to our team about your calling requirements"

### Back-Office Support
- ✅ Hero "Your operations, handled", does not lead with data entry
- ✅ All 8 What-We-Do bullets · ✅ business case (overhead, senior staff, peaks) · ✅ 4 audiences incl. non-PHI healthcare wording · ✅ CTA per brief

### Talent Solutions
- ✅ Hero "Your next hire, already vetted", not-freelancers positioning
- ✅ 7 technical + 7 non-technical roles (exact brief lists) · ✅ Hourly vs Monthly/Dedicated explained in 2–3 sentences each · ✅ 4-step process · ✅ 4 why-points (vetting, backup, account management, transparent pricing) · ✅ CTA per brief

### Performance Marketing
- ✅ Hero "Demand generated. Pipeline filled. Results measured."
- ✅ All 9 What-We-Do items · ✅ Integration advantage + cross-link to Customer Acquisition · ✅ 3 who-it's-for bullets
- ✅ **Zero software/web/app development references** (grep-verified)

### Digital Innovation & Software Development
- ✅ Hero "Ideas become working software", no "digital transformation"
- ✅ 4 capability groups with the brief's exact item lists · ✅ Discovery→Design→Build→Launch→Support process
- ✅ **Zero marketing/SEO/Google Ads references** (grep-verified) + "Looking for marketing services?" cross-link · ✅ CTA per brief

### Industries We Serve
- ✅ Intro 23 words (≤40), regulated + non-regulated framing
- ✅ Blocks with pain point → mapped services (linked): Health Insurance ACA/Medicare, Solar, Home Services, Auto Insurance, General SMB & Mid-Market
- ✅ Closing line "Don't see your industry? Most of what we do translates." + contact link

### Compliance & Security
- ✅ Intro: "Compliance is not a feature. It is how we operate"
- ✅ TCPA: DNC scrubbing explained (what + why), consent verification, recording & retention, agent training incl. CMS-aware scripting — confident and specific
- ✅ Data security: handling & access controls, confidentiality, secure systems & restricted access
- ✅ ISO 27001 / SOC 2 stated only as **in progress** — no overclaimed certifications anywhere

### Contact
- ✅ Intro: "Tell us what you need" + one-business-day line, no long paragraphs
- ✅ Form fields: Full Name, Company, Email, Phone (optional), Service dropdown (5 services + "Not sure / General inquiry"), Message
- ✅ Response commitment below form
- 📋 US phone number (Texas area code): pending client
- 📋 Mailing address: pending virtual office
- ✅ Business email contact@frontistech.com shown

## 4. Technical & design notes

| Requirement | Status |
| --- | --- |
| Mobile-first, tested at 375px | ✅ automated overflow check on all 11 pages at 375px and 768px: none |
| CTA buttons ≥44px on mobile | ✅ h-11 (44px) / h-12 (48px) |
| PageSpeed 85+/95+ targets | ✅ architecture supports it: fully static pages, 924KB total static assets, self-hosted font, no third-party scripts (⏳ measure on live URL after deploy) |
| Images compressed / WebP | ✅ next/image serves WebP/AVIF automatically; sources pre-trimmed |
| Lazy-load below the fold | ✅ next/image default; header logo is priority-loaded |
| Consistent CTA block on every service page | ✅ one shared `CtaBand` component; only heading/label vary |
| Footer: name, tagline, quick links, contact, legal line, copyright | ✅ "Frontis Tech LLC · Registered in Texas, USA" |
| No stock-photo clichés (headsets, handshakes, globes) | ✅ no photography at all; geometric brand graphics + line icons |
| Icons: line-art, Deep Blue, consistent weight | ✅ custom 24px set, single 1.8 stroke |
| Unique meta title + description per page | ✅ verified on all 11 pages |
| One H1 per page | ✅ verified on all 11 pages |
| Alt text on every image | ✅ verified (decorative images correctly empty-alt) |
| Organization schema (home), Service schema (services) | ✅ JSON-LD verified in rendered HTML |
| sitemap.xml + robots.txt | ✅ 11 URLs, correct sitemap reference |
| Google Search Console verification | ⏳ client action before launch (README) |
| Vercel hosting + SSL | ⏳ deploy-ready; documented in README |
| Cloudflare DNS + email MX | ⏳ client action; documented in README |
| Form backend (Formspree/Resend) | 📋 one env var: `NEXT_PUBLIC_FORM_ENDPOINT` (graceful fallback until then) |
| Auto-reply confirmation email | 📋 enable in Formspree settings (README) |

## 5. Open items for the client

1. **Florida vs Texas**: brief header says Florida, footer spec says Texas. Site follows the explicit footer instruction ("Registered in Texas, USA") — confirm.
2. Phone number and mailing address (Managing Director name and photo added 2026-08-08).
3. Formspree form ID + auto-reply.
4. Deploy to Vercel, DNS via Cloudflare, Search Console verification + sitemap submission on launch day.
