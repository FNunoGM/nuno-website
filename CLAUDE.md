# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for Nuno Mendes (software developer). Single-author Next.js app deployed on Vercel, showcasing work, profile, and contact info.

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
- `components/common/` — shared layout primitives (`Header`, `Hero`, `Navigation`, `Footer`, `PageTransition`). `PageTransition` is a `"use client"` framer-motion wrapper that fades content in on mount; it's the only client component pattern used.
- `app/layout.tsx` — root layout, mounts `@vercel/analytics`. Page metadata is set per-route.
- `public/` — static assets, including project screenshots under `public/work/`.

Path alias `@/*` resolves to the repo root (see `tsconfig.json`), so imports look like `@/components/common/Header`.

### Styling

- Tailwind v4 with `@import "tailwindcss"` in `app/globals.css`.
- A custom `japandi` color palette and `Playfair Display` (serif) / `Inter` (sans) fonts are defined in `tailwind.config.ts`.
- Design language relies heavily on wide letter-spacing (`tracking-[0.20em]` / `tracking-[0.30em]`), uppercase serif headings, and opacity-based hover transitions. Match this when adding new UI.
- Dark mode is handled via `prefers-color-scheme` swapping CSS variables in `globals.css` — no theme toggle.

### Adding a new page

Create `app/<route>/page.tsx` following the existing pattern: `<Header />`, content inside `<PageTransition>`, then `<Navigation />`. Add a corresponding `<Link>` to `components/common/Navigation.tsx` if it should appear in the bottom nav.
