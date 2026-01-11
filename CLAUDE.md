# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Role

Act as an experienced fullstack Next.js/React developer. All code must:
- Adhere to web standards and pass W3C validation (valid HTML5 semantics, proper element nesting, ARIA attributes where appropriate)
- Follow accessibility best practices (WCAG guidelines)
- Use semantic HTML elements appropriately
- Maintain valid document structure and content models

## Project Overview

This is a Web OS implementation built with Next.js 16 and React 19. It simulates an operating system interface in the browser, complete with a desktop, taskbar, windows, and applications. The project uses the React Compiler and modern React patterns.
It should match the appearance of the Windows 11 desktop.
## Development Commands

```bash
# Start development server at http://localhost:3000
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint and check code with Biome
npm run lint

# Format code with Biome
npm run format
```

## Architecture

### Context-Based State Management

The application uses a custom context factory pattern (`src/utils/contextFactory.tsx`) to create type-safe React contexts. This factory function takes a state hook and returns a `[useContext, Provider]` tuple.

**Key Contexts:**
- **SessionContext** (`src/contexts/session.tsx`): Manages global session state like theme settings
- **ProcessContext** (`src/contexts/processes.tsx`): Manages running processes (applications and system components)

### Process System

Processes are the core abstraction for both applications and system components:

- **Process Definition**: Each process has a `Component` (lazy-loaded via `next/dynamic`) and an optional `hasWindow` flag
- **Process Registry**: `src/utils/processDirectory.tsx` is the central registry mapping process IDs to their definitions
- **Startup Processes**: Defined in `START_UP_PROCESSES` array (currently just "Taskbar")
- **Process Rendering**: `ProcessLoader` component renders all active processes from the ProcessContext

**Adding a new process:**
1. Create component in `src/components/apps/[AppName]/` or `src/components/system/[ComponentName]/`
2. Add entry to `processDirectory` object with dynamic import
3. Set `hasWindow: true` for apps that should render in windows
4. Add to `START_UP_PROCESSES` if it should launch on startup

### Component Hierarchy

```
RootLayout (SessionProvider wraps everything)
  └─ StyledApp (applies theme)
      └─ Home/page.tsx
          └─ Desktop (wallpaper/background)
              └─ ProcessProvider
                  └─ ProcessLoader (renders all processes)
```

### Styling

- **SCSS Modules**: All styling uses SCSS modules (`.module.scss`)
- **Themes**: Theme system in `src/styles/themes.module.scss` with dynamic theme switching via SessionContext
- **Wallpaper**: Desktop background uses Vanta.js waves effect (`src/utils/vantaWaves.ts`)

### Type Organization

TypeScript types are organized by domain:
- `src/types/contexts/` - Context state types
- `src/types/` - General types (theme, wallpaper, etc.)
- `src/types/vanta.d.ts` - Third-party library type definitions

### Biome Configuration

The project uses Biome for linting and formatting with strict rules:
- Import type separation required (`import type { ... }`)
- No namespace imports
- No barrel files (re-exports)
- Organizes imports automatically
- Excludes `src/libs/` directory from linting

### Next.js Configuration

- React Compiler enabled
- React Strict Mode enabled
- Uses App Router (Next.js 16)

## Code Patterns

**Context Creation Pattern:**
```typescript
const [useMyContext, MyProvider] = contextFactory<MyState>(useMyContextState);
export { useMyContext, MyProvider };
```

**Dynamic Component Loading:**
```typescript
Component: dynamic(() => import("@/components/apps/MyApp/MyApp"))
```

**State Hook Pattern:**
Each context has a corresponding `useContextState` hook that returns the initial state and methods.
