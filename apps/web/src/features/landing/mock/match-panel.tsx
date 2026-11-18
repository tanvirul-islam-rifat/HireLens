import * as React from "react";
import { Check, Quote, X } from "lucide-react";
import { useInView } from "motion/react";

import { Avatar } from "@/components/ui/avatar";
import { RingScore } from "@/components/ui/charts";
import { useCountUp } from "@/lib/use-count-up";
import { cn } from "@/lib/utils";

/** The four parts of the HireLens match score and their default weights. */
const parts = [
  { label: "Semantic similarity", got: 40, of: 45, bar: "bg-brand-400" },
  { label: "Skill coverage", got: 31, of: 35, bar: "bg-cyan-400" },
  { label: "Experience fit", got: 8, of: 10, bar: "bg-violet-400" },
  { label: "Screening answers", got: 8, of: 10, bar: "bg-success" },
];

const total = parts.reduce((sum, part) => sum + part.got, 0);

/**
 * "Why this score" card: the signature HireLens idea. A score is never shown
 * without the facts that produced it.
 */
function MatchPanel({ className }: { className?: string }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const score = useCountUp(total, inView, 1400);

  return (
    <div
      ref={ref}
      role="img"
      aria-label={`Match explanation for Nusrat Jahan: ${total} out of 100. Matched skills React, TypeScript and Tailwind CSS. Missing must-have GraphQL. The recruiter makes the decision.`}
      className={cn(
        "relative overflow-hidden rounded-xl border border-border-strong bg-elevated shadow-overlay",
        className,
      )}
    >
      <div className="edge-glow absolute inset-x-0 top-0 h-px" />

      <div className="flex items-center gap-3 p-4">
        <Avatar name="Nusrat Jahan" tone="brand" size="lg" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold">Nusrat Jahan</p>
          <p className="truncate text-xs text-muted-foreground">Applied for Frontend Engineer</p>
        </div>
        <RingScore value={inView ? total : 0} size={56} strokeWidth={4.5} key={String(inView)}>
          <span className="text-base">{score}</span>
        </RingScore>
      </div>

      <div className="border-t border-border px-4 py-3.5">
        <p className="text-xs font-medium text-muted-foreground">Why this score</p>
        <div className="mt-3 grid gap-2.5">
          {parts.map((part, index) => (
            <div key={part.label}>
              <div className="flex items-baseline justify-between text-xs">
                <span>{part.label}</span>
                <span className="text-subtle tabular-nums">
                  <span className="font-medium text-foreground">{part.got}</span> / {part.of}
                </span>
              </div>
              <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-background">
                {inView ? (
                  <div
                    className={cn("h-full origin-left animate-bar-fill rounded-full", part.bar)}
                    style={{
                      width: `${(part.got / part.of) * 100}%`,
                      animationDelay: `${200 + index * 110}ms`,
                    }}
                  />
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 border-t border-border px-4 py-3.5">
        {["React", "TypeScript", "Tailwind CSS"].map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center gap-1 rounded-sm border border-success/25 bg-success/10 px-1.5 py-0.5 text-xs text-success"
          >
            <Check className="size-3" />
            {skill}
          </span>
        ))}
        <span className="inline-flex items-center gap-1 rounded-sm border border-danger/25 bg-danger/10 px-1.5 py-0.5 text-xs text-danger">
          <X className="size-3" />
          GraphQL, must-have
        </span>
      </div>

      <div className="flex gap-2.5 border-t border-border px-4 py-3.5">
        <Quote className="mt-0.5 size-3.5 shrink-0 text-subtle" />
        <p className="text-xs leading-relaxed text-muted-foreground">
          “Led the move of a 40-screen dashboard to React and TypeScript.”
          <span className="text-subtle"> From the CV, page 1</span>
        </p>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-border bg-surface px-4 py-3">
        <p className="text-xs text-muted-foreground">AI suggests. You decide.</p>
        <span className="inline-flex h-7 items-center rounded-md bg-primary px-2.5 text-xs font-medium text-primary-foreground shadow-button">
          Move to Interview
        </span>
      </div>
    </div>
  );
}

export { MatchPanel };
