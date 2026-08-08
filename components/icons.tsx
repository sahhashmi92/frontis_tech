import type { SVGProps } from "react";

/**
 * Line-art icon set: single stroke weight (1.8), round caps, drawn on a
 * 24x24 grid. Color comes from currentColor so icons inherit Deep Blue
 * (or white on dark bands) from their context.
 */
function Svg({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export type IconName = keyof typeof icons;

export function Icon({
  name,
  ...props
}: { name: IconName } & SVGProps<SVGSVGElement>) {
  const Cmp = icons[name];
  return <Cmp {...props} />;
}

export const icons = {
  /* ---- Service lines ---- */
  acquisition: (p: SVGProps<SVGSVGElement>) => (
    <Svg {...p}>
      <path d="M21.2 16.6v2.6a1.7 1.7 0 0 1-1.9 1.7 17 17 0 0 1-7.4-2.6 16.7 16.7 0 0 1-5.1-5.1A17 17 0 0 1 4.2 5.7 1.7 1.7 0 0 1 5.9 3.8h2.6a1.7 1.7 0 0 1 1.7 1.5c.1.8.3 1.7.6 2.4a1.7 1.7 0 0 1-.4 1.8L9.3 10.6a13.6 13.6 0 0 0 4.6 4.6l1.1-1.1a1.7 1.7 0 0 1 1.8-.4c.8.3 1.6.5 2.4.6a1.7 1.7 0 0 1 1.5 1.7Z" />
      <path d="M15.5 5.5h5m0 0-2.2-2.2M20.5 5.5l-2.2 2.2" />
    </Svg>
  ),
  backoffice: (p: SVGProps<SVGSVGElement>) => (
    <Svg {...p}>
      <path d="m12 2.8 9.2 4.4L12 11.6 2.8 7.2 12 2.8Z" />
      <path d="m2.8 12 9.2 4.4 9.2-4.4" />
      <path d="m2.8 16.8 9.2 4.4 9.2-4.4" />
    </Svg>
  ),
  talent: (p: SVGProps<SVGSVGElement>) => (
    <Svg {...p}>
      <circle cx="9" cy="8" r="3.4" />
      <path d="M2.8 20.2a6.2 6.2 0 0 1 12.4 0" />
      <path d="M16 5.2a3.4 3.4 0 0 1 0 5.9" />
      <path d="M18.1 14.6a6.2 6.2 0 0 1 3.1 5.6" />
    </Svg>
  ),
  marketing: (p: SVGProps<SVGSVGElement>) => (
    <Svg {...p}>
      <path d="m22 7-8.2 8.2-4.5-4.5L2 18" />
      <path d="M16.5 7H22v5.5" />
    </Svg>
  ),
  software: (p: SVGProps<SVGSVGElement>) => (
    <Svg {...p}>
      <path d="m15.5 17.5 5.5-5.5-5.5-5.5" />
      <path d="m8.5 6.5-5.5 5.5 5.5 5.5" />
    </Svg>
  ),

  /* ---- Industries ---- */
  health: (p: SVGProps<SVGSVGElement>) => (
    <Svg {...p}>
      <path d="M19.2 13.9c1.4-1.4 2.6-3 2.6-5A5.1 5.1 0 0 0 16.7 3.8c-1.6 0-2.8.5-4.2 1.9-1.4-1.4-2.5-1.9-4.2-1.9A5.1 5.1 0 0 0 3.2 8.9c0 2.1 1.2 3.7 2.6 5l6.7 6.6 6.7-6.6Z" />
      <path d="M7.5 12h2.6l1-1.8 1.8 3.6 1.3-2.5.4.7h2" />
    </Svg>
  ),
  solar: (p: SVGProps<SVGSVGElement>) => (
    <Svg {...p}>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.4M12 19.1v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7" />
    </Svg>
  ),
  home: (p: SVGProps<SVGSVGElement>) => (
    <Svg {...p}>
      <path d="m3.2 10.8 8.8-7 8.8 7" />
      <path d="M5.3 9.2v9.6a1.7 1.7 0 0 0 1.7 1.7h10a1.7 1.7 0 0 0 1.7-1.7V9.2" />
      <path d="M9.8 20.5v-6h4.4v6" />
    </Svg>
  ),
  auto: (p: SVGProps<SVGSVGElement>) => (
    <Svg {...p}>
      <path d="M18.9 16.9h1.9c.5 0 .9-.4.9-.9v-2.7c0-.8-.6-1.5-1.4-1.7-2.5-.5-4.8-1-4.8-1s-1.4-1.5-2.4-2.4a2.5 2.5 0 0 0-1.7-.7H6c-.5 0-1 .3-1.3.8l-1.5 3A3.3 3.3 0 0 0 2.3 13v3c0 .5.4.9.9.9h1.9" />
      <circle cx="7.5" cy="17" r="2" />
      <circle cx="16.5" cy="17" r="2" />
      <path d="M9.5 17H14" />
    </Svg>
  ),
  smb: (p: SVGProps<SVGSVGElement>) => (
    <Svg {...p}>
      <rect x="4.8" y="3.2" width="14.4" height="17.6" rx="1.6" />
      <path d="M8.8 7.4h.4M14.8 7.4h.4M8.8 11.4h.4M14.8 11.4h.4M8.8 15.4h.4M14.8 15.4h.4" />
      <path d="M10.6 20.8v-3h2.8v3" />
    </Svg>
  ),

  /* ---- General ---- */
  arrowRight: (p: SVGProps<SVGSVGElement>) => (
    <Svg {...p}>
      <path d="M4.5 12h15" />
      <path d="m13.5 6 6 6-6 6" />
    </Svg>
  ),
  check: (p: SVGProps<SVGSVGElement>) => (
    <Svg {...p}>
      <path d="m4.5 12.8 5 5L19.5 6.5" />
    </Svg>
  ),
  checkCircle: (p: SVGProps<SVGSVGElement>) => (
    <Svg {...p}>
      <circle cx="12" cy="12" r="9.2" />
      <path d="m8 12.4 2.7 2.7 5.3-6" />
    </Svg>
  ),
  shield: (p: SVGProps<SVGSVGElement>) => (
    <Svg {...p}>
      <path d="M12 21.5s7.8-3.9 7.8-9.7V5.2L12 2.5 4.2 5.2v6.6c0 5.8 7.8 9.7 7.8 9.7Z" />
    </Svg>
  ),
  shieldCheck: (p: SVGProps<SVGSVGElement>) => (
    <Svg {...p}>
      <path d="M12 21.5s7.8-3.9 7.8-9.7V5.2L12 2.5 4.2 5.2v6.6c0 5.8 7.8 9.7 7.8 9.7Z" />
      <path d="m8.8 11.7 2.3 2.3 4.2-4.7" />
    </Svg>
  ),
  network: (p: SVGProps<SVGSVGElement>) => (
    <Svg {...p}>
      <circle cx="5" cy="6" r="2.4" />
      <circle cx="19" cy="6" r="2.4" />
      <circle cx="12" cy="18" r="2.4" />
      <path d="M7.4 6h9.2M6.1 8.2l4.7 7.6M17.9 8.2l-4.7 7.6" />
    </Svg>
  ),
  globe: (p: SVGProps<SVGSVGElement>) => (
    <Svg {...p}>
      <circle cx="12" cy="12" r="9.2" />
      <path d="M2.8 12h18.4" />
      <path d="M12 2.8c2.4 2.5 3.7 5.7 3.7 9.2s-1.3 6.7-3.7 9.2c-2.4-2.5-3.7-5.7-3.7-9.2s1.3-6.7 3.7-9.2Z" />
    </Svg>
  ),
  scale: (p: SVGProps<SVGSVGElement>) => (
    <Svg {...p}>
      <path d="M14.5 3.5h6v6" />
      <path d="M9.5 20.5h-6v-6" />
      <path d="M20.2 3.8 13.5 10.5" />
      <path d="M3.8 20.2l6.7-6.7" />
    </Svg>
  ),
  eye: (p: SVGProps<SVGSVGElement>) => (
    <Svg {...p}>
      <path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="2.8" />
    </Svg>
  ),
  clock: (p: SVGProps<SVGSVGElement>) => (
    <Svg {...p}>
      <circle cx="12" cy="12" r="9.2" />
      <path d="M12 6.8V12l3.4 2.2" />
    </Svg>
  ),
  target: (p: SVGProps<SVGSVGElement>) => (
    <Svg {...p}>
      <circle cx="12" cy="12" r="9.2" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </Svg>
  ),
  database: (p: SVGProps<SVGSVGElement>) => (
    <Svg {...p}>
      <ellipse cx="12" cy="5.3" rx="7.8" ry="2.8" />
      <path d="M19.8 12c0 1.5-3.5 2.8-7.8 2.8S4.2 13.5 4.2 12" />
      <path d="M4.2 5.3v13.4c0 1.5 3.5 2.8 7.8 2.8s7.8-1.3 7.8-2.8V5.3" />
    </Svg>
  ),
  mail: (p: SVGProps<SVGSVGElement>) => (
    <Svg {...p}>
      <rect x="2.8" y="5" width="18.4" height="14" rx="1.8" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </Svg>
  ),
  lock: (p: SVGProps<SVGSVGElement>) => (
    <Svg {...p}>
      <rect x="4.5" y="10.5" width="15" height="10.5" rx="1.8" />
      <path d="M8 10.5V7.8a4 4 0 0 1 8 0v2.7" />
      <path d="M12 14.8v2" />
    </Svg>
  ),
  mic: (p: SVGProps<SVGSVGElement>) => (
    <Svg {...p}>
      <rect x="9" y="2.8" width="6" height="11" rx="3" />
      <path d="M5.2 11.2a6.8 6.8 0 0 0 13.6 0" />
      <path d="M12 18v3.2" />
    </Svg>
  ),
  bookOpen: (p: SVGProps<SVGSVGElement>) => (
    <Svg {...p}>
      <path d="M12 6.7C10.6 5 8.4 4.2 5.6 4.2c-1 0-2 .1-2.8.4v14.6c.8-.3 1.8-.4 2.8-.4 2.8 0 5 .8 6.4 2.5 1.4-1.7 3.6-2.5 6.4-2.5 1 0 2 .1 2.8.4V4.6a9.8 9.8 0 0 0-2.8-.4c-2.8 0-5 .8-6.4 2.5Z" />
      <path d="M12 6.7v14.6" />
    </Svg>
  ),
  clipboardCheck: (p: SVGProps<SVGSVGElement>) => (
    <Svg {...p}>
      <rect x="4.8" y="4.2" width="14.4" height="17" rx="1.8" />
      <path d="M9 4.2a3 3 0 0 1 6 0" />
      <path d="m8.8 13.6 2.3 2.3 4.2-4.7" />
    </Svg>
  ),
  chart: (p: SVGProps<SVGSVGElement>) => (
    <Svg {...p}>
      <path d="M3.5 3.5v15.2a1.8 1.8 0 0 0 1.8 1.8h15.2" />
      <path d="M8.5 15.5v-4M13 15.5V7.5M17.5 15.5v-6" />
    </Svg>
  ),
  cursor: (p: SVGProps<SVGSVGElement>) => (
    <Svg {...p}>
      <path d="m4 4 7.1 17 2.5-7.4L21 11.1 4 4Z" />
    </Svg>
  ),
  megaphone: (p: SVGProps<SVGSVGElement>) => (
    <Svg {...p}>
      <path d="M3 10.8v2.4a1.7 1.7 0 0 0 1.7 1.7h1.8l5.9 4.3a.9.9 0 0 0 1.4-.7V5.5a.9.9 0 0 0-1.4-.7L6.5 9.1H4.7A1.7 1.7 0 0 0 3 10.8Z" />
      <path d="M17.5 8.5a5 5 0 0 1 0 7" />
      <path d="M20 6a8.6 8.6 0 0 1 0 12" />
    </Svg>
  ),
  sparkles: (p: SVGProps<SVGSVGElement>) => (
    <Svg {...p}>
      <path d="M11 4.6 12.6 9l4.4 1.6-4.4 1.6L11 16.6 9.4 12.2 5 10.6 9.4 9 11 4.6Z" />
      <path d="M18.5 15.5l.9 2.3 2.3.9-2.3.9-.9 2.3-.9-2.3-2.3-.9 2.3-.9.9-2.3Z" />
    </Svg>
  ),
  smartphone: (p: SVGProps<SVGSVGElement>) => (
    <Svg {...p}>
      <rect x="6.5" y="2.8" width="11" height="18.4" rx="2" />
      <path d="M11 18.2h2" />
    </Svg>
  ),
  monitor: (p: SVGProps<SVGSVGElement>) => (
    <Svg {...p}>
      <rect x="2.8" y="4" width="18.4" height="13" rx="1.8" />
      <path d="M8.5 20.5h7M12 17v3.5" />
    </Svg>
  ),
  refresh: (p: SVGProps<SVGSVGElement>) => (
    <Svg {...p}>
      <path d="M20.5 5v5.5H15" />
      <path d="M3.5 19v-5.5H9" />
      <path d="M5.4 9A7.5 7.5 0 0 1 18 6.4l2.5 2.3M3.5 15.3 6 17.6A7.5 7.5 0 0 0 18.6 15" />
    </Svg>
  ),
  userCheck: (p: SVGProps<SVGSVGElement>) => (
    <Svg {...p}>
      <circle cx="9" cy="8" r="3.4" />
      <path d="M2.8 20.2a6.2 6.2 0 0 1 12.4 0" />
      <path d="m15.5 9.5 2.2 2.2 4-4.5" />
    </Svg>
  ),
  briefcase: (p: SVGProps<SVGSVGElement>) => (
    <Svg {...p}>
      <rect x="2.8" y="7" width="18.4" height="13.5" rx="1.8" />
      <path d="M8.5 7V5.2a1.7 1.7 0 0 1 1.7-1.7h3.6a1.7 1.7 0 0 1 1.7 1.7V7" />
      <path d="M2.8 12.4c2.9 1.4 6 2.1 9.2 2.1s6.3-.7 9.2-2.1" />
    </Svg>
  ),
  settings: (p: SVGProps<SVGSVGElement>) => (
    <Svg {...p}>
      <path d="M4.5 21v-6.5M4.5 10.5v-7.5M12 21v-8.5M12 8.5v-5.5M19.5 21v-4.5M19.5 12.5v-9" />
      <path d="M2 14.5h5M9.5 8.5h5M17 16.5h5" />
    </Svg>
  ),
  headset: (p: SVGProps<SVGSVGElement>) => (
    <Svg {...p}>
      <path d="M4 13.5v-2a8 8 0 0 1 16 0v2" />
      <rect x="2.8" y="13.5" width="4.4" height="6" rx="1.6" />
      <rect x="16.8" y="13.5" width="4.4" height="6" rx="1.6" />
      <path d="M20 19.5a3 3 0 0 1-3 2.8h-3" />
    </Svg>
  ),
  dollar: (p: SVGProps<SVGSVGElement>) => (
    <Svg {...p}>
      <path d="M12 2.8v18.4" />
      <path d="M16.8 6.5H9.9a3 3 0 1 0 0 6h4.2a3 3 0 1 1 0 6H6.8" />
    </Svg>
  ),
  mapPin: (p: SVGProps<SVGSVGElement>) => (
    <Svg {...p}>
      <path d="M19.8 10c0 5.5-7.8 11.5-7.8 11.5S4.2 15.5 4.2 10a7.8 7.8 0 0 1 15.6 0Z" />
      <circle cx="12" cy="10" r="2.8" />
    </Svg>
  ),
} as const;
