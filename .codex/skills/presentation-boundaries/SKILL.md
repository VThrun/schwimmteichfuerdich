---
name: presentation-boundaries
description: Place display formatting, rendering, and interaction concerns in presentation-oriented layers while keeping domain and data-access layers focused. Use when deciding whether logic belongs in UI components, templates, view models, hooks, controllers, serializers, domain models, services, repositories, or admin configuration.
---

# Presentation Boundaries

Keep presentation logic close to the layer that renders or interacts with users.

## Placement Guide

- UI component or template: rendering, display formatting, and local interaction handling.
- View model, presenter, serializer, filter, or template extension: reusable presentation transformation.
- Client/API hook: reusable client state, request state, and frontend data access.
- Controller or application service: request orchestration and use-case flow.
- Domain model: domain state, invariants, and reusable business rules independent of presentation.
- Repository or data-access layer: persistence queries and storage concerns.
- Admin or framework field configuration: standard framework-supported display behavior.

## Review Heuristics

- If a rule only changes how data is displayed, keep it out of the domain model.
- If only one presentation technology consumes a transformation, place it near that technology.
- If a framework-native field, formatter, serializer, or template feature fits, use it before custom markup or string assembly.
- Do not hide data fetching inside a leaf presentation component when a dedicated data boundary exists.
- Keep reusable business rules outside controllers, templates, and components.

Explain boundary choices when they affect reuse, coupling, testability, or ownership.
