import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 whitespace-nowrap rounded-sm border px-1.5 py-0.5 text-xs leading-4 font-medium",
  {
    variants: {
      variant: {
        neutral: "border-border-strong bg-elevated text-muted-foreground",
        outline: "border-border-strong bg-transparent text-muted-foreground",
        brand: "border-brand-500/30 bg-brand-500/12 text-brand-300",
        cyan: "border-cyan-400/25 bg-cyan-400/10 text-cyan-300",
        violet: "border-violet-400/25 bg-violet-400/10 text-violet-300",
        success: "border-success/25 bg-success/10 text-success",
        warning: "border-warning/25 bg-warning/10 text-warning",
        danger: "border-danger/25 bg-danger/10 text-danger",
      },
    },
    defaultVariants: { variant: "neutral" },
  },
);

type BadgeProps = React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    /** Small status dot before the label. */
    dot?: boolean;
  };

function Badge({ className, variant, dot = false, children, ...props }: BadgeProps) {
  return (
    <span data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props}>
      {dot ? <span className="size-1.5 rounded-full bg-current" aria-hidden="true" /> : null}
      {children}
    </span>
  );
}

export { Badge, badgeVariants };
