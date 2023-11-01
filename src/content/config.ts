import { z, defineCollection, reference } from "astro:content";

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
      funders: z.string().optional(),
      pis: z.array(reference("people")).optional(),
      team: z.array(reference("people")).optional(),
    }),
  }),
  people: defineCollection({
    schema: z.object({
      firstName: z.string(),
      lastName: z.string(),
      avatarURL: z.string(),
    }),
  }),
};
