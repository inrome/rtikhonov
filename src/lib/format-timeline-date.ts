/** Format timeline date strings for display; keep raw ISO in data. */
export function formatTimelineDate(value: string): string {
	const yearOnly = /^(\d{4})$/;
	const yearMonth = /^(\d{4})-(\d{2})$/;
	const yearMonthDay = /^(\d{4})-(\d{2})-(\d{2})$/;

	let match = value.match(yearOnly);
	if (match) return match[1];

	match = value.match(yearMonth);
	if (match) {
		const date = utcDate(match[1], match[2], "01");
		return `${monthShort(date)} ${date.getUTCFullYear()}`;
	}

	match = value.match(yearMonthDay);
	if (match) {
		const date = utcDate(match[1], match[2], match[3]);
		return `${monthShort(date)} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
	}

	return value;
}

/** Machine-readable datetime for <time>; returns undefined if the string is not ISO-like. */
export function timelineDateTime(value: string): string | undefined {
	if (/^\d{4}$/.test(value)) return value;
	if (/^\d{4}-\d{2}$/.test(value)) return value;
	if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
	return undefined;
}

function utcDate(year: string, month: string, day: string): Date {
	return new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)));
}

function monthShort(date: Date): string {
	return date.toLocaleString("en-US", { month: "short", timeZone: "UTC" });
}
