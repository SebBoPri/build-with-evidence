# /work page

Nav label: Work. URL: /work. Two tiers: Cases (kill-line stories) and Selected work (portfolio pieces). The page shows direction, not finished write-ups. Honest status labels where write-ups are pending. No fabricated content. Match the existing visual system exactly.

## Page structure

1. Statement block
   - Eyebrow: Work (same label-mono style as other section eyebrows).
   - Heading and one short paragraph stating what the page is: cases and work that show how Sebastian thinks. Every case follows the same shape: the question, the risk, the evidence, the decision.

2. Cases
   - Section label: Cases.
   - List of case entries, each with:
     - Monospace meta line: domain, year, status.
     - Title.
     - One-line descriptor (one sentence only, Helsing/basement.studio pattern).
     - Monochrome inline SVG diagram, decision-shaped, in the same style as the draft "Inline technical diagrams" direction.
   - Initial entries (all truthful, no invented outcomes):
     - Data quality project. Anonymized client. Status label: Write-up coming.
     - Fund order flow mapping. Fintech. Status label: Write-up coming.
   - Status labels styled as small mono text, honest, no "coming soon" filler beyond that.

3. Selected work
   - Section label: Selected work.
   - Physical product (university): real photos exist, treated monochrome, presented as a quiet image band, same treatment language as the hero band.
   - Hyper Island PM program: text entry with meta line (program, year), short descriptor. No images until Sebastian supplies real process artifacts.
   - Each entry: image where real assets exist, title, one-line descriptor.

4. Closing
   - Short line tying the method to engagement, then the shared CTA button ("Let's explore together") linking to the contact section. Exactly one CTA on the page.

## Technical

- New route: src/routes/work.tsx, createFileRoute("/work"), with its own head(): unique title, description, og:title, og:description, og:type, twitter:card. No og:image (no absolute hero URL on this page initially).
- Add a Work link to the header nav in src/routes/__root.tsx, positioned after the existing links, before Contact, using Link with activeProps consistent with the other nav links.
- Reuse existing section primitives (Section component with label, label-mono eyebrows) from src/components/site/sections.tsx. Reuse cta-button.tsx for the closing CTA.
- Case entries rendered from a local data array in the route file (no CMS, no server functions). SVG diagrams inline in the route or a small sibling component under src/components/site/.
- Add /work to src/routes/sitemap.xml.ts.
- No changes to existing routes' content, spacing system, or design tokens.

## Copy rules

- No em dashes. No SaaS filler. No invented outcomes, metrics, client names, or testimonials. Voice: confident, direct, evidence-oriented.
- Positioning line "Find what's worth building." may close the statement block only if it fits naturally; otherwise leave it to the hero.

## Verification

- bun run build passes.
- Playwright screenshots at 375, 768, 1440: nav link active state, both tiers, status labels, single CTA, mobile stacking.
- Confirm sitemap includes /work and head metadata renders.
