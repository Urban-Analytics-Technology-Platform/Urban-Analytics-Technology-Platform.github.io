import { z, defineCollection, reference } from "astro:content";

const Image = z.object({
  url: z.string(),
  alt: z.string(),
});

export const collections = {
  project: defineCollection({
    schema: z.object({
      name: z.string(),
      description: z.string(),
      tier: z.number(),
      image: Image.optional(),
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
      avatarURL: z.string().optional(),
    }),
  }),
  blogs: defineCollection({
    schema: z.object({
      title: z.string(),
      summary: z.string(),
      draft: z.boolean(),
      publish_date: z.date(),
      authors: z.array(reference("people")),
      projects: z.array(reference("project")).optional(),
      header_image: z.string().optional(),
      tags: z.array(z.string()).optional(),
      image: Image.optional(),
    }),
  }),
};
