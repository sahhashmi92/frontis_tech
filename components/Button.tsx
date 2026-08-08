import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./icons";

type ButtonProps = {
  href: string;
  children: ReactNode;
  /**
   * primary:   Salmon fill, deep-navy text (AA contrast; white-on-salmon fails)
   * secondary: outlined Deep Blue, for light backgrounds
   * inverse:   outlined white, for deep-navy bands
   */
  variant?: "primary" | "secondary" | "inverse";
  size?: "md" | "lg";
  withArrow?: boolean;
  className?: string;
};

const variants = {
  primary:
    "bg-orange text-navy-950 hover:bg-orange-400 active:bg-orange-600 active:text-white shadow-sm shadow-orange-600/20",
  secondary:
    "border-[1.5px] border-navy/30 text-navy hover:border-navy hover:bg-navy-50 active:bg-navy-100",
  inverse:
    "border-[1.5px] border-white/40 text-white hover:border-white hover:bg-white/10 active:bg-white/20",
};

const sizes = {
  md: "h-11 px-6 text-[0.9375rem]",
  lg: "h-12 px-7 text-base",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  withArrow = false,
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`group/btn inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 hover:-translate-y-px ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      {withArrow && (
        <Icon
          name="arrowRight"
          className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5"
        />
      )}
    </Link>
  );
}
