# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page personal CV/bio site (React 19 + Vite, dark theme, no UI framework), deployed to GitHub Pages at https://sokomishalov.github.io/about-me. There is no backend, no router, and no test suite.

## Commands

- `npm start` — Vite dev server at http://localhost:5173/about-me/.
- `npm run build` — production build into `build/`; `npm run preview` serves it.
- `npm run deploy` — manual deploy: builds and publishes `build/` to the `gh-pages` branch.

## Deployment

GitHub Pages serves the `gh-pages` branch (legacy branch source). `.github/workflows/deploy.yml` builds every push/PR and, on `master`, publishes `build/` to `gh-pages`, so `npm run deploy` is only a fallback. `base: "/about-me/"` in `vite.config.js` must match the Pages path; reference public assets via `import.meta.env.BASE_URL` (see `CV_PAGE` in `consts.js`).

## Structure

- `src/app/App.jsx` — renders the `Common` intro (a `react-typist-component` typing animation) first; `Contacts`, `Timeline` and `Activity` only mount once the intro is done. The intro animates only on the first visit (a `localStorage` flag, `about-me:intro-seen`, is set once it finishes or is skipped) and never under `prefers-reduced-motion`; it can be skipped via a dim "skip ›" button pinned top-right, or Esc. `renderIntro()` in `common.jsx` is a plain function, not a component, because Typist walks nested elements but doesn't expand custom components.
- Content is data-driven:
  - Career: `src/app/timeline/companies.js`, newest first. Each company has `from`/`to` ("YYYY-MM", or "YYYY" if the month is unknown; no `to` = now) and `roles` (newest first). Roles with their own dates are promotion steps; roles without dates share the company period. Durations are computed in `src/util/date/date.js` and omitted when a boundary has no month.
  - Social links: `src/app/contacts/socials.jsx`, URLs in `src/util/consts/consts.js`.
  - CV PDF: `public/cv.pdf` (stable URL `/about-me/cv.pdf`).
  - Open source projects: fetched at runtime from the unauthenticated GitHub API (`src/util/github/github.js`); the section hides itself if the request fails or is rate-limited. The README viewer (`project-description.jsx`, react-markdown + asciidoctor) is lazy-loaded when a project is opened.
- Language dot colors come from a small hardcoded linguist map in `github.js`; unknown languages fall back to grey.
- Styles are per-component `.scss` files imported directly; shared variables live in `src/styles/consts.scss` (`@use ... as *`).
- `index.html` (repo root) holds the SEO/Open Graph meta tags and a `<noscript>` fallback with the key links — keep them in sync when the title or contacts change.
