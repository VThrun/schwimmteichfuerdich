---
name: review-comment-exactness
description: Implement review feedback from code hosts, pull or merge requests, issue discussions, teammates, leads, or stakeholders precisely and completely. Use when a request quotes, paraphrases, or refers to review feedback, requested code shape, or follow-up corrections.
---

# Review Comment Exactness

Optimize review-driven work for faithful implementation and closure.

## Workflow

1. Extract the exact requested behavior, code shape, and scope.
2. Inspect the current implementation and any intermediate changes.
3. Follow the suggested shape literally when it is technically reasonable.
4. If the suggestion would be incorrect or harmful, explain the concrete issue and propose the closest correct alternative before diverging.
5. Remove superseded helpers, duplicate paths, temporary TODOs, and half-finished variants.
6. Verify that code, comments, labels, dates, tests, and runtime behavior agree.

## Completion Checklist

- Does the final result satisfy the actual review request rather than a nearby interpretation?
- Is the old approach fully removed when replacement was requested?
- Are reviewer-provided names, snippets, framework primitives, and placement followed where practical?
- Are all related tests and comments aligned with the final behavior?

Do not broaden a focused review comment into an unrelated refactor.
