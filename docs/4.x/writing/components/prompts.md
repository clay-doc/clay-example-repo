---
title: Prompts
icon: fa-solid fa-wand-magic-sparkles
description: A suggested prompt for AI assistants and coding agents, shown as written, with a button to copy it.
order: 5
---

# Prompts :badge[New in Clay 4]{tip}

A prompt block suggests what to ask an AI assistant or a coding agent: set up a feature, migrate a project, write a page. Readers copy it with one click and paste it into Claude Code, Codex, Cursor or a chat.

````markdown
::: prompt
Read https://clay-doc.github.io/clay-example-repo/llms.txt, then add Clay
documentation to this repository: a clay.yaml with the project's name, a
docs/ folder with a start page, and a GitHub Pages workflow.
:::
````

::: prompt
Read https://clay-doc.github.io/clay-example-repo/llms.txt, then add Clay
documentation to this repository: a clay.yaml with the project's name, a
docs/ folder with a start page, and a GitHub Pages workflow.
:::

- **The text is copied as written**, line breaks included. It is not Markdown: `**bold**` stays `**bold**`, because that is what the agent should get.
- **The title** follows the name, like for [details](details.md): `::: prompt For Claude Code`. Without one, it is "Suggested prompt" in the language of the page.
- **Search finds the text** of prompts like any other text.

## Good prompts

::: steps
1. **Point to the docs.** Agents work best from the source: a link to the site's [llms.txt](../../features/ai-and-agents.md#llmstxt) or to a page's Markdown lets them read what they need.
2. **Say what done looks like**: the files to create, the command that has to pass, like `npx clay check`.
3. **Keep the reader's choices open.** Write the prompt so it works in their project, with their names and paths left to the agent.
:::

::: prompt For a coding agent
Read https://clay-doc.github.io/clay-example-repo/features/ai-and-agents.md.
Then use `npx clay edit` commands to give every page in docs/guides a
description, and run `npx clay check --json` until it reports no problems.
:::
