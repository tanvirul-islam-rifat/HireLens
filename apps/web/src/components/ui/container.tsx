import * as React from "react";

import { cn } from "@/lib/utils";

/** Centres content at the page width with responsive side gutters. */
function Container({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="container"
      className={cn("mx-auto w-full max-w-page px-gutter", className)}
      {...props}
    />
  );
}

/** A full-width band of the page with the standard vertical rhythm. */
function Section({ className, ...props }: React.ComponentProps<"section">) {
  return <section data-slot="section" className={cn("py-section", className)} {...props} />;
}

type SectionHeadingProps = Omit<React.ComponentProps<"div">, "title"> & {
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
};

/** Heading + supporting sentence used at the top of every landing section. */
function SectionHeading({
  title,
  description,
  align = "left",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}
      {...props}
    >
      <h2 className="type-h2">{title}</h2>
      {description ? <p className="type-lead mt-4 text-muted-foreground">{description}</p> : null}
    </div>
  );
}

/** Title row for app pages: title, description, and actions on the right. */
function PageHeader({
  title,
  description,
  actions,
  className,
  ...props
}: Omit<React.ComponentProps<"div">, "title"> & {
  title: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between",
        className,
      )}
      {...props}
    >
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        {description ? <p className="mt-1 text-sm text-muted-foreground">{description}</p> : null}
      </div>
      {actions ? <div className="flex flex-wrap gap-2">{actions}</div> : null}
    </div>
  );
}

export { Container, Section, SectionHeading, PageHeader };
