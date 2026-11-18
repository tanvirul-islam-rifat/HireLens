/**
 * Motion tokens. These mirror the easing and timing values in
 * styles/tokens.css so CSS transitions and Motion animations feel the same.
 */
import type { Transition, Variants } from "motion/react";

type Bezier = [number, number, number, number];

export const ease: { standard: Bezier; outExpo: Bezier } = {
  standard: [0.2, 0, 0, 1],
  outExpo: [0.16, 1, 0.3, 1],
};

/** Seconds. */
export const duration = {
  fast: 0.12,
  base: 0.2,
  slow: 0.32,
  slower: 0.6,
} as const;

/** Used when something physically moves (Kanban cards, tab indicators). */
export const spring: Transition = { type: "spring", stiffness: 420, damping: 38, mass: 0.9 };

/** Parent that reveals its children one after another. */
export function stagger(delayChildren = 0, staggerChildren = 0.08): Variants {
  return {
    hidden: {},
    visible: { transition: { delayChildren, staggerChildren } },
  };
}

/** Child of `stagger`: fade up into place. */
export const rise: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: duration.slower, ease: ease.outExpo } },
};
