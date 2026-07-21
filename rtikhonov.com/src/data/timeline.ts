export type TimelineCategory =
	| "work" // roles, founding, PM moves
	| "education" // degrees, exchange semester, vocational training
	| "research" // publications, research programs
	| "community" // events organized, mentoring, volunteering, talks
	| "life"; // birth, country moves, personal milestones

export type TimelineEntry = {
	/** Stable slug for anchors and future post links. */
	id: string;
	/** YYYY | YYYY-MM | YYYY-MM-DD — keep raw ISO for <time datetime>. */
	date: string;
	text: string;
	category?: TimelineCategory;
	/**
	 * Visual marker before the text: an emoji ("🇺🇦") or a raw Tabler SVG
	 * string (import from "@tabler/icons/outline/x.svg?raw").
	 * Detected by "<svg" prefix and rendered with set:html; otherwise
	 * rendered as plain emoji text.
	 */
	marker?: string;
	/** Absolute URL or root-relative path when a post exists. */
	href?: string;
};

/** Short collapsed copy for years with 2+ timeline entries. */
export const yearOverviews: Record<string, string> = {
	"2025": "Moved to Uzbekistan and joined payme as Product Owner, later Product Manager.",
	"2023":
		"Left academia for product at HumanteQ, moved to Armenia, and published in Open Mind plus other journals.",
	"2022":
		"Moved to Georgia, then a Carnegie Mellon postdoc, while leading research and internships at St. Petersburg University.",
	"2021":
		"PhD defended, teaching awards at HSE, a researcher role at JetBrains Research, and a cognitive hackathon.",
};

/** Newest first. */
export const timeline: TimelineEntry[] = [
	{
		id: "cursor-hackathon-2026",
		date: "2026-04",
		text: "Mentored teams at the Cursor hackathon (TBC Uzbekistan / payme). Helped choose and validate product ideas.",
		category: "community",
	},
	{
		id: "payme-2025",
		date: "2025",
		text: "Joined payme (TBC Uzbekistan) as Product Owner, later Product Manager. Own Onboarding and Identity. Tashkent.",
		category: "work",
	},
	{
		id: "moved-uzbekistan-2025",
		date: "2025-01",
		text: "Moved to Uzbekistan.",
		category: "life",
		marker: "🇺🇿",
	},
	{
		id: "reviewlab-2024",
		date: "2024",
		text: "Co-founded ReviewLab.app, a product feedback platform. Shipped MVP in 2.5 months.",
		category: "work",
	},
	{
		id: "open-mind-2023",
		date: "2023-11",
		text: "Published in MIT's Open Mind: Prediction, Explanation, and Control — mental models in dynamic environments.",
		category: "research",
	},
	{
		id: "moved-armenia-2023",
		date: "2023-09",
		text: "Moved to Armenia.",
		category: "life",
		marker: "🇦🇲",
	},
	{
		id: "humanteq-2023",
		date: "2023",
		text: "Moved into product management: PM at HumanteQ (mental health tech). Published Cognition and Journal of Cognitive Psychology papers.",
		category: "work",
	},
	{
		id: "cmu-2022",
		date: "2022-07",
		text: "Postdoctoral Fellow at Carnegie Mellon University (to Aug 2023). Studied prediction, explanation, and control in dynamic systems.",
		category: "research",
		marker: "🇺🇸",
	},
	{
		id: "verbalization-2022",
		date: "2022",
		text: "Led Verbalization and Dynamic System Control research and launched research internships at St. Petersburg University.",
		category: "research",
	},
	{
		id: "moved-georgia-2022",
		date: "2022-02-28",
		text: "Moved to Georgia.",
		category: "life",
		marker: "🇬🇪",
	},
	{
		id: "jetbrains-lecture-2021",
		date: "2021-11",
		text: "Gave an open JetBrains Research lecture on evidence-based learning strategies (100+ attendees).",
		category: "community",
	},
	{
		id: "jetbrains-research-2021",
		date: "2021-09",
		text: "Researcher at JetBrains Research (to Mar 2022). Advised the Learning Research App on cognitive ability metrics.",
		category: "research",
	},
	{
		id: "cognitive-hackathon-2021",
		date: "2021-02",
		text: "Organized the Cognitive Hackathon for Online Experiments at St. Petersburg University (40+ researchers).",
		category: "community",
	},
	{
		id: "phd-2021",
		date: "2021",
		text: 'PhD in Psychology, St. Petersburg University. "Best Teacher" and Best Academic Advisor awards at HSE University. Led Online Communication and Trust research.',
		category: "education",
	},
	{
		id: "paradoxes-2019",
		date: "2019",
		text: "Organized Paradoxes of Consciousness, a scientific conference at St. Petersburg University.",
		category: "community",
	},
	{
		id: "hse-lecturer-2018",
		date: "2018",
		text: "Lecturer, then Senior Lecturer at HSE University. Designed award-winning courses. Began Teaching Categories research with Moskvichev and Steyvers.",
		category: "education",
	},
	{
		id: "experiments-week-2017",
		date: "2017",
		text: "Launched Experiments Week, a science festival that later drew 800+ volunteer participants (through 2020).",
		category: "community",
	},
	{
		id: "usabilitylab-2016",
		date: "2016",
		text: "Market Research Analyst at UsabilityLab: Kano ranking of 700+ features across 16 mobile banking apps (survey n≈1900).",
		category: "work",
	},
	{
		id: "masters-2015",
		date: "2015",
		text: "Master's in Cognitive Psychology (with distinction). Started PhD on social verification of implicit knowledge and Stress & Well-Being research; co-authored 20+ peer-reviewed papers.",
		category: "education",
	},
	{
		id: "student-satisfaction-2014",
		date: "2014",
		text: "Led a student satisfaction climate survey (n=124) for the Faculty of Psychology Student Council.",
		category: "community",
	},
	{
		id: "bachelors-2013",
		date: "2013",
		text: "Bachelor's in Psychology, St. Petersburg University. Master's thesis work on implicit learning in dyads (to 2015).",
		category: "education",
	},
	{
		id: "finland-exchange-2012",
		date: "2012",
		text: "Exchange semester at the University of Eastern Finland. Bachelor's thesis on gamification of group problem-solving.",
		category: "education",
		marker: "🇫🇮",
	},
	{
		id: "aiesec-2010",
		date: "2010",
		text: "Led a human rights education project at AIESEC with 14 international volunteers (to 2011).",
		category: "community",
	},
	{
		id: "vocational-2009",
		date: "2009",
		text: "Finished vocational training in web development; started studying psychology.",
		category: "education",
	},
	{
		id: "moved-spb-1994",
		date: "1994",
		text: "Moved to St. Petersburg, Russia.",
		category: "life",
		marker: "🇷🇺",
	},
	{
		id: "born-1992",
		date: "1992-05",
		text: "Born in Kryvyi Rih, Ukraine.",
		category: "life",
		marker: "🇺🇦",
	},
];
