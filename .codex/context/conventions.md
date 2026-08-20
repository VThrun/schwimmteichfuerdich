# Conventions

Last verified: August 20, 2026

- Prefer native Astro components, file-based routing, and TypeScript. Do not add
  a client framework while small local browser scripts are sufficient.
- Maintain reusable content at its data source: offers belong exclusively in
  `src/data/offers.ts`, and social media targets belong in `src/data/site.ts`.
- Use `BaseLayout.astro` for shared page structure. Do not duplicate the header,
  footer, or metadata in individual pages.
- Treat all visible content as placeholder content during the design phase. Do
  not add real prices, images, technical data, contact details, or legal text
  without explicit approval.
- Offer cards are fully linked and must not have a second call to action.
- Interactions must be keyboard-accessible and respect
  `prefers-reduced-motion`. The existing gallery lightbox is the reference
  implementation.
- Store project decisions and facts in `.codex/context/`; keep general working
  rules in `AGENTS.md` and historical research separate from approved content.
