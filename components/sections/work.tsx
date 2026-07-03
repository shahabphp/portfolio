import { products } from "@/lib/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";

export function Work() {
  return (
    <section
      id="work"
      className="scroll-mt-24 border-t border-border py-[var(--spacing-section)]"
    >
      <div className="container-editorial">
        <SectionHeading
          index="03"
          eyebrow="Work"
          title="Selected products"
        />

        <ol className="mt-16 border-t border-border">
          {products.map((product, i) => (
            <Reveal as="li" key={product.name} delay={Math.min(i, 4) * 0.04}>
              <div className="group flex flex-col gap-2 border-b border-border py-6 transition-colors hover:bg-surface/30 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-2">
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <span className="font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-medium tracking-tight text-foreground md:text-xl">
                    {product.name}
                  </h3>
                </div>
                <span className="pl-8 font-mono text-xs uppercase tracking-[0.16em] text-subtle sm:pl-0 sm:text-right">
                  {product.role}
                </span>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
