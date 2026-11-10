# Standalone portfolio at /portfolio

A separate, shareable portfolio at slipstreamlabs.se/portfolio. Anyone opening it stays inside it: no Slipstream Labs logo, no links to the consultancy home page, no sprint pitch. The existing /work section stays exactly as it is.

## What visitors see

- **Top bar:** "Sebastian Bouvier" on the left (links to /portfolio), a "Get in touch" button on the right that jumps to the contact block at the bottom. Nothing else.
- **Portfolio page:** same look as the Work page (white canvas, serif headline, coloured card grid). Headline and intro rewritten in personal voice, e.g. "Work that shows how I think." Same five cards, each opening the portfolio version of the case.
- **Case pages:** the same five cases, same text, pictures and graphics, at /portfolio/salmagen, /portfolio/data-quality-migration, /portfolio/spotify-feature-prioritisation, /portfolio/tedxfika. Breadcrumb and "Next case" stay inside /portfolio.
- **Closing block:** replaces "Two to four weeks from uncertainty..." with a short personal line plus email and LinkedIn links.
- **Footer:** "Sebastian Bouvier, Stockholm" and the year. No consultancy tagline.
- **Search engines:** portfolio pages marked noindex so they don't compete with the /work pages in Google, and left out of the sitemap. Link previews still show proper titles.

## Details to confirm (defaults used if you don't say otherwise)

1. Name in the top bar: "Sebastian Bouvier".
2. Contact: your email address and LinkedIn URL. I don't have either, so please send them; until then I won't invent them.
3. noindex: on (private-ish link). Say if you want it findable.

## Technical details

- Make `case-layout.tsx` take a `variant: "studio" | "portfolio"` (or a context) that swaps `CaseHeader`, `CaseIntro` breadcrumb, `NextCase` CTA and `CaseFooter`. Default stays "studio", so /work is unchanged.
- Move each case body into a shared component (e.g. `src/components/cases/salmagen-case.tsx`) rendered by both `/work/x` and `/portfolio/x` routes, so copy lives in one place.
- New routes: `src/routes/portfolio/route.tsx` (theme-paper wrapper), `index.tsx`, and one file per case, each with its own head() (unique title, description, og tags, robots noindex, canonical to the /work equivalent).
- Extract the Work card grid into a component that takes a base path.
- Verify at 375/768/1440 that no link on any /portfolio page leads to `/` or `/#contact`.
- Record the shared-case-body rule in AGENTS.md.
