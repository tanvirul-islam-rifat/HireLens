import { MotionConfig } from "motion/react";
import { BrowserRouter, Route, Routes } from "react-router";

import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DesignSystemPage } from "@/features/design-system/design-system-page";
import { LandingPage } from "@/features/landing/landing-page";
import { ComingSoonPage } from "@/pages/coming-soon";

function App() {
  return (
    // reducedMotion="user": people who turn off animations in their OS get none here.
    <MotionConfig reducedMotion="user">
      <TooltipProvider delayDuration={200}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/design-system" element={<DesignSystemPage />} />
            <Route path="*" element={<ComingSoonPage />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </TooltipProvider>
    </MotionConfig>
  );
}

export { App };
