---
title: Options
---

# Options
Options go at the top of a source file, and allow you to configure the output of Daisy.
```daisy
option [OPTION] = [VALUE]
```

## `Casing`
Controls the casing with which functions and parameters will generate.
| Type | Default | Options |
|:---- | ---- | ----: |
| Function | `Pascal` | `Camel`, `Pascal`, `Snake` |
| Parameter | `Snake` | `Camel`, `Pascal`, `Snake` |

```daisy
option Casing = {
    Function = Camel,
    Parameter = Pascal
}
```

## `Output`
Allows you to specify where Daisy will generate the respective output files.
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

## `Native`
Wether or not to include the `--!native` flag at the top of compiled modules.
| Default | Options |
|:---- | ----:|
| `true` | `true`, `false` |
```daisy
option Native = false
```

## `Strict`
Wether or not to include the `--!strict` flag at the top of compiled modules.
| Default | Options |
|:---- | ----:|
| `true` | `true`, `false` |
```daisy
option Strict = false
```