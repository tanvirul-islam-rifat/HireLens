# HireLens

AI-powered hiring platform (ATS + job board) on the MERN stack, in TypeScript.
Full plan: see `HIRELENS_SPEC.md`.

## Status

| Phase | Scope | State |
|---|---|---|
| 1 | Design system, component library, landing page | Done |
| 2–5 | Auth, jobs, pipeline, AI, billing | Not started |

## Run it

You need **Node.js 22 or newer** and **pnpm** (`npm install -g pnpm`).

```bash
pnpm install
pnpm dev
```

Open http://localhost:5173

| URL | What you see |
|---|---|
| `/` | Landing page |
| `/design-system` | Every token and component on one page |
| anything else (`/login`, `/jobs`...) | "Being built" placeholder |

Other commands:

```bash
pnpm typecheck   # TypeScript check
pnpm build       # production build into apps/web/dist
pnpm preview     # serve the production build
```

## Structure

```
hirelens/
├── apps/web/                    React + Vite + Tailwind v4
│   └── src/
│       ├── styles/tokens.css    design tokens (colours, type, radius, shadows, motion, breakpoints)
│       ├── styles/globals.css   base styles + type scale + effects
│       ├── lib/                 cn(), motion tokens, hooks
│       ├── components/ui/       component library (shadcn/ui style, Radix underneath)
│       ├── components/brand/    logo
│       ├── components/layout/   site header + footer
│       ├── features/landing/    landing page: sections/, mock/ (product mockups), content.ts (copy)
│       ├── features/design-system/
│       └── pages/
├── package.json  pnpm-workspace.yaml  turbo.json  tsconfig.base.json
```

`apps/api`, `apps/worker` and `packages/*` arrive in later phases.

## Design system rules

1. **Tokens first.** Colours, radii, shadows and easings live in `tokens.css`. Components use
   token utilities (`bg-surface`, `text-muted-foreground`, `rounded-lg`), never raw hex values.
2. **Three depths.** `background` → `surface` → `elevated`. Popovers use `overlay`.
3. **Tight corners.** 6–8px on controls, 12px on product frames. Circles are reserved for
   avatars and scores (the "lens" motif).
4. **Colour means something.** Blue = primary action and recruiter side. Cyan = AI/data and
   candidate side. Violet = third data series. Green/amber/red = status only.
5. **Motion.** One entrance sequence in the hero, gentle reveal per section, and animation
   that answers an action. Everything respects "reduce motion".

Adding a shadcn/ui component later: `pnpm dlx shadcn@latest add <name>` inside `apps/web`
(`components.json` is already set up), then swap its colours for HireLens tokens.

## Deploy the landing page (Vercel)

Import the repo, set **Root Directory** to `apps/web`, framework **Vite**. `vercel.json`
already rewrites all routes to `index.html`.
