# 日本極旅 — NIHON TRIP (Premium Japan)

日本を深く味わうことを目的としたサンプルサイト／コンテンツ集です。旅先紹介、読み物（ブログ）、旅の体験やおすすめ情報を中心に構成されています。

## Key Info

- **Site name:** 日本極旅 NIHON TRIP
- **Contact:** concierge@nihontrip.premium
- **Core pages:** Destinations, Blog, Contact, Privacy, Terms

## Features

- Curated destination pages with long descriptions, highlights, galleries and travel tips
- Editorial blog posts and category metadata
- Responsive Next.js app using TypeScript
- Simple, data-driven content in `src/data` and centralized site config in `src/config/site.ts`

## Tech Stack

- Next.js 16 + React 19
- TypeScript
- Tailwind CSS
- Framer Motion, GSAP for animations
- lucide-react for icons

## Local development

Install and run locally:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm start
```

## Important files

- Site configuration: [src/config/site.ts](src/config/site.ts#L1-L40)
- Destination data: [src/data/destinations.ts](src/data/destinations.ts#L1-L200)
- Blog data and metadata: [src/data/blog.ts](src/data/blog.ts#L1-L40)
- App entry / homepage: [src/app/page.tsx](src/app/page.tsx#L1-L20)
- Key components: [src/components/Hero.tsx](src/components/Hero.tsx#L1-L200), [src/components/FeaturedDestinations.tsx](src/components/FeaturedDestinations.tsx#L1-L200)

## Notes for contributors

- Content is largely data-driven; edit or add posts/destinations under `src/data`.
- Update contact/social links in [src/config/site.ts](src/config/site.ts#L1-L40).
- Open a PR for design or structure changes; ping maintainers for content updates.

---
_Generated/updated to reflect the current site content and structure._
