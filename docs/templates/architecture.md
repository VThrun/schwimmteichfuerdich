# Architecture

Last verified: August 20, 2026

The website is a statically built Astro project. File-based routing in
`src/pages/` creates the public pages. There is no server-side application,
persistent storage, or external API.

## Structure

- `src/layouts/BaseLayout.astro` provides the document head, metadata, skip link,
  header, and footer for every page.
- `src/pages/` contains the static routes. The offer detail pages are generated
  in `src/pages/angebote/[slug].astro` with `getStaticPaths()`.
- `src/components/` contains reusable presentation components. Interactivity is
  limited to small local browser scripts for the navigation, gallery lightbox,
  and form prototype.
- `src/data/offers.ts` is the single presentation data source for the offer
  overview and detail pages. `src/data/site.ts` stores the social media targets.
- `src/styles/global.css` defines global styles, fonts, and design tokens.

## Public pages

The routes include the home page, offers, ten offer detail pages, DIY, gallery,
about, contact, legal notice, and privacy policy. A complete project-specific
route overview is available in
[`../../.codex/context/site-structure.md`](../../.codex/context/site-structure.md).

The legal notice and privacy policy use `BaseLayout` to set `noindex, nofollow`
because both pages are still drafts.
