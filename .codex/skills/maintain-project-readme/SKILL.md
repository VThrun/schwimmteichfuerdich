---
name: maintain-project-readme
description: Keep a repository's durable agent and developer context accurate across sessions. Use when onboarding to a repository or after verified changes to architecture, structure, integrations, setup, commands, testing, deployment, conventions, or recurring limitations require updates to AGENTS.md or the repository's designated context document.
---

# Maintain Project Context

Maintain the repository's canonical onboarding and agent-context document. Prefer a root `AGENTS.md` when present; otherwise use the context document already established by the project.

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
