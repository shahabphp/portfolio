import { experience } from "@/lib/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-border py-[var(--spacing-section)]"
    >
      <div className="container-editorial">
        <SectionHeading
          index="02"
          eyebrow="Experience"
          title="Fifteen years, from engineer to product leader"
        />

        <ol className="mt-16">
          {experience.map((role, i) => (
            <Reveal as="li" key={`${role.organization}-${i}`} delay={Math.min(i, 3) * 0.05}>
              <article className="group grid gap-6 border-t border-border py-10 md:grid-cols-12 md:gap-8 md:py-12">
                <div className="md:col-span-4">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                    {role.period}
                  </p>
                  <h3 className="mt-4 text-xl font-medium tracking-tight text-foreground md:text-2xl">
                    {role.title}
                  </h3>
                  {role.focus && (
                    <p className="mt-1 text-sm text-subtle">{role.focus}</p>
                  )}
                  <p className="mt-3 text-sm text-muted">{role.organization}</p>
                </div>

                <div className="md:col-span-8 md:pl-4">
                  {role.summary && (
                    <p className="max-w-2xl text-pretty text-foreground/85">
                      {role.summary}
                    </p>
                  )}
                  <ul
                    className={role.summary ? "mt-5 space-y-2.5" : "space-y-2.5"}
                  >
                    {role.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span
                          aria-hidden
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-faint"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
