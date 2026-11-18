import * as React from "react";
import {
  Bot,
  ChartNoAxesColumn,
  EyeOff,
  FileText,
  Radio,
  SlidersHorizontal,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Sparkline, StackedBar } from "@/components/ui/charts";
import { Container, Section, SectionHeading } from "@/components/ui/container";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

function Cell({
  icon: Icon,
  title,
  body,
  wide = false,
  className,
  children,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
  /** Text on the left, visual on the right (large screens). */
  wide?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <article
      className={cn(
        "flex min-w-0 flex-col bg-background p-6 lg:p-8",
        wide && "lg:flex-row lg:items-center lg:gap-14",
        className,
      )}
    >
      <div className={cn(wide && "lg:flex-1")}>
        <Icon className="size-5 text-brand-300" aria-hidden="true" />
        <h3 className="type-h3 mt-4">{title}</h3>
        <p className="mt-2 max-w-md text-[0.9375rem] leading-relaxed text-muted-foreground">{body}</p>
      </div>
      <div className={cn("mt-auto pt-7", wide && "lg:mt-0 lg:flex-1 lg:pt-0")}>{children}</div>
    </article>
  );
}

function ActivityFeed() {
  const items = [
    { who: "Maliha Islam", tone: "violet", text: "moved Rafid Karim to Interview", when: "now" },
    { who: "Omar Faruk", tone: "cyan", text: "added a note on Nusrat Jahan", when: "2m" },
    { who: "Rima Khan", tone: "brand", text: "was mentioned by Omar", when: "5m" },
  ] as const;
  return (
    <div className="rounded-lg border border-border bg-surface">
      <div className="flex items-center justify-between border-b border-border px-3.5 py-2.5">
        <p className="text-xs font-medium text-muted-foreground">Frontend Engineer</p>
        <Badge variant="success" dot>
          Live
        </Badge>
      </div>
      <ul>
        {items.map((item) => (
          <li
            key={item.text}
            className="flex items-center gap-2.5 border-b border-border px-3.5 py-2.5 text-[0.8125rem] last:border-0"
          >
            <Avatar name={item.who} size="sm" tone={item.tone} />
            <p className="min-w-0 flex-1 truncate">
              <span className="font-medium">{item.who.split(" ")[0]}</span>{" "}
              <span className="text-muted-foreground">{item.text}</span>
            </p>
            <span className="text-xs text-subtle">{item.when}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ToolList() {
  const tools = [
    { name: "search_candidates", kind: "Read", variant: "neutral" },
    { name: "compare_candidates", kind: "Read", variant: "neutral" },
    { name: "draft_email", kind: "Draft", variant: "cyan" },
    { name: "move_stage", kind: "You confirm", variant: "brand" },
  ] as const;
  return (
    <ul className="grid gap-1.5">
      {tools.map((tool) => (
        <li
          key={tool.name}
          className="flex items-center justify-between gap-3 rounded-md border border-border bg-surface px-3 py-2"
        >
          <code className="truncate font-mono text-xs text-muted-foreground">{tool.name}</code>
          <Badge variant={tool.variant}>{tool.kind}</Badge>
        </li>
      ))}
    </ul>
  );
}

/** Working demo of blind review: flip the switch and the identity details go. */
function BlindDemo() {
  const [blind, setBlind] = React.useState(true);
  const id = React.useId();
  const redact = (text: string, width: string) =>
    blind ? (
      <span className={cn("inline-block h-3 rounded-xs bg-overlay align-middle", width)}>
        <span className="sr-only">Hidden</span>
      </span>
    ) : (
      text
    );

  return (
    <div className="rounded-lg border border-border bg-surface">
      <div className="flex items-center justify-between gap-3 border-b border-border px-3.5 py-2.5">
        <label htmlFor={id} className="text-[0.8125rem] font-medium">
          Blind review
        </label>
        <Switch id={id} checked={blind} onCheckedChange={setBlind} />
      </div>
      <div className="flex items-center gap-3 px-3.5 py-3">
        <span
          className={cn(
            "flex size-9 shrink-0 items-center justify-center rounded-full text-xs font-medium transition-colors duration-200",
            blind ? "bg-overlay text-subtle" : "bg-brand-500/20 text-brand-300",
          )}
        >
          {blind ? <EyeOff className="size-4" aria-hidden="true" /> : "NJ"}
        </span>
        <div className="min-w-0 flex-1 text-[0.8125rem]">
          <p className="font-medium">{redact("Nusrat Jahan", "w-24")}</p>
          <p className="mt-0.5 text-xs text-subtle">
            {redact("Padma University, Dhaka", "w-36")}
          </p>
        </div>
      </div>
      <p className="border-t border-border px-3.5 py-2.5 text-xs text-muted-foreground">
        React, TypeScript, 3 years. Skills and experience always stay visible.
      </p>
    </div>
  );
}

function Features() {
  return (
    <Section id="features" className="border-t border-border bg-surface/30">
      <Container>
        <Reveal>
          <SectionHeading
            title="Built to explain itself"
            description="Every score comes with its reasons, and every AI action waits for a person."
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-6">
            <Cell
              icon={SlidersHorizontal}
              title="Explainable Candidate Matching"
              body="A score out of 100 built from four parts you can see. Matched skills, missing must-haves and the CV lines behind each one are listed next to it."
              className="lg:col-span-3"
            >
              <StackedBar
                segments={[
                  { label: "Semantic similarity", value: 45, className: "bg-brand-400" },
                  { label: "Skill coverage", value: 35, className: "bg-cyan-400" },
                  { label: "Experience fit", value: 10, className: "bg-violet-400" },
                  { label: "Screening answers", value: 10, className: "bg-success" },
                ]}
              />
              <p className="mt-3 text-xs text-subtle">Default weights. Change them for each job.</p>
            </Cell>

            <Cell
              icon={Radio}
              title="Real-time Recruitment Pipeline"
              body="A Kanban board per job. When a teammate moves a card or leaves a note, it shows up on your screen straight away."
              className="lg:col-span-3"
            >
              <ActivityFeed />
            </Cell>

            <Cell
              icon={FileText}
              title="AI CV Intelligence"
              body="Upload a PDF or Word file and the profile fills itself in. Uncertain fields are flagged for the candidate to check."
              className="lg:col-span-2"
            >
              <div className="flex items-center gap-3 rounded-lg border border-border bg-surface px-3.5 py-3 text-[0.8125rem]">
                <FileText className="size-4 shrink-0 text-subtle" aria-hidden="true" />
                <span className="min-w-0 flex-1 truncate">nusrat-cv.pdf</span>
                <Badge variant="success">5 filled</Badge>
                <Badge variant="warning">1 to check</Badge>
              </div>
            </Cell>

            <Cell
              icon={Bot}
              title="AI Recruiting Assistant"
              body="Ask in plain language. It searches, compares and drafts using only what you are allowed to see, and asks before it changes anything."
              className="lg:col-span-2"
            >
              <ToolList />
            </Cell>

            <Cell
              icon={EyeOff}
              title="Blind Recruitment"
              body="Hide name, photo, gender, age, university and address while screening. The AI never sees them either. Try the switch."
              className="md:col-span-2 lg:col-span-2"
            >
              <BlindDemo />
            </Cell>

            <Cell
              icon={ChartNoAxesColumn}
              title="Intelligent Analytics"
              body="See where candidates drop off, how long each stage takes and which source brings your best applicants."
              wide
              className="md:col-span-2 lg:col-span-6"
            >
              <div className="rounded-lg border border-border bg-surface p-4">
                <div className="flex items-baseline justify-between">
                  <p className="text-xs text-muted-foreground">Time to hire</p>
                  <p className="text-xs text-subtle">Last 6 months</p>
                </div>
                <p className="mt-1 text-2xl font-semibold tracking-tight tabular-nums">18 days</p>
                <Sparkline
                  className="mt-2 text-brand-400"
                  label="Time to hire falling from 31 days to 18 days over six months"
                  data={[31, 29, 30, 26, 24, 25, 21, 22, 19, 18]}
                />
              </div>
            </Cell>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export { Features };
