import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const inspiration = defineCollection({
	loader: glob({ base: "./src/content/inspiration", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		sourceUrl: z.string().url().optional(),
		sourceTitle: z.string().optional(),
	}),
});

export const collections = { inspiration };
