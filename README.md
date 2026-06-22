# HassanAlRawi.com

Personal site for Hassan Al Rawi, built with [Astro](https://astro.build) and a
neumorphic design. Deployed to Firebase Hosting; a contact Cloud Function handles
the `/contact` endpoint.

## Stack

- **Astro** (static output)
- **pnpm** for package management
- **Firebase Hosting** serves the built site
- **Firebase Functions** (`functions/`) — the `contact` function, unchanged

## Develop

```sh
pnpm install
pnpm dev        # local dev server
pnpm build      # outputs to ./build (Firebase Hosting's public dir)
pnpm preview    # serve the production build locally
```

## Project layout

```
src/
  data/site.ts          # content: name, email, nav links, socials, stack, projects
  styles/                # one CSS file per concern:
                         #   tokens.css (theme palettes), base.css (reset + shell),
                         #   utilities.css (shared classes), then one per section
                         #   (nav.css, hero.css, …, blog.css)
  layouts/BaseLayout.astro   # <head>, fonts, theme scripts, Nav + Footer, <slot/>;
                         #   imports tokens + base + utilities (the foundation)
  components/            # Nav, Hero, Stats, WhatIDo, SelectedWork, WorkCard,
                         #   About, Stack, Contact, Footer, ThemeToggle, Logo
                         #   — each imports its own stylesheet
  content/blog/*.md      # blog posts (Markdown)
  content.config.ts      # blog collection schema
  pages/
    index.astro          # home — composes the section components
    blog/index.astro     # writing index
    blog/[...slug].astro # individual post
```

Styles live next to what they style: each component imports its own CSS file
(e.g. `Hero.astro` → `styles/hero.css`), and the layout imports the foundation
(`tokens`, `base`, `utilities`). Astro then ships only the CSS each page uses.
Most content edits are data-only — update `src/data/site.ts`.

## Writing a blog post

Drop a Markdown file in `src/content/blog/` — the filename becomes the URL
(`my-post.md` → `/blog/my-post`). Start it with frontmatter:

```yaml
---
title: "My post title"
description: "One-line summary for the list + social cards."
pubDate: 2026-06-21
tags: ["notes"]
draft: false        # set true to keep it out of the published build
---
```

Posts are listed newest-first on `/blog`; drafts are excluded from the build.

## Architecture notes

- Astro's `outDir` is set to `build/` in `astro.config.mjs` so the existing
  Firebase setup is unchanged: `firebase.json` (`hosting.public: "build"`),
  the `/contact` rewrite, and the GitHub deploy workflows all keep working.
- The theme (light/dark) follows the OS `prefers-color-scheme` by default;
  the toggle stores an explicit choice in `localStorage` (`hr-theme`) that
  overrides the OS. It's applied before paint to avoid a flash.

## TODO

- Fill in the **Selected work** section (placeholder cards in `index.astro`).
- Add a real portrait image for the About section.
- Add a résumé PDF and a real "Book a call" scheduling link.

## Previous site

The prior Create React App version is preserved in full in [`backup/`](./backup)
as a self-contained project (`cd backup && yarn install && yarn start`).
