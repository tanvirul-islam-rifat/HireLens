import * as React from "react";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router";

import { Reveal } from "@/components/reveal";
import { Avatar, AvatarGroup } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/container";
import { cn } from "@/lib/utils";

function Checklist({ items, tone }: { items: string[]; tone: string }) {
  return (
    <ul className="mt-7 grid gap-3.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed">
          <Check className={cn("mt-1 size-4 shrink-0", tone)} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ScorecardMock() {
  const rubric = [
    { label: "Problem solving", note: "Breaks the task down, tests edge cases", score: 4 },
    { label: "Communication", note: "Explains trade-offs clearly", score: 5 },
    { label: "System design", note: "Reasonable structure, missed caching", score: 3 },
  ];
  return (
    <div className="overflow-hidden rounded-xl border border-border-strong bg-surface shadow-overlay">
      <div className="flex items-center gap-3 border-b border-border px-4 py-3.5">
        <Avatar name="Anika Sultana" tone="success" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold">Anika Sultana</p>
          <p className="truncate text-xs text-muted-foreground">Technical interview scorecard</p>
        </div>
        <Badge variant="brand">Your scores</Badge>
      </div>
      <dl>
        {rubric.map((row) => (
          <div
            key={row.label}
            className="flex items-center gap-4 border-b border-border px-4 py-3.5"
          >
            <div className="min-w-0 flex-1">
              <dt className="text-[0.8125rem] font-medium">{row.label}</dt>
              <dd className="mt-0.5 truncate text-xs text-subtle">{row.note}</dd>
            </div>
            <dd className="flex items-center gap-1" aria-label={`${row.score} out of 5`}>
              {[1, 2, 3, 4, 5].map((step) => (
                <span
                  key={step}
                  aria-hidden="true"
                  className={cn(
                    "h-5 w-2 rounded-xs",
                    step <= row.score ? "bg-brand-400" : "bg-overlay",
                  )}
                />
              ))}
              <span className="ml-2 w-7 text-right text-[0.8125rem] font-medium tabular-nums" aria-hidden="true">
                {row.score}/5
              </span>
            </dd>
          </div>
        ))}
      </dl>
      <div className="flex items-center gap-3 bg-elevated px-4 py-3">
        <AvatarGroup className="[&>[data-slot=avatar]]:ring-elevated">
          <Avatar name="Omar Faruk" size="sm" tone="cyan" />
          <Avatar name="Rima Khan" size="sm" tone="brand" />
        </AvatarGroup>
        <p className="text-xs text-muted-foreground">
          2 of 3 submitted. Scores stay hidden until everyone has.
        </p>
      </div>
    </div>
  );
}

const portalCopy = {
  en: {
    applications: "Your applications",
    interview: "Interview",
    screening: "Screening",
    feedback: "Mock interview feedback",
    answer: "Answer 3 of 6",
    star: ["Situation", "Task", "Action", "Result"],
    tip: "Add a measurable result to your answer.",
  },
  bn: {
    applications: "আপনার আবেদনসমূহ",
    interview: "ইন্টারভিউ",
    screening: "স্ক্রিনিং",
    feedback: "মক ইন্টারভিউ ফিডব্যাক",
    answer: "উত্তর ৩ / ৬",
    star: ["পরিস্থিতি", "দায়িত্ব", "পদক্ষেপ", "ফলাফল"],
    tip: "আপনার উত্তরে একটি পরিমাপযোগ্য ফলাফল যোগ করুন।",
  },
} as const;

type Locale = keyof typeof portalCopy;

/** Candidate portal preview with a working language switch. */
function PortalMock() {
  const [locale, setLocale] = React.useState<Locale>("en");
  const t = portalCopy[locale];

  return (
    <div className="overflow-hidden rounded-xl border border-border-strong bg-surface shadow-overlay">
      <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
        <p className="text-sm font-semibold" lang={locale}>
          {t.applications}
        </p>
        <div
          role="group"
          aria-label="Language"
          className="flex rounded-md border border-border-strong bg-background p-0.5"
        >
          {(
            [
              ["en", "English"],
              ["bn", "বাংলা"],
            ] as const
          ).map(([code, label]) => (
            <button
              key={code}
              type="button"
              lang={code}
              aria-pressed={locale === code}
              onClick={() => setLocale(code)}
              className={cn(
                "rounded-sm px-2.5 py-1 text-xs font-medium transition-colors",
                locale === code
                  ? "bg-cyan-400/15 text-cyan-300"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <ul lang={locale}>
        <li className="flex items-center gap-3 border-b border-border px-4 py-3.5">
          <div className="min-w-0 flex-1">
            <p className="truncate text-[0.8125rem] font-medium" lang="en">
              Frontend Engineer
            </p>
            <p className="truncate text-xs text-subtle" lang="en">
              Nodi Labs, Dhaka
            </p>
          </div>
          <Badge variant="cyan" dot>
            {t.interview}
          </Badge>
        </li>
        <li className="flex items-center gap-3 border-b border-border px-4 py-3.5">
          <div className="min-w-0 flex-1">
            <p className="truncate text-[0.8125rem] font-medium" lang="en">
              UI Developer
            </p>
            <p className="truncate text-xs text-subtle" lang="en">
              Meghna Software, remote
            </p>
          </div>
          <Badge variant="brand" dot>
            {t.screening}
          </Badge>
        </li>
      </ul>

      <div className="bg-elevated px-4 py-4" lang={locale}>
        <div className="flex items-baseline justify-between gap-3">
          <p className="text-[0.8125rem] font-medium">{t.feedback}</p>
          <p className="text-xs text-subtle">{t.answer}</p>
        </div>
        <ul className="mt-3 grid grid-cols-4 gap-1.5">
          {t.star.map((label, index) => {
            const done = index < 3;
            return (
              <li
                key={label}
                className={cn(
                  "truncate rounded-sm border px-1.5 py-1.5 text-center text-xs",
                  done
                    ? "border-success/25 bg-success/10 text-success"
                    : "border-warning/30 bg-warning/10 text-warning",
                )}
              >
                {label}
              </li>
            );
          })}
        </ul>
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{t.tip}</p>
      </div>
    </div>
  );
}

function Audiences() {
  return (
    <>
      <Section id="recruiters" className="border-t border-border bg-surface/30">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="text-sm font-medium text-brand-300">For recruiters</p>
            <h2 className="type-h2 mt-3">Run the pipeline. Leave the legwork to the assistant.</h2>
            <p className="type-lead mt-4 max-w-lg text-muted-foreground">
              Your team sees the same board, the same notes and the same reasons behind every
              score.
            </p>
            <Checklist
              tone="text-brand-300"
              items={[
                "Drag candidates between stages, or move a whole batch at once.",
                "Offer interview slots and let candidates pick. Reminders go out on their own.",
                "Interviewers score against a shared rubric before they see each other's marks.",
                "Send offer letters as PDFs and get them signed inside HireLens.",
              ]}
            />
            <Button size="lg" className="mt-9" asChild>
              <Link to="/register">
                Start Hiring
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
          <Reveal delay={0.1}>
            <ScorecardMock />
          </Reveal>
        </Container>
      </Section>

      <Section id="candidates" className="border-t border-border">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="lg:order-2">
            <p className="text-sm font-medium text-cyan-300">For candidates</p>
            <h2 className="type-h2 mt-3">Apply once, in your language, and know where you stand.</h2>
            <p className="type-lead mt-4 max-w-lg text-muted-foreground">
              No more sending a CV into silence. You see each application move, and you can
              practise before the real interview.
            </p>
            <Checklist
              tone="text-cyan-300"
              items={[
                "Upload your CV and your profile fills in. You check it before anything is saved.",
                "Use the whole portal in Bangla or English, with salaries in BDT.",
                "Track every application live and message the recruiter directly.",
                "Practise with an AI mock interviewer that gives feedback on each answer.",
              ]}
            />
            <Button size="lg" variant="secondary" className="mt-9" asChild>
              <Link to="/jobs">
                Explore Jobs
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
          <Reveal delay={0.1} className="lg:order-1">
            <PortalMock />
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

export { Audiences };
