import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import {
	INSPIRATION_DESCRIPTION,
	INSPIRATION_TITLE,
	SITE_TITLE,
} from "../../consts";
import { getInspirationPostPath, getInspirationPosts } from "../../lib/inspiration";

export const GET: APIRoute = async (context) => {
	const posts = await getInspirationPosts();

	return rss({
		title: `${SITE_TITLE} — ${INSPIRATION_TITLE}`,
		description: INSPIRATION_DESCRIPTION,
		site: context.site!,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			link: getInspirationPostPath(post),
		})),
	});
};
