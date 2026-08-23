# Slipstream Labs site

Marketing site for slipstreamlabs.se. React + Vite + Tailwind + shadcn/ui, built in Lovable, two-way synced to SebBoPri/build-with-evidence on `main`.

## Hard constraints
- No em dashes anywhere in copy or code comments. Use commas, colons or full stops.
- Do not redesign. Preserve layout, spacing scale, typography, imagery, animations and responsive behaviour unless a change is explicitly requested.
- No fabricated social proof. No testimonials, case studies, client logos or metrics unless I supply real ones. This is a legal constraint (Swedish and EU marketing rules) and a positioning one.
- Positioning line is "Find what's worth building." Through-line is "Evidence, not opinion."
- Voice: confident, direct, evidence-oriented. No SaaS filler, no emojis, no cliches.

## Working rules
- `git pull` before starting. Lovable may have pushed.
- Run `npm run dev` and check 375 / 768 / 1440 before considering a copy change done.
- Prune unused shadcn components and CSS only when asked, never as a side effect.

## Open work
1. Sprint figure caption reads as a survey, should read as a decision.
2. CTA and footer copy drifted from spec.
3. Head title, og:title and JSON-LD say "Work out what is worth building" while the H1 says "Find what's worth building".
4. Contact is mailto only. Formspree not implemented.
