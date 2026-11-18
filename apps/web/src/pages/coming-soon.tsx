import { Hammer } from "lucide-react";
import { Link, useLocation } from "react-router";

import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { EmptyState } from "@/components/ui/empty-state";

/** Placeholder for routes that later phases will build (login, register, jobs...). */
function ComingSoonPage() {
  const { pathname } = useLocation();
  return (
    <>
      <SiteHeader />
      <main className="flex min-h-svh items-center pt-16">
        <Container className="max-w-xl">
          <EmptyState
            icon={<Hammer aria-hidden="true" />}
            title="This page is being built"
            description={
              <>
                <code className="font-mono text-xs text-cyan-300">{pathname}</code> arrives in a later
                phase. The landing page and design system are ready to explore.
              </>
            }
            action={
              <>
                <Button asChild>
                  <Link to="/">Back to home</Link>
                </Button>
                <Button variant="secondary" asChild>
                  <Link to="/design-system">View design system</Link>
                </Button>
              </>
            }
          />
        </Container>
      </main>
    </>
  );
}

export { ComingSoonPage };
