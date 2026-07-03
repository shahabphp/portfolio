import { additionalExpertise, skills } from "@/lib/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-border py-[var(--spacing-section)]"
    >
      <div className="container-editorial">
        <SectionHeading index="04" eyebrow="Skills" title="Tools & expertise" />

        <div className="mt-16 grid gap-px overflow-hidden rounded-[var(--radius)] border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, i) => (
            <Reveal key={group.label} delay={Math.min(i, 3) * 0.06}>
              <div className="h-full bg-surface/40 p-8">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  {group.label}
                </h3>
                <ul className="mt-6 space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-3 text-sm text-foreground/90"
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

        <Reveal className="mt-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">
            Also working with
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {additionalExpertise.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border bg-surface/50 px-3.5 py-1.5 text-sm text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
