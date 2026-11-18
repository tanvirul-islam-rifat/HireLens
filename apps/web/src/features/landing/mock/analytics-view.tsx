import { BarList, Sparkline } from "@/components/ui/charts";

const stats = [
  { label: "Time to hire", value: "18 days", note: "4 days faster than last quarter" },
  { label: "Applicants", value: "42", note: "This job, all sources" },
  { label: "Screening to interview", value: "50%", note: "9 of 18 moved forward" },
];

function AnalyticsView() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-surface px-4 py-3.5">
            <dt className="text-xs text-muted-foreground">{stat.label}</dt>
            <dd className="mt-1 text-2xl font-semibold tracking-tight tabular-nums">{stat.value}</dd>
            <dd className="mt-0.5 text-xs text-subtle">{stat.note}</dd>
          </div>
        ))}
      </dl>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-border bg-surface p-4">
          <p className="text-sm font-medium">Hiring funnel</p>
          <p className="mt-0.5 text-xs text-subtle">Applicants who reached each stage</p>
          <BarList
            className="mt-4"
            items={[
              { label: "Applied", value: 42 },
              { label: "Screening", value: 18 },
              { label: "Interview", value: 9, barClassName: "bg-cyan-400" },
              { label: "Offer", value: 3, barClassName: "bg-violet-400" },
              { label: "Hired", value: 1, barClassName: "bg-success" },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="rounded-lg border border-border bg-surface p-4">
            <div className="flex items-baseline justify-between">
              <p className="text-sm font-medium">Applicants per week</p>
              <p className="text-xs text-subtle">Last 10 weeks</p>
            </div>
            <Sparkline
              className="mt-3 h-20 text-cyan-400"
              label="Applicants per week over the last 10 weeks, rising from 2 to 9"
              data={[2, 3, 3, 5, 4, 6, 5, 8, 7, 9]}
            />
          </div>
          <div className="rounded-lg border border-border bg-surface p-4">
            <p className="text-sm font-medium">Where applicants came from</p>
            <BarList
              className="mt-3"
              max={100}
              items={[
                { label: "Job board", value: 58, display: "58%" },
                { label: "Careers page", value: 31, display: "31%", barClassName: "bg-cyan-400" },
                { label: "Referral link", value: 11, display: "11%", barClassName: "bg-violet-400" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { AnalyticsView };
