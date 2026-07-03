import {
  certifications,
  education,
  languages,
  type Credential,
} from "@/lib/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";

function CredentialList({ items }: { items: Credential[] }) {
  return (
    <ul className="mt-6 space-y-px overflow-hidden rounded-[var(--radius)] border border-border">
      {items.map((item) => (
        <li
          key={item.title}
          className="flex flex-col gap-1 bg-surface/40 px-6 py-5 transition-colors hover:bg-surface-2"
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
          title="Certifications, education & languages"
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">
              Certifications
            </h3>
            <CredentialList items={certifications} />
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">
              Education
            </h3>
            <CredentialList items={education} />
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-3">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">
              Languages
            </h3>
            <ul className="mt-6 space-y-px overflow-hidden rounded-[var(--radius)] border border-border">
              {languages.map((language) => (
                <li
                  key={language.name}
                  className="flex items-center justify-between bg-surface/40 px-6 py-5"
                >
                  <span className="font-medium text-foreground">
                    {language.name}
                  </span>
                  <span className="text-sm text-subtle">{language.level}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
