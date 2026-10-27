# Spotify feature prioritisation case

New case page at /work/spotify-feature-prioritisation, built on the same template as Sälmagen. All copy from the brief used word for word.

## Page, top to bottom
1. Headline "Testing value before building: which Spotify features first?" with key figure "7 → 3" and its caption.
2. Meta strip: Team / Context / Timeframe. Summary boxes: Problem / Approach / Outcome / Limitation.
3. Opening picture with the "AI generated illustration" tag and caption "Sorting interview findings into themes."
4. Chapter bar, then chapters 01 to 04 with their subheadings and text.
5. Coded graphics (no images), blue for highlights and gold for warnings:
   - 01: three-stat row (91%, €4.89, +€0.49) with source caption.
   - 02: three-stat row (~70%, 61%, 8 of 15) with survey caption.
   - 03: seven muted feature cards, arrow down, three numbered highlighted cards; then the scoring table with legend (blue dot fits, gold dot unclear). On phone the table scrolls sideways inside its box so the page itself never overflows.
6. 05 Reading it now in the same blue band as Sälmagen: quote, Assumption / Test today / Kill-line, closing paragraph.
7. Next case card linking to Sälmagen, then the contact button.

## Work page and other places
- Work page: the Hyper Island card currently opens a "Write-up coming" placeholder. Since this case is the Hyper Island project, I will point that card at the new page and use the new headline and "Hyper Island course project" tag on it. The placeholder page is removed and its old address forwards to the new case.
- Sitemap updated. Page gets its own title, description (from the brief) and share text.

## Needs from you
- The brief says "the attached image" but no image came with it. Please upload it; until then the opening picture slot is left out rather than filled with something invented.

## Technical details
- New route src/routes/work/spotify-feature-prioritisation.tsx using case-layout.tsx components; accent text-case-highlight.
- New small components in src/components/site/case-diagrams.tsx: StatRow, FeatureFunnel, ScoringTable, using existing tokens (case-highlight, brand-gold, hairline).
- NextCase `to` union extended with the new path; hyper-island.tsx becomes a redirect route.
- Verify at 375 / 768 / 1440, no horizontal overflow, clean build, no em dashes.
