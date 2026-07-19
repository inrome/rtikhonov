/** Format project date(s) for display; keep raw Date values for filtering. */
export function formatProjectDate(
	date?: Date,
	dateEnd?: Date,
): string | undefined {
	if (!date) return undefined;
	if (!dateEnd || sameInstant(date, dateEnd)) return formatPart(date);

	const startPrec = precision(date);
	const endPrec = precision(dateEnd);

	// Day-level range: Apr 10–12, 2026 / Apr 10 – May 3, 2026 / Dec 28, 2025 – Jan 2, 2026
	if (startPrec === "day" && endPrec === "day") {
		const y1 = date.getUTCFullYear();
		const y2 = dateEnd.getUTCFullYear();
		const m1 = date.getUTCMonth();
		const m2 = dateEnd.getUTCMonth();
		const d1 = date.getUTCDate();
		const d2 = dateEnd.getUTCDate();

		if (y1 === y2 && m1 === m2) {
			return `${monthShort(date)} ${d1}–${d2}, ${y1}`;
		}
		if (y1 === y2) {
			return `${monthShort(date)} ${d1} – ${monthShort(dateEnd)} ${d2}, ${y1}`;
		}
		return `${formatDay(date)} – ${formatDay(dateEnd)}`;
	}

	// Month-level range: Apr–Jun 2026 / Nov 2025 – Feb 2026
	if (startPrec !== "day" && endPrec !== "day") {
		const y1 = date.getUTCFullYear();
		const y2 = dateEnd.getUTCFullYear();
		if (startPrec === "year" && endPrec === "year") {
			return y1 === y2 ? String(y1) : `${y1}–${y2}`;
		}
		if (y1 === y2 && startPrec === "month" && endPrec === "month") {
			return `${monthShort(date)}–${monthShort(dateEnd)} ${y1}`;
		}
	}

	const start = formatPart(date);
	const end = formatPart(dateEnd);
	return start === end ? start : `${start} – ${end}`;
}

type Precision = "year" | "month" | "day";

function precision(date: Date): Precision {
	const month = date.getUTCMonth();
	const day = date.getUTCDate();
	if (month === 0 && day === 1) return "year";
	if (day === 1) return "month";
	return "day";
}

function formatPart(date: Date): string {
	const p = precision(date);
	if (p === "year") return String(date.getUTCFullYear());
	if (p === "month") {
		return `${monthShort(date)} ${date.getUTCFullYear()}`;
	}
	return formatDay(date);
}

function formatDay(date: Date): string {
	return `${monthShort(date)} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
}

function monthShort(date: Date): string {
	return date.toLocaleString("en-US", { month: "short", timeZone: "UTC" });
}

function sameInstant(a: Date, b: Date): boolean {
	return a.getTime() === b.getTime();
}
