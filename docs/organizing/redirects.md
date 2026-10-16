---
title: Redirects
icon: fa-solid fa-route
description: Keep old addresses working when a page moves or gets a new name, for bookmarks, search engines and links from other sites.
order: 7
---

# Redirects :badge[New in Clay 4]{tip}

A page's address comes from its path in `docs/`. When the page moves or gets a new name, bookmarks, search results and links from other sites still point to the old address. List the old addresses in the page's front matter, and they lead to the page:

```markdown [docs/guides/setup.md]
---
title: Setup
redirects: ["/installation", "/getting-started/install"]
---
```

Readers who open `/installation` land on `/guides/setup`, at the same section: `/installation#requirements` opens `/guides/setup#requirements`.

> [!TIP]
> This site keeps the addresses of its Clay 3 docs. [`/deployment/github-pages`](https://clay-doc.github.io/clay-example-repo/deployment/github-pages) leads to [GitHub Pages](../publishing/github-pages.md), which has `redirects: ["/deployment/github-pages"]`.

## Addresses

- **Write them from the root of the docs**, like a link starting with `/`, without the `baseURL`: `/installation`, not `/my-project/installation`. A trailing `/` or `.md` may stay.
- **They count in every language.** Translations use the redirects of the original: `/installation` on the German page is `/de/installation`.
- **In an older version**, they stay within it: in `docs-archive/1.x/`, `/installation` is `/1.x/installation`.
- **An address that is a page itself**, or that another page already lists, is skipped with a warning, and so are addresses of other sites.

## Moving pages with clay edit

`clay edit move` and `rename` add the old address when you ask them to:

```bash
npx clay edit move setup.md guides --redirect
```

In the [editor](clay-edit.md), Clay asks after <kbd>o</kbd> and <kbd>r</kbd> whether the old address should redirect to the new one: <kbd>y</kbd> adds it, <kbd>n</kbd> moves without, <kbd>Esc</kbd> cancels. A moved folder redirects every page in it. A page moved back to an address it had drops that address from its redirects.

## How it works

Static hosts like GitHub Pages cannot redirect by themselves, so the build writes a small page at each old address. It sends the browser on at once, keeps the `#section`, and tells search engines the page's real address. Old addresses are not in the sitemap or the search.

## Links in your docs

Redirects are for links from elsewhere. A link in your own docs that points to an old address still works, but the build reports it, so that it can point to the page directly:

```text
▲ Broken link in index.md: "setup.md" points to an old address of /guides/setup; link to the page itself
```

> [!NOTE]
> Each redirect is a tiny file in the build. Keep them as long as old links may be around; for addresses that were public, that is usually for good.
