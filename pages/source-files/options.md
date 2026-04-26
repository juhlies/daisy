---
title: Options
---

# Options
Options go at the top of a source file and allow you to configure Daisy's output.

```daisy
option [OPTION] = [VALUE]
````

## `Casing`

Controls the casing used when generating functions and parameters.

| Type| Default | Options |
| :---- | :---- | :---- |
| Function | `Pascal` | `Camel`, `Pascal`, `Snake` |
| Parameter | `Snake` | `Camel`, `Pascal`, `Snake` |

```daisy
option Casing = {
    Function = Camel,
    Parameter = Pascal
}
```

## `Output`

Allows you to specify where Daisy generates output files, relative to the source file.

| Type | Default |
| :---- | :---- |
| All | `"./"` |

```daisy
option Output = {
    Archetypes = "path/to/Archetypes",
    Components = "path/to/Components",
    Scheduler = "path/to/Scheduler",
    Factory = "path/to/Factory",
    Systems = "path/to/Systems",
    World = "path/to/World",
    Tags = "path/to/Tags"
}
```
The last segment of each path is used as the output file name (e.g. `"path/to/Archetypes"` becomes `Archetypes.luau`).

## `Native`
Whether to include the `--!native` flag at the top of compiled modules.

| Default | Options |
| :---- | :---- |
| `true`  | `true`, `false` |

```daisy
option Native = false
```

## `Strict`
Whether to include the `--!strict` flag at the top of compiled modules.

| Default | Options |
| :---- | :---- |
| `true`  | `true`, `false` |

```daisy
option Strict = false
```