export type Announcement = {
	/** Change this when the message changes so a dismissed banner can appear again. */
	id: string;
	message: string;
	href?: string;
	linkLabel?: string;
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
		id: "2026-08-inspiration-harari",
		message: "New notes: Yuval Noah Harari on language, AI, and power.",
		href: "/inspiration/language-ai-and-power/",
		linkLabel: "Read",
	},
];

export function getActiveAnnouncement(): Announcement | undefined {
	return announcements.find((item) => item.enabled !== false);
}
