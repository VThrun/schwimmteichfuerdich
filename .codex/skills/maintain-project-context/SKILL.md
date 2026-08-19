---
name: maintain-project-context
description: Create or update a repository's canonical agent and developer context when the user explicitly requests documentation maintenance or includes it in the approved task. Capture verified architecture, setup, commands, conventions, and recurring limitations without changing context documents during routine onboarding or unrelated implementation work.
---

# Maintain Project Context

Maintain the repository's canonical onboarding and agent-context document. Prefer a root `AGENTS.md` when present; otherwise use the context document already established by the project.

Reading project context during onboarding does not authorize changing it. Report stale or missing information unless documentation maintenance is part of the requested scope.

## Workflow

1. Read the existing context document, root README, relevant manifests, and configuration.
2. Inspect the changed areas and nearby tests or scripts. Treat code and configuration as authoritative.
3. Update only verified, reusable knowledge: purpose, boundaries, architecture, important flows, setup, validation commands, conventions, integrations, and known limitations.
4. Remove stale statements and link to deeper canonical documentation instead of duplicating it.
5. Review the diff and run lightweight documentation validation.

## Include

- reliable start, test, lint, build, migration, and troubleshooting commands
- important directories, module boundaries, data flows, and ownership
- environment assumptions and recurring safety notes
- conventions that future agents could easily violate
- a last-verified marker when it materially improves trust

## Exclude

- secrets, credentials, customer data, dumps, or private logs
- speculative architecture or unverified commands
- dependency inventories that are already captured by manifests
- completed ticket history, transient failures, and task-by-task changelogs

Do not update project context for routine edits that introduce no durable knowledge.
