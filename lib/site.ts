export const site = {
  name: "Frontis Tech LLC",
  shortName: "Frontis Tech",
  tagline: "Connections That Convert",
  url: "https://frontistech.com",
  email: "contact@frontistech.com",
  /**
   * Contact form backend: Google Apps Script web app bound to the
   * "Frontis Tech Website Leads" sheet. Each submission appends a row and
   * emails an alert (see scripts/google-apps-script-form.gs). Override with
   * NEXT_PUBLIC_FORM_ENDPOINT to point at a different backend.
   */
  formEndpoint:
    process.env.NEXT_PUBLIC_FORM_ENDPOINT ??
    "https://script.google.com/macros/s/AKfycbyIZAQbo6IpMTxvfL_V_Xwc1JkTE-gCmV2mfOFvHDO7PSLKSk40hzar5QCZbhb-wVDZ/exec",
};

export type ServiceInfo = {
  slug: string;
  /** Full formal name, used on the service page and schema markup */
  name: string;
  /** Short 2–3 word label for cards, nav, and footers */
  short: string;
  /** One sentence, max ~15 words, for the homepage strip */
  blurb: string;
  /** Two or three sentences for the services hub */
  summary: string;
  icon: "acquisition" | "backoffice" | "talent" | "marketing" | "software";
};

export const services: ServiceInfo[] = [
  {
    slug: "customer-acquisition",
    name: "Customer Acquisition & Contact Center Operations",
    short: "Customer Acquisition",
    blurb: "Outbound, inbound, and live transfers that turn prospects into customers.",
    summary:
      "Outbound and inbound calling, live transfers, lead qualification, appointment setting, and retention, managed as compliance-first campaigns. Built for regulated industries where every call has to stand up to scrutiny.",
    icon: "acquisition",
  },
  {
    slug: "back-office-support",
    name: "Back-Office Support",
    short: "Back-Office Support",
    blurb: "Data, CRM, scheduling, and admin work, handled reliably behind the scenes.",
    summary:
      "Data processing, CRM management, virtual assistance, scheduling, and document management. The administrative backbone that keeps your business running while your in-house team focuses on higher-value work.",
    icon: "backoffice",
  },
  {
    slug: "talent-solutions",
    name: "Talent Solutions",
    short: "Talent Solutions",
    blurb: "Vetted remote professionals for technical and non-technical roles.",
    summary:
      "Dedicated remote staffing for technical and non-technical roles, available hourly or monthly. Vetted professionals who work as an extension of your team, without the overhead of direct hiring.",
    icon: "talent",
  },
  {
    slug: "performance-marketing",
    name: "Performance Marketing",
    short: "Performance Marketing",
    blurb: "Paid media, lead generation, and conversion optimization that fill your pipeline.",
    summary:
      "Paid media, lead generation, landing pages, conversion optimization, analytics, and SEO. Demand generation measured by qualified leads and closed business, not clicks.",
    icon: "marketing",
  },
  {
    slug: "digital-innovation",
    name: "Digital Innovation & Software Development",
    short: "Digital Innovation",
    blurb: "Custom software, web and mobile apps, automation, and AI integrations.",
    summary:
      "Custom software, web and mobile applications, process automation, and AI integrations. A structured build partner for the tools your business runs on, from internal systems to customer-facing products.",
    icon: "software",
  },
];

export const industries = [
  {
    id: "health-insurance",
    name: "Health Insurance",
    subtitle: "ACA & Medicare",
    icon: "health" as const,
  },
  { id: "solar", name: "Solar Energy", subtitle: "Residential & commercial", icon: "solar" as const },
  { id: "home-services", name: "Home Services", subtitle: "Local & multi-market", icon: "home" as const },
  { id: "auto-insurance", name: "Auto Insurance", subtitle: "Agencies & carriers", icon: "auto" as const },
  { id: "smb", name: "General SMB", subtitle: "Growth-stage & mid-market", icon: "smb" as const },
];
