---
title: Configuration
icon: fa-solid fa-gear
order: 5
list: true
---

# Configuration

Reference of `clay.yaml`, of the front matter of pages and folders, and of the environment variables that override settings at build time.

Settings live in three places, from the whole site down to a single page:

| Where | What it sets | Reference |
|-------|--------------|-----------|
| `clay.yaml` | The site: title, navbar links, versions, languages, checks | [clay.yaml](clay-yaml.md) |
| Front matter | A page or folder: title, icon, description, order, layout | [Front Matter](front-matter.md) |
| Environment variables | Settings for one build, for example in CI or for a staging site | [Environment Variables](environment-variables.md) |

## Key ideas

- **Everything has a default.** A `clay.yaml` with just a `title` and plain Markdown files make a working site.
- **Environment variables win.** They override `clay.yaml` for one build, without changing the file.
- **You don't have to edit YAML by hand.** `clay edit` changes settings and front matter and keeps your comments and formatting. See [clay edit](../organizing/clay-edit.md).
