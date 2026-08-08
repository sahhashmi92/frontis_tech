import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceSchema from "@/components/ServiceSchema";
import { AudienceList, CheckList, ProcessSteps, Section } from "@/components/blocks";
import { Icon, type IconName } from "@/components/icons";

export const metadata: Metadata = {
  title: "Customer Acquisition & Contact Center Operations",
  description:
    "Scalable, compliant customer acquisition: live transfers, outbound prospecting, inbound support, and appointment setting, built for regulated industries.",
};

const whatWeDo = [
  {
    title: "Live transfer services",
    note: "Real-time hand-off of qualified prospects to your licensed agents or sales team.",
  },
  { title: "Outbound prospecting & lead qualification" },
  { title: "Inbound customer support" },
  { title: "Appointment setting" },
  { title: "Retention campaigns" },
  { title: "Sales operations support" },
  { title: "Multilingual support" },
  { title: "Quality assurance & agent monitoring" },
  { title: "Reporting & analytics" },
  { title: "End-to-end campaign management" },
];

const useCases: { icon: IconName; vertical: string; body: string }[] = [
  {
    icon: "health",
    vertical: "Health Insurance",
    body: "ACA and Medicare live transfers, delivered with CMS-aware scripting and enrollment-period discipline.",
  },
  {
    icon: "solar",
    vertical: "Solar",
    body: "Appointment setting and lead qualification that keep installers’ calendars full of real opportunities.",
  },
  {
    icon: "home",
    vertical: "Home Services",
    body: "Inbound and outbound campaigns tuned to seasonal demand and local markets.",
  },
  {
    icon: "auto",
    vertical: "Auto Insurance",
    body: "Lead qualification and warm transfer to licensed agents while intent is high.",
  },
  {
    icon: "briefcase",
    vertical: "General Sales Operations",
    body: "Outbound and inbound programs for any sales team that needs consistent, measured pipeline activity.",
  },
];

const complianceItems: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "shieldCheck",
    title: "TCPA-conscious dialing",
    body: "Dialing practices designed around TCPA requirements from day one.",
  },
  {
    icon: "clipboardCheck",
    title: "DNC scrubbing & list hygiene",
    body: "Lists scrubbed against Do-Not-Call registries before a single dial is made.",
  },
  {
    icon: "mic",
    title: "Call recording & retention",
    body: "Calls recorded and retained so every conversation can be reviewed and verified.",
  },
  {
    icon: "eye",
    title: "QA & agent monitoring",
    body: "Dedicated quality assurance with live monitoring and scored evaluations.",
  },
  {
    icon: "bookOpen",
    title: "CMS-aware scripting",
    body: "Healthcare campaign scripts built with CMS marketing guidelines in view.",
  },
];

const steps = [
  {
    title: "Define requirements",
    body: "We document your target profile, offer, volumes, and compliance requirements together.",
  },
  {
    title: "Build & train your team",
    body: "A dedicated team is assembled, scripted, and trained specifically on your campaign.",
  },
  {
    title: "Launch with QA active",
    body: "Campaigns go live with reporting and quality assurance running from day one, not added later.",
  },
  {
    title: "Optimize on data",
    body: "Ongoing tuning of lists, scripts, and staffing based on real performance data.",
  },
];

export default function CustomerAcquisitionPage() {
  return (
    <>
      <ServiceSchema
        name="Customer Acquisition & Contact Center Operations"
        description="Outbound and inbound calling, live transfers, lead qualification, appointment setting, retention, and compliance-first campaign management."
        slug="customer-acquisition"
      />

      <PageHero
        eyebrow="Customer Acquisition & Contact Center Operations"
        title="Turn prospects into customers at scale"
        lede="Scalable, compliant, performance-focused customer acquisition: outbound, inbound, and live transfers, run by dedicated teams with QA and reporting active from the first call."
      />

      <Section aria-labelledby="what-we-do">
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title={<span id="what-we-do">Everything between a raw list and a closed customer</span>}
          />
        </Reveal>
        <Reveal delay={100}>
          <CheckList items={whatWeDo} className="mt-10 max-w-4xl" />
        </Reveal>
      </Section>

      <Section tint aria-labelledby="use-cases">
        <Reveal>
          <SectionHeading
            eyebrow="Industry use cases"
            title={<span id="use-cases">Built for the verticals we know best</span>}
          />
        </Reveal>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((u, i) => (
            <Reveal as="li" key={u.vertical} delay={i * 60}>
              <div className="h-full rounded-2xl border border-line bg-white p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy">
                  <Icon name={u.icon} className="h-5.5 w-5.5" />
                </span>
                <h3 className="mt-4 font-semibold text-navy">{u.vertical}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{u.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* Compliance callout, treated as a feature */}
      <Section aria-labelledby="compliance-callout">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] bg-navy px-6 py-12 sm:px-12 sm:py-14">
            <SectionHeading
              dark
              eyebrow="Compliance, engineered in"
              title={<span id="compliance-callout">Built for regulated industries</span>}
              lede="Calling campaigns in insurance and healthcare live or die on compliance. Ours is structural, engineered into dialing, scripting, and staffing rather than promised after the fact."
            />
            <ul className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
              {complianceItems.map((c) => (
                <li key={c.title} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-orange-400">
                    <Icon name={c.icon} className="h-5 w-5" />
                  </span>
                  <span>
                    <h3 className="font-semibold text-white">{c.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-navy-100">{c.body}</p>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-10">
              <Link
                href="/compliance"
                className="inline-flex items-center gap-1.5 font-semibold text-orange-400 transition-colors hover:text-orange-200"
              >
                Read our full compliance &amp; security commitments
                <Icon name="arrowRight" className="h-4 w-4" />
              </Link>
            </p>
          </div>
        </Reveal>
      </Section>

      <Section tint aria-labelledby="how-it-works">
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title={<span id="how-it-works">From requirements to live campaign</span>}
          />
        </Reveal>
        <div className="mt-10">
          <ProcessSteps steps={steps} />
        </div>
      </Section>

      <Section aria-labelledby="who-for">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Who it’s for"
              title={<span id="who-for">Teams that sell by phone and answer to regulators</span>}
              lede={
                <>
                  If your growth depends on qualified conversations, this service was
                  built for you. See how it maps to your sector on our{" "}
                  <Link href="/industries" className="font-medium text-navy-500 underline underline-offset-4 hover:text-navy">
                    Industries page
                  </Link>
                  .
                </>
              }
            />
          </Reveal>
          <Reveal delay={100}>
            <AudienceList
              items={[
                "Health insurance agencies running ACA or Medicare campaigns",
                "Solar companies that need set appointments, not raw leads",
                "Home service businesses managing seasonal call volume",
                "Auto insurance agencies qualifying and transferring shoppers",
                "Sales teams that want consistent, measured outbound activity",
              ]}
            />
          </Reveal>
        </div>
      </Section>

      <CtaBand
        heading="Talk to our team about your calling requirements"
        copy="Tell us your vertical, volumes, and targets, and we’ll come back with a straight answer on how we’d structure the campaign."
        ctaLabel="Talk to Us"
      />
    </>
  );
}
