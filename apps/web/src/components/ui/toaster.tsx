import * as React from "react";
import { Toaster as Sonner, toast } from "sonner";

/**
 * App-wide toast host. Mount once in App.tsx, then call `toast("Saved")`,
 * `toast.success(...)` or `toast.error(...)` from anywhere.
 */
function Toaster(props: React.ComponentProps<typeof Sonner>) {
  return (
    <Sonner
      theme="dark"
      position="bottom-right"
      style={
        {
          "--normal-bg": "var(--color-elevated)",
          "--normal-text": "var(--color-foreground)",
          "--normal-border": "var(--color-border-strong)",
          "--border-radius": "var(--radius-lg)",
          fontFamily: "var(--font-sans)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
}

export { Toaster, toast };
