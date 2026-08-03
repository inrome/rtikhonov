import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const inspiration = defineCollection({
	loader: glob({ base: "./src/content/inspiration", pattern: "**/*.md" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		/** Link to the talk, article, or book the notes come from. */
		sourceUrl: z.url().optional(),
		sourceTitle: z.string().optional(),
		draft: z.boolean().default(false),
	}),
});

export const collections = { inspiration };
