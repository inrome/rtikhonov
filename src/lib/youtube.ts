const YOUTUBE_HOSTS = new Set([
	"youtube.com",
	"www.youtube.com",
	"m.youtube.com",
	"youtu.be",
	"youtube-nocookie.com",
	"www.youtube-nocookie.com",
]);

const PATH_PREFIXES_WITH_ID = new Set(["embed", "shorts", "live", "v"]);

export function getYouTubeId(url: string): string | null {
	let parsed: URL;
	try {
		parsed = new URL(url);
	} catch {
		return null;
	}

	if (!YOUTUBE_HOSTS.has(parsed.hostname)) return null;

	const fromQuery = parsed.searchParams.get("v");
	if (fromQuery) return fromQuery;

	const segments = parsed.pathname.split("/").filter(Boolean);
	if (parsed.hostname === "youtu.be") return segments[0] ?? null;
	if (segments[0] && PATH_PREFIXES_WITH_ID.has(segments[0])) return segments[1] ?? null;

	return null;
}

export function getYouTubeEmbedUrl(url: string): string | null {
	const id = getYouTubeId(url);
	return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
}
