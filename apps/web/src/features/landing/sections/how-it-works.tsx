import { Reveal } from "@/components/reveal";
import { Container, Section, SectionHeading } from "@/components/ui/container";
import { steps } from "@/features/landing/content";

function HowItWorks() {
  return (
    <Section id="how-it-works" className="border-t border-border">
      <Container>
        <Reveal>
          <SectionHeading
            title="From open role to signed offer"
            description="Five steps, one place. Nothing to stitch together from spreadsheets and inboxes."
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-12 lg:mt-16">
          <ol className="grid gap-0 lg:grid-cols-5 lg:gap-8">
            {steps.map((step, index) => (
              <li key={step.title} className="relative flex gap-5 pb-9 last:pb-0 lg:block lg:pb-0">
                {/* Connector: vertical rail on phones, horizontal line on desktop. */}
                {index < steps.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute top-9 bottom-0 left-[1.0625rem] w-px bg-border-strong lg:top-[1.0625rem] lg:right-[-2rem] lg:bottom-auto lg:left-12 lg:h-px lg:w-auto"
                  />
                ) : null}
                <span className="relative flex size-9 shrink-0 items-center justify-center rounded-full border border-border-strong bg-elevated text-sm font-semibold text-brand-300 tabular-nums">
                  {index + 1}
                </span>
                <div className="lg:mt-5">
                  <h3 className="text-base font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </Section>
  );
}

export { HowItWorks };
