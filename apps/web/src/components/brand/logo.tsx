import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * The HireLens mark: an open focus ring around a point of light.
 * A lens that is still adjusting, with the candidate at the centre.
 */
function LogoMark({ className, ...props }: React.ComponentProps<"svg">) {
  const id = React.useId().replace(/[^a-zA-Z0-9_-]/g, "");
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={cn("size-6", className)} {...props}>
      <defs>
        <linearGradient id={id} x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--color-brand-400)" />
          <stop offset="1" stopColor="var(--color-cyan-400)" />
        </linearGradient>
      </defs>
      <circle
        cx="12"
        cy="12"
        r="8.75"
        stroke={`url(#${id})`}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="43 12"
        transform="rotate(-62 12 12)"
      />
      <circle cx="12" cy="12" r="3.25" fill="var(--color-foreground)" />
    </svg>
  );
}

function Logo({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)} {...props}>
      <LogoMark />
      <span className="text-[1.0625rem] font-semibold tracking-tight">HireLens</span>
    </span>
  );
}

export { Logo, LogoMark };
