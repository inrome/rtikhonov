import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/** Absolute URL or a root-relative path to a file hosted in `public/`. */
const projectHref = z
	.string()
	.refine((v) => v.startsWith("/") || z.string().url().safeParse(v).success, {
		message: "href must be an absolute URL or a root-relative path",
	});

const projectLink = z.object({
	href: projectHref,
	label: z.string(),
});

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
			/** Single artifact link (kept for simple cards). */
			href: projectHref.optional(),
			hrefLabel: z.string().optional(),
			/** Extra artifact links; merged after href when both are set. */
			links: z.array(projectLink).optional(),
			order: z.number(),
		}),
});

export const collections = { projects };
