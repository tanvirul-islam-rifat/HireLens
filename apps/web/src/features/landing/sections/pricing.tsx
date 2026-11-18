import { Check } from "lucide-react";
import { Link } from "react-router";

import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container, Section, SectionHeading } from "@/components/ui/container";
import { plans } from "@/features/landing/content";
import { cn } from "@/lib/utils";

function Pricing() {
  return (
    <Section id="pricing" className="border-t border-border bg-surface/30">
      <Container>
        <Reveal>
          <SectionHeading
            title="Start free. Upgrade when you hire at volume."
            description="Two plans for employers. Candidates always use HireLens free."
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="grid grid-cols-1 overflow-hidden rounded-xl border border-border-strong md:grid-cols-2">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={cn(
                  "relative flex flex-col p-7 lg:p-10",
                  plan.highlighted
                    ? "border-t border-border-strong bg-elevated md:border-t-0 md:border-l"
                    : "bg-background",
                )}
              >
                {plan.highlighted ? (
                  <div className="edge-glow absolute inset-x-0 top-0 h-px" aria-hidden="true" />
                ) : null}
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold tracking-tight">{plan.name}</h3>
                  {plan.highlighted ? <Badge variant="brand">Full AI</Badge> : null}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{plan.summary}</p>
                <p className="mt-7 flex items-baseline gap-2">
                  <span className="text-5xl font-semibold tracking-tighter tabular-nums">
                    {plan.price}
                  </span>
                  <span className="text-sm text-subtle">{plan.period}</span>
                </p>
                <Button
                  size="lg"
                  variant={plan.highlighted ? "primary" : "secondary"}
                  className="mt-7 w-full"
                  asChild
                >
                  <Link to={plan.cta.href}>{plan.cta.label}</Link>
                </Button>
                <ul className="mt-8 grid gap-3 border-t border-border pt-7">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-relaxed">
                      <Check
                        className={cn(
                          "mt-0.5 size-4 shrink-0",
                          plan.highlighted ? "text-brand-300" : "text-subtle",
                        )}
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-5 text-[0.8125rem] text-subtle">
            Prices in Bangladeshi taka. In this demo, checkout runs in SSLCommerz sandbox mode and
            no real payment is taken.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}

export { Pricing };
