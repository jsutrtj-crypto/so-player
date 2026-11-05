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

## Project rules

- All release/download data (version numbers, dates, sizes, APK URLs, release notes) lives only in `src/data/versions.ts`; the page renders from it and never hardcodes versions.
- `downloadUrl` must stay `null` until the user supplies a real APK link; the download button shows an honest "coming soon" notice instead of a fake link. Site config (nav, tagline, social URLs) lives in `src/data/site.ts`, and empty social URLs are never rendered as links.
- Real SO PLAYER screenshots live in `src/assets/screen-*.jpg` (copied from the user's uploads, unaltered); the old generated `screen-*.png` stand-ins are unused. New screenshots replace the JPGs keeping the same file names.
