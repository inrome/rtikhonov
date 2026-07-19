import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			summary: z.string(),
			date: z.coerce.date().optional(),
			dateEnd: z.coerce.date().optional(),
			label: z.string(),
			image: image().optional(),
			href: z.string().url().optional(),
			hrefLabel: z.string().optional(),
			order: z.number(),
		}),
});

export const collections = { projects };
