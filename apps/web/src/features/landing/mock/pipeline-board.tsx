import * as React from "react";
import { EyeOff } from "lucide-react";
import { AnimatePresence, LayoutGroup, motion, useInView, useReducedMotion } from "motion/react";

import { Avatar, AvatarGroup, type AvatarTone } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { spring } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Candidate = {
  id: string;
  name: string;
  role: string;
  score: number;
  skills: string[];
  tone: AvatarTone;
};

const focus: Candidate = {
  id: "nusrat",
  name: "Nusrat Jahan",
  role: "Frontend engineer, 3 yrs",
  score: 87,
  skills: ["React", "TypeScript"],
  tone: "brand",
};
const mover: Candidate = {
  id: "rafid",
  name: "Rafid Karim",
  role: "UI engineer, 4 yrs",
  score: 81,
  skills: ["React", "Next.js"],
  tone: "cyan",
};

const applied: Candidate[] = [
  { id: "tanvir", name: "Tanvir Alam", role: "Web developer, 2 yrs", score: 72, skills: ["Vue", "JavaScript"], tone: "violet" },
  { id: "sadia", name: "Sadia Rahman", role: "Junior developer, 1 yr", score: 68, skills: ["React", "CSS"], tone: "warning" },
  { id: "imran", name: "Imran Chowdhury", role: "Full-stack, 5 yrs", score: 61, skills: ["Angular", "Node.js"], tone: "neutral" },
  { id: "priya", name: "Priya Das", role: "Frontend intern", score: 54, skills: ["HTML", "JavaScript"], tone: "success" },
];
const screeningRest: Candidate[] = [
  { id: "farhan", name: "Farhan Hossain", role: "Frontend engineer, 2 yrs", score: 74, skills: ["React", "Redux"], tone: "violet" },
  { id: "mehnaz", name: "Mehnaz Akter", role: "React developer, 3 yrs", score: 70, skills: ["React", "Jest"], tone: "success" },
];
const interview: Candidate[] = [
  { id: "anika", name: "Anika Sultana", role: "Senior frontend, 6 yrs", score: 90, skills: ["React", "GraphQL"], tone: "success" },
  { id: "zubair", name: "Zubair Hasan", role: "Frontend engineer, 4 yrs", score: 84, skills: ["TypeScript", "Vite"], tone: "warning" },
];
function scoreTone(score: number) {
  if (score >= 80) return "text-success";
  if (score >= 65) return "text-warning";
  return "text-muted-foreground";
}

function CandidateCard({ candidate, focused = false }: { candidate: Candidate; focused?: boolean }) {
  return (
    <motion.div
      layout
      layoutId={`card-${candidate.id}`}
      transition={spring}
      className={cn(
        "rounded-md border bg-elevated p-2.5",
        focused ? "border-brand-400 shadow-glow" : "border-border-strong shadow-raised",
      )}
    >
      <div className="flex items-center gap-2">
        <Avatar name={candidate.name} size="sm" tone={candidate.tone} />
        <div className="min-w-0 flex-1">
          <p className="truncate text-[0.8125rem] leading-tight font-medium">{candidate.name}</p>
          <p className="truncate text-2xs text-subtle">{candidate.role}</p>
        </div>
        <span className="relative flex size-7 shrink-0 items-center justify-center">
          {focused ? (
            <span className="absolute inset-0 animate-lens rounded-full border border-brand-400" />
          ) : null}
          <span
            className={cn(
              "flex size-7 items-center justify-center rounded-full border text-2xs font-semibold tabular-nums",
              focused ? "border-brand-400 bg-brand-500/15 text-brand-300" : "border-border-strong",
              !focused && scoreTone(candidate.score),
            )}
          >
            {candidate.score}
          </span>
        </span>
      </div>
      <div className="mt-2 flex gap-1">
        {candidate.skills.map((skill) => (
          <span key={skill} className="rounded-xs bg-overlay px-1.5 py-0.5 text-2xs text-muted-foreground">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

/**
 * Miniature live Kanban board for the hero. One card moves from Screening to
 * Interview on a loop to show the real-time pipeline. It is a picture of the
 * product, so the whole thing is exposed to screen readers as one image.
 */
function PipelineBoard({ className }: { className?: string }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.25 });
  const reduce = useReducedMotion();
  const [moved, setMoved] = React.useState(false);

  React.useEffect(() => {
    if (!inView || reduce) return;
    const timer = window.setTimeout(() => setMoved((value) => !value), moved ? 5200 : 2800);
    return () => window.clearTimeout(timer);
  }, [inView, reduce, moved]);

  const columns = [
    { id: "applied", name: "Applied", count: 18, dot: "bg-subtle", cards: applied },
    {
      id: "screening",
      name: "Screening",
      count: moved ? 8 : 9,
      dot: "bg-brand-400",
      cards: moved ? [focus, ...screeningRest] : [focus, mover, ...screeningRest],
    },
    {
      id: "interview",
      name: "Interview",
      count: moved ? 6 : 5,
      dot: "bg-cyan-400",
      cards: moved ? [mover, ...interview] : interview,
    },
  ];

  return (
    <div
      ref={ref}
      role="img"
      aria-label="HireLens pipeline board for a Frontend Engineer job, with candidates in Applied, Screening and Interview columns. A teammate moves a candidate to Interview and the board updates live."
      className={cn(
        "overflow-hidden rounded-xl border border-border-strong bg-surface shadow-overlay",
        className,
      )}
    >
      <div className="flex h-12 items-center gap-3 border-b border-border px-4">
        <p className="text-sm font-semibold tracking-tight">Frontend Engineer</p>
        <span className="hidden text-xs text-subtle lg:inline">Dhaka, hybrid</span>
        <Badge variant="success" dot>
          Published
        </Badge>
        <div className="ml-auto flex items-center gap-3">
          <AnimatePresence>
            {moved ? (
              <motion.p
                key="activity"
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="hidden text-xs text-muted-foreground xl:block"
              >
                <span className="font-medium text-foreground">Maliha</span> moved Rafid Karim to
                Interview
              </motion.p>
            ) : null}
          </AnimatePresence>
          <span className="hidden items-center gap-1.5 text-xs text-muted-foreground lg:flex">
            <EyeOff className="size-3.5" />
            Blind review off
          </span>
          <AvatarGroup>
            <Avatar name="Maliha Islam" size="sm" tone="violet" />
            <Avatar name="Omar Faruk" size="sm" tone="cyan" />
            <Avatar name="Rima Khan" size="sm" tone="brand" />
          </AvatarGroup>
        </div>
      </div>

      <LayoutGroup>
        {/* Right padding leaves room for the match panel that overlaps this corner.
            Tablet shows two columns, desktop three. */}
        <div className="mask-fade-b grid h-[27rem] grid-cols-2 gap-3 p-3 pr-[22.5rem] lg:grid-cols-3 lg:pr-[19.75rem] xl:pr-[19rem]">
          {columns.map((column) => (
            <div
              key={column.id}
              className={cn(
                "min-w-0 rounded-lg bg-background/60 p-2",
                column.id === "applied" && "hidden lg:block",
              )}
            >
              <div className="flex items-center gap-2 px-1 pt-0.5 pb-2.5">
                <span className={cn("size-1.5 rounded-full", column.dot)} />
                <p className="text-xs font-medium">{column.name}</p>
                <p className="text-xs text-subtle tabular-nums">{column.count}</p>
              </div>
              <div className="grid gap-2">
                {column.cards.map((candidate) => (
                  <CandidateCard
                    key={candidate.id}
                    candidate={candidate}
                    focused={candidate.id === focus.id}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </LayoutGroup>
    </div>
  );
}

export { PipelineBoard };
