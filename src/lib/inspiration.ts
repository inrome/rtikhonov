import { getCollection, type CollectionEntry } from "astro:content";

export type InspirationPost = CollectionEntry<"inspiration">;

/** Newest first. Drafts are visible while developing and hidden in builds. */
export async function getInspirationPosts(): Promise<InspirationPost[]> {
	const posts = await getCollection("inspiration", ({ data }) =>
		import.meta.env.PROD ? !data.draft : true,
	);

	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function getInspirationPostPath(post: InspirationPost): string {
	return `/inspiration/${post.id}/`;
}
