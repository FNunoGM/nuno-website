# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Portfolio site for Nuno Mendes, who builds websites and online shops for independent brands, studios and artists. Based in Lisbon, working worldwide. Single-author Next.js app deployed on Vercel, showcasing work, profile, and contact info.

## Commands

Package manager is **pnpm** (pinned via `packageManager` field in `package.json`).

- `pnpm dev` — run Next.js dev server on http://localhost:3000
- `pnpm build` — production build
- `pnpm start` — serve the production build
- `pnpm lint` — run ESLint (config extends `eslint-config-next` core-web-vitals + TypeScript)

There is no test suite.

## Architecture

Next.js 16 **App Router** with React 19 and Tailwind CSS v4 (via `@tailwindcss/postcss`).

- `app/` — routes. Each page (`/`, `/work`, `/profile`, `/contact`) is a server component that composes the same three pieces: `<Header />`, content wrapped in `<PageTransition>`, and `<Navigation />` fixed to the bottom.
- `components/common/` — shared layout primitives (`Header`, `Hero`, `Navigation`, `Footer`, `PageTransition`). `PageTransition` is a server component that applies a CSS-only fade (`.page-fade` in `globals.css`) so content never waits on JavaScript. `Navigation` is the only client component (`usePathname` for the current-page underline and `aria-current`).
- `app/not-found.tsx` — branded 404 using the same Header/PageTransition/Navigation pattern.
- `app/layout.tsx` — root layout, mounts `@vercel/analytics`. Holds the site-wide title, description, Open Graph/Twitter tags and `metadataBase` (`https://www.nunofm.com`); routes inherit them. `app/opengraph-image.jpg` is the link-preview image (WhatsApp, iMessage, LinkedIn).
- `public/` — static assets, including project screenshots under `public/work/`.

Path alias `@/*` resolves to the repo root (see `tsconfig.json`), so imports look like `@/components/common/Header`.

### Styling

- Tailwind v4 with `@import "tailwindcss"` in `app/globals.css`.
- Design tokens live in `app/globals.css` (there is no `tailwind.config.ts`): the `japandi` color palette in `@theme`, and `--font-serif` in `@theme inline`, pointing at **Newsreader** (variable weight + optical size), self-hosted via `next/font/google` in `app/layout.tsx`. `font-sans` is Tailwind's default system stack.
- If the serif changes, regenerate `app/opengraph-image.jpg` so the name in the link preview matches.
- Design language relies heavily on wide letter-spacing (`tracking-[0.20em]` / `tracking-[0.30em]`), uppercase serif headings, and opacity-based hover transitions. Match this when adding new UI.
- The site is always dark brown (`--background` #22110a, `--foreground` #d1c0ab); it deliberately does not follow the OS light/dark setting.

### Adding a new page

Create `app/<route>/page.tsx` following the existing pattern: `<Header />`, content inside `<PageTransition>`, then `<Navigation />`. Add a corresponding `<Link>` to `components/common/Navigation.tsx` if it should appear in the bottom nav.
