/**
 * Landing page copy and data that is likely to change.
 * Edit text here instead of hunting through components.
 */

export const navLinks = [
  { label: "Product", href: "/#product" },
  { label: "Features", href: "/#features" },
  { label: "For Recruiters", href: "/#recruiters" },
  { label: "For Candidates", href: "/#candidates" },
  { label: "Pricing", href: "/#pricing" },
] as const;

export const steps = [
  {
    title: "Create a job",
    body: "Write the role, set must-have skills and screening questions, or let the AI draft it from a few bullet points.",
  },
  {
    title: "Discover candidates",
    body: "Publish to the job board and your own careers page. Applications arrive with the CV already parsed.",
  },
  {
    title: "Analyze matches",
    body: "Each applicant gets a score out of 100 with the matched skills, the gaps and the CV lines behind it.",
  },
  {
    title: "Manage interviews",
    body: "Offer time slots, let candidates pick, and collect scorecards from interviewers before they compare notes.",
  },
  {
    title: "Hire confidently",
    body: "Send the offer, get it signed, and keep a full record of who decided what and why.",
  },
] as const;

export type Plan = {
  name: string;
  price: string;
  period: string;
  summary: string;
  cta: { label: string; href: string };
  features: string[];
  highlighted?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Free",
    price: "৳0",
    period: "forever",
    summary: "For a team filling one role and trying HireLens out.",
    cta: { label: "Start free", href: "/register" },
    features: [
      "1 active job",
      "Up to 50 applicants per job",
      "Real-time pipeline and team notes",
      "CV parsing and match scores, with a daily AI limit",
      "Careers page with your branding",
    ],
  },
  {
    name: "Pro",
    // TODO(billing phase): placeholder price. Set the real one when SSLCommerz checkout is built.
    price: "৳2,900",
    period: "per month",
    summary: "For teams hiring for several roles at once.",
    cta: { label: "Start Hiring", href: "/register?plan=pro" },
    highlighted: true,
    features: [
      "Unlimited active jobs and applicants",
      "Full AI assistant, including actions you confirm",
      "Interview scheduling, scorecards and offer letters",
      "Hiring analytics with CSV export",
      "Blind review on every job",
    ],
  },
];

export const faqs = [
  {
    q: "Does the AI reject candidates?",
    a: "No. The AI ranks, explains and drafts. Moving a candidate forward or rejecting them always needs a person to click confirm, and that click is recorded in the audit log.",
  },
  {
    q: "How is the match score worked out?",
    a: "It is a formula you can read: 45% how closely the CV matches the job description, 35% skill coverage with must-haves counted double, 10% experience fit and 10% screening answers. You can change the weights for each job, and every score lists the evidence behind it.",
  },
  {
    q: "What is blind review?",
    a: "A switch on each job that hides name, photo, gender, age, university and address while you screen. Those details are also removed before the AI scores the application, so the first decision rests on skills and experience.",
  },
  {
    q: "Can candidates use HireLens in Bangla?",
    a: "Yes. The candidate portal works in Bangla and English, with salaries shown in BDT. Matching works across both languages.",
  },
  {
    q: "What happens to CV data?",
    a: "CV matching runs on our own server, so that step never sends CV text to an outside AI provider. The public demo uses made-up candidates only. Candidates can download their data or delete their account at any time.",
  },
  {
    q: "Can I use HireLens for real hiring today?",
    a: "Not yet. HireLens is in active development and the public demo runs on synthetic data. Create a free account to explore the full workflow.",
  },
] as const;

export const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Overview", href: "/#product" },
      { label: "Features", href: "/#features" },
      { label: "How it works", href: "/#how-it-works" },
      { label: "Pricing", href: "/#pricing" },
    ],
  },
  {
    title: "Recruiters",
    links: [
      { label: "Hiring pipeline", href: "/#recruiters" },
      { label: "AI assistant", href: "/#features" },
      { label: "Start Hiring", href: "/register" },
      { label: "Login", href: "/login" },
    ],
  },
  {
    title: "Candidates",
    links: [
      { label: "Explore Jobs", href: "/jobs" },
      { label: "Mock interviews", href: "/#candidates" },
      { label: "Create a profile", href: "/register?as=candidate" },
    ],
  },
  {
    title: "Trust",
    links: [
      { label: "Responsible AI", href: "/#responsible-ai" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
] as const;
