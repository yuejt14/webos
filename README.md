# Web OS

A modern Web Operating System interface built with Next.js 16 and React 19. Experience a fully functional desktop environment in your browser, complete with a taskbar, windows, and applications.

## Features

- **Desktop Environment**: Complete OS-like interface with wallpaper, taskbar, and window management
- **Process System**: Modular process-based architecture for applications and system components
- **Dynamic Theming**: Built-in theme system with customizable colors and styles
- **Vanta.js Integration**: Animated wallpaper backgrounds using Vanta.js waves
- **Type-Safe Contexts**: Custom context factory for type-safe state management
- **Modern React**: Built with React 19 and the React Compiler for optimal performance

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19 with React Compiler
- **Styling**: SCSS Modules
- **Type Safety**: TypeScript
- **Code Quality**: Biome (linting & formatting)
- **State Management**: React Context with custom factory pattern
- **Animations**: Vanta.js

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the Web OS in action.

### Production

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Code Quality

```bash
# Lint code with Biome
npm run lint

# Format code with Biome
npm run format
```

## Architecture

### Process System

The Web OS uses a process-based architecture where both applications and system components (like the Taskbar) are "processes":

- **Process Registry**: Central registry in `src/utils/processDirectory.tsx`
- **Process Context**: Manages running processes via `src/contexts/processes.tsx`
- **Process Loader**: Renders all active processes dynamically

**Adding a new process:**
1. Create component in `src/components/apps/[AppName]/` or `src/components/system/[ComponentName]/`
2. Add entry to `processDirectory` with dynamic import
3. Set `hasWindow: true` for windowed applications
4. Add to `START_UP_PROCESSES` array if it should launch on startup

### Context Management

Uses a custom context factory pattern for type-safe state management:

```typescript
const [useMyContext, MyProvider] = contextFactory<MyState>(useMyContextState);
```

**Key Contexts:**
- **SessionContext**: Global session state (theme, settings)
- **ProcessContext**: Running processes and window management

### Component Hierarchy

```
RootLayout (SessionProvider)
  └─ StyledApp (theme wrapper)
      └─ Desktop (wallpaper/background)
          └─ ProcessProvider
              └─ ProcessLoader (renders all processes)
```

## Project Structure

```
src/
├── app/                    # Next.js app router pages
├── components/
│   ├── apps/              # Application components
│   ├── system/            # System components (Taskbar, etc.)
│   └── ...
├── contexts/              # React contexts for state management
├── styles/                # SCSS modules and themes
├── types/                 # TypeScript type definitions
├── utils/                 # Utility functions and helpers
└── libs/                  # Third-party libraries (excluded from linting)
```

## Styling

- All components use **SCSS Modules** (`.module.scss`)
- Theme system in `src/styles/themes.module.scss`
- Dynamic theme switching via SessionContext
- Vanta.js waves for animated desktop backgrounds

## Development Guidelines

- Use the context factory pattern for new contexts
- Dynamic imports for lazy-loading components
- Separate type imports: `import type { ... }`
- No barrel files (re-exports)
- Follow Biome linting rules

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React 19 Documentation](https://react.dev)
- [Biome Documentation](https://biomejs.dev)
- [Vanta.js](https://www.vantajs.com)
