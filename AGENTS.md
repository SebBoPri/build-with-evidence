<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Case pages
- Work detail pages reuse `src/components/site/case-layout.tsx`, including placeholder entries, to keep navigation, typography and closing links consistent without inventing case content.
- Case-specific coded graphics live in focused site modules, keeping proposed formats separate from shared case layout and observed outcomes.
- Case bodies live in `src/components/cases/` and are rendered by both `/work/*` and `/portfolio/*`; a `SiteVariantContext` swaps header, closing and footer so the portfolio never links to the consultancy site.
