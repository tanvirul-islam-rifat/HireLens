import { Link } from "react-router";

import { Logo } from "@/components/brand/logo";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { footerColumns } from "@/features/landing/content";

function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2.6fr]">
          <div className="max-w-xs">
            <Link to="/" aria-label="HireLens home" className="inline-flex rounded-sm">
              <Logo />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              One workspace to post jobs, run the pipeline and understand every candidate. Built in
              Dhaka for teams that hire in Bangla and English.
            </p>
            <Badge variant="cyan" dot className="mt-5">
              Demo environment, synthetic data only
            </Badge>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h2 className="text-sm font-medium">{column.title}</h2>
                <ul className="mt-4 grid gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="rounded-xs text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-[0.8125rem] text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} HireLens. A portfolio project, not a registered company.</p>
          <p>
            <span lang="bn">বাংলা</span> and English
          </p>
        </div>
      </Container>
    </footer>
  );
}

export { SiteFooter };
