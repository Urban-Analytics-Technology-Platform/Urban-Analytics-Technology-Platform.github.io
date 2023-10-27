import { z, defineCollection } from "astro:content";

export const collections = {
  project: defineCollection({
    schema: z.object({
      name: z.string(),
      description: z.string(),
      tier: z.number(),
      image: z
        .object({
          url: z.string(),
          alt: z.string(),
        })
        .optional(),
      link: z.string(),
      github: z.string(),
      tags: z.array(z.string()),
      draft: z.boolean().default(false),
    }),
  }),
};
