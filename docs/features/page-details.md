---
title: Page Details
icon: fa-solid fa-circle-info
description: The table of contents, last-updated dates, edit links and previous/next links around each page.
order: 3
---

# Page Details

Around the content of each page, Clay adds what readers need to find their way: a table of contents, when the page was last changed, a link to improve it and the way to the next page.

## Table of contents

On wide screens, a table of contents next to the page lists its `##` and `###` headings. While you scroll, a line next to it marks every section on screen; click an entry to jump there. On narrower screens, it folds up above the page instead. Pages with only one heading do without.

## Last updated

At the bottom of each page, Clay shows when it was last changed, taken from the last git commit that touched the file:

> Last updated: October 14, 2026

The date is formatted for the page's language. This needs the docs in a git repository with its history. In CI, check out the full history; most CI systems clone only the last commit by default:

::: tabs
== GitHub Actions
```yaml
- uses: actions/checkout@v7
  with:
    fetch-depth: 0
```
== GitLab CI
```yaml
variables:
  GIT_DEPTH: 0
```
:::

Without git history, the dates are left out, and the build says so:

```text
▲ the docs are not in a git repository: last-updated dates are skipped
```

This warning never fails a build, not even with `--strict`.

## Edit this page

With `editURL` in `clay.yaml`, each page links to its source file, so readers can fix a typo in a minute:

```yaml
editURL: "https://github.com/my-org/my-project/edit/main/docs/"
```

On translated pages the link leads to the translation, on [older versions](../organizing/versions.md) into `docs-archive/<name>/`.

## Previous and next

The last element of each page links to the previous and the next page, in the order of the sidebar, across folders. Readers can read the docs from start to end without opening the sidebar.
