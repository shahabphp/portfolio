import { type ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  className?: string;
};

/** Editorial section header: numbered index + mono eyebrow + display title. */
export function SectionHeading({
  index,
  eyebrow,
  title,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-subtle">
        <span className="text-accent">{index}</span>
        <span aria-hidden className="h-px w-8 bg-border-strong" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="mt-6 text-balance text-3xl font-medium leading-[1.08] tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
    </Reveal>
  );
}
