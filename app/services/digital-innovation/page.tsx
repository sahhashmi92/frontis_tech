import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceSchema from "@/components/ServiceSchema";
import { AudienceList, ProcessSteps, Section } from "@/components/blocks";
import { Icon, type IconName } from "@/components/icons";

export const metadata: Metadata = {
  title: "Digital Innovation & Software Development",
  description:
    "Custom software, web and mobile apps, process automation, and AI integrations from a structured technology build partner.",
};

const capabilities: {
  icon: IconName;
  title: string;
  items: string[];
}[] = [
  {
    icon: "settings",
    title: "Custom Software Development",
    items: [
      "Internal business tools",
      "Process automation & workflow systems",
      "Custom CRM integrations",
      "API development & third-party integrations",
    ],
  },
  {
    icon: "monitor",
    title: "Web Development",
    items: [
      "Business websites & web applications",
      "E-commerce builds",
      "CMS implementation",
      "Performance optimization",
    ],
  },
  {
    icon: "smartphone",
    title: "Mobile App Development",
    items: [
      "iOS and Android development",
      "Cross-platform apps",
      "MVP builds for early-stage products",
    ],
  },
  {
    icon: "sparkles",
    title: "AI & Automation",
    items: [
      "AI integration into existing systems",
      "Chatbots & conversational AI",
      "Process automation & data pipelines",
      "Reporting & analytics tools",
    ],
  },
];

const approach = [
  { title: "Discovery", body: "We map your requirements, constraints, and success criteria before anything is built." },
  { title: "Design", body: "Architecture and interface design you sign off on, with no surprises mid-build." },
  { title: "Build", body: "Structured development with regular check-ins and working software you can see." },
  { title: "Launch", body: "Tested, documented delivery into your environment with a clean handover." },
  { title: "Ongoing support", body: "Maintenance, iteration, and enhancement after launch. We don’t disappear." },
];

export default function DigitalInnovationPage() {
  return (
    <>
      <ServiceSchema
        name="Digital Innovation & Software Development"
        description="Custom software, web and mobile apps, automation, AI integrations, and business tools."
        slug="digital-innovation"
      />

      <PageHero
        eyebrow="Digital Innovation & Software Development"
        title="Ideas become working software"
        lede="The technology build arm of Frontis Tech: custom systems, web and mobile applications, automation, and AI integrations, delivered through a structured process rather than freelance guesswork."
      />

      <Section aria-labelledby="capabilities">
        <Reveal>
          <SectionHeading
            eyebrow="What we build"
            title={<span id="capabilities">Four build capabilities, one delivery standard</span>}
          />
        </Reveal>
        <ul className="mt-10 grid gap-5 lg:grid-cols-2">
          {capabilities.map((cap, i) => (
            <Reveal as="li" key={cap.title} delay={(i % 2) * 80}>
              <div className="h-full rounded-2xl border border-line bg-white p-7 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy">
                    <Icon name={cap.icon} className="h-5.5 w-5.5" />
                  </span>
                  <h3 className="text-lg leading-snug font-semibold text-navy">{cap.title}</h3>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {cap.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[0.9375rem] text-ink">
                      <span className="mt-0.5 flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-600">
                        <Icon name="check" className="h-3 w-3" strokeWidth={2.6} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tint aria-labelledby="approach">
        <Reveal>
          <SectionHeading
            eyebrow="Our approach"
            title={<span id="approach">A structured path from idea to production</span>}
            lede="Professional delivery, not freelance-style improvisation. Every engagement follows the same five stages."
          />
        </Reveal>
        <div className="mt-10">
          <ProcessSteps steps={approach} />
        </div>
      </Section>

      <Section aria-labelledby="who-for">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Who it’s for"
              title={<span id="who-for">For businesses that need a build partner, not a marketplace gig</span>}
              lede={
                <>
                  Looking for marketing services instead?{" "}
                  <Link
                    href="/services/performance-marketing"
                    className="font-medium text-navy-500 underline underline-offset-4 hover:text-navy"
                  >
                    See Performance Marketing
                  </Link>
                  .
                </>
              }
            />
          </Reveal>
          <Reveal delay={100}>
            <AudienceList
              items={[
                "Businesses that need a technology build partner rather than a single freelancer",
                "Companies that want to automate internal processes",
                "Startups that need an MVP built properly the first time",
                "Established businesses adding digital capability to how they operate",
              ]}
            />
          </Reveal>
        </div>
      </Section>

      <CtaBand
        heading="Tell us what you’re building"
        copy="Describe the tool, the app, or the process you want automated, and we’ll come back with an honest scope and a clear plan."
        ctaLabel="Talk to Us"
      />
    </>
  );
}
