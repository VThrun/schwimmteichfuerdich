# Project Instructions

## Project Overview

This repository contains a static Astro website. Prefer native Astro components,
file-based routing, TypeScript, and the existing CSS/UI setup. Do not introduce a
client framework unless a confirmed requirement cannot be implemented clearly with
Astro and small, local browser scripts.

The project can be in a design-only phase. During that phase, keep prices, images,
technical specifications, contact data, and legal content as clearly recognizable
placeholders until the user explicitly approves real content.

## Development

Install dependencies with `npm install` and verify production output with:

```sh
npm run build
```

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

Do not add automated tests unless the user changes the current project agreement.

## Project Context

Before making project-specific changes, read [`.codex/context/README.md`](.codex/context/README.md)
and the files it routes to for the task. Keep general, durable workflow rules in this
file and detailed project decisions in `.codex/context/`.

The historical site analysis remains in [`OLD_SITE_ANALYSIS.md`](OLD_SITE_ANALYSIS.md).
Treat it as research, not as approved publication content.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
