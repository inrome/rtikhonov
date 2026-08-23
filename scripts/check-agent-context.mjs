import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const rulesDir = path.join(root, ".cursor/rules");
const skillsDir = path.join(root, ".cursor/skills");

// Rules and AGENTS.md marked always-on sit in every chat's context. Keep that
// budget small; procedure belongs in skills, which load only when needed.
const ALWAYS_ON_BYTE_BUDGET = 7000;
const MAX_BODY_LINES = 500;
const MAX_DESCRIPTION_CHARS = 1024;

const errors = [];

function parseFrontmatter(text) {
	const match = text.match(/^---\n([\s\S]*?)\n---\n?/);
	if (!match) return null;

	const fields = {};
	let key = null;

	for (const line of match[1].split("\n")) {
		const pair = line.match(/^([a-zA-Z_]+):\s*(.*)$/);

		if (pair) {
			key = pair[1];
			fields[key] = pair[2] === ">-" ? "" : pair[2].trim();
		} else if (key && line.trim()) {
			fields[key] = `${fields[key]} ${line.trim()}`.trim();
		}
	}

	return { fields, body: text.slice(match[0].length) };
}

const alwaysOn = [path.join(root, "AGENTS.md")];

for (const name of await readdir(rulesDir)) {
	const file = path.join(rulesDir, name);

	if (!name.endsWith(".mdc")) {
		errors.push(`.cursor/rules/${name}: Cursor ignores non-.mdc rule files`);
		continue;
	}

	const parsed = parseFrontmatter(await readFile(file, "utf8"));

	if (!parsed) {
		errors.push(`.cursor/rules/${name}: missing frontmatter`);
		continue;
	}

	const { fields, body } = parsed;
	const lines = body.split("\n").length;

	if (!fields.description) {
		errors.push(`.cursor/rules/${name}: missing description`);
	}

	if (lines > MAX_BODY_LINES) {
		errors.push(`.cursor/rules/${name}: ${lines} lines, split it (max ${MAX_BODY_LINES})`);
	}

	if (fields.alwaysApply === "true") {
		alwaysOn.push(file);
	} else if (!fields.globs && !fields.description) {
		errors.push(`.cursor/rules/${name}: no globs and no description, so it never auto-attaches`);
	}
}

let alwaysOnBytes = 0;

for (const file of alwaysOn) {
	alwaysOnBytes += Buffer.byteLength(await readFile(file, "utf8"));
}

if (alwaysOnBytes > ALWAYS_ON_BYTE_BUDGET) {
	errors.push(
		`always-on context is ${alwaysOnBytes} bytes over ${alwaysOn.length} files (budget ${ALWAYS_ON_BYTE_BUDGET}). Move procedure into a skill.`,
	);
}

for (const dir of await readdir(skillsDir)) {
	const parsed = parseFrontmatter(await readFile(path.join(skillsDir, dir, "SKILL.md"), "utf8"));

	if (!parsed) {
		errors.push(`.cursor/skills/${dir}: missing frontmatter`);
		continue;
	}

	const { fields, body } = parsed;
	const name = fields.name ?? "";
	const description = fields.description ?? "";
	const lines = body.split("\n").length;

	if (name !== dir) {
		errors.push(`.cursor/skills/${dir}: name "${name}" does not match its directory`);
	}

	if (!/^[a-z0-9-]+$/.test(name) || name.length > 64) {
		errors.push(`.cursor/skills/${dir}: name must be kebab-case and 64 chars or fewer`);
	}

	if (/anthropic|claude/i.test(name)) {
		errors.push(`.cursor/skills/${dir}: name uses a reserved word`);
	}

	if (!description) {
		errors.push(`.cursor/skills/${dir}: empty description`);
	}

	if (description.length > MAX_DESCRIPTION_CHARS) {
		errors.push(
			`.cursor/skills/${dir}: description ${description.length} chars (max ${MAX_DESCRIPTION_CHARS})`,
		);
	}

	if (/[<>]/.test(description)) {
		errors.push(`.cursor/skills/${dir}: description cannot contain < or >`);
	}

	if (/\b(I can|I will|you can use this)\b/i.test(description)) {
		errors.push(`.cursor/skills/${dir}: write the description in third person`);
	}

	if (!/\buse when\b/i.test(description)) {
		errors.push(`.cursor/skills/${dir}: description needs a "Use when ..." trigger`);
	}

	if (lines > MAX_BODY_LINES) {
		errors.push(`.cursor/skills/${dir}: body ${lines} lines, split it (max ${MAX_BODY_LINES})`);
	}
}

if (errors.length > 0) {
	console.error(errors.map((error) => `- ${error}`).join("\n"));
	process.exit(1);
}

console.log(`Agent context checks passed. Always-on: ${alwaysOnBytes} bytes.`);
