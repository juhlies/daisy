--- 
title: Scheduler 
---

# Scheduler
The scheduler runs all systems according to their assigned [phases](/source-files/systems#phases) and [priorities](/source-files/systems#priority).

## Functions

### .Start
Runs all startup systems, then begins executing all frame-based phases.
```luau
Scheduler.Start()
```