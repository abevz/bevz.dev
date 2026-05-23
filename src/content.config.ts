import { defineCollection, z } from "astro:content";

const notes = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    status: z.enum(["draft", "published"]),
    publishedAt: z.string(),
    updatedAt: z.string().optional(),
  }),
});

export const collections = {
  notes,
};
