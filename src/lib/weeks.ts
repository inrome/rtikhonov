/** First day of week 1. Later weeks are every 7 days from this date. */
export const BIRTH_ISO = "1992-05-16";
export const LIFE_YEARS = 80;
export const WEEKS_PER_YEAR = 52;
export const TOTAL_WEEKS = LIFE_YEARS * WEEKS_PER_YEAR;

export type CalendarDate = {
	year: number;
	month: number;
	day: number;
};

export type WeekAnnotation = {
	/** Any calendar day in the week (YYYY-MM-DD). The week number is derived. */
	date: string;
	emoji: string;
	title: string;
	location?: string;
};

export type WeekTone = "past" | "present" | "future";

export const BIRTH_DATE: CalendarDate = { year: 1992, month: 5, day: 16 };

export const WEEK_ANNOTATIONS: WeekAnnotation[] = [
	{
		date: BIRTH_ISO,
		emoji: "🇺🇦",
		title: "The week I was born",
		location: "Kryvyi Rih, Ukraine",
	},
];

const MS_PER_DAY = 86_400_000;

const MONTHS = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

export function parseIsoDate(value: string): CalendarDate {
	const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
	if (!match) {
		throw new Error(`Invalid date: ${value}`);
	}

	return {
		year: Number(match[1]),
		month: Number(match[2]),
		day: Number(match[3]),
	};
}

export function calendarFromDate(date: Date): CalendarDate {
	return {
		year: date.getFullYear(),
		month: date.getMonth() + 1,
		day: date.getDate(),
	};
}

export function utcDayNumber(date: CalendarDate): number {
	return Date.UTC(date.year, date.month - 1, date.day) / MS_PER_DAY;
}

export function dateFromUtcDay(dayNumber: number): CalendarDate {
	const date = new Date(dayNumber * MS_PER_DAY);
	return {
		year: date.getUTCFullYear(),
		month: date.getUTCMonth() + 1,
		day: date.getUTCDate(),
	};
}

export function weekNumberFromDate(date: CalendarDate): number {
	return Math.floor((utcDayNumber(date) - utcDayNumber(BIRTH_DATE)) / 7) + 1;
}

export function weekStartFromNumber(weekNumber: number): CalendarDate {
	return dateFromUtcDay(utcDayNumber(BIRTH_DATE) + (weekNumber - 1) * 7);
}

export function weekEndExclusiveFromNumber(weekNumber: number): CalendarDate {
	return dateFromUtcDay(utcDayNumber(BIRTH_DATE) + weekNumber * 7);
}

function monthDay(date: CalendarDate): string {
	return `${MONTHS[date.month - 1]} ${date.day}`;
}

/** Start day through start+7, e.g. May 16–23 1992. */
export function formatWeekRange(start: CalendarDate, endExclusive: CalendarDate): string {
	if (start.year === endExclusive.year && start.month === endExclusive.month) {
		return `${MONTHS[start.month - 1]} ${start.day}–${endExclusive.day} ${start.year}`;
	}
	if (start.year === endExclusive.year) {
		return `${monthDay(start)}–${monthDay(endExclusive)} ${start.year}`;
	}
	return `${monthDay(start)} ${start.year}–${monthDay(endExclusive)} ${endExclusive.year}`;
}

export function formatWeekMeta(weekNumber: number): string {
	const start = weekStartFromNumber(weekNumber);
	const end = weekEndExclusiveFromNumber(weekNumber);
	return `week ${weekNumber} (${formatWeekRange(start, end)})`;
}

export function weekTone(weekNumber: number, today: CalendarDate): WeekTone {
	const current = weekNumberFromDate(today);
	if (weekNumber < current) return "past";
	if (weekNumber === current) return "present";
	return "future";
}

export type ResolvedAnnotation = WeekAnnotation & { week: number };

export function resolveAnnotations(
	annotations: WeekAnnotation[] = WEEK_ANNOTATIONS,
): Map<number, ResolvedAnnotation> {
	const map = new Map<number, ResolvedAnnotation>();

	for (const item of annotations) {
		const week = weekNumberFromDate(parseIsoDate(item.date));
		if (week < 1 || week > TOTAL_WEEKS) continue;
		map.set(week, { ...item, week });
	}

	return map;
}
