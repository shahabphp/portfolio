"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";

import { identity, thesis } from "@/lib/portfolio";
import { Button } from "@/components/ui/button";

const words = thesis.headline.split(" ");

export function Hero() {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.06, delayChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : "0.5em" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const fade: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 14 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: reduceMotion ? 0 : 0.5 + i * 0.1,
      },
    }),
  };

  return (
    <section
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24"
      aria-labelledby="hero-heading"
    >
      {/* Subtle editorial backdrop: top-lit aurora + hairline grid. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-aurora" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff0a 1px, transparent 1px), linear-gradient(to bottom, #ffffff0a 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="container-editorial relative w-full">
        <motion.p
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fade}
          className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.24em] text-subtle"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
          {identity.name}
        </motion.p>

        <motion.h1
          id="hero-heading"
          initial="hidden"
          animate="visible"
          variants={container}
          className="mt-8 max-w-[16ch] text-balance text-[2.6rem] font-medium leading-[1.02] tracking-[-0.02em] sm:text-6xl md:text-7xl lg:text-[5.25rem]"
        >
          {words.map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="mr-[0.28em] inline-block overflow-hidden pb-[0.08em] align-bottom"
            >
              <motion.span variants={item} className="inline-block">
                {word}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fade}
          className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
        >
          {thesis.lead}
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fade}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button asChild size="lg">
            <a href="#work">
              View work
              <ArrowUpRight />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#contact">Get in touch</a>
          </Button>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={3}
          variants={fade}
          className="mt-14 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-[0.18em] text-subtle"
        >
          {identity.roles.map((role, i) => (
            <span key={role} className="flex items-center gap-3">
              {i > 0 && <span aria-hidden className="text-faint">/</span>}
              {role}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial="hidden"
        animate="visible"
        custom={4}
        variants={fade}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-subtle transition-colors hover:text-foreground sm:flex"
      >
        Scroll
        <ArrowDown className="size-3.5" />
      </motion.a>
    </section>
  );
}
