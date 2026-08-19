---
name: continuous-skill-learning
description: Capture verified, reusable lessons in Codex skills when the user asks to review or improve skills, or when completed work exposes a recurring workflow problem worth proposing as a skill update. Do not activate for routine tasks with no durable lesson.
---

# Continuous Skill Learning

Turn demonstrated workflow lessons into focused, reusable agent instructions without making skill maintenance part of every task.

## Capture a Learning Only When

- it is verified rather than speculative;
- it is likely to recur across future tasks;
- it improves implementation, testing, debugging, review, architecture, tooling, or collaboration; and
- it can be expressed as a short, actionable rule or workflow step.

Do not capture one-off ticket facts, transient failures, secrets, personal data, dependency dumps, general knowledge the model already has, or preferences inferred from a single example.

## Update Workflow

1. Prefer improving an existing relevant skill over creating another overlapping skill.
2. Keep project-specific knowledge in project-scoped instructions and cross-project guidance in reusable personal skills.
3. Keep instructions concise, imperative, and supported by observed evidence.
4. When skill maintenance was not part of the request, propose the change instead of editing immediately.
5. Edit a skill only after explicit user approval, unless the user directly requested skill maintenance.
6. Validate every changed skill before reporting completion.

Every captured lesson should answer: what should change next time, when does it apply, and what failure or wasted effort does it prevent?

If no learning meets this bar, do not manufacture a skill update or routine learning note.
