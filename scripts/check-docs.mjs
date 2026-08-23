import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];

async function exists(target) {
	try {
		await stat(target);
		return true;
	} catch {
		return false;
	}
}

const readmePath = path.join(root, "README.md");
const changelogPath = path.join(root, "CHANGELOG.md");
const docsDir = path.join(root, "docs");

const [readme, changelog, docNames] = await Promise.all([
	readFile(readmePath, "utf8"),
	readFile(changelogPath, "utf8"),
	readdir(docsDir),
]);

const localLinks = [...readme.matchAll(/\]\(([^)]+)\)/g)]
	.map((match) => match[1])
	.filter((href) => !href.includes("://") && !href.startsWith("#"));

for (const href of localLinks) {
	const target = path.join(root, href.split("#")[0]);
	if (!(await exists(target))) {
		errors.push(`README link does not resolve: ${href}`);
	}
}

for (const name of docNames.filter((name) => name.endsWith(".md"))) {
	const href = `docs/${name}`;
	if (!readme.includes(`](${href})`)) {
		errors.push(`README does not list: ${href}`);
	}
}

const headings = [
	...changelog.matchAll(/^## (\d{4}-\d{2}-\d{2}) — (.+)$/gm),
];

if (headings.length === 0) {
	errors.push("CHANGELOG has no valid dated headings");
}

for (const [, date, title] of headings) {
	if (Number.isNaN(Date.parse(`${date}T00:00:00Z`))) {
		errors.push(`Invalid changelog date: ${date}`);
	}

	if (!title.trim()) {
		errors.push(`Changelog title is empty for date: ${date}`);
	}
}

const dates = headings.map(([, date]) => date);
for (let index = 1; index < dates.length; index += 1) {
	if (dates[index] > dates[index - 1]) {
		errors.push("CHANGELOG dates are not newest first");
		break;
	}
}

if (errors.length > 0) {
	console.error(errors.map((error) => `- ${error}`).join("\n"));
	process.exit(1);
}

console.log("Docs and changelog checks passed.");
