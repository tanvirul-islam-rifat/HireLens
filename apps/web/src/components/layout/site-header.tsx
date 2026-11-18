import * as React from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";

import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { navLinks } from "@/features/landing/content";
import { cn } from "@/lib/utils";
import { Dialog as DialogPrimitive } from "radix-ui";

function useScrolled(threshold = 12) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

function SiteHeader() {
  const scrolled = useScrolled();
  const [open, setOpen] = React.useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color] duration-300",
        scrolled
          ? "border-border bg-background/85 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link to="/" aria-label="HireLens home" className="rounded-sm">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" asChild className="hidden sm:inline-flex">
            <Link to="/login">Login</Link>
          </Button>
          <Button asChild className="hidden sm:inline-flex">
            <Link to="/register">Get Started</Link>
          </Button>

          {/* Phone and tablet: full-screen menu instead of a squeezed link row. */}
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="secondary" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu aria-hidden="true" />
              </Button>
            </DialogTrigger>
            <DialogPortal>
              <DialogOverlay />
              <DialogPrimitive.Content className="fixed inset-x-0 top-0 z-50 border-b border-border-strong bg-surface shadow-overlay data-[state=open]:animate-sheet-in">
                <DialogTitle className="sr-only">Menu</DialogTitle>
                <DialogDescription className="sr-only">Site navigation</DialogDescription>
                <Container className="flex h-16 items-center justify-between">
                  <Logo />
                  <DialogClose asChild>
                    <Button variant="secondary" size="icon" aria-label="Close menu">
                      <X aria-hidden="true" />
                    </Button>
                  </DialogClose>
                </Container>
                <Container className="pb-6">
                  <ul className="border-t border-border">
                    {navLinks.map((link) => (
                      <li key={link.href} className="border-b border-border">
                        <a
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="flex items-center justify-between py-4 text-lg font-medium tracking-tight"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <Button variant="secondary" size="lg" asChild>
                      <Link to="/login" onClick={() => setOpen(false)}>
                        Login
                      </Link>
                    </Button>
                    <Button size="lg" asChild>
                      <Link to="/register" onClick={() => setOpen(false)}>
                        Get Started
                      </Link>
                    </Button>
                  </div>
                </Container>
              </DialogPrimitive.Content>
            </DialogPortal>
          </Dialog>
        </div>
      </Container>
    </header>
  );
}

export { SiteHeader };
