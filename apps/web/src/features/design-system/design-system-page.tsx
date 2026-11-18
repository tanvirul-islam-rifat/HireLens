import * as React from "react";
import { Copy, Ellipsis, Inbox, Pencil, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router";

import { Logo } from "@/components/brand/logo";
import { Avatar, AvatarGroup } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarList, RingScore, Sparkline, StackedBar } from "@/components/ui/charts";
import { Container, PageHeader } from "@/components/ui/container";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EmptyState } from "@/components/ui/empty-state";
import { Field, FieldError, FieldHint, Input, Label, Textarea } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/toaster";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const swatches = [
  { name: "background", className: "bg-background" },
  { name: "surface", className: "bg-surface" },
  { name: "elevated", className: "bg-elevated" },
  { name: "overlay", className: "bg-overlay" },
  { name: "border-strong", className: "bg-border-strong" },
  { name: "brand-500", className: "bg-brand-500" },
  { name: "brand-400", className: "bg-brand-400" },
  { name: "brand-300", className: "bg-brand-300" },
  { name: "cyan-400", className: "bg-cyan-400" },
  { name: "violet-400", className: "bg-violet-400" },
  { name: "success", className: "bg-success" },
  { name: "warning", className: "bg-warning" },
  { name: "danger", className: "bg-danger" },
  { name: "foreground", className: "bg-foreground" },
  { name: "muted-foreground", className: "bg-muted-foreground" },
  { name: "subtle", className: "bg-subtle" },
];

const applicants = [
  { name: "Nusrat Jahan", stage: "Screening", score: 87, applied: "2 days ago" },
  { name: "Rafid Karim", stage: "Interview", score: 81, applied: "3 days ago" },
  { name: "Tanvir Alam", stage: "Applied", score: 72, applied: "5 days ago" },
];

function Block({ title, note, children }: { title: string; note?: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-5 border-b border-border py-10 lg:grid-cols-[14rem_1fr] lg:gap-10">
      <div>
        <h2 className="text-base font-semibold tracking-tight">{title}</h2>
        {note ? <p className="mt-1.5 text-sm text-muted-foreground">{note}</p> : null}
      </div>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

/** Living style guide: every token and component on one page, at /design-system. */
function DesignSystemPage() {
  const [loading, setLoading] = React.useState(false);

  return (
    <div className="pb-24">
      <header className="border-b border-border">
        <Container className="flex h-16 items-center justify-between">
          <Link to="/" aria-label="HireLens home" className="rounded-sm">
            <Logo />
          </Link>
          <Button variant="ghost" asChild>
            <Link to="/">Back to site</Link>
          </Button>
        </Container>
      </header>

      <Container className="pt-10">
        <PageHeader
          title="Design system"
          description="The tokens and components every HireLens screen is built from."
          actions={<Badge variant="brand">v0.1, Phase 1</Badge>}
        />

        <Block title="Colour" note="Defined in styles/tokens.css. Components never use raw hex values.">
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 xl:grid-cols-8">
            {swatches.map((swatch) => (
              <li key={swatch.name}>
                <div className={`h-14 rounded-md border border-border-strong ${swatch.className}`} />
                <p className="mt-1.5 truncate font-mono text-2xs text-muted-foreground">{swatch.name}</p>
              </li>
            ))}
          </ul>
        </Block>

        <Block title="Typography" note="Geist for text, Geist Mono for code. Four named styles plus Tailwind's text sizes.">
          <div className="grid gap-6">
            <div>
              <p className="font-mono text-2xs text-subtle">type-display</p>
              <p className="type-display mt-1">Hiring, reimagined</p>
            </div>
            <div>
              <p className="font-mono text-2xs text-subtle">type-h2</p>
              <p className="type-h2 mt-1">Built to explain itself</p>
            </div>
            <div>
              <p className="font-mono text-2xs text-subtle">type-h3</p>
              <p className="type-h3 mt-1">Explainable candidate matching</p>
            </div>
            <div>
              <p className="font-mono text-2xs text-subtle">type-lead</p>
              <p className="type-lead mt-1 max-w-prose text-muted-foreground">
                Every score comes with its reasons, and every AI action waits for a person.
              </p>
            </div>
            <div>
              <p className="font-mono text-2xs text-subtle">text-sm, Bangla</p>
              <p className="mt-1 text-sm" lang="bn">
                আপনার আবেদনসমূহ এক জায়গায় দেখুন।
              </p>
            </div>
          </div>
        </Block>

        <Block title="Buttons" note="Six variants, three sizes, plus loading and disabled states.">
          <div className="grid gap-5">
            <div className="flex flex-wrap items-center gap-3">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Delete job</Button>
              <Button variant="link">Link</Button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
              <Button size="icon" variant="secondary" aria-label="Add">
                <Plus aria-hidden="true" />
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button
                loading={loading}
                onClick={() => {
                  setLoading(true);
                  window.setTimeout(() => setLoading(false), 1600);
                }}
              >
                {loading ? "Saving" : "Click to load"}
              </Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>
        </Block>

        <Block title="Form fields" note="Input, textarea, select and switch share one border, focus and error style.">
          <div className="grid max-w-2xl gap-5 sm:grid-cols-2">
            <Field>
              <Label htmlFor="ds-title">Job title</Label>
              <Input id="ds-title" placeholder="Frontend Engineer" />
              <FieldHint>Shown on the job board.</FieldHint>
            </Field>
            <Field>
              <Label htmlFor="ds-email">Work email</Label>
              <Input id="ds-email" type="email" defaultValue="maliha@nodi" aria-invalid="true" />
              <FieldError>Enter a full email address, like name@company.com.</FieldError>
            </Field>
            <Field>
              <Label htmlFor="ds-mode">Work mode</Label>
              <Select defaultValue="hybrid">
                <SelectTrigger id="ds-mode">
                  <SelectValue placeholder="Choose one" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="onsite">On-site</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <Label htmlFor="ds-disabled">Company slug</Label>
              <Input id="ds-disabled" defaultValue="nodi-labs" disabled />
            </Field>
            <Field className="sm:col-span-2">
              <Label htmlFor="ds-note">Team note</Label>
              <Textarea id="ds-note" placeholder="Strong React fundamentals. @Omar can you take the technical round?" />
            </Field>
            <div className="flex items-center gap-3">
              <Switch id="ds-blind" defaultChecked />
              <Label htmlFor="ds-blind">Blind review</Label>
            </div>
          </div>
        </Block>

        <Block title="Badges and avatars">
          <div className="grid gap-5">
            <div className="flex flex-wrap gap-2">
              <Badge>Draft</Badge>
              <Badge variant="outline">Paused</Badge>
              <Badge variant="brand" dot>Screening</Badge>
              <Badge variant="cyan" dot>Interview</Badge>
              <Badge variant="violet">Offer</Badge>
              <Badge variant="success" dot>Hired</Badge>
              <Badge variant="warning">Needs review</Badge>
              <Badge variant="danger">Rejected</Badge>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Avatar name="Nusrat Jahan" size="xs" tone="brand" />
              <Avatar name="Rafid Karim" size="sm" tone="cyan" />
              <Avatar name="Maliha Islam" size="md" tone="violet" />
              <Avatar name="Anika Sultana" size="lg" tone="success" />
              <AvatarGroup className="[&>[data-slot=avatar]]:ring-background">
                <Avatar name="Omar Faruk" tone="cyan" />
                <Avatar name="Rima Khan" tone="brand" />
                <Avatar name="Tanvir Alam" tone="warning" />
              </AvatarGroup>
            </div>
          </div>
        </Block>

        <Block title="Cards and tabs">
          <div className="grid gap-5 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Frontend Engineer</CardTitle>
                <CardDescription>Dhaka, hybrid. 42 applicants.</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="funnel">
                  <TabsList>
                    <TabsTrigger value="funnel">Funnel</TabsTrigger>
                    <TabsTrigger value="trend">Trend</TabsTrigger>
                  </TabsList>
                  <TabsContent value="funnel" className="mt-4">
                    <BarList
                      items={[
                        { label: "Applied", value: 42 },
                        { label: "Screening", value: 18 },
                        { label: "Interview", value: 9, barClassName: "bg-cyan-400" },
                      ]}
                    />
                  </TabsContent>
                  <TabsContent value="trend" className="mt-4">
                    <Sparkline label="Applicants per week, rising" data={[2, 3, 3, 5, 4, 6, 5, 8, 7, 9]} />
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter>
                <Button size="sm">Open pipeline</Button>
                <Button size="sm" variant="ghost">
                  Edit job
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Charts</CardTitle>
                <CardDescription>Sparkline, RingScore, BarList and StackedBar.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-5">
                <div className="flex items-center gap-4">
                  <RingScore value={87} />
                  <p className="text-sm text-muted-foreground">
                    RingScore shows a match score out of 100.
                  </p>
                </div>
                <StackedBar
                  segments={[
                    { label: "Semantic", value: 45, className: "bg-brand-400" },
                    { label: "Skills", value: 35, className: "bg-cyan-400" },
                    { label: "Experience", value: 10, className: "bg-violet-400" },
                    { label: "Screening", value: 10, className: "bg-success" },
                  ]}
                />
              </CardContent>
            </Card>
          </div>
        </Block>

        <Block title="Table" note="For lists of jobs, applicants and audit log entries.">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Candidate</TableHead>
                <TableHead>Stage</TableHead>
                <TableHead className="text-right">Match</TableHead>
                <TableHead>Applied</TableHead>
                <TableHead className="w-10">
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applicants.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>
                    <span className="flex items-center gap-2.5 font-medium">
                      <Avatar name={row.name} size="sm" tone="brand" />
                      {row.name}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Badge variant={row.stage === "Interview" ? "cyan" : "neutral"}>{row.stage}</Badge>
                  </TableCell>
                  <TableCell className="text-right font-medium tabular-nums">{row.score}</TableCell>
                  <TableCell className="text-muted-foreground">{row.applied}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="size-8" aria-label={`Actions for ${row.name}`}>
                          <Ellipsis aria-hidden="true" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>{row.name}</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <Pencil aria-hidden="true" />
                          Add note
                          <DropdownMenuShortcut>N</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Copy aria-hidden="true" />
                          Copy profile link
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem destructive>
                          <Trash2 aria-hidden="true" />
                          Reject
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Block>

        <Block title="Overlays" note="Modal, tooltip, dropdown (in the table above) and toast.">
          <div className="flex flex-wrap items-center gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary">Open modal</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Move 3 applications to Interview?</DialogTitle>
                  <DialogDescription>
                    The candidates are notified by email. You can move them back later.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="ghost">Cancel</Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button onClick={() => toast.success("Moved 3 applications to Interview")}>
                      Move to Interview
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="secondary">Hover for tooltip</Button>
              </TooltipTrigger>
              <TooltipContent>Must-have skills count double in the score.</TooltipContent>
            </Tooltip>

            <Button variant="secondary" onClick={() => toast("Draft saved")}>
              Show toast
            </Button>
            <Button
              variant="secondary"
              onClick={() =>
                toast.error("Could not send the email", {
                  description: "Check the address and try again.",
                })
              }
            >
              Show error toast
            </Button>
          </div>
        </Block>

        <Block title="Loading and empty" note="Skeletons match the shape of what is loading. Empty states point to the next action.">
          <div className="grid gap-5 md:grid-cols-2">
            <Card className="p-5">
              <div className="flex items-center gap-3">
                <Skeleton className="size-10 rounded-full" />
                <div className="grid flex-1 gap-2">
                  <Skeleton className="h-3.5 w-2/5" />
                  <Skeleton className="h-3 w-3/5" />
                </div>
              </div>
              <Skeleton className="mt-5 h-24 w-full" />
            </Card>
            <EmptyState
              icon={<Inbox aria-hidden="true" />}
              title="No applicants yet"
              description="Share the job link or publish to the job board to start receiving applications."
              action={<Button>Copy job link</Button>}
            />
          </div>
        </Block>
      </Container>
    </div>
  );
}

export { DesignSystemPage };
