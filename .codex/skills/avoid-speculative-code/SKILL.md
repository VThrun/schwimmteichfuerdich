---
name: avoid-speculative-code
description: Keep implementation changes focused on proven requirements and execution paths. Use for bug fixes, review feedback, maintenance work, and small refactors when extra guards, fallbacks, branches, abstractions, or hardening could obscure the actual change.
---

# Avoid Speculative Code

Implement the smallest coherent change justified by the task and inspected code.

## Core Rules

- Fix the observed problem or stated requirement, not hypothetical future problems.
- Require a concrete execution path, failing case, or requirement for every new guard, branch, and fallback.
- Trust guarantees already provided by the language, framework, schema, or validated caller.
- Introduce an abstraction only when it removes real duplication or clarifies an existing responsibility.
- Keep unrelated hardening and cleanup outside the requested change.

## Review Questions

1. What evidence requires each new condition or layer?
2. Would removing it leave the requested behavior correct?
3. Does the framework already guarantee the protected condition?
4. Did the change create a second path for behavior that already had one owner?

When omitting speculative protection is not obvious, explain the concrete guarantee that makes it unnecessary.
