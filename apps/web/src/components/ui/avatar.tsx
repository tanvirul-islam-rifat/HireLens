import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Avatar as AvatarPrimitive } from "radix-ui";

import { cn, initials } from "@/lib/utils";

const avatarVariants = cva(
  "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full font-medium select-none",
  {
    variants: {
      size: {
        xs: "size-5 text-[0.5625rem]",
        sm: "size-6 text-[0.625rem]",
        md: "size-8 text-xs",
        lg: "size-10 text-sm",
      },
      tone: {
        neutral: "bg-overlay text-muted-foreground",
        brand: "bg-brand-500/20 text-brand-300",
        cyan: "bg-cyan-400/15 text-cyan-300",
        violet: "bg-violet-400/15 text-violet-300",
        success: "bg-success/15 text-success",
        warning: "bg-warning/15 text-warning",
      },
    },
    defaultVariants: { size: "md", tone: "neutral" },
  },
);

type AvatarTone = NonNullable<VariantProps<typeof avatarVariants>["tone"]>;

type AvatarProps = Omit<React.ComponentProps<typeof AvatarPrimitive.Root>, "children"> &
  VariantProps<typeof avatarVariants> & {
    /** Full name. Used for the initials fallback and the image alt text. */
    name: string;
    src?: string;
  };

function Avatar({ name, src, size, tone, className, ...props }: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(avatarVariants({ size, tone }), className)}
      {...props}
    >
      {src ? <AvatarPrimitive.Image src={src} alt={name} className="size-full object-cover" /> : null}
      <AvatarPrimitive.Fallback delayMs={src ? 300 : 0} aria-label={name}>
        {initials(name)}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
}

/** Overlapping row of avatars, for "who is on this job". */
function AvatarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex -space-x-1 [&>[data-slot=avatar]]:ring-2 [&>[data-slot=avatar]]:ring-surface", className)}
      {...props}
    />
  );
}

export { Avatar, AvatarGroup, avatarVariants };
export type { AvatarTone };
