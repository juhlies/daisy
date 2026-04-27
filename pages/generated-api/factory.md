---
title: Factory
---

# Factory
The Factory returns a spawn function for each [archetype](/source-files/archetypes) that includes at least one component or tag. Each function is named after its archetype and is used to quickly create entities of that archetype.

## Functions
Functions use the archetype's [component](/source-files/components) values as parameters. Required [tags](/source-files/tags) are automatically added to the entity, while optional tags are not. The newly spawned entity is then returned.
```luau
Factory.ARCHETYPE_NAME(...): Entity
```