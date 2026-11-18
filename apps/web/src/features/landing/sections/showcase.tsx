import { Bot, ChartNoAxesColumn, FileText } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Container, Section, SectionHeading } from "@/components/ui/container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnalyticsView } from "@/features/landing/mock/analytics-view";
import { AppFrame } from "@/features/landing/mock/app-frame";
import { AssistantView } from "@/features/landing/mock/assistant-view";
import { CvParseView } from "@/features/landing/mock/cv-parse-view";

function Showcase() {
  return (
    <Section id="product" className="border-t border-border">
      <Container>
        <Reveal>
          <SectionHeading
            title="One workspace for the whole hiring loop"
            description="Read a parsed CV, ask the assistant, check the funnel. Switch between the three views below. Everything shown is sample data."
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <Tabs defaultValue="assistant">
            <div className="-mx-gutter overflow-x-auto px-gutter pb-1">
              <TabsList aria-label="Product views">
                <TabsTrigger value="candidate">
                  <FileText aria-hidden="true" />
                  CV parsing
                </TabsTrigger>
                <TabsTrigger value="assistant">
                  <Bot aria-hidden="true" />
                  Recruiter assistant
                </TabsTrigger>
                <TabsTrigger value="analytics">
                  <ChartNoAxesColumn aria-hidden="true" />
                  Analytics
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="candidate" className="mt-5">
              <AppFrame active="candidates" crumb="Nusrat Jahan">
                <CvParseView />
              </AppFrame>
            </TabsContent>
            <TabsContent value="assistant" className="mt-5">
              <AppFrame active="assistant" crumb="Frontend Engineer">
                <AssistantView />
              </AppFrame>
            </TabsContent>
            <TabsContent value="analytics" className="mt-5">
              <AppFrame active="analytics" crumb="Frontend Engineer">
                <AnalyticsView />
              </AppFrame>
            </TabsContent>
          </Tabs>
        </Reveal>
      </Container>
    </Section>
  );
}

export { Showcase };
