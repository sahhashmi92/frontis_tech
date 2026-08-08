import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceSchema from "@/components/ServiceSchema";
import { AudienceList, CheckList, Section } from "@/components/blocks";
import { Icon, type IconName } from "@/components/icons";

export const metadata: Metadata = {
  title: "Back-Office Support",
  description:
    "Data processing, CRM management, virtual assistance, scheduling, and document management: the operational backbone that keeps your business running.",
};

const whatWeDo = [
  { title: "Data entry & processing" },
  { title: "CRM management & data hygiene" },
  { title: "Email & calendar management" },
  { title: "Document processing & management" },
  { title: "Bookkeeping support" },
  { title: "Scheduling & coordination" },
  { title: "Virtual assistant services" },
  { title: "Order & claims processing support" },
];

const businessCase: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "dollar",
    title: "Reduce overhead",
    body: "Administrative capacity without the cost of permanent in-house headcount.",
  },
  {
    icon: "target",
    title: "Free your senior people",
    body: "Move routine work off your team’s desks so they can focus on strategic priorities.",
  },
  {
    icon: "scale",
    title: "Scale through peaks",
    body: "Absorb seasonal surges and campaign spikes without hiring and layoff cycles.",
  },
];

export default function BackOfficePage() {
  return (
    <>
      <ServiceSchema
        name="Back-Office Support"
        description="Data processing, CRM management, virtual assistance, scheduling, document management, and administrative support."
        slug="back-office-support"
      />

      <PageHero
        eyebrow="Back-Office Support"
        title="Your operations, handled"
        lede="The administrative backbone of a well-run business: data, documents, scheduling, and CRM work executed reliably in the background, so your in-house team stays focused on what grows the company."
      />

      <Section aria-labelledby="what-we-do">
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title={<span id="what-we-do">The work that keeps a business running</span>}
          />
        </Reveal>
        <Reveal delay={100}>
          <CheckList items={whatWeDo} className="mt-10 max-w-4xl" />
        </Reveal>
      </Section>

      <Section tint aria-labelledby="business-case">
        <Reveal>
          <SectionHeading
            eyebrow="Why outsource it"
            title={<span id="business-case">A straightforward business case</span>}
            lede="Companies hand us their back-office work for three reasons, and all three show up on the P&L."
          />
        </Reveal>
        <ul className="mt-10 grid gap-5 lg:grid-cols-3">
          {businessCase.map((b, i) => (
            <Reveal as="li" key={b.title} delay={i * 70}>
              <div className="h-full rounded-2xl border border-line bg-white p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy">
                  <Icon name={b.icon} className="h-5.5 w-5.5" />
                </span>
                <h3 className="mt-4 font-semibold text-navy">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section aria-labelledby="who-for">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Who it’s for"
              title={<span id="who-for">Teams with more operational work than operational hands</span>}
            />
          </Reveal>
          <Reveal delay={100}>
            <AudienceList
              items={[
                "SMBs that need operational bandwidth without new headcount",
                "Healthcare-adjacent businesses with non-PHI administrative workloads",
                "E-commerce operations managing orders, data, and coordination at volume",
                "Professional services firms buried in scheduling and document work",
              ]}
            />
          </Reveal>
        </div>
      </Section>

      <CtaBand
        heading="Take operational work off your plate"
        copy="Tell us which tasks eat your team’s week, and we’ll show you how to hand them off without losing control or visibility."
        ctaLabel="Talk to Us"
      />
    </>
  );
}
