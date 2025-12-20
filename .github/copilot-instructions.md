# Copilot Instructions for akdombrowski-dot-com

## Project Overview

This is **Anthony Dombrowski's professional portfolio** built with Next.js 15, featuring a landing page, content library (videos, blogs), authentication via Calendly OAuth, and integrations with external APIs (YouTube, Google Calendar, WakaTime, Stack Overflow).

**Key Tech Stack:**
- Next.js 15 with App Router (MDX support for blogs)
- React 19, TypeScript (strict mode enabled)
- Material-UI (MUI) v7 with custom theme and responsive breakpoints
- NextAuth v5 (Calendly OAuth provider)
- SWR for client-side data fetching
- Vercel Analytics & Speed Insights

## Architecture & Data Flow

### Route Structure

The project uses Next.js App Router with hybrid rendering:

```
src/app/
├── (content)/          # Main content area with shared layout
│   ├── videos/         # Video library with dynamic/static routes
│   ├── page.tsx        # Fallback for content routes
│   └── error.tsx       # Error boundary for content area
├── api/
│   ├── auth/[...nextauth]/  # NextAuth handlers (OAuth flow)
│   └── stats/          # Stats endpoints (YouTube, etc.)
├── calendly/           # Protected calendar integration page
├── qreeativ-scale/     # Marketing page
├── ai/                 # AI chat interface
└── layout.tsx          # Root layout with MUI theme provider
```

### Authentication Flow

**File:** `src/auth.ts` and `src/middleware.ts`

- Uses **NextAuth v5** with Calendly OAuth provider
- Extends NextAuth interfaces to store Calendly profile data in session
- Type-safe JWT and account handling with custom interfaces (`CalendlyProfileResource`)
- `src/middleware.ts` applies auth to protected routes (imports `auth` as middleware directly)
- Protected pages check session with `const session = await auth()` (server-side only)
- Example: `src/app/calendly/page.tsx` renders different UIs based on session

### Server Actions & Data Fetching

**Pattern:** Separation between `"use server"` actions and client-side fetchers

- **Server Actions** (`src/actions/`):
  - Marked with `"use server"` directive and `"server-only"` import
  - Examples: `getYouTubeStats.ts`, `getYouTubeStats.ts`, `calendly/eventTypes.ts`
  - Use `axios` with shared config for external APIs
  - Environment variables via `process.env` (available server-side only)
  
- **Client Fetchers** (`src/actions/fetcher.ts`):
  - Hook wrapper around `useSWR` for client-side data fetching
  - Generic type support with error handling
  - Used in client components for live data updates

### Component Architecture

**Patterns:**

1. **Client vs Server Components**:
   - Client components marked with `"use client"` + `"client-only"` import
   - Server components (async) used for layout, auth checks, data fetching
   - Example: `Videos.tsx` is client (loads dynamically), `LandingPage.tsx` is server

2. **MUI Integration**:
   - Global theme in `src/styles/theme.ts` with custom breakpoints (foreHundo, phiveHundo, etc.)
   - Custom Typography variants (poster, title, appBarTitle, role, etc.)
   - All layout uses Grid/Container system with responsive `size` and `sx` props
   - Example: `src/components/home/LandingPage.tsx` demonstrates nested Grids with `id` props

3. **Dynamic Imports**:
   - Heavy components use `dynamic()` with loading states
   - Example: `VideoContainer` in `Videos.tsx` loads with `<LoadingVideo />` fallback

4. **Data Organization**:
   - Video metadata in `src/components/videos/VideoURLs.ts` (centralized source of truth)
   - Filtering with lodash (e.g., `_.filter()` by tag)
   - Components import and organize data before rendering

## Project Conventions

### Code Style & Linting

- **Linter**: ESLint with `next/core-web-vitals` and `next/typescript` rules
- **Formatter**: Prettier (configured via eslint-plugin-prettier)
- **TypeScript**: Strict mode enabled with no implicit any, full type coverage
- **Module Resolution**: Path aliases configured in `tsconfig.json`:
  - `@/*` → `src/*`
  - `@/actions/*` → `src/actions/*`
  - `@/social/*` → `src/components/social/*`
  - `@/pages/*` → `src/app/(content)/*`
  - `@/blogs/*` → `tmp/blogs/blogs/*` (generated content)

### File Organization

- **No tests directory**: No unit tests in repo structure. Uses ESLint as primary quality gate.
- **Modular component structure**: Small, focused components with clear responsibilities
- **Naming**: Components export default with descriptive names (e.g., `VideoContainer`, `EventTypes`)

### Environment & Build

- **Dev Server**: `npm run dev` (listening on 127.0.0.1:3000)
- **Build**: `npm run build` then `npm start`
- **Type Check**: `npm run tsc` for full TypeScript validation
- **Package Manager**: Yarn 4.10.3 (enforced via `packageManager` field)

### External APIs & Integrations

- **YouTube API**: Direct axios calls with API key from `process.env.YOUTUBE_API_KEY`
- **Google Calendar**: OAuth via Google Cloud auth (`@google-cloud/local-auth`)
- **Calendly**: OAuth provider in NextAuth, custom profile schema
- **WakaTime**: Badge widget imported from CDN
- **Stack Overflow**: Remote image patterns configured for flair SVGs
- **Puppeteer**: Used for web scraping (in `serverExternalPackages`)

### Next.js Configuration Notes

- **MDX Support**: Pages can be `.mdx` files (see `pageExtensions` in `next.config.js`)
- **Remote Images**: Configured for `stackoverflow.com` flair only
- **Logging**: Detailed fetch logging in dev mode, on-demand entry tuning for performance
- **Experimental URLs**: WakaTime and YouTube badge URLs imported as external URLs

## Developer Workflows

### Starting Development

```bash
# Install dependencies (uses Yarn 4.10.3)
yarn install

# Run dev server (auto-reload on file changes)
npm run dev
# Open http://localhost:3000

# For video syncing (if using next-video):
next dev & npx next-video sync -w --dir ./src/videos
```

### Building & Deployment

```bash
# Type check before building
npm run tsc

# Lint check
npm run lint

# Build for production
npm run build

# Test locally with production build
npm start
```

### Key Commands Reference

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start Next.js dev server on 127.0.0.1:3000 |
| `npm run build` | Create optimized production build |
| `npm start` | Serve production build |
| `npm run lint` | Run ESLint on codebase |
| `npm run tsc` | TypeScript type checking |

## When Modifying...

### Adding a New Page
1. Create directory in `src/app/(content)/[feature-name]/` or `src/app/[feature-name]/`
2. Add `page.tsx` (server component by default)
3. Use MUI `Container` and `Grid` for layout (see `LandingPage.tsx` pattern)
4. If protected by auth, check session with `const session = await auth()` at top

### Creating a New API Route
1. Place in `src/app/api/[route]/route.ts`
2. Export `GET`, `POST`, etc. as async functions
3. Use server action patterns from `src/actions/` if fetching external data
4. Example: `src/app/api/stats/route.ts` for YouTube stats endpoint

### Adding External API Integration
1. Create server action in `src/actions/[feature]/[service].ts`
2. Mark with `"use server"` and `"server-only"`
3. Use axios with env var config (see `getYouTubeStats.ts` pattern)
4. Export typed response interfaces
5. Call from client via Route Handler or direct server import

### Styling Components
1. Use MUI `sx` prop for inline styles (preferred over CSS modules)
2. Extend theme in `src/styles/theme.ts` for global changes
3. Custom breakpoints available: xs, sm, md, lg, xl, foreHundo, phiveHundo, etc.
4. Typography variants: poster, title, appBarTitle, role, subRole, etc.

### Adding Videos/Content
1. Add metadata to `src/components/videos/VideoURLs.ts` with tags
2. Use lodash to filter by tag (see `Videos.tsx` pattern)
3. Videos rendered dynamically with `<VideoContainer>` component
4. Dynamic import for lazy loading: `dynamic(() => import(...), { loading: <LoadingVideo /> })`

## Important Context

- **No Tests**: Quality relies on ESLint, TypeScript strict mode, and Vercel analytics
- **Yarn Workspace**: Enforces yarn 4.10.3 - don't use npm/pnpm for consistency
- **Branch Context**: Currently on `ai` branch (check git context for main/default behavior)
- **Analytics**: Vercel Speed Insights and Analytics embedded for performance monitoring
- **MDX Blogs**: Blog content can be MDX files in standard page locations

---

**Last Updated:** Generated from codebase analysis of Next.js 15 portfolio project with authentication and external API integrations.
