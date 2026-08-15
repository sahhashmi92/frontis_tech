import Link from "next/link";
import { services } from "@/lib/site";
import { Icon } from "./icons";
import Reveal from "./Reveal";
import { Section } from "./blocks";

/**
 * Cross-links between the four technology service lines. Pass the current
 * page's slug and it renders the other three as cards, so each tech page
 * routes visitors to the right sibling without duplicating content.
 */
const TECH_SLUGS = [
  "digital-innovation",
  "ai-automation",
  "application-development",
  "cloud-infrastructure",
] as const;

const hooks: Record<(typeof TECH_SLUGS)[number], { title: string; body: string }> = {
  "digital-innovation": {
    title: "Need a custom internal system?",
    body: "Internal tools, workflow systems, and CRM or API integrations live under Software Development.",
  },
  "ai-automation": {
    title: "Want AI in the mix?",
    body: "AI agents, chatbots, and process automation are covered under AI & Automation.",
  },
  "application-development": {
    title: "Building a web or mobile app?",
    body: "Customer-facing products, MVPs, and e-commerce live on our Application Development page.",
  },
  "cloud-infrastructure": {
    title: "Need somewhere reliable to run it?",
    body: "Cloud setup, migration, and managed operations are handled by Cloud & Infrastructure.",
  },
};

export default function RelatedServices({
  current,
  tint = false,
}: {
  current: (typeof TECH_SLUGS)[number];
  tint?: boolean;
}) {
  const others = TECH_SLUGS.filter((s) => s !== current).map((slug) => ({
    slug,
    service: services.find((s) => s.slug === slug)!,
    ...hooks[slug],
  }));

  return (
    <Section tint={tint} aria-labelledby="related-services">
      <Reveal>
        <p
          id="related-services"
          className="mb-6 flex items-center gap-2.5 text-[0.8125rem] font-semibold tracking-[0.14em] text-navy-500 uppercase"
        >
          <span className="h-2 w-2 shrink-0 rounded-full bg-orange" aria-hidden="true" />
          Related technology services
        </p>
        <ul className="grid gap-5 lg:grid-cols-3">
          {others.map((o) => (
            <li key={o.slug}>
              <Link
                href={`/services/${o.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy-200 hover:shadow-lg hover:shadow-navy-900/6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-white">
                  <Icon name={o.service.icon} className="h-5.5 w-5.5" />
                </span>
                <h3 className="mt-4 leading-snug font-semibold text-navy">{o.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{o.body}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-500 group-hover:text-orange-600">
                  {o.service.short}
                  <Icon
                    name="arrowRight"
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
