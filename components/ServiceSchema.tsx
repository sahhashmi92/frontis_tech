import { site } from "@/lib/site";

/** schema.org Service markup for the five service pages. */
export default function ServiceSchema({
  name,
  description,
  slug,
}: {
  name: string;
  description: string;
  slug: string;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name,
          description,
          url: `${site.url}/services/${slug}`,
          areaServed: "US",
          provider: {
            "@type": "Organization",
            name: site.shortName,
            legalName: site.name,
            url: site.url,
          },
        }),
      }}
    />
  );
}
