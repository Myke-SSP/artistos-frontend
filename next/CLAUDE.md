# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

ArtistOS frontend — a Next.js 15 app using the App Router. Displays roadmap progress for a musician profile by fetching from the ArtistOS backend.

## Commands

Run from `artistos-frontend/next/`:

```bash
npm run dev     # local dev server (port 3000 by default)
npm run build   # production build
npm run lint    # eslint
npm start       # serve production build
```

## Architecture

**Framework:** Next.js 15, React 19, App Router, Tailwind CSS v4.

**Structure:** Minimal — single page at `app/page.js`. No additional routes, components, or API routes exist yet.

**Data fetching:** `app/page.js` is a server component. It fetches directly from the backend on every render (`cache: "no-store"`). No client-side state or hooks yet.

**Backend connection:** Controlled entirely by the `NEXT_PUBLIC_API_BASE_URL` environment variable. Set this in `.env.local` for local dev pointing to `http://localhost:3000` (backend). In production, this points to the Render-deployed backend.

## Deployment

- Frontend: Vercel
- Backend: Render (separate service)

The frontend and backend are deployed independently. Environment variables must be configured in both Vercel and Render dashboards separately from `.env.local`.

## Sprint Context

Sprint 3 complete as of 2025-10-05. Progress tracking (X/Y Micro-Moves Complete) is live. Next sprint will expand UI — components and additional pages should be added under `app/` following Next.js App Router conventions.
