# Durable decisions

Last verified: August 20, 2026

- This repository is Design Draft 1 and retains its original Astro theme and
  Preline-based UI implementation.
- The visual theme was selected independently for this project. It was not
  generated through daisyUI Blueprint and must not be treated as a Blueprint
  migration target.
- The site is a static Astro build with no server application, database, or
  external API.
- The runtime requirement is Node.js 22.12.0 or newer. The site generator is
  Astro 7 with TypeScript in strict mode.
- Styling uses Tailwind CSS 4 through its Vite plugin. Project-specific tokens
  and global rules live in `src/styles/global.css`.
- Preline supports responsive navigation; other interaction stays in small
  local browser scripts inside Astro components.
- Astro is configured with `prefetch: true`.
- Verification consists of `npm run build` and manual desktop/mobile review;
  automated tests are outside the current project agreement.
