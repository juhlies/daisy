---
title: Systems
---

# Systems
A `system` is a process that runs on all entities matching a given set of component requirements. Systems are where all of your game's logic lives, each system is responsible for one focused behavior.

## Defining Systems
You can define a system using the `system` keyword followed by the system name and its configuration block.
```daisy
system PoisonHurts = {
    Query = {mut:Health}
    With = {IsPoisoned}
    Phase = Update
}
```

## Queries
A `Query` defines which components a system will access on each matching entity. Only entities that match the query will be processed by the system.

### Immutable Queries
By default, components in a query are accessed immutably, the system can read their values but cannot modify them.
```daisy
Query = {Health, Position}
```
In this example, the system runs on all entities that have both `Health` and `Position`, but neither can be changed.

### Mutable Queries
To modify a component, you must explicitly mark it with the `mut:` prefix. You can freely mix mutable and immutable components in the same query.
```daisy
Query = {mut:Health, Position}
```
Here, `Health` can be modified, while `Position` is read-only.

## Inclusions/Exclusions
Systems can further filter which entities they operate on using `With` and `Without` blocks, independently of the `Query`.

### With
The `With` field ensures only entities that possess specific components or tags are included.
```daisy
With = {IsPoisoned}
```

### Without
The `Without` field excludes entities that possess certain components or tags.
```daisy
Without = {IsDead}
```

### Combining Filters
`With` and `Without` can be used together for precise control over which entities a system targets:
```daisy
system PoisonHurts = {
    Query = {mut:Health}
    With = {IsPoisoned}
    Without = {IsDead}
    Phase = Update
}
```

## Phases
Phases determine when a system runs each frame. If you're familiar with Roblox's [RunService](https://create.roblox.com/docs/reference/engine/classes/RunService), you can think of phases as its events, such as `Heartbeat`, `PreRender`, or `PostSimulation`.

### Startup Phases
Systems assigned to Startup phases only run once, before any other systems execute.
- `PreStartup`
- `Startup`
- `PostStartup`

### RunService Phases
Each RunService event (excluding Heartbeat) corresponds to its own phase.
- `PreRender`
- `PreAnimation`
- `PreSimulation`
- `PostSimulation`

### Heartbeat Phases
`RunService.Heartbeat` is not a single phase, it is broken into several ordered phases. Since most game logic runs here, this makes it easy to control the execution order of your systems right out of the box.
- `First`
- `PreUpdate`
- `Update`
- `PostUpdate`
- `Last`

### Priority
Priority controls the order in which systems within the same phase execute. A lower number runs first, and a higher number runs later. If no priority is specified, systems run in the order they were declared.

```daisy
system RunFirst = {
    Query = {MyComponent},
    Phase = Update,
    Priority = 1
}
 
system RunLast = {
    Query = {MyComponent},
    Phase = Update,
    Priority = 2
}
```
In this example, `RunFirst` executes before `RunLast` because it has a lower priority value.