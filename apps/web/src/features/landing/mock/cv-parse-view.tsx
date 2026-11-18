import { FileText, TriangleAlert } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const fields = [
  { label: "Name", value: "Nusrat Jahan", confidence: 99 },
  { label: "Email", value: "nusrat.jahan@example.com", confidence: 99 },
  { label: "Latest role", value: "Frontend Engineer, Nodi Labs", confidence: 93 },
  { label: "Dates", value: "Jan 2023 to present", confidence: 71 },
  { label: "Skills", value: "React, TypeScript, Tailwind CSS, Node.js", confidence: 95 },
  { label: "Education", value: "BSc in Computer Science, 2022", confidence: 96 },
];

/** A stylised CV page: grey bars for text, with the parsed lines tinted. */
function DocumentPreview() {
  const lines = [
    { w: "w-2/5", h: "h-3", tone: "bg-brand-400/70" },
    { w: "w-3/5", h: "h-1.5", tone: "bg-brand-400/35" },
    { w: "w-0", h: "h-2", tone: "" },
    { w: "w-1/4", h: "h-2", tone: "bg-muted-foreground/50" },
    { w: "w-4/5", h: "h-1.5", tone: "bg-cyan-400/45" },
    { w: "w-11/12", h: "h-1.5", tone: "bg-border-strong" },
    { w: "w-3/4", h: "h-1.5", tone: "bg-border-strong" },
    { w: "w-2/3", h: "h-1.5", tone: "bg-warning/50" },
    { w: "w-0", h: "h-2", tone: "" },
    { w: "w-1/4", h: "h-2", tone: "bg-muted-foreground/50" },
    { w: "w-10/12", h: "h-1.5", tone: "bg-violet-400/45" },
    { w: "w-7/12", h: "h-1.5", tone: "bg-violet-400/45" },
    { w: "w-0", h: "h-2", tone: "" },
    { w: "w-1/4", h: "h-2", tone: "bg-muted-foreground/50" },
    { w: "w-3/4", h: "h-1.5", tone: "bg-success/45" },
    { w: "w-1/2", h: "h-1.5", tone: "bg-border-strong" },
  ];
  return (
    <div className="rounded-lg border border-border bg-surface p-4" aria-hidden="true">
      <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
        <FileText className="size-3.5" />
        nusrat-jahan-cv.pdf
        <span className="ml-auto text-subtle">2 pages</span>
      </div>
      <div className="grid gap-2 rounded-md bg-elevated p-4">
        {lines.map((line, index) => (
          <div key={index} className={cn("rounded-full", line.w, line.h, line.tone)} />
        ))}
      </div>
    </div>
  );
}

function CvParseView() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
      <DocumentPreview />
      <div className="rounded-lg border border-border bg-surface">
        <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
          <p className="text-sm font-medium">Parsed profile</p>
          <Badge variant="cyan">6 fields found</Badge>
        </div>
        <dl>
          {fields.map((field) => {
            const low = field.confidence < 80;
            return (
              <div
                key={field.label}
                className="grid grid-cols-[5.5rem_1fr_auto] items-center gap-3 border-b border-border px-4 py-2.5 text-[0.8125rem] last:border-0"
              >
                <dt className="text-subtle">{field.label}</dt>
                <dd className="min-w-0 truncate">{field.value}</dd>
                <dd>
                  <Badge variant={low ? "warning" : "neutral"}>
                    {low ? <TriangleAlert className="size-3" aria-hidden="true" /> : null}
                    {field.confidence}%
                  </Badge>
                </dd>
              </div>
            );
          })}
        </dl>
        <p className="border-t border-border px-4 py-3 text-xs text-muted-foreground">
          Low-confidence fields are flagged. The candidate reviews and corrects everything before it
          is saved.
        </p>
      </div>
    </div>
  );
}

export { CvParseView };
