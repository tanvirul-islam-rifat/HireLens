import * as React from "react";
import { ArrowUp, Check, Wrench } from "lucide-react";

import { Avatar, type AvatarTone } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toaster";

const results: { name: string; detail: string; score: number; tone: AvatarTone }[] = [
  { name: "Nusrat Jahan", detail: "React, 3 yrs", score: 87, tone: "brand" },
  { name: "Rafid Karim", detail: "React, 4 yrs", score: 81, tone: "cyan" },
  { name: "Farhan Hossain", detail: "React, 2 yrs", score: 74, tone: "violet" },
];

function UserMessage({ children }: { children: React.ReactNode }) {
  return (
    <p className="ml-auto max-w-[85%] rounded-lg rounded-br-xs bg-overlay px-3 py-2 text-[0.8125rem] leading-relaxed sm:max-w-[70%]">
      {children}
    </p>
  );
}

function ToolCall({ name, note }: { name: string; note: string }) {
  return (
    <p className="flex items-center gap-2 text-xs text-subtle">
      <Wrench className="size-3.5" aria-hidden="true" />
      <code className="rounded-xs bg-elevated px-1.5 py-0.5 font-mono text-2xs text-cyan-300">{name}</code>
      {note}
    </p>
  );
}

/**
 * The recruiter assistant, including the confirm card that guards every
 * write action. The confirm button really works here so visitors can feel it.
 */
function AssistantView() {
  const [confirmed, setConfirmed] = React.useState(false);

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-3.5">
      <UserMessage>
        Show React candidates for the Frontend job with 2+ years who haven’t been contacted
      </UserMessage>

      <ToolCall name="search_candidates" note="3 results, limited to your organisation" />

      <ul className="rounded-lg border border-border bg-surface">
        {results.map((row) => (
          <li
            key={row.name}
            className="flex items-center gap-3 border-b border-border px-3 py-2 text-[0.8125rem] last:border-0"
          >
            <Avatar name={row.name} size="sm" tone={row.tone} />
            <span className="font-medium">{row.name}</span>
            <span className="hidden text-subtle sm:inline">{row.detail}</span>
            <span className="ml-auto font-medium text-success tabular-nums">{row.score}</span>
          </li>
        ))}
      </ul>

      <UserMessage>Move them to Interview</UserMessage>

      <ToolCall name="move_stage" note="needs your confirmation" />

      <div className="rounded-lg border border-brand-500/40 bg-brand-500/8 p-4">
        {confirmed ? (
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex size-7 items-center justify-center rounded-full bg-success/15 text-success">
              <Check className="size-4" aria-hidden="true" />
            </span>
            <p className="text-sm font-medium">Moved 3 applications to Interview</p>
            <Button variant="link" size="sm" className="ml-auto" onClick={() => setConfirmed(false)}>
              Replay
            </Button>
          </div>
        ) : (
          <>
            <p className="text-sm font-medium">Move 3 applications to Interview?</p>
            <p className="mt-1 text-[0.8125rem] text-muted-foreground">
              Nusrat Jahan, Rafid Karim and Farhan Hossain. Nothing changes until you confirm, and
              the action is written to the audit log.
            </p>
            <div className="mt-3.5 flex gap-2">
              <Button
                size="sm"
                onClick={() => {
                  setConfirmed(true);
                  toast.success("Moved 3 applications to Interview");
                }}
              >
                Move to Interview
              </Button>
              <Button size="sm" variant="ghost">
                Cancel
              </Button>
            </div>
          </>
        )}
      </div>

      <div
        className="mt-1 flex h-10 items-center justify-between rounded-lg border border-border-strong bg-surface pr-1.5 pl-3 text-[0.8125rem] text-subtle"
        aria-hidden="true"
      >
        <span>
          Ask about this job
          <span className="ml-0.5 inline-block h-3.5 w-px translate-y-0.5 animate-caret bg-brand-300" />
        </span>
        <span className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
          <ArrowUp className="size-4" />
        </span>
      </div>
    </div>
  );
}

export { AssistantView };
