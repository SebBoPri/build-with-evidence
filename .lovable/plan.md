# Work colour system across the full site

## Direction
Use the Work page as the visual source of truth across every page: white paper background, near-black text, Playfair Display headlines, Geist body copy, and the existing cobalt, muted purple, and warm gold accents.

## Landing page
- Change the page, sticky header, footer, and all content sections to the light paper theme.
- Preserve the current layout, spacing, copy, imagery, animations, and section order.
- Keep the construction photograph natural, with its existing dark overlay for legibility.
- Adapt the particle-stream image to sit naturally on white, using the same ink-on-paper treatment already established for Work imagery.
- Use the three accent colours selectively for section markers, step progress, interaction states, and one or two stronger editorial moments. Avoid alternating full-width colour bands so the scrolling page remains continuous.
- Restyle buttons, secondary actions, form fields, rules, and focus states for high contrast on white.

## Work and case pages
- Keep the existing Work card grid and Sälmagen editorial layout.
- Align shared navigation, labels, buttons, rules, and footer treatment with the site-wide light theme.
- Preserve the Sälmagen cobalt chapter and natural photography.

## Technical details
- Promote the existing paper tokens into the site-wide default theme rather than duplicating colour values in page code.
- Replace remaining page-level hardcoded brand colours with semantic tokens where practical.
- Retain the established dark overlay only where white text sits directly on photography.
- Add no new content, pages, dependencies, or visual assets.

## Verification
- Check the landing page, Work page, and Sälmagen case at 375, 768, and 1440 widths.
- Verify header contrast, image treatment, buttons, form focus states, links, section markers, and the Sälmagen cobalt chapter.
- Confirm every route builds without errors and keeps its existing metadata.
