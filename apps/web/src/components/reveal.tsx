import * as React from "react";
import { motion } from "motion/react";

import { duration, ease } from "@/lib/motion";

/**
 * Fades content up the first time it scrolls into view.
 * Use it on a section's main blocks, not on every small element.
 */
function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: duration.slower, ease: ease.outExpo, delay }}
    >
      {children}
    </motion.div>
  );
}

export { Reveal };
