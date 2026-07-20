---
title: Your article title here
description: One or two sentences used for the card, meta description, and social shares.
date: 2026-07-18
category: Next.js
tags: nextjs, performance, seo
draft: true
---

This file is a **template** — it never publishes because its filename starts
with `_` (and `draft: true`). To publish a real article:

1. Copy this file to `src/content/blog/my-article-slug.md`
   (the filename becomes the URL: `/blog/my-article-slug`).
2. Fill in the frontmatter above and remove `draft: true`.
3. Write the article below the second `---` in plain Markdown.

## Markdown that's supported

Regular paragraphs, **bold**, _italics_, and [links](https://example.com).

- Bullet lists
- Like this one

1. Numbered lists too

> Blockquotes for callouts.

`inline code` and fenced blocks:

```ts
export function hello(name: string) {
  return `Hello, ${name}!`;
}
```

That's it — save the file and the article appears on /blog automatically,
sorted by date, with search, category, reading time, and SEO handled for you.
