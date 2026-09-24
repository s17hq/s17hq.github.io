# AGENTS.md

Guidance for AI coding agents (OpenCode, Claude Code, etc.) working in this repository.

## Project Overview

Single-page homepage for Syntax17 (s17hq), deployed to GitHub Pages at https://s17hq.github.io. A small Vite + React app styled with Tailwind CSS v4.

- Language/stack: Vite 8 + React 19 (plain JSX, no TypeScript), Tailwind CSS v4 via `@tailwindcss/vite`
- Toolchain: Node 24 (CI uses Node 24); npm
- Author/maintainer: yungsamd17 (https://github.com/yungsamd17)

## Build & Verify

```bash
npm install         # install dependencies
npm run dev         # dev server
npm run build       # production build to dist/
npm run preview     # preview the production build
```

- No test or lint scripts exist. CI is `.github/workflows/deploy.yml`: on every push to `main` (plus `workflow_dispatch`) it runs `npm ci` + `npm run build` on Node 24, uploads `dist/` via `actions/upload-pages-artifact@v3`, and deploys with `actions/deploy-pages@v4`. Deploys use a `pages` concurrency group with `cancel-in-progress: true`.
- Deploy fires only on pushes to `main` — there are no checks on PRs. Run `npm run build` locally before merging so you do not deploy a broken site.

## Architecture

```
index.html                 # Vite entry: mounts #root, loads Google Font "Aldrich" + Font Awesome 7 CDN
src/main.jsx               # React mount point
src/App.jsx                # page composition (Header, intro copy, CTAButtons, Footer)
src/components/Header.jsx      # logo + title block
src/components/CTAButtons.jsx  # call-to-action links
src/components/Footer.jsx      # footer links
src/index.css              # Tailwind import + design tokens in the @theme block (colors, fonts, fade-up animation)
public/                    # favicon.ico, Syntax17-logo.png (served as-is)
```

Key patterns:

- All design tokens live in the Tailwind v4 `@theme` block of `src/index.css` (`--color-bg`, `--color-accent`, `--font-display`, `--animate-fade-up`, ...). Change colors/fonts/animations there; components then use generated utilities like `text-accent` and `animate-fade-up`.
- Light theme homepage (`#f1f1f1` bg) sharing the s17 brand accent red `#ff4136`; display font "Aldrich", body Verdana.
- External assets (Google Fonts, Font Awesome) load from CDNs in `index.html` — they are intentional, not things to bundle.
- `vite.config.js` sets `base: '/'` for user/org Pages — do not change it.

## UI Conventions

- Keep the page minimal: one centered column (`max-w-[700px]`), generous spacing, subtle fade-up entrance animation.
- New sections follow the existing component split (one component per block under `src/components/`).

## Commit Messages

Format: `type(scope): short imperative summary` — lowercase after type, no trailing period.
Keep commits atomic — one logical change per commit.

| Type | Use for |
|---|---|
| `feat` | new user-facing feature |
| `fix` | bug fix |
| `refactor` | code change that neither fixes nor adds behavior |
| `style` | formatting/UI polish without logic change |
| `test` | adding or fixing tests |
| `docs` | documentation only |
| `chore` | build, deps, CI, tooling |
| `release` | version bump / release tagging |

Scope is a short area name for this project (e.g. `home`, `css`, `ci`).
Use plain `type:` only when a change genuinely spans everything (rare).

- Never add a `Co-authored-by` / `Signed-off-by` trailer for the same identity
  that authors the commit — a self co-author is a redundant duplicate. Only
  credit a genuinely different human co-author, and only when asked. No AI
  co-author trailers in commits either; AI attribution stays only in the PR body.
- Keep the body free of trailers entirely unless explicitly asked for one.
  When squash-merging via `gh pr merge --squash`, pass an explicit
  `--subject` and an empty `--body ""` so GitHub doesn't re-inject branch
  trailers or auto-credit the branch author as a co-author.

## Agent Guardrails

- Never commit or push directly to `main`; all changes land through pull requests.
- Never open a PR unless the developer explicitly asks for it.
- One concern per change. If the description says "also", split it into another branch/PR.
- Do not commit secrets, keystores, or local-only files (e.g. `.and-code/`).
- Never modify `.github/workflows/deploy.yml` — the Pages deployment depends on its exact permissions and actions.
- When watching CI/bot feedback on your PRs: poll checks and comments newer than the last push,
  verify each bot finding against the source before "fixing" it, dismiss false positives with a
  written reason, and stop when checks are green on the latest commit.

## Pull Requests

All changes land on `main` through pull requests.

1. Create a branch off `main`: `<type>/<short-description>` (e.g. `style/footer-spacing`).
2. Commit there using the format from **Commit Messages**; keep commits atomic.
3. Push the branch and open a PR against `main`.

PR rules:

- One feature/fix per PR — small and focused beats large and thorough.
- Title follows the commit message format: `type(scope): short imperative summary`
  (e.g. `style(home): tighten hero spacing`) — it becomes the squash-merge commit message.
- Body stays concise: what changed and why, bullet list of touched areas, testing checklist (tick before merge).
- UI changes must include clear before/after screenshots (upload directly to GitHub — never commit PR-only screenshots).
- End the body with an AI attribution line stating exactly which model and agent made the changes,
  in this exact format:

  ```
  Built with {model} in the {agent} harness.
  ```

  Example: `Built with ox-alpha in the OpenCode harness.`

- Do **not** put AI attribution in GitHub Release notes — releases stay clean.

## Gotchas

- Merging to `main` deploys to production immediately (Pages workflow); since PRs get no CI, local `npm run build` is the only pre-merge verification.
- This is plain JSX — do not introduce TypeScript or new libraries without intent; the site should stay tiny.
- The `@theme` token names are the contract between `index.css` and utility classes used in JSX; renaming a token silently breaks styling that only fails visually at runtime.
