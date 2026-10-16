---
title: Steps
icon: fa-solid fa-list-ol
description: A numbered list as a guide, with a numbered circle for each step and a line that leads to the next.
order: 2
---

# Steps

Steps turn a numbered list into a guide to follow: each step gets a numbered circle, and a line leads from one step to the next.

````markdown
::: steps
1. **Install Clay** in your project:

   ```bash
   npm install --save-dev clay-doc
   ```

2. **Write a page.** Create `docs/index.md` with a heading.

3. **Start the dev server** with `npx clay dev` and open the address it shows.
:::
````

::: steps
1. **Install Clay** in your project:

   ```bash
   npm install --save-dev clay-doc
   ```

2. **Write a page.** Create `docs/index.md` with a heading.

3. **Start the dev server** with `npx clay dev` and open the address it shows.
:::

## Writing steps

- **Write a numbered list** inside `::: steps`. Steps always count from 1.
- **A step can hold more than a line:** code blocks, images, alerts. Indent them to the text of the step (three spaces after `1. `), so they belong to it.
- **Start each step with what to do**, in bold, and explain below. Readers who skim see the whole guide at a glance.
- Text before or after the list, inside the container, is shown as usual.

> [!TIP]
> Steps are for things that happen in order. For a list of options or features, an ordinary list reads better.
