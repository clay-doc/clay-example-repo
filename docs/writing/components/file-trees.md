---
title: File Trees
icon: fa-solid fa-folder-tree
description: Folders and files from an indented list, with icons by file type, comments and folders that fold.
order: 8
---

# File Trees

A file tree shows how a project is laid out. Write a code block in the language `tree` with one name per line, indented under its folder:

````markdown
```tree
my-project/
  docs/
    index.md       # the start page
    guides/
      setup.md
      img/
        screen.png
    ...
  clay.yaml        # settings
  package.json
```
````

```tree
my-project/
  docs/
    index.md       # the start page
    guides/
      setup.md
      img/
        screen.png
    ...
  clay.yaml        # settings
  package.json
```

## Writing a tree

- **Indent** each entry under its folder. Any indentation works, as long as entries of the same folder line up.
- **Folders** end with `/`, or have entries below them.
- **Comments** follow `#` and show next to the name.
- **`...`** on its own line stands for more entries.
- **Folders with entries fold** with a click on their arrow, like in an editor.

## Icons

| Files | Icon |
|-------|------|
| `.md` | Markdown |
| Images (`.png`, `.jpg`, `.svg`, …) | Image |
| Code and settings (`.yaml`, `.json`, `.ts`, `.js`, `.vue`, `.css`, …) | Code |
| `.pdf`, archives | PDF, archive |
| Anything else | Text |

## From the `tree` command

The output of the `tree` command works as it is: its lines count as indentation.

````markdown
```tree
docs
├── guides
│   └── setup.md
└── index.md
```
````

```tree
docs
├── guides
│   └── setup.md
└── index.md
```
