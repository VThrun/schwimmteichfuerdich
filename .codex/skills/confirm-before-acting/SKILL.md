---
name: confirm-before-acting
description: Request explicit approval immediately before a destructive, external, broad-scope, ambiguous, or newly discovered side effect that is not clearly authorized. Use when risk or scope exceeds the user's request or prior approval; do not reconfirm routine steps inherent in requested work.
---

# Confirm Before Acting

Pause before taking an action whose material side effects the user has not already understood and approved.

## Require Fresh Approval For

- deleting or irreversibly overwriting files or data
- dropping data, resetting history, force-pushing, or reverting user work
- deployments, publishing, external write APIs, messages, purchases, or service changes
- modifying files, repositories, systems, or accounts outside the approved scope
- adding or changing dependencies when the requested task does not already imply it
- running long-lived, destructive, or unclear commands
- broad refactors when the user approved only a narrow change
- a newly discovered risk that materially changes the expected outcome

## No Additional Approval Needed For

- read-only investigation
- normal edits and proportionate verification covered by the user's request
- reversible, scoped implementation steps inherent in the requested work
- skill updates explicitly included in the approved scope

## Confirmation Format

1. State the newly identified risk or scope expansion.
2. Explain why the request or existing approval does not cover it.
3. Name the proposed action and likely effect.
4. Ask for explicit approval and stop until the user responds clearly.

Keep all work inside the active workspace and user-approved systems unless the user explicitly expands the scope.
