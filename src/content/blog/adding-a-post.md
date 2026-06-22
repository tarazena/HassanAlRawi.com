---
title: "How this blog works"
description: "Adding a post is just dropping a Markdown file in src/content/blog — here's the shape of it."
pubDate: 2026-06-20
tags: ["meta"]
---

This blog is powered by an Astro **content collection**. Each post is a single
Markdown file in `src/content/blog/`. To publish a new one, create a file like
`my-post.md` and start it with frontmatter:

```yaml
---
title: "My post title"
description: "One-line summary for the list + social cards."
pubDate: 2026-06-21
tags: ["notes"]
draft: false
---
```

Then write the body in Markdown. That's it — the URL comes from the filename
(`my-post.md` → `/blog/my-post`), and it shows up on the [writing index](/blog)
automatically, newest first.

## Frontmatter fields

- **title** — required
- **description** — required, used on the list and in meta tags
- **pubDate** — required, drives the sort order
- **updatedDate** — optional
- **tags** — optional list
- **draft** — optional; set to `true` to hide a post from the published site

> Drafts stay out of the build, so you can keep work-in-progress posts in the
> repo without them going live.
