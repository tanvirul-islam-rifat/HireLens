/**
 * Lightweight SVG chart primitives for inline data (cards, tables, the
 * landing page). They cost almost nothing to load. The full analytics
 * dashboards in a later phase use Recharts, styled with the same tokens.
 */
import * as React from "react";

import { cn } from "@/lib/utils";

function useSvgId() {
  return React.useId().replace(/[^a-zA-Z0-9_-]/g, "");
}

type SparklineProps = Omit<React.ComponentProps<"svg">, "children"> & {
  data: number[];
  /** Describes the chart for screen readers. */
  label: string;
  area?: boolean;
};

/** Trend line. Colour comes from the current text colour (e.g. `text-cyan-400`). */
function Sparkline({ data, label, area = true, className, ...props }: SparklineProps) {
  const id = useSvgId();
  const width = 240;
  const height = 64;
  const min = Math.min(...data);
  const span = Math.max(...data) - min || 1;
  const step = data.length > 1 ? width / (data.length - 1) : width;
  const line = data
    .map((value, index) => {
      const x = index * step;
      const y = height - 4 - ((value - min) / span) * (height - 8);
      return `${index === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      role="img"
      aria-label={label}
      className={cn("h-16 w-full text-brand-400", className)}
      {...props}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="currentColor" stopOpacity="0.3" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      {area ? <path d={`${line} L${width} ${height} L0 ${height} Z`} fill={`url(#${id})`} /> : null}
      <path
        d={line}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

type RingScoreProps = {
  /** 0 to 100. */
  value: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
  className?: string;
  children?: React.ReactNode;
};

/** Circular score dial. The ring is the HireLens "lens" motif. */
function RingScore({ value, size = 72, strokeWidth = 5, label, className, children }: RingScoreProps) {
  const id = useSvgId();
  const radius = (size - strokeWidth) / 2;
  const length = 2 * Math.PI * radius;
  const clamped = Math.min(100, Math.max(0, value));
  const offset = length * (1 - clamped / 100);

  return (
    <div
      role="img"
      aria-label={label ?? `Score ${clamped} out of 100`}
      className={cn("relative inline-flex items-center justify-center", className)}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90" aria-hidden="true">
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--color-cyan-400)" />
            <stop offset="1" stopColor="var(--color-brand-400)" />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--color-border-strong)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={`url(#${id})`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={length}
          strokeDashoffset={offset}
          className="animate-ring-fill"
          style={{ "--ring-length": length } as React.CSSProperties}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center font-semibold tabular-nums">
        {children ?? clamped}
      </div>
    </div>
  );
}

type BarListItem = {
  label: string;
  value: number;
  /** Text shown on the right. Defaults to the value. */
  display?: string;
  /** Tailwind background class for the bar. */
  barClassName?: string;
};

/** Horizontal bars for ranked or funnel data. */
function BarList({
  items,
  max,
  className,
}: {
  items: BarListItem[];
  max?: number;
  className?: string;
}) {
  const top = max ?? Math.max(...items.map((item) => item.value), 1);
  return (
    <dl className={cn("grid gap-2.5", className)}>
      {items.map((item, index) => (
        <div key={item.label} className="grid grid-cols-[6.5rem_1fr_auto] items-center gap-3 text-[0.8125rem]">
          <dt className="truncate text-muted-foreground">{item.label}</dt>
          <div className="h-1.5 overflow-hidden rounded-full bg-elevated" aria-hidden="true">
            <div
              className={cn(
                "h-full origin-left animate-bar-fill rounded-full bg-brand-400",
                item.barClassName,
              )}
              style={{ width: `${(item.value / top) * 100}%`, animationDelay: `${index * 80}ms` }}
            />
          </div>
          <dd className="min-w-8 text-right font-medium tabular-nums">{item.display ?? item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

type StackedSegment = { label: string; value: number; className: string };

/** One bar split into labelled parts, e.g. the weights of a match score. */
function StackedBar({ segments, className }: { segments: StackedSegment[]; className?: string }) {
  const total = segments.reduce((sum, segment) => sum + segment.value, 0) || 1;
  return (
    <div className={className}>
      <div className="flex h-2 gap-0.5 overflow-hidden rounded-full" aria-hidden="true">
        {segments.map((segment) => (
          <div
            key={segment.label}
            className={cn("h-full first:rounded-l-full last:rounded-r-full", segment.className)}
            style={{ width: `${(segment.value / total) * 100}%` }}
          />
        ))}
      </div>
      <dl className="mt-3 grid grid-cols-[repeat(auto-fit,minmax(11rem,1fr))] gap-x-6 gap-y-1.5 text-[0.8125rem]">
        {segments.map((segment) => (
          <div key={segment.label} className="flex items-center gap-2">
            <span className={cn("size-2 shrink-0 rounded-xs", segment.className)} aria-hidden="true" />
            <dt className="truncate text-muted-foreground">{segment.label}</dt>
            <dd className="ml-auto font-medium tabular-nums">{segment.value}%</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export { Sparkline, RingScore, BarList, StackedBar };
export type { BarListItem, StackedSegment };
