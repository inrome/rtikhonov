export type Announcement = {
	/** Change this when the message changes so a dismissed banner can appear again. */
	id: string;
	message: string;
	href?: string;
	linkLabel?: string;
	/** Local calendar day (YYYY-MM-DD). The banner hides after this day ends. */
	until?: string;
	/** Set to false to hide the close button. Default is true. */
	dismissible?: boolean;
	/** Set to false to keep the entry in the list without showing it. Default is true. */
	enabled?: boolean;
};

/**
 * Site-wide banners. The first enabled item is shown, fixed at the bottom of the page.
 * To hide all banners, set `enabled: false` on every item or leave the list empty.
 */
export const announcements: Announcement[] = [
	{
		id: "2026-wip-until-sept-7",
		message: "This site is a work in progress. It is under development until 7 September.",
		until: "2026-09-07",
	},
];

/** End of the given local calendar day. */
export function parseUntilDate(value: string): Date {
	const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
	if (!match) return new Date(value);
	return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]), 23, 59, 59, 999);
}

export function formatRemaining(ms: number): string {
	if (ms <= 0) return "";

	const totalSeconds = Math.floor(ms / 1000);
	const days = Math.floor(totalSeconds / 86400);
	const hours = Math.floor((totalSeconds % 86400) / 3600);
	const minutes = Math.floor((totalSeconds % 3600) / 60);

	const parts: string[] = [];
	if (days > 0) parts.push(days === 1 ? "1 day" : `${days} days`);
	if (hours > 0 && days < 7) parts.push(hours === 1 ? "1 hour" : `${hours} hours`);
	if (days === 0 && minutes > 0) parts.push(minutes === 1 ? "1 minute" : `${minutes} minutes`);

	if (parts.length === 0) return "Less than a minute left.";
	if (parts.length === 1) return `${parts[0]} left.`;
	return `${parts[0]} and ${parts[1]} left.`;
}

export function getActiveAnnouncement(now = Date.now()): Announcement | undefined {
	return announcements.find((item) => {
		if (item.enabled === false) return false;
		if (!item.until) return true;
		return parseUntilDate(item.until).getTime() > now;
	});
}
