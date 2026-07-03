import { certifications, education } from "@/lib/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { type Credential } from "@/lib/portfolio";

function CredentialList({ items }: { items: Credential[] }) {
  return (
    <ul className="mt-6 space-y-px overflow-hidden rounded-[var(--radius)] border border-border">
      {items.map((item) => (
        <li
          key={item.title}
          className="flex flex-col gap-1 bg-surface/40 px-6 py-5 transition-colors hover:bg-surface-2 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="font-medium text-foreground">{item.title}</span>
          <span className="text-sm text-subtle">{item.detail}</span>
        </li>
      ))}
    </ul>
  );
}

export function Credentials() {
  return (
    <section
      id="credentials"
      className="scroll-mt-24 border-t border-border py-[var(--spacing-section)]"
    >
      <div className="container-editorial">
        <SectionHeading
          index="05"
          eyebrow="Credentials"
          title="Certifications & education"
        />

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">
              Certifications
            </h3>
            <CredentialList items={certifications} />
          </Reveal>

          <Reveal delay={0.08}>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">
              Education
            </h3>
            <CredentialList items={education} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
