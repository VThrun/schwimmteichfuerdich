---
name: framework-first-simplicity
description: Prefer the active project's framework, standard library, and established infrastructure over custom wrappers or parallel implementations. Use when implementing or simplifying application code, validation, rendering, routing, data access, state management, configuration, or infrastructure behavior.
---

# Framework-First Simplicity

Use the simplest native primitive already available in the project's stack.

## Workflow

1. Identify the responsible framework, library, or existing project convention.
2. Check whether it already provides the required behavior.
3. Prefer that primitive when it keeps ownership and data flow clear.
4. Add custom code only for behavior the existing stack does not express cleanly.
5. Remove obsolete parallel paths after moving to the native solution.

Examples include framework validators, routing and request helpers, ORM mappings and migrations, template features, UI hooks and components, standard serialization, and existing infrastructure switches.

## Avoid

- wrappers that only rename a direct framework call
- handwritten state, parsing, escaping, or lifecycle handling already supplied by the stack
- duplicate queries or helper layers after responsibility has moved
- new infrastructure services when an existing supported option covers the requirement

Choose native solutions for clarity and maintainability, not merely because they are shorter. If a custom path remains necessary, state the missing framework capability it addresses.
