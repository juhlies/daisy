---
title: Archetypes
---

# Archetypes
An `archetype` represents a unique combination of `component` types.<br/>
All entities with exactly the same set of components are grouped into the same archetype.<br/>
This grouping is what allows the ECS to efficiently query and iterate over entities.

## Defining Archetypes
You can define an archetype using the `archetype` keyword followed by its name and a set of [components](components) or [tags](tags). Components marked with `?` are optional, meaning an entity in this archetype may or may not have them.
```daisy
archetype Person = {Health, IsPoisoned?}
```