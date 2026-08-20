# Key commands

Last verified: August 20, 2026

| Purpose | Command |
| --- | --- |
| Install dependencies | `npm install` |
| Run the production build, including type and Astro checks | `npm run build` |
| Preview the built website locally | `npm run preview` |
| Run the Astro CLI | `npm run astro -- <command>` |
| Start the development server in the background | `npm run astro -- dev --background` |
| Manage the background server | `npm run astro -- dev status`, `npm run astro -- dev logs`, `npm run astro -- dev stop` |

The build script runs `astro check` first and then `astro build`. The current
project agreement does not include automated tests.
