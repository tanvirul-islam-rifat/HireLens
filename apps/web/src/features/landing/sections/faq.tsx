import { Reveal } from "@/components/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container, Section } from "@/components/ui/container";
import { faqs } from "@/features/landing/content";

function Faq() {
  return (
    <Section id="faq" className="border-t border-border bg-surface/30">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
        <Reveal>
          <h2 className="type-h2">Questions, answered</h2>
          <p className="type-lead mt-4 text-muted-foreground">
            The things recruiters and candidates ask us first.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <Accordion type="single" collapsible defaultValue="item-0" className="border-t border-border">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.q} value={`item-${index}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Container>
    </Section>
  );
}

export { Faq };
