import { experience, identity } from "@/lib/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-border py-[var(--spacing-section)]"
    >
      <div className="container-editorial">
        <SectionHeading index="02" eyebrow="Experience" title="How I operate" />

        <Reveal className="mt-16">
          <article className="group relative rounded-[var(--radius)] border border-border bg-surface/60 p-8 transition-colors hover:border-border-strong md:p-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  {experience.role}
                </p>
                <h3 className="mt-3 text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                  {experience.organization}
                </h3>
                <p className="mt-3 max-w-xl text-pretty text-muted">
                  {experience.summary}
                </p>
              </div>

              <ul className="flex flex-wrap gap-2 md:max-w-[16rem] md:justify-end">
                {identity.roles.map((role) => (
                  <li
                    key={role}
                    className="rounded-full border border-border px-3 py-1 font-mono text-[0.7rem] uppercase tracking-wider text-subtle"
                  >
                    {role}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 rule pt-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">
                Focus areas
              </p>
              <ul className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
                {experience.responsibilities.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-3 text-foreground/90"
                  >
                    <span className="font-mono text-xs text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
