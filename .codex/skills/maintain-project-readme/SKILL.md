---
name: maintain-project-readme
description: Update a repository README or onboarding documentation when the user requests documentation maintenance or verified project changes make the existing guidance stale. Keep canonical facts linked instead of duplicated.
---

# Maintain Project README

Maintain the repository's developer-facing README and onboarding documentation.
The root `AGENTS.md` and `.codex/context/` remain the canonical agent-rule and
project-fact sources; do not copy their complete contents into a README.

## Workflow

1. Read `AGENTS.md`, `.codex/context/README.md` when present, the root README,
   relevant manifests, and configuration.
2. Inspect the changed areas and nearby tests or scripts. Treat code and
   configuration as authoritative.
3. Update only verified onboarding facts: purpose, setup, commands, key
   architecture boundaries, integrations, and known limitations.
4. Link to canonical context and deeper documentation instead of duplicating
   project rules or transient task history.
5. Review the diff and validate internal documentation links.

## Include

- reliable start, test, lint, build, and troubleshooting commands
- important directories, module boundaries, data flows, and ownership
- environment assumptions and recurring safety notes
- conventions that future agents could easily violate
- a last-verified marker when it materially improves trust

## Exclude

- secrets, credentials, customer data, dumps, or private logs
- speculative architecture or unverified commands
- dependency inventories that are already captured by manifests
- completed ticket history, transient failures, and task-by-task changelogs
- a second copy of `AGENTS.md` or `.codex/context/` rules

Do not update project context for routine edits that introduce no durable knowledge.
