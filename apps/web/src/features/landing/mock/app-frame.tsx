import * as React from "react";
import { Bot, Briefcase, ChartNoAxesColumn, MessageSquare, Search, Users } from "lucide-react";

import { LogoMark } from "@/components/brand/logo";
import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const nav = [
  { id: "jobs", label: "Jobs", icon: Briefcase },
  { id: "candidates", label: "Candidates", icon: Users },
  { id: "assistant", label: "Assistant", icon: Bot },
  { id: "messages", label: "Messages", icon: MessageSquare },
  { id: "analytics", label: "Analytics", icon: ChartNoAxesColumn },
] as const;

type NavId = (typeof nav)[number]["id"];

/** Product window used by the showcase: top bar, sidebar on large screens, content. */
function AppFrame({
  active,
  crumb,
  children,
  className,
}: {
  active: NavId;
  crumb: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border-strong bg-surface shadow-overlay",
        className,
      )}
    >
      <div className="flex h-12 items-center gap-3 border-b border-border px-4">
        <LogoMark className="size-5" />
        <p className="truncate text-sm">
          <span className="text-subtle">Nodi Labs</span>
          <span className="mx-2 text-subtle">/</span>
          <span className="font-medium">{crumb}</span>
        </p>
        <div className="ml-auto flex items-center gap-3">
          <div className="hidden h-7 w-44 items-center gap-2 rounded-md border border-border bg-background px-2 text-xs text-subtle md:flex">
            <Search className="size-3.5" aria-hidden="true" />
            Search candidates
          </div>
          <Avatar name="Maliha Islam" size="sm" tone="violet" />
        </div>
      </div>
      <div className="grid lg:grid-cols-[12rem_1fr]">
        <aside className="hidden border-r border-border p-2 lg:block" aria-hidden="true">
          {nav.map((item) => (
            <div
              key={item.id}
              className={cn(
                "flex items-center gap-2.5 rounded-md px-2.5 py-2 text-[0.8125rem]",
                item.id === active
                  ? "bg-overlay font-medium text-foreground"
                  : "text-muted-foreground",
              )}
            >
              <item.icon className={cn("size-4", item.id === active ? "text-brand-300" : "text-subtle")} />
              {item.label}
            </div>
          ))}
        </aside>
        <div className="min-w-0 bg-background/40 p-4 sm:p-5 lg:min-h-[31rem]">{children}</div>
      </div>
    </div>
  );
}

export { AppFrame };
export type { NavId };
