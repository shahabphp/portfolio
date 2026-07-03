"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { sections } from "@/lib/portfolio";
import { Button } from "@/components/ui/button";

/**
 * Fixed, glass-thin header. Reveals a hairline + backdrop blur after the hero
 * scrolls past, tracks the active section, and offers a jump-to-contact CTA.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    for (const { id } of sections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="container-editorial flex h-16 items-center justify-between">
        <a
          href="#top"
          className="font-mono text-sm tracking-tight text-foreground transition-opacity hover:opacity-70"
        >
          Shahab P.
          <span className="text-accent">.</span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm">
            {sections
              .filter((s) => s.id !== "contact")
              .map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    aria-current={active === s.id ? "true" : undefined}
                    className={cn(
                      "relative py-1 transition-colors",
                      active === s.id
                        ? "text-foreground"
                        : "text-muted hover:text-foreground",
                    )}
                  >
                    {s.label}
                    {active === s.id && (
                      <span className="absolute -bottom-0.5 left-0 h-px w-full bg-accent" />
                    )}
                  </a>
                </li>
              ))}
          </ul>
        </nav>

        <Button asChild size="sm" variant="outline">
          <a href="#contact">Get in touch</a>
        </Button>
      </div>
    </header>
  );
}
