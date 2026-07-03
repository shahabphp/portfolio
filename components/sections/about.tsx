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
            <div className="space-y-6 text-lg leading-relaxed text-muted md:text-xl md:leading-relaxed">
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
      </div>
    </section>
  );
}
