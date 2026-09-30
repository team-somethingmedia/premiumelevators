<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting published git history — force pushing, or rebasing/amending/squashing commits that are already pushed — as it rewrites history on Lovable's side and the user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep Premium Elevators page content in `src/lib/site-data.ts` and shared navigation in `src/components/site-shell.tsx` so product and service detail pages remain consistent.
- Use static TanStack routes for primary pages and data-backed detail routes for lifts and services so every page can have its own search metadata.
- Limit interface colours to #ececec, #274A66, and Tailwind gray-700 (#374151); desaturate editorial photos and use the converted monochrome brand mark to preserve the palette.
- Keep the contact form as an email handoff until a mail delivery service is connected; do not imply a message was saved or sent automatically.
