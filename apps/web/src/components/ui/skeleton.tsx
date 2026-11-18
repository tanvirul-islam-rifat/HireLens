import * as React from "react";

import { cn } from "@/lib/utils";

/** Placeholder block shown while content loads. Size it with className. */
function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      aria-hidden="true"
      className={cn("skeleton-sheen animate-shimmer rounded-md bg-elevated", className)}
      {...props}
    />
  );
}

export { Skeleton };
