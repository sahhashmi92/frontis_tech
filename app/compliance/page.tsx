import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { Section } from "@/components/blocks";
import { Icon, type IconName } from "@/components/icons";

export const metadata: Metadata = {
  title: "Compliance & Security",
  description:
    "TCPA-conscious dialing, DNC scrubbing, consent verification, call recording, and secure data handling: how Frontis Tech operates for regulated-industry clients.",
};

const tcpaItems: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "clipboardCheck",
    title: "DNC scrubbing & list hygiene",
    body: "Every outbound list is scrubbed against Do-Not-Call registries before dialing begins. Scrubbing isn’t a one-time event. Lists are maintained and re-checked so numbers that opt out stay out. It’s the single most important discipline in compliant outreach, and it’s non-negotiable here.",
  },
  {
    icon: "checkCircle",
    title: "Consent verification",
    body: "Campaigns are built around verifiable consent. We work with clients to confirm how records were sourced and what consent they carry before those records are ever loaded into a dialer.",
  },
  {
    icon: "mic",
    title: "Call recording & retention",
    body: "Calls are recorded and retained under a defined policy, giving clients an audit trail for quality review, dispute resolution, and regulatory response.",
  },
  {
    icon: "bookOpen",
    title: "Agent training on regulatory requirements",
    body: "Agents are trained on the regulatory requirements of the campaigns they work, including CMS-aware scripting for healthcare programs, before they take or place a single call.",
  },
];

const securityItems: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "lock",
    title: "Data handling & access controls",
    body: "Client data is handled on secure systems with role-based, restricted access. People see only the data their role requires, nothing more.",
  },
  {
    icon: "shield",
    title: "Confidentiality commitments",
    body: "Confidentiality obligations are contractual and enforced. Your customer data, campaign data, and business information stay yours.",
  },
  {
    icon: "database",
    title: "Secure systems & restricted access",
    body: "Production systems are access-controlled and monitored, with restricted administrative privileges and defined offboarding when roles change.",
  },
];

export default function CompliancePage() {
  return (
    <>
      <PageHero
        eyebrow="Compliance & Security"
        title="Compliance is not a feature. It is how we operate"
        lede="For regulated-industry clients, a vendor’s compliance posture is the contract. This page describes how Frontis Tech runs campaigns and handles data: the practices your procurement and compliance teams will want to see."
      />

      <Section aria-labelledby="tcpa">
        <Reveal>
          <SectionHeading
            eyebrow="TCPA compliance"
            title={<span id="tcpa">Calling practices built for scrutiny</span>}
            lede="Outbound and transfer campaigns are designed around TCPA requirements from the start, not retrofitted after a complaint."
          />
        </Reveal>
        <ul className="mt-10 grid gap-5 lg:grid-cols-2">
          {tcpaItems.map((item, i) => (
            <Reveal as="li" key={item.title} delay={(i % 2) * 80}>
              <div className="h-full rounded-2xl border border-line bg-white p-7">
                <div className="flex items-center gap-3.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy">
                    <Icon name={item.icon} className="h-5.5 w-5.5" />
                  </span>
                  <h3 className="leading-snug font-semibold text-navy">{item.title}</h3>
                </div>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tint aria-labelledby="data-security">
        <Reveal>
          <SectionHeading
            eyebrow="Data security"
            title={<span id="data-security">Data handled to a regulated-industry standard</span>}
          />
        </Reveal>
        <ul className="mt-10 grid gap-5 lg:grid-cols-3">
          {securityItems.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 70}>
              <div className="h-full rounded-2xl border border-line bg-white p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy">
                  <Icon name={item.icon} className="h-5.5 w-5.5" />
                </span>
                <h3 className="mt-4 leading-snug font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={150}>
          <div className="mt-8 flex items-start gap-4 rounded-2xl border border-navy-200 bg-navy-50 p-6 sm:items-center">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-navy">
              <Icon name="clock" className="h-5 w-5" />
            </span>
            <p className="text-[0.9375rem] leading-relaxed text-navy">
              <span className="font-semibold">Certification roadmap:</span> ISO 27001
              and SOC 2 certifications are in progress. We state credentials only
              once they are obtained. No overclaiming, on this page or anywhere
              else.
            </p>
          </div>
        </Reveal>
      </Section>

      <CtaBand
        heading="Questions your compliance team wants answered?"
        copy="Send them our way. We’re comfortable in procurement reviews and happy to walk through our practices in detail."
        ctaLabel="Contact Us"
      />
    </>
  );
}
