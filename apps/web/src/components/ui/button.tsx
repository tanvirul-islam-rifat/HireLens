import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { LoaderCircle } from "lucide-react";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex shrink-0 select-none items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium",
    "transition-[background-color,border-color,color,box-shadow,transform] duration-150 ease-standard",
    "active:translate-y-px disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ],
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-button hover:bg-brand-400 active:bg-brand-600",
        secondary:
          "border border-border-strong bg-elevated text-foreground shadow-raised hover:border-subtle hover:bg-overlay",
        outline:
          "border border-border-strong bg-transparent text-foreground hover:border-subtle hover:bg-surface",
        ghost: "text-muted-foreground hover:bg-elevated hover:text-foreground",
        destructive: "bg-danger text-black shadow-button hover:bg-danger/85",
        link: "h-auto rounded-xs p-0 text-brand-300 underline-offset-4 hover:underline active:translate-y-0",
      },
      size: {
        sm: "h-8 px-3 text-[0.8125rem]",
        md: "h-9 px-3.5 text-sm",
        lg: "h-11 px-5 text-[0.9375rem]",
        icon: "size-9",
      },
    },
    compoundVariants: [{ variant: "link", class: "h-auto px-0" }],
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    /** Render the child element (for example a router Link) with button styles. */
    asChild?: boolean;
    /** Show a spinner and block clicks. */
    loading?: boolean;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  loading = false,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (asChild) {
    return (
      <Slot.Root
        data-slot="button"
        className={classes}
        {...(props as React.HTMLAttributes<HTMLElement>)}
      >
        {children}
      </Slot.Root>
    );
  }

  return (
    <button
      data-slot="button"
      type="button"
      className={classes}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? <LoaderCircle className="animate-spin" aria-hidden="true" /> : null}
      {children}
    </button>
  );
}

export { Button, buttonVariants };
export type { ButtonProps };
