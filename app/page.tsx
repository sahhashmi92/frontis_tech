import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { Icon, type IconName } from "@/components/icons";
import { industries, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Frontis Tech | Operations & Technology Partner | Connections That Convert",
  },
  description:
    "Customer acquisition, back-office support, talent solutions, performance marketing, and software development: five service lines, one accountable US partner.",
};

const whyItems: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "network",
    title: "A full-service partner, not a single vendor",
    body: "Five service lines under one roof mean fewer hand-offs, fewer contracts, and one team accountable for outcomes.",
  },
  {
    icon: "globe",
    title: "US-based leadership, global delivery",
    body: "Client management and contracting stay in the US, while a global operations team keeps work moving around the clock.",
  },
  {
    icon: "shieldCheck",
    title: "Compliance-first operations",
    body: "TCPA-conscious calling practices, DNC list hygiene, and secure data handling are built into how campaigns run, not bolted on.",
  },
  {
    icon: "scale",
    title: "Scalable teams, transparent pricing",
    body: "Scale up for peak season or trim back when demand shifts, with pricing you can read at a glance.",
  },
];

/* Hero graphic: chip positions inside a 560x520 canvas */
const heroChips: {
  icon: IconName;
  label: string;
  x: number;
  y: number;
  delay: string;
}[] = [
  { icon: "acquisition", label: "Customer Acquisition", x: 16, y: 44, delay: "0s" },
  { icon: "backoffice", label: "Back-Office Support", x: 332, y: 76, delay: "1.1s" },
  { icon: "talent", label: "Talent Solutions", x: 0, y: 236, delay: "2.2s" },
  { icon: "marketing", label: "Performance Marketing", x: 348, y: 268, delay: "0.6s" },
  { icon: "software", label: "Digital Innovation", x: 152, y: 428, delay: "1.7s" },
];

function HeroGraphic() {
  return (
    <div
      className="relative hidden h-[520px] w-[560px] shrink-0 lg:block"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 560 520"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <path
          d="M118 88 C 190 130, 220 180, 268 224 M436 120 C 380 160, 340 190, 300 226 M100 264 C 160 264, 200 258, 236 254 M444 296 C 390 286, 350 278, 324 268 M244 432 C 258 390, 266 340, 274 296"
          stroke="var(--color-navy-200)"
          strokeWidth="1.6"
          strokeDasharray="1 7"
          strokeLinecap="round"
        />
        <circle cx="268" cy="224" r="3.5" fill="var(--color-orange)" />
        <circle cx="300" cy="226" r="3.5" fill="var(--color-orange)" />
        <circle cx="236" cy="254" r="3.5" fill="var(--color-orange)" />
        <circle cx="324" cy="268" r="3.5" fill="var(--color-orange)" />
        <circle cx="274" cy="296" r="3.5" fill="var(--color-orange)" />
      </svg>

      {/* Center brand tile */}
      <div className="absolute top-[194px] left-[224px] flex h-28 w-28 items-center justify-center rounded-[1.75rem] border border-line bg-white shadow-xl shadow-navy-900/10">
        <Image
          src="/brand/mark.png"
          alt=""
          width={310}
          height={256}
          className="h-13 w-auto"
        />
      </div>

      {heroChips.map((c) => (
        <div
          key={c.label}
          className="animate-float absolute flex items-center gap-2.5 rounded-full border border-line bg-white py-2.5 pr-5 pl-3 shadow-md shadow-navy-900/6"
          style={{ left: c.x, top: c.y, animationDelay: c.delay }}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-50 text-navy">
            <Icon name={c.icon} className="h-4 w-4" />
          </span>
          <span className="text-sm font-semibold whitespace-nowrap text-navy">
            {c.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: site.shortName,
            legalName: site.name,
            url: site.url,
            logo: `${site.url}/brand/logo-stacked.png`,
            email: site.email,
            slogan: site.tagline,
            areaServed: "US",
          }),
        }}
      />

      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="bg-dots absolute inset-0" aria-hidden="true" />
        <div
          className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-surface/80 via-transparent to-transparent"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
          <div className="max-w-xl">
            <p className="mb-4 flex items-center gap-2.5 text-[0.8125rem] font-semibold tracking-[0.16em] text-navy-500 uppercase">
              <span className="h-2 w-2 shrink-0 rounded-full bg-orange" aria-hidden="true" />
              {site.tagline}
            </p>
            <h1 className="text-[2.6rem] leading-[1.08] font-semibold tracking-tight text-balance text-navy sm:text-5xl lg:text-[3.4rem]">
              The operations and technology partner behind growing businesses
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              Customer acquisition, back-office support, talent, marketing, and
              software. Five service lines, one accountable team.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="/contact" size="lg" withArrow>
                Talk to Us
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Our Services
              </Button>
            </div>
          </div>
          <HeroGraphic />
        </div>
      </section>

      {/* ---------- Services overview strip ---------- */}
      <section
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24"
        aria-labelledby="services-heading"
      >
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title={<span id="services-heading">Five service lines. One partner.</span>}
            lede="Start with the service you need today and add the rest as you grow."
          />
        </Reveal>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={i * 70}>
              <Link
                href={`/services/${s.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy-200 hover:shadow-lg hover:shadow-navy-900/6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-white">
                  <Icon name={s.icon} className="h-5.5 w-5.5" />
                </span>
                <h3 className="mt-5 text-[1.0625rem] leading-snug font-semibold text-navy">
                  {s.short}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.blurb}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-500 transition-colors group-hover:text-orange-600">
                  Learn more
                  <Icon
                    name="arrowRight"
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ---------- Why Frontis Tech ---------- */}
      <section className="border-y border-line bg-surface" aria-labelledby="why-heading">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="Why Frontis Tech"
                title={
                  <span id="why-heading">
                    Built to be the last vendor conversation you need
                  </span>
                }
                lede="Most businesses don’t need another vendor. They need one partner who can run the work end to end and answer for the results."
              />
              <div className="mt-8">
                <Button href="/about" variant="secondary" withArrow>
                  About Frontis Tech
                </Button>
              </div>
            </div>
          </Reveal>
          <ul className="grid gap-5 sm:grid-cols-2">
            {whyItems.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-line bg-white p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy">
                    <Icon name={item.icon} className="h-5.5 w-5.5" />
                  </span>
                  <h3 className="mt-5 leading-snug font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Industries strip ---------- */}
      <section
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24"
        aria-labelledby="industries-heading"
      >
        <Reveal>
          <SectionHeading
            eyebrow="Industries we serve"
            title={<span id="industries-heading">Deep experience where it matters most</span>}
            align="center"
          />
        </Reveal>
        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((ind, i) => (
            <Reveal as="li" key={ind.id} delay={i * 60}>
              <Link
                href={`/industries#${ind.id}`}
                className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-line bg-white px-4 py-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-navy-200 hover:shadow-lg hover:shadow-navy-900/6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-50 text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-white">
                  <Icon name={ind.icon} className="h-6 w-6" />
                </span>
                <span>
                  <span className="block font-semibold text-navy">{ind.name}</span>
                  <span className="mt-0.5 block text-[0.8125rem] text-muted">
                    {ind.subtitle}
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ---------- Compliance / trust strip ---------- */}
      <section
        className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-24"
        aria-label="Compliance commitment"
      >
        <Reveal>
          <div className="flex flex-col items-start gap-5 rounded-2xl border border-line bg-white p-7 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy">
                <Icon name="shieldCheck" className="h-5.5 w-5.5" />
              </span>
              <p className="max-w-2xl leading-relaxed text-ink">
                TCPA-conscious calling practices, DNC scrubbing, and secure,
                access-controlled data handling.{" "}
                <span className="text-muted">
                  Compliance isn’t a checkbox here. It’s how we operate.
                </span>
              </p>
            </div>
            <Link
              href="/compliance"
              className="inline-flex shrink-0 items-center gap-1.5 font-semibold whitespace-nowrap text-navy-500 transition-colors hover:text-navy"
            >
              Compliance &amp; Security
              <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ---------- Closing CTA ---------- */}
      <CtaBand
        heading="Fewer vendors. Cleaner accountability. Better outcomes."
        copy="Tell us where you want to grow, and we’ll bring the team, the process, and the reporting to get you there."
        ctaLabel="Talk to Us"
      />
    </>
  );
}
