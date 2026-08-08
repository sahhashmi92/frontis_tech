import type { ReactNode } from "react";

/**
 * Consistent section header: orange-dot eyebrow, heading, optional lede.
 */
export default function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  dark = false,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  const centered = align === "center";
  return (
    <div
      className={`${centered ? "mx-auto text-center" : ""} max-w-2xl ${className}`}
    >
      {eyebrow && (
        <p
          className={`mb-3 flex items-center gap-2.5 text-[0.8125rem] font-semibold tracking-[0.14em] uppercase ${
            centered ? "justify-center" : ""
          } ${dark ? "text-navy-200" : "text-navy-500"}`}
        >
          <span className="h-2 w-2 shrink-0 rounded-full bg-orange" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-semibold tracking-tight text-balance sm:text-4xl ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {lede && (
        <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-navy-100" : "text-muted"}`}>
          {lede}
        </p>
      )}
    </div>
  );
}
