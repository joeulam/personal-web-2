---
name: tdd
description: Test-driven development workflow for this Next.js / React / TypeScript project. Use when writing or modifying application logic, components, or utilities — write the failing test first, then implement. Covers Vitest + Testing Library setup, red-green-refactor cycle, and test conventions.
---

# Test-Driven Development (TDD)

Follow the red-green-refactor cycle for any behavior change. Tests are the spec: no implementation work starts with a passing-test excuse to skip them.

## Setup (this project)

No test runner is installed in `package.json` yet. If tests cannot run, install Vitest first:

```bash
npm i -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom @vitejs/plugin-react
```

Add to `package.json` scripts:

```json
"test": "vitest run",
"test:watch": "vitest"
```

Vitest config (`vitest.config.ts`, root): use the file `vite-tsconfig-paths`-free `environment: 'jsdom'`, `globals: true`, and a `setupFiles` entry that imports `@testing-library/jest-dom`. Test files live next to the code they test: `components/ClientComponent.tsx` → `components/ClientComponent.test.tsx`.

## The Cycle

1. **RED** — Write one failing test that pins the required behavior. Run it and watch it fail for the right reason (not a compile error, not a mock error).
2. **GREEN** — Write the minimum code to pass. No refactoring, no extra features, no speculative abstractions.
3. **REFACTOR** — Clean up implementation and test while keeping green. Remove duplication, clarify names, tighten the test's intent.

Never write implementation code for a behavior that has no test. Never batch multiple behaviors into one cycle — one behavior per cycle, tiny steps.

## What to Test

- Pure logic (`lib/`, `utils/`, hooks): input/output cases, edge cases, error paths — highest value, lowest cost.
- Components: render output, user interaction via `user-event`, state transitions, aria/roles over structure. Prefer `screen` queries by role or label (`getByRole`, `getByLabelText`).
- Do not test: implementation details (class names, internal function calls), Motion/framer-motion animation internals, third-party libraries.

## Conventions

- Describe behavior in plain language: `describe('useLocalStorage', () => { it('persists value on set', ...) })`.
- One assertion theme per test; multiple assertions only when they verify one behavior.
- Mock network and timers: `vi.fn()`, `vi.spyOn`, `vi.useFakeTimers()` where needed; `@testing-library/jest-dom` matchers for DOM assertions.
- Component tests should not need mocking `next/*` modules where possible; if required, `vi.mock('next/navigation', ...)`.
- Run the targeted file after each cycle: `npx vitest run <file>` — the full suite after finishing the feature.

## What TDD Is Not

Tests that always pass, tests written after the fact to cover code, snapshots of implementation details, or a test per file without behavioral intent.