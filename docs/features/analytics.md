---
title: Analytics
icon: fa-solid fa-chart-simple
description: Count page views and learn what readers search for in vain, with services that set no cookies.
order: 6
---

# Analytics :badge[New in Clay 4]{tip}

Which pages are read, and what readers search for without finding it: analytics shows where the docs help and where they fall short. Clay works with three services that set no cookies and keep no personal data: [Plausible](https://plausible.io), [Umami](https://umami.is) and [GoatCounter](https://www.goatcounter.com). Each can be used as a hosted service or run on your own server.

::: tabs
== Plausible
```yaml
analytics:
  plausible: {}
```

The site's domain comes from `siteURL`; set `domain` if Plausible knows the site by another name. For your own server, set `src`:

```yaml
analytics:
  plausible:
    domain: "docs.example.com"
    src: "https://stats.example.com/js/script.js"
```
== Umami
```yaml
analytics:
  umami:
    websiteId: "94db1cb1-74f4-4a40-ad6c-962362670409"
```

For your own server, set `src`, e.g. `https://stats.example.com/script.js`.
== GoatCounter
```yaml
analytics:
  goatcounter:
    code: "my-docs"
```

`code` is the name of your site at `my-docs.goatcounter.com`. For your own server, set `endpoint`, e.g. `https://stats.example.com/count`.
:::

## What is counted

- **Page views**, also when readers move from page to page without the browser loading a new page.
- **Searches without results**, with what was searched for, a moment after the reader stops typing. These show what your docs are missing.
- **Copied code and prompts**, and the **page menu**: copying or opening a page as Markdown, and asking ChatGPT or Claude about it.

To count page views only:

```yaml
analytics:
  plausible: {}
  events: false
```

In Plausible, events show up once you add them as goals, e.g. "Search without results". Umami and GoatCounter list them on their own.

## When nothing is counted

- **During `clay dev`**: analytics only runs in built sites.
- **For readers who ask not to be tracked**: browsers with Global Privacy Control or Do Not Track turned on load no analytics at all.

## Data protection

> [!NOTE]
> This is an overview, not legal advice. Your site's privacy policy and the rules that apply to it are yours to check.

In the EU, storing or reading anything on a reader's device, like a cookie, needs their consent unless it is strictly necessary (the ePrivacy Directive, in Germany the TDDDG), and personal data such as IP addresses needs a legal basis under the GDPR.

The three services are built so that this stays simple: they set no cookies and use nothing else on the reader's device, and they do not store IP addresses or other personal data, only counts. That is why they are commonly used without a consent banner, on the basis of a legitimate interest. What remains for you:

- **Mention the service in your privacy policy**: what is counted, by whom, and why.
- **Sign the service's data processing agreement**, when you use it as a hosted service. Plausible and GoatCounter are hosted in the EU; with your own server, the data never leaves it.
- **Search queries are text readers type.** If your readers might type personal data into the search, turn events off with `events: false`.

Services that set cookies, like Google Analytics, need consent before they load, and with it a consent banner. Clay does not ship one. If you need such a service, add its script with [`head`](../configuration/clay-yaml.md#head) and a consent tool of your choice.
