import { Eye, Lock, Scale, UserCheck } from "lucide-react";
import { Link } from "react-router";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/container";

const principles = [
  {
    icon: Eye,
    title: "Transparency",
    body: "Every score shows its formula, the matched skills, the gaps and the CV lines it relied on. The summary is written only from those facts.",
  },
  {
    icon: UserCheck,
    title: "Human oversight",
    body: "The AI suggests, ranks and drafts. It cannot reject or advance anyone. A person confirms each action, and candidates can ask for a human review.",
  },
  {
    icon: Lock,
    title: "Privacy",
    body: "CV matching runs on our own server. Candidates can export or delete their data, and the public demo contains no real personal information.",
  },
  {
    icon: Scale,
    title: "Fair hiring",
    body: "Blind review removes identity details before screening and scoring. We test match quality on a labelled set and publish the results, limits included.",
  },
];

function ResponsibleAi() {
  return (
    <Section id="responsible-ai" className="border-t border-border">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
        <Reveal>
          <h2 className="type-h2">AI that suggests. People who decide.</h2>
          <p className="type-lead mt-4 text-muted-foreground">
            A hiring decision changes someone’s life, so we treat AI in hiring as high-stakes. These
            four rules are built into the product, not added in a policy document.
          </p>
          <Button variant="outline" className="mt-8" asChild>
            <Link to="/responsible-ai">Read how the AI works</Link>
          </Button>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
            {principles.map((item) => (
              <div key={item.title} className="bg-background p-6 lg:p-7">
                <dt className="flex items-center gap-2.5 text-base font-semibold tracking-tight">
                  <item.icon className="size-4.5 text-cyan-300" aria-hidden="true" />
                  {item.title}
                </dt>
                <dd className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{item.body}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </Section>
  );
}

export { ResponsibleAi };
