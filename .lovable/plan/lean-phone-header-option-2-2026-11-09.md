# Lean phone header (Option 2)

## What changes for visitors
- On phones and tablets, the home page top bar becomes a single slim row: logo on the left, a "Work" link and the black "Let's talk" button on the right.
- The sideways-scrolling row with Problem, Discovery Sprint, Approach, About and Work is removed. Visitors simply scroll down the page.
- Desktop stays exactly as it is today, with the full link row in the top bar.
- Case pages and the Work page are unchanged (they already show Home / Work and the button).

## Details
- Remove the second navigation row under the top bar on the home page.
- Add a small "Work" text link next to the button, shown only below desktop width.
- Slim the top bar on phones from 80px to 64px so more of the page is visible; desktop height unchanged.
- Adjust section jump spacing so tapping "Let's talk" lands the contact section neatly under the slimmer bar.

## Check
- Phone (375 and 393), tablet (768) and desktop (1440): no sideways overflow, logo, Work and button fit on one row, "Let's talk" lands on the contact section, desktop looks identical.

## Technical notes
- `src/routes/index.tsx`: delete the `nav[aria-label="Sections"]` block; add `lg:hidden` Link to `/work` in the right-side group; header row `h-16 lg:h-20`.
- `src/components/site/sections.tsx` and contact section: `max-lg:scroll-mt-32` becomes `max-lg:scroll-mt-20`.
