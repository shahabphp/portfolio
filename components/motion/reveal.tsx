"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds to delay the reveal — used for light staggering across a section. */
  delay?: number;
  /** Render as a different element while keeping the animation. */
  as?: "div" | "section" | "li" | "article" | "header" | "footer";
};

/**
 * Scroll-reveal wrapper: a single, subtle fade + rise as content enters view.
 * Fully disabled under prefers-reduced-motion — content renders in place.
 */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  const variants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: reduceMotion ? 0 : delay,
      },
    },
  };

  return (
    <MotionTag
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}
