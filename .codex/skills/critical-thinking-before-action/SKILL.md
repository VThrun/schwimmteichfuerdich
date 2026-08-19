---
name: critical-thinking-before-action
description: Assess scope, evidence, risks, alternatives, and verification before materially risky or ambiguous work. Use when the user requests a preflight or when unresolved choices or side effects require approval. Do not activate merely because ordinary requested work includes edits, tests, builds, containers, or other routine commands.
---

# Critical Thinking Before Action

Use an informed preflight when execution depends on a material decision or authorization that is still missing.

## Before Approval

Use read-only inspection to understand the real task. Read files, search code, inspect status and diffs, and examine existing logs when useful. Defer only the actions affected by the unresolved risk, choice, or authorization.

Proceed directly when the user's request already authorizes ordinary scoped implementation and verification. Answer informational or explanation-only requests without manufacturing an approval round.

## Preflight Assessment

1. Define the intended outcome and operational scope.
2. Separate verified facts from assumptions.
3. Challenge concrete brittleness, unnecessary work, unsafe behavior, conflicting requirements, or excessive scope.
4. Recommend the smallest coherent approach.
5. Name the files, systems, and commands expected to be involved.
6. Explain proportional verification and meaningful unresolved risks.

If approval is actually required, end with a concise approval question in the user's language and wait for a clear answer. Otherwise continue with the requested work.

## After Approval

- Execute the approved work autonomously.
- Do not request repeated approval for normal steps already covered by the plan.
- Pause again only if a material new risk, choice, or scope expansion appears.
- Finish with evidence: outcome, relevant changes, actual verification results, and remaining risks.
