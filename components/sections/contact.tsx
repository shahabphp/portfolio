import { ArrowUpRight } from "lucide-react";

import { site } from "@/lib/site";
import { identity } from "@/lib/portfolio";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

const socials = [
  { label: "Email", href: `mailto:${site.email}`, value: site.email },
  { label: "GitHub", href: site.links.github, value: "github.com/pakshekar" },
  { label: "X", href: site.links.x, value: "x.com/pakshekar" },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-border py-[var(--spacing-section)]"
    >
      <div className="container-editorial">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <Reveal>
              <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-subtle">
                <span className="text-accent">06</span>
                <span aria-hidden className="h-px w-8 bg-border-strong" />
                Contact
              </p>
              <h2 className="mt-6 max-w-2xl text-balance text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
                Let&rsquo;s build something worth shipping.
              </h2>
              <p className="mt-6 max-w-lg text-pretty text-lg text-muted">
                {identity.location} · {identity.availability}.
              </p>
            </Reveal>

            <Reveal delay={0.08} className="mt-10">
              <Button asChild size="lg">
                <a href={`mailto:${site.email}`}>
                  {site.email}
                  <ArrowUpRight />
                </a>
              </Button>
            </Reveal>
          </div>

          <div className="md:col-span-5 md:pl-8">
            <Reveal delay={0.12}>
              <ul className="space-y-px overflow-hidden rounded-[var(--radius)] border border-border">
                {socials.map((link) => {
                  const external = !link.href.startsWith("mailto:");
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...(external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="group flex items-center justify-between bg-surface/40 px-6 py-5 transition-colors hover:bg-surface-2"
                      >
                        <span>
                          <span className="block font-mono text-[0.7rem] uppercase tracking-[0.2em] text-subtle">
                            {link.label}
                          </span>
                          <span className="mt-1 block text-foreground">
                            {link.value}
                          </span>
                        </span>
                        <ArrowUpRight className="size-4 text-subtle transition-colors group-hover:text-accent" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
