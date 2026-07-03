import { projects } from "@/lib/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";

export function Work() {
  return (
    <section
      id="work"
      className="scroll-mt-24 border-t border-border py-[var(--spacing-section)]"
    >
      <div className="container-editorial">
        <SectionHeading index="03" eyebrow="Work" title="Selected work" />

        <div className="mt-16 divide-y divide-border border-y border-border">
          {projects.map((project, i) => (
            <Reveal as="article" key={project.index} delay={i * 0.06}>
              <div className="group grid gap-6 py-10 md:grid-cols-12 md:gap-8 md:py-14">
                <div className="md:col-span-4">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">
                    <span className="text-accent">{project.index}</span> ·{" "}
                    {project.kind}
                  </p>
                  <h3 className="mt-4 text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                    {project.title}
                  </h3>
                </div>

                <div className="md:col-span-8 md:pl-4">
                  <p className="max-w-2xl text-pretty text-lg leading-relaxed text-foreground/85">
                    {project.description}
                  </p>

                  {project.impact && (
                    <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted">
                      <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                        Impact
                      </span>{" "}
                      — {project.impact}
                    </p>
                  )}

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-border bg-surface/50 px-3 py-1 font-mono text-[0.7rem] tracking-wide text-subtle"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
