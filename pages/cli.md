---
title: Command-Line Usage
---

# Command-Line Usage
## Compiling Source Files
Once you have written your source file (ex. `file-name.daisy`), you can compile it like this:

```sh 
daisy file-name
```

This will look for a file `file-name` with an extension `.daisy`, in the current directory.

### Waching Source Files
When you're making many rapid changes to a source file or its imports it can be tedious to constantly have to re-run the build command.<br />
Daisy offers a solution in the form of a `--watch` option, when passed the target file and all its imports (including imports of imports and so on) will be watched for changes recompiling automatically when one occurs.
```sh 
daisy file-name --watch
```