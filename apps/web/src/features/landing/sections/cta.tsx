import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

function Cta() {
  return (
    <section className="border-t border-border py-section">
      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-2xl border border-border-strong bg-surface px-6 py-16 text-center sm:px-12 lg:py-24">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
              <div className="bg-grid absolute inset-0" />
              <div className="absolute top-[-16rem] left-1/2 h-[30rem] w-[48rem] max-w-none -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(43,99,246,0.3),transparent)]" />
            </div>
            <h2 className="type-h2 mx-auto max-w-2xl">Post your first job today. It’s free.</h2>
            <p className="type-lead mx-auto mt-4 max-w-xl text-muted-foreground">
              Set up a role, share the link and watch applications arrive already parsed and
              scored.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
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
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export { Cta };
