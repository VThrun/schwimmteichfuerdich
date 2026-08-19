# Technical stack

Last verified: August 19, 2026

- **Runtime:** Node.js 22.12.0 or newer
- **Site generator:** Astro 7 with TypeScript in strict mode
- **Styling:** Tailwind CSS 4 through its Vite plugin, with project-specific
  tokens and global rules in `src/styles/global.css`
- **UI behavior:** Preline for the responsive navigation, supported by local
  TypeScript and browser scripts in Astro components
- **Quality checks:** `@astrojs/check` as part of the production build

Astro is configured with `prefetch: true`. The project has no additional client
framework, database, analytics, or third-party embeds. Exact dependency versions
are recorded in `package.json` and `package-lock.json`.
