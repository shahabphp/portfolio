import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Work } from "@/components/sections/work";
import { Skills } from "@/components/sections/skills";
import { Credentials } from "@/components/sections/credentials";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <span id="top" className="sr-only" aria-hidden />
        <Hero />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Credentials />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
