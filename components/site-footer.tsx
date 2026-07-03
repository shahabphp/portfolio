import { site } from "@/lib/site";
import { identity } from "@/lib/portfolio";

const year = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="container-editorial flex flex-col gap-4 py-10 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {identity.name}
        </p>
        <p className="font-mono text-xs uppercase tracking-[0.18em]">
          {identity.location} · {identity.availability}
        </p>
        <a
          href={`mailto:${site.email}`}
          className="transition-colors hover:text-foreground"
        >
          {site.email}
        </a>
      </div>
    </footer>
  );
}
