import type { ReactNode } from "react";

type SectionGlowProps = {
  variant?: "light" | "accent" | "dark";
};

export default function SectionGlow({
  variant = "light",
}: SectionGlowProps) {
  return (
    <div
      className={`section-glow section-glow-${variant} pointer-events-none absolute inset-0 -z-10`}
      aria-hidden="true"
    />
  );
}
