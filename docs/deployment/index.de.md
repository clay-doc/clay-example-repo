---
title: Veröffentlichen
icon: fa-solid fa-cloud-arrow-up
list: true
---

# Veröffentlichen

Ein Clay-Build ist ein Ordner mit statischen Dateien. Veröffentliche ihn mit einem fertigen Workflow auf GitHub Pages oder bei jedem anderen Hoster.

Es läuft kein Server: Jeder Hoster, der Dateien ausliefert, kann eine Clay-Seite ausliefern. Zwei Dinge zählen überall:

- **Die Basis-URL.** Eine Seite unter `https://example.com/docs/` muss wissen, dass sie unter `/docs/` liegt.
- **Bauen in CI.** Lass deinen Hoster oder einen Workflow bei jedem Push `clay build --strict` ausführen, damit die Seite immer zu deiner Dokumentation passt.

| Wenn du veröffentlichst auf … | Lies |
|-------------------------------|------|
| GitHub Pages | [GitHub Pages](github-pages.md) |
| Netlify, Cloudflare Pages, GitLab Pages oder deinem eigenen Server | [Andere Hoster](other-hosts.md) |
