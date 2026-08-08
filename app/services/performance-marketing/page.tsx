import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceSchema from "@/components/ServiceSchema";
import { AudienceList, CheckList, Section } from "@/components/blocks";
import { Icon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Performance Marketing",
  description:
    "Paid media, lead generation, landing pages, conversion optimization, analytics, and SEO: demand generation measured by pipeline, not clicks.",
};

const whatWeDo = [
  { title: "Paid search", note: "Google Ads and Bing" },
  { title: "Paid social", note: "Meta, LinkedIn, and other platforms" },
  { title: "Media buying & programmatic" },
  { title: "Lead generation campaigns" },
  { title: "Landing page design & optimization" },
  { title: "Conversion rate optimization" },
  { title: "Marketing analytics & attribution" },
  { title: "SEO fundamentals & on-page optimization" },
  { title: "Marketing reporting & dashboards" },
];

export default function PerformanceMarketingPage() {
  return (
    <>
      <ServiceSchema
        name="Performance Marketing"
        description="Paid media, lead generation, landing pages, conversion optimization, analytics, and SEO."
        slug="performance-marketing"
      />

      <PageHero
        eyebrow="Performance Marketing"
        title="Demand generated. Pipeline filled. Results measured."
        lede="Marketing that answers to your sales numbers: campaigns engineered to produce qualified leads your team can actually close, with clear reporting on what was spent and what it produced."
      />

      <Section aria-labelledby="what-we-do">
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title={<span id="what-we-do">Full-funnel demand generation</span>}
          />
        </Reveal>
        <Reveal delay={100}>
          <CheckList items={whatWeDo} className="mt-10 max-w-4xl" />
        </Reveal>
      </Section>

      {/* Integration advantage */}
      <Section tint aria-labelledby="integration">
        <Reveal>
          <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="The integration advantage"
                title={<span id="integration">We don’t stop at the lead</span>}
                lede={
                  <>
                    A standalone agency hands you leads and wishes you luck. Frontis
                    Tech can generate the demand <em>and</em> run the calling and
                    fulfillment behind it, with one team accountable from first click to
                    closed customer.
                  </>
                }
              />
              <p className="mt-6">
                <Link
                  href="/services/customer-acquisition"
                  className="inline-flex items-center gap-1.5 font-semibold text-navy-500 transition-colors hover:text-navy"
                >
                  See Customer Acquisition &amp; Contact Center Operations
                  <Icon name="arrowRight" className="h-4 w-4" />
                </Link>
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-white p-7 sm:p-8" aria-hidden="true">
              <div className="space-y-3">
                {[
                  { icon: "megaphone" as const, label: "Campaigns generate demand" },
                  { icon: "cursor" as const, label: "Landing pages convert it" },
                  { icon: "acquisition" as const, label: "Our calling team qualifies it" },
                  { icon: "chart" as const, label: "You see it all in one report" },
                ].map((row, i) => (
                  <div key={row.label}>
                    <div className="flex items-center gap-3.5 rounded-xl border border-line bg-surface px-4 py-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-navy">
                        <Icon name={row.icon} className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium text-ink">{row.label}</span>
                    </div>
                    {i < 3 && (
                      <div className="ml-8 h-3 w-px bg-navy-200" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section aria-labelledby="who-for">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Who it’s for"
              title={<span id="who-for">For teams tired of paying for clicks</span>}
            />
          </Reveal>
          <Reveal delay={100}>
            <AudienceList
              items={[
                "Businesses that need qualified leads, not just traffic",
                "Companies frustrated by agencies that deliver clicks but not customers",
                "Organizations consolidating demand generation and fulfillment under one partner",
              ]}
            />
          </Reveal>
        </div>
      </Section>

      <CtaBand
        heading="Let’s build your lead generation engine"
        copy="Tell us your market and your targets, and we’ll map the channels, the budget, and the path from spend to pipeline."
        ctaLabel="Talk to Us"
      />
    </>
  );
}
