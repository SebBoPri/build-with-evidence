# Slipstream Labs site

Marketing site for slipstreamlabs.se. TanStack Start (React 19, Vite, Tailwind v4), built in Lovable, two-way synced to SebBoPri/build-with-evidence on `main`.

There is no `src/components/ui`, so no shadcn primitives are installed. The Radix and react-hook-form dependencies are still listed in `package.json`, but no generated shadcn component files exist. Anything built from those has to be written by hand.

## Instruction precedence
CLAUDE.md is canonical. AGENTS.md is Lovable's template file. README.md is the original brief and may be out of date. Where they conflict, flag the conflict rather than picking one silently.

## Hard constraints
- No em dashes anywhere in copy or code comments. Use commas, colons or full stops.
- Do not redesign. Preserve layout, spacing scale, typography, imagery, animations and responsive behaviour unless a change is explicitly requested.
- No fabricated social proof. No testimonials, case studies, client logos or metrics unless I supply real ones. This is a legal constraint (Swedish and EU marketing rules) and a positioning one.
- Positioning line is "Find what's worth building." Through-line is "Evidence, not opinion."
- Voice: confident, direct, evidence-oriented. No SaaS filler, no emojis, no cliches.

## Working rules
- `git pull` before starting. Lovable may have pushed.
- This project uses bun, never npm install. `bun.lock` is the single source of truth, since that is what Lovable builds with.
- Use bunx, never npx.
- Run `bun run dev` and check 375 / 768 / 1440 before considering a copy change done.
- Prune unused Radix dependencies and CSS only when asked, never as a side effect.
- Never force-push or amend a commit that has already been pushed. main is synced with Lovable and rewriting it risks desyncing or losing history.

## Open work
1. Contact form: offline error state and keyboard focus visibility unverified. Check before relying on the form.
2. Nine em dashes remain in code comments and prose: `src/server.ts` (1), `src/lib/error-capture.ts` (4), `src/routes/README.md` (4).
