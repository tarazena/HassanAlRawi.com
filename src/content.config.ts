import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Blog posts live in src/content/blog as Markdown (.md / .mdx).
// To add a post: drop a new file in that folder with the frontmatter below.
const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
