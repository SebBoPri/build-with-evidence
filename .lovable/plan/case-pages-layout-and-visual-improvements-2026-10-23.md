# Case pages: layout and visual improvements

These suggestions cover both cases, Sälmagen and Data quality. They give the cases one shared shape and keep the existing fonts, colours and white editorial look. Approve all of them, or tell me which numbers to keep.

## Text placement

1. **Headline before image.** Each case currently opens with a large picture, and the headline only appears below it, past the first screen. Swap the order: breadcrumb, headline, meta, then the image. Visitors learn what the case is about in the first second.
2. **One summary, not two.** The large summary paragraph and the Problem / Contribution / Outcome / Limitation row say the same thing twice. Keep the four-box row as the scan layer, and shorten the paragraph to two lines, or drop it.
3. **Pull the outcome forward.** Show the strongest number (for example "8,000+ critical issues resolved") as one large figure beside the headline. A skimmer gets the result without reading.
4. **Shorter reading column.** Limit body text to about 60 to 65 characters per line, and keep the sticky chapter title on the left at desktop width. On phone, put the short lead line directly under each chapter title in a lighter colour.
5. **Lead line as takeaway.** Every chapter opens with its one-sentence takeaway in larger serif type. A reader who only reads those lines still gets the whole story.

## Visual elements

6. **Images tied to chapters.** Place each image inside the chapter it explains, full width of the text grid, with its caption aligned to the text column. Example: the chaos-to-order illustration goes in "Making it visible", not between the summary and the chapter list.
7. **Consistent image rhythm.** One wide image near the top, one inside the chapters, and none back to back. Captions stay one line long, with the same pill tag style wherever an image is AI generated or a sketch.
8. **Chapter navigation that follows you.** On desktop, the 01 to 05 chapter list becomes a slim sticky bar under the header, and the current chapter is highlighted as you scroll. On phone it becomes a horizontal scrolling row instead of five stacked rows.
9. **One colour moment per case.** Keep the coloured closing block, cobalt for Sälmagen and gold for Data quality, as the only full colour area. Repeat that same case colour on the small chapter numbers so each case has its own identity.
10. **Next case footer.** Replace the generic closing with a "Next case" card that shows the other case's title and colour, with the contact button beneath it. People keep browsing instead of leaving.

## Mobile

11. Less space above the first image, the four summary boxes as a 2x2 grid instead of four stacked boxes, and slightly smaller chapter numbers.

## Technical details

- Changes are limited to the two case route files, plus a small shared case-layout component for the sticky chapter bar, the chapter section and the next-case card. Both cases use that component so they stay consistent.
- The highlighted chapter comes from an IntersectionObserver in a client-only effect. No new dependencies.
- The copy itself is unchanged, except for removing or shortening the duplicate summary paragraph (item 2).
- I'll check both cases at 375, 768 and 1440 with Playwright.
