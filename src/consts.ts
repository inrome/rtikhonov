export const SITE_TITLE = "Roman Tikhonov";
export const SITE_DESCRIPTION =
	"Roman Tikhonov — Product Manager leading Onboarding and Identity at payme (TBC Uzbekistan). Former cognitive science researcher at Carnegie Mellon with a PhD from St. Petersburg University.";

export const INSPIRATION_TITLE = "Inspiration";
export const INSPIRATION_DESCRIPTION = "Notes and ideas that stay with me.";

/**
 * Flip to `true` to show Inspiration in the nav, homepage list, and the
 * RSS `<link>` in `<head>`. `/inspiration/` and `/weeks/` stay reachable
 * by URL either way. Keep `false` so those pages stay unlisted.
 */
export const INSPIRATION_ENABLED = false;

export const WEEKS_TITLE = "Weeks";
export const WEEKS_DESCRIPTION = "Eighty years of life, one square per week.";

export const NAV_ITEMS = [
	{ label: "Home", href: "/" },
	...(INSPIRATION_ENABLED
		? [{ label: "Inspiration", href: "/inspiration/" }]
		: []),
];
