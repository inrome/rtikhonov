export const SITE_TITLE = "Roman Tikhonov";
export const SITE_DESCRIPTION =
	"Roman Tikhonov — Product Manager leading Onboarding and Identity at payme (TBC Uzbekistan). Former cognitive science researcher at Carnegie Mellon with a PhD from St. Petersburg University.";

export const INSPIRATION_TITLE = "Inspiration";
export const INSPIRATION_DESCRIPTION = "Notes and ideas that stay with me.";

/**
 * Flip to `true` and redeploy to show Inspiration in the nav, homepage,
 * `/inspiration/` routes, and RSS. Keep `false` to ship the code without
 * surfacing the section.
 */
export const INSPIRATION_ENABLED = false;

export const WEEKS_TITLE = "Weeks";
export const WEEKS_DESCRIPTION = "Eighty years of life, one square per week.";

export const NAV_ITEMS = [
	{ label: "Home", href: "/" },
	{ label: "Weeks", href: "/weeks/" },
	...(INSPIRATION_ENABLED
		? [{ label: "Inspiration", href: "/inspiration/" }]
		: []),
];
