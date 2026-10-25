# Bring the Work page look to the home page

Reuse the Work page's visual language on the home page, keeping the existing copy, section order and layout.

## What changes

1. **Section labels**: replace the small mono labels with the Work page label, a short blue / purple / gold bar plus a bold uppercase word (e.g. PROBLEM, DISCOVERY SPRINT, APPROACH, ABOUT).
2. **Headlines**: hero uses the same large serif size and tight leading as the Work headline; the intro paragraph under it uses the Work page's larger, lighter intro type.
3. **Sub-headings in lists**: "We've all seen it", "When to use it", "What you leave with" become the Work page's italic serif heading with a hairline underline and the three small colored dots on the right.
4. **Colored blocks, like the Work cards**: two sections get a solid brand-color panel, as the Work grid does:
   - "What you leave with" (three outcomes) shown as three cards in blue, purple and gold.
   - The pull quote shown as a near-black panel with white serif text instead of a purple left line.
5. **Closing block**: the contact area opens with a full-width cobalt panel like the case pages' insight chapter, with the form below on white.

Nothing changes in the text, the header, the particle-stream image, the step rail or the logo.

## Check
Phone, tablet and desktop (375 / 768 / 1440), readable contrast on every colored panel, clean build.

## Technical details
- Extract the Work label and "Featured" heading into small shared components in `src/components/site/sections.tsx` and use them in both `src/routes/work/index.tsx` and `src/routes/index.tsx`.
- Card colors use existing `brand-*` tokens and the darker gold text token for small text; no new hardcoded colors.
