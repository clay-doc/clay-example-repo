---
title: AI & Agents
icon: fa-solid fa-robot
description: Every Clay site is ready for language models - each page as Markdown, an llms.txt index - and clay edit and clay check let AI agents change and check the docs.
order: 1
---

# AI & Agents :badge[New in Clay 4]{tip}

Readers increasingly ask an assistant instead of reading, and coding agents write docs alongside code. Clay serves both, with nothing to set up: every site speaks Markdown to language models, and the command line lets agents change the docs as safely as a person would.

## Every page as Markdown

Every page is also published as Markdown, at its own address with `.md` appended:

| Page | Its Markdown |
|------|--------------|
| `/guides/setup` | `/guides/setup.md` |
| `/guides`, a folder's page | `/guides.md` |
| `/`, the start page | `/index.md` |
| `/de/guides/setup`, a translation | `/de/guides/setup.md` |

The Markdown is the page's own text, without front matter, under its title. Its links lead to the Markdown of the pages they point to, and images to their full address, so a model can follow them. Components stay as you wrote them: their plain-text syntax reads well to a model, too.

## llms.txt

[llms.txt](https://llmstxt.org) is the place language models look for a site's docs. Clay writes it on every build:

```tree
publish/public/
  llms.txt          # the index: what the docs are, and a link to every page's Markdown
  llms-full.txt     # all pages in one file, in the order of the navigation
  de/
    llms.txt        # every language and version has its own
  1.x/
    llms.txt
```

The index groups the pages by the top-level sections of the sidebar, with each page's description, and points to the other languages and versions. See this site's own: [llms.txt](https://clay-doc.github.io/clay-example-repo/llms.txt).

### How agents find it

No standard makes an agent look for `llms.txt` by itself. Tools that know the convention try `/llms.txt` at the root of a domain; everything else needs a pointer. Clay leaves one wherever an agent may arrive:

| An agent … | finds `llms.txt` through |
|------------|--------------------------|
| is given the address, in a prompt or an `AGENTS.md` | the address itself: the surest way, see [prompts](../writing/components/prompts.md) |
| reads a page's Markdown | its last line, which links to `llms.txt` |
| reads a page's HTML | the page's "Open as Markdown" link, and `<link rel="alternate">` in its head |
| looks at the root of the domain | `/llms.txt` and `robots.txt`, when the site lives at the root |

> [!NOTE]
> A site under a path, like `my-org.github.io/my-project/`, cannot place files at the root of its domain, just as with [robots.txt](seo.md#sites-under-a-path). Its `llms.txt` is at `/my-project/llms.txt`: link it in your README and in the prompts you suggest.

> [!TIP]
> Set [`siteURL`](../configuration/clay-yaml.md) so the links in the Markdown and in `llms.txt` are full addresses. Without it, they start at the root of the domain, which works in the browser but not when a model reads a file on its own.

## The page menu

Below "On this page", every page offers:

::: steps
1. **Copy as Markdown**: the page's Markdown, ready to paste into any assistant.
2. **Open as Markdown**: the `.md` address in a new tab.
3. **Open in ChatGPT** and **Open in Claude**: a new chat that reads the page, so readers can ask about it.
:::

On narrow screens, the menu folds up above the page together with the contents.

## For coding agents

Agents that work in your repository, like Claude Code, Codex or Cursor, change docs the way they change code: through commands whose results they can read. `clay edit` has a command for every action of its editor, and `clay check` checks the docs without building them.

::: code-group
```bash [Read]
npx clay edit list --json          # every page and folder, with path, title, order and URL
npx clay edit show guides/setup    # all front matter of one page
npx clay edit help                 # every command, with examples, for agents and people
```
```bash [Change]
npx clay edit new page guides "Upgrading"
npx clay edit set guides/upgrading.md description="Move to the next release" order=3
npx clay edit move guides/old.md archive
npx clay edit config set navbar.links.1.icon "fa-solid fa-book"
```
```bash [Check]
npx clay check --json    # broken links and settings, without building the site
```
:::

What makes them easy for agents to use:

- **One change per command**, written right away to exactly the files it concerns, keeping comments and formatting.
- **JSON with `--json`**: `{"ok": true, "written": [...], "broken": [...]}`, or `{"ok": false, "error": "..."}`.
- **Errors that say what to do**, like `add --yes to confirm` or `"clay edit list" shows the paths`.
- **Exit codes**: 0 done, 1 failed or problems found, 2 wrong usage.
- **No surprises**: moves never rewrite links behind your back; they report the links that broke, and `clay check` confirms the fix.

The full list is in [clay edit](../organizing/clay-edit.md#from-scripts-and-ai-agents).

### Tell your agent

The quickest way is a prompt that points to the docs:

::: prompt
Read https://clay-doc.github.io/clay-example-repo/llms.txt to learn how Clay
works. Then improve the docs in docs/: use `npx clay edit` commands for titles,
descriptions and order, and run `npx clay check --json` until it reports no
problems.
:::

For every session, agents read instruction files like `AGENTS.md` or `CLAUDE.md` in the repository. A few lines make them use Clay's commands:

```markdown [AGENTS.md]
## Documentation

The docs are a Clay site: Markdown in docs/, settings in clay.yaml.
- Run `npx clay edit help` to learn the commands for changing pages, folders and settings.
- Prefer `npx clay edit` commands over editing front matter by hand.
- After changes, run `npx clay check --json` and fix every problem it reports.
```
