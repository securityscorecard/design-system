# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
yarn storybook          # Start Storybook dev server (port 8008)
yarn test               # Run unit tests (Vitest, one-shot)
yarn test:watch         # Run unit tests in watch mode
yarn types              # TypeScript type check
yarn lint               # ESLint (js, ts, jsx, tsx, md, mdx)
yarn lint:fix           # ESLint with auto-fix
yarn lint:css           # Stylelint for styled-components
yarn lint:css-jsx       # Stylelint for CSS-in-JS
yarn build              # Build library with Vite
yarn knip               # Detect unused exports/files
```

**Run a single test file:**
```sh
yarn test src/components/Button/Button.test.tsx
```

**Visual regression tests** (Docker required):
```sh
yarn test:storybook:visual          # Run visual regression
yarn test:storybook:visual:update   # Update snapshots after intentional changes
```

**Testing in a third-party app** (before release):
```sh
yarn build && yalc push   # Publish to local registry and push to consuming project
```

**PR snapshot testing:** Install with `yarn add @securityscorecard/design-system@pr-<PR-number>`

## Architecture

Single-package library (`@securityscorecard/design-system`) — not a monorepo workspace.

### Key source directories

- `src/components/` — All components. Each in its own directory with co-located tests and stories.
- `src/components/_internal/` — Shared base implementations (BaseButton, BaseTable, BaseDropdownMenu, etc.) composed by public components.
- `src/theme/` — `createTheme()`, default theme values, `DSProvider` (ThemeProvider wrapper).
- `src/tokens/` — CSS custom properties (`--sscds-*`) for colors, space, radii, fonts, shadows, depth, size.
- `src/hooks/` — Utility hooks (useClipboard, useContainerQuery, useDebounce, useFocusTrap, useLogger, etc.).
- `src/contexts/` — `DSContext` for global config (portalsContainerId, debugMode, experimental flags).
- `src/locales/` — i18n translations (en-US, cs-CZ, es-ES, pt-BR, ja-JP).
- `src/managers/` — Application state managers.

### Component file conventions

Each component directory follows this pattern:
```
ComponentName/
├── ComponentName.tsx       # Component logic + JSX (forwardRef pattern)
├── ComponentName.types.ts  # TypeScript interfaces/types
├── ComponentName.enums.ts  # Variant/color/state enums
├── ComponentName.stories.tsx
├── ComponentName.test.tsx
└── index.ts                # Public API (export * re-exports)
```

Complex components split styled markup to `BaseStyledComponent.tsx`. Compound components (e.g., Card with CardHeader/CardContent/CardActions) each have their own file within the directory.

### Theming

- Runtime theming: `createTheme(overrides)` merges defaults; passed to `DSProvider`.
- Styled-components access theme via the `theme` prop or directly via `var(--sscds-*)` CSS variables.
- Use transient props (`$propName`) for styled-components styling-only props.
- Color palette based on Radix UI colors (indigo) with custom severity scales (green/yellow/orange/red/deepred).

### Testing approach

- **Unit tests**: Vitest + React Testing Library. Use the `setup()` helper from `src/utils/tests/setup.tsx` — it wraps the component in `DSProvider` + `MemoryRouter`.
- **Visual regression**: Storybook + storycap + reg-cli (CI/Docker). All stories are visual tests by default; opt out with `parameters: { screenshot: { skip: true } }`.
- **Accessibility**: `yarn test:a11y` via axe-core + storybook test-runner.
- Unit tests test interactions; visual tests cover appearance.

### Storybook

Stories serve as both documentation and visual regression tests. Every component must have a stories file covering all features and states.

## Git & commit conventions

Branch format: `githubUserId@jira-ticket-or-description` (e.g., `ajkl2533@UXD-123`)

Commit format: `<type>(<scope>): <subject>` — conventional commits power semantic-release changelog.

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`

Scope: component name (PascalCase) or concept (e.g., `theme`, `types`). Optional but preferred.

Subject: imperative present tense, lowercase, no period.

PR target: `alpha` branch (or `main` for hotfixes if `alpha`/`next` doesn't exist).

Squash commits when a PR is about a single concern. Breaking changes use `BREAKING CHANGE:` footer. Jira references use `Closes UXD-XXX` or `Ref UXD-XXX` in the footer.
