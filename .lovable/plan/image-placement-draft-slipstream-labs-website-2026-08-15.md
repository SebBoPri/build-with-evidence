# Image Placement Draft — Slipstream Labs Website

## Goal
Strengthen the site's narrative with abstract, monochrome technical renders while keeping the Linear-style minimalism intact. Every image should earn its place by clarifying an idea, not decorating the page.

## Image Inventory

| Asset | File | Current Placement | Proposed Role |
|-------|------|-------------------|---------------|
| `hero-field.jpg` | `src/assets/hero-field.jpg` | Hero backdrop | Keep. Sets the "converging on signal" visual metaphor at first glance. |
| `futures-branching.jpg` | `src/assets/futures-branching.jpg` | Problem section | Keep. Illustrates diverging plans and the hidden decision point. |
| `futures-cone.jpg` | `src/assets/futures-cone.jpg` | Approach section | Keep. Shows narrowing from possible → plausible → preferred outcomes. |
| `evidence-resolve.jpg` | `src/assets/evidence-resolve.jpg` | Case snapshot | Keep. Embodies the "noise → signal" transformation. |

## Section-by-Section Image Map

### 1. Hero
- **Image**: `hero-field.jpg`
- **Treatment**: Full-bleed backdrop, 60% opacity, gradient wash from background.
- **Why**: Reinforces "Chart the problem. Then build." The field of points converging toward a target mirrors the discovery process before a single line of code is written.
- **Possible addition**: A faint SVG target/crosshair overlay aligned with the headline to echo the original Linear trajectory graphic without cluttering the type.

### 2. The Problem
- **Image**: `futures-branching.jpg`
- **Treatment**: Wide framed figure below the two-column text, with a caption that names the idea.
- **Why**: Makes the abstract cost of "building the wrong thing" visible — many possible paths, most of them wrong, with one fragile decision point.
- **Possible addition**: A second small plate showing "the gap" — a clean build pipeline on one side and a disconnected customer loop on the other — to underscore "skipped without noticing."

### 3. The Approach
- **Image**: `futures-cone.jpg`
- **Treatment**: Placed beneath the `ApproachRail` timeline as a summary plate.
- **Why**: After the rail walks through Frame → Investigate → Test → Decide, the cone shows the outcome: the cone of uncertainty narrowing to one preferred path.
- **Possible addition**: Micro-icons or small inline diagrams for each rail step (assumption map, interview note, experiment, decision memo) to break up the text-only nodes.

### 4. Discovery Sprint
- **Current state**: No image.
- **Proposal**: Add a technical render showing a compressed timeline — a horizontal strip of nodes for Week 1–4 collapsing into a single decision diamond.
- **Caption**: "Two to four weeks → one recommendation."
- **Why**: The sprint is the product; it deserves its own visual. A timeline-to-decision graphic makes the fixed-scope promise concrete.

### 5. Outcomes
- **Current state**: No image.
- **Proposal**: Leave mostly text-driven, but add a small 4-part diagram (2×2 grid of simple icons or glyphs) next to the four outcomes.
- **Alternative**: One quiet background texture of faint grid lines to keep the section from feeling too sparse without competing with the copy.

### 6. Case Snapshot
- **Image**: `evidence-resolve.jpg`
- **Treatment**: Framed figure beside the question → evidence → decision list.
- **Why**: The image is the story. It turns the abstract "we interviewed customers" into the visceral feeling of scattered noise resolving into a clean line.
- **Possible addition**: A second plate showing the alternative future — a polished onboarding flow that would have missed the point — to make the "build deferred" decision more tangible.

### 7. Testimonials / Results
- **Current state**: No image.
- **Proposal**: No photographs. Instead, use a subtle background texture or a small abstract "signal verified" glyph (a single clean waveform) above the section.
- **Why**: Anonymous testimonials should not feel like stock photography. Keep the trust signal clean and typographic.

### 8. About / Contact
- **Current state**: No image.
- **Proposal**: If Sebastian wants a personal presence, a single high-contrast black-and-white portrait. If not, a minimal Stockholm/atmosphere plate or no image at all.
- **Why**: The site currently reads as a studio/company, not a personal brand. Only add a portrait if that positioning is intentional.

## Style Rules for All Images

1. **Monochrome only**: Black, white, and near-grays. No color accents except the site's primary where absolutely necessary.
2. **High contrast, low ornament**: Thin lines, sparse points, generous negative space.
3. **Consistent framing**: All figures get the same `border border-hairline` treatment and a mono caption.
4. **Purpose first**: Every image must map to a section's core idea. If it only looks good, remove it.
5. **Performance**: All images lazy-loaded except the hero. Use `loading="lazy"`, explicit width/height, and keep file sizes under 200 KB.

## Recommended Next Images to Generate

| Filename | Placement | Concept |
|----------|-----------|---------|
| `sprint-timeline.jpg` | Discovery Sprint section | Compressed timeline collapsing into a decision diamond. |
| `gap-loop.jpg` | Problem section (optional second plate) | Build pipeline disconnected from a customer feedback loop. |
| `alternative-future.jpg` | Case snapshot (optional second plate) | The polished-but-wrong path that was avoided. |
| `signal-verified.jpg` | Testimonials section (optional background glyph) | A clean waveform or single confirmed pulse. |

## Open Questions

1. Do you want a portrait in the About/Contact section, or keep the site studio-first?
2. Should the Discovery Sprint get its own timeline image, or stay text-only?
3. Are there real client logos that can replace or supplement the anonymous testimonials?
4. Should any of the existing four images be re-cropped or re-generated for better fit?

## Suggested Order of Work

1. Generate `sprint-timeline.jpg` and place it in the Discovery Sprint section — highest impact empty slot.
2. Decide on portrait vs. no portrait for About/Contact.
3. Add optional second plates to Problem and Case snapshot only if the page feels thin after step 1.
4. Run a final visual pass for consistent opacity, cropping, and caption style across all images.
