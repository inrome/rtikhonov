export const SITE_TITLE = "Roman Tikhonov";
export const SITE_DESCRIPTION =
	"Roman Tikhonov — Product Manager leading Onboarding and Identity at payme (TBC Uzbekistan). Former cognitive science researcher at Carnegie Mellon with a PhD from St. Petersburg University.";

export const INSPIRATION_TITLE = "Inspiration";
export const INSPIRATION_DESCRIPTION = "Notes and ideas that stay with me.";

/**
 * Flip to `false` and redeploy to hide Inspiration in the nav, homepage,
 * `/inspiration/` routes, and RSS. Keep `true` to show the section.
 */
export const INSPIRATION_ENABLED = true;

export const NAV_ITEMS = [
	{ label: "Home", href: "/" },
	...(INSPIRATION_ENABLED
		? [{ label: "Inspiration", href: "/inspiration/" }]
		: []),
];
