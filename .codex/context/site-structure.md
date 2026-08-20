# Site structure

Last verified: August 20, 2026

Public routes include the home page, offers, ten offer detail pages, DIY,
gallery, about, contact, legal notice, and privacy policy.

`src/data/offers.ts` owns reusable offer content and `src/data/site.ts` owns
social-profile targets. Shared document structure belongs in
`src/layouts/BaseLayout.astro`; reusable presentation components live in
`src/components/`; global styles and theme tokens live in
`src/styles/global.css`.
