import * as React from "react";
import { Label as LabelPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

const fieldBase = [
  "w-full rounded-md border border-input bg-background px-3 text-sm text-foreground",
  "placeholder:text-subtle transition-[border-color,box-shadow] duration-150",
  "hover:border-subtle focus-visible:border-ring focus-visible:outline-offset-0",
  "disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-input",
  "aria-invalid:border-danger aria-invalid:focus-visible:outline-danger",
];

function Input({ className, type = "text", ...props }: React.ComponentProps<"input">) {
  return <input data-slot="input" type={type} className={cn(fieldBase, "h-9", className)} {...props} />;
}

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(fieldBase, "min-h-24 py-2 leading-relaxed", className)}
      {...props}
    />
  );
}

function Label({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn("text-sm leading-none font-medium text-foreground", className)}
      {...props}
    />
  );
}

/** Label + control + hint or error, stacked with consistent spacing. */
function Field({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="field" className={cn("grid gap-2", className)} {...props} />;
}

function FieldHint({ className, ...props }: React.ComponentProps<"p">) {
  return <p className={cn("text-[0.8125rem] text-subtle", className)} {...props} />;
}

function FieldError({ className, ...props }: React.ComponentProps<"p">) {
  return <p role="alert" className={cn("text-[0.8125rem] text-danger", className)} {...props} />;
}

export { Input, Textarea, Label, Field, FieldHint, FieldError };
