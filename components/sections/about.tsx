import { about } from "@/lib/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-[var(--spacing-section)]">
      <div className="container-editorial">
        <SectionHeading index="01" eyebrow="About" title="Who I am" />

        <div className="mt-16 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed md:text-xl md:leading-relaxed">
              {about.paragraphs.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p className="text-pretty text-foreground/85">{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="md:col-span-5 md:pl-8">
            <ul className="space-y-8">
              {about.capacities.map((capacity, i) => (
                <Reveal as="li" key={capacity.title} delay={i * 0.08}>
                  <h3 className="text-base font-medium text-foreground">
                    {capacity.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-subtle">
                    {capacity.description}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        <Reveal className="mt-20">
          <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius)] border border-border bg-border sm:grid-cols-3">
            {about.stats.map((stat) => (
              <div key={stat.label} className="bg-surface/40 px-8 py-10">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-4xl font-medium tracking-tight text-foreground md:text-5xl">
                    {stat.value}
                  </span>
                  <span className="mt-3 block text-sm text-subtle">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
