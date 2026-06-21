# HassanAlRawi.com

Personal site for Hassan Al Rawi, built with [Astro](https://astro.build) and a
neumorphic design. Deployed to Firebase Hosting; a contact Cloud Function handles
the `/contact` endpoint.

## Stack

- **Astro** (static output) — single page at `src/pages/index.astro`
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

## Architecture notes

- Astro's `outDir` is set to `build/` in `astro.config.mjs` so the existing
  Firebase setup is unchanged: `firebase.json` (`hosting.public: "build"`),
  the `/contact` rewrite, and the GitHub deploy workflows all keep working.
- The theme toggle (light/dark) stores its choice in `localStorage` under
  `hr-theme` and is applied before paint to avoid a flash.
- Real contact email and social links live in the frontmatter of
  `src/pages/index.astro`.

## TODO

- Fill in the **Selected work** section (placeholder cards in `index.astro`).
- Add a real portrait image for the About section.
- Add a résumé PDF and a real "Book a call" scheduling link.

## Previous site

The prior Create React App version is preserved in full in [`backup/`](./backup)
as a self-contained project (`cd backup && yarn install && yarn start`).
