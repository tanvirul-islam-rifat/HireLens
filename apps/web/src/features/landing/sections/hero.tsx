import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MatchPanel } from "@/features/landing/mock/match-panel";
import { PipelineBoard } from "@/features/landing/mock/pipeline-board";
import { rise, stagger } from "@/lib/motion";

const stages = [
  { name: "Applied", count: 18, dot: "bg-subtle" },
  { name: "Screening", count: 9, dot: "bg-brand-400" },
  { name: "Interview", count: 5, dot: "bg-cyan-400" },
  { name: "Offer", count: 2, dot: "bg-success" },
];

/** Phone-only summary of the pipeline. A four-column board is unreadable at 390px. */
function StageStrip() {
  return (
    <dl className="grid grid-cols-4 gap-px overflow-hidden rounded-lg border border-border-strong bg-border-strong md:hidden">
      {stages.map((stage) => (
        <div key={stage.name} className="bg-surface px-2.5 py-2.5">
          <dt className="flex items-center gap-1.5 text-2xs text-muted-foreground">
            <span className={`size-1.5 shrink-0 rounded-full ${stage.dot}`} aria-hidden="true" />
            <span className="truncate">{stage.name}</span>
          </dt>
          <dd className="mt-0.5 text-lg font-semibold tabular-nums">{stage.count}</dd>
        </div>
      ))}
    </dl>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-x-clip pt-28 pb-12 md:pt-40 md:pb-20">
      {/* Backdrop: engineering grid plus one blue light source above the product. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute top-[-22rem] left-1/2 h-[44rem] w-[70rem] max-w-none -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(43,99,246,0.26),transparent)]" />
        <div className="absolute top-[26rem] right-[-12rem] h-[30rem] w-[40rem] bg-[radial-gradient(closest-side,rgba(34,211,238,0.09),transparent)]" />
      </div>

      <Container>
        <motion.div
          variants={stagger(0.05, 0.09)}
          initial="hidden"
          animate="visible"
          className="grid gap-x-10 gap-y-7 lg:grid-cols-12 lg:items-end"
        >
          <motion.h1 variants={rise} className="type-display max-w-[15ch] lg:col-span-8">
            Hiring, Reimagined with Intelligence.
          </motion.h1>

          <motion.div variants={rise} className="lg:col-span-4 lg:pb-1.5">
            <p className="type-lead max-w-md text-muted-foreground">
              One intelligent workspace to discover talent, understand candidates, and build
              exceptional teams.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link to="/register">
                  Start Hiring
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/jobs">Explore Jobs</Link>
              </Button>
            </div>
            <p className="mt-4 text-[0.8125rem] text-subtle">
              Free for one active job. No card needed.
            </p>
          </motion.div>

          <motion.div variants={rise} className="relative mt-8 md:mt-12 md:pb-14 lg:col-span-12">
            <PipelineBoard className="hidden md:block" />
            <StageStrip />
            <MatchPanel className="mt-3 md:absolute md:right-5 md:bottom-0 md:mt-0 md:w-80 lg:-right-5 xl:-right-8" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

export { Hero };
