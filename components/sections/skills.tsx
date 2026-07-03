import { skills } from "@/lib/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-border py-[var(--spacing-section)]"
    >
      <div className="container-editorial">
        <SectionHeading
          index="04"
          eyebrow="Skills"
          title="Tools & expertise"
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-[var(--radius)] border border-border bg-border md:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.08} className="bg-background">
              <div className="h-full bg-surface/40 p-8">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  {group.label}
                </h3>
                <ul className="mt-6 space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-3 text-foreground/90"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-faint"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
