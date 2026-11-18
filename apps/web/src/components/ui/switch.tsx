import * as React from "react";
import { Switch as SwitchPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

function Switch({ className, ...props }: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "inline-flex h-5 w-9 shrink-0 items-center rounded-full border border-border-strong bg-elevated p-px",
        "transition-colors duration-200 data-[state=checked]:border-brand-400 data-[state=checked]:bg-primary",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb className="block size-4 rounded-full bg-muted-foreground transition-transform duration-200 ease-out-expo data-[state=checked]:translate-x-4 data-[state=checked]:bg-white" />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
