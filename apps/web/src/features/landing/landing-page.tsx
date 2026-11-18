import * as React from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Audiences } from "@/features/landing/sections/audiences";
import { Cta } from "@/features/landing/sections/cta";
import { Faq } from "@/features/landing/sections/faq";
import { Features } from "@/features/landing/sections/features";
import { Hero } from "@/features/landing/sections/hero";
import { HowItWorks } from "@/features/landing/sections/how-it-works";
import { Pricing } from "@/features/landing/sections/pricing";
import { ResponsibleAi } from "@/features/landing/sections/responsible-ai";
import { Showcase } from "@/features/landing/sections/showcase";

function LandingPage() {
  // Arriving at /#pricing from another page: scroll once the section exists.
  React.useEffect(() => {
    const id = window.location.hash.slice(1);
    if (id) document.getElementById(id)?.scrollIntoView();
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Showcase />
        <Features />
        <HowItWorks />
        <Audiences />
        <Pricing />
        <ResponsibleAi />
        <Faq />
        <Cta />
      </main>
      <SiteFooter />
    </>
  );
}

export { LandingPage };
