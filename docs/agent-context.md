# Agent context

How this repo talks to AI agents: `AGENTS.md`, Cursor rules in
`.cursor/rules/`, skills in `.cursor/skills/`, MCP servers in
`.cursor/mcp.json`, and plugins in `.cursor/settings.json`.

Every always-on file is re-sent with every message in every chat. That
costs money and, worse, invites drift: three copies of the deploy policy
once disagreed with each other and an agent offered two ship paths.
`npm run check:agents` guards the rules below.

## What loads when

| Where | Loads |
|---|---|
| `AGENTS.md` | Every chat. Also read by Claude Code through `CLAUDE.md` |
| Rule with `alwaysApply: true` | Every chat |
| Rule with `globs:` | When a matching file is in context |
| Rule with `description:` only | When the agent judges it relevant |
| Skill | Only its name and description load up front; the body loads when triggered |

So the cheapest place for detail is a skill, and the most expensive is an
always-on rule.

## Rules

- Keep the always-on set small. The check fails over 7000 bytes.
- One policy, one home. State it once and link to it.
- Scope with `globs` whenever a rule only matters for certain files.
- Keep any rule under 500 lines.
- Point at canonical files instead of copying their content, so a rule
  cannot go stale against the code.

## Skills

Skills follow Anthropic's Agent Skills format.

- `name` matches the directory: lowercase, numbers, hyphens, 64 chars max.
  "anthropic" and "claude" are reserved.
- `description` is the routing signal. Write it in the third person and
  give both what the skill does and a `Use when ...` trigger with the
  phrases the owner actually says. Max 1024 characters, no `<` or `>`.
- Keep the body under 500 lines. Split long or rarely-needed detail into
  a second file in the same folder and link to it one level deep.
- Write steps in the imperative. Prefer concrete commands over theory.

## Current set

Always-on rules: `deploy.mdc` (how the site ships and what published
means), `public-repo-security.mdc`, `docs-and-changelog.mdc`.

Scoped rules: `astro-site-workflow.mdc`, `personal-site-ui.mdc`,
`projects-gallery.mdc`.

Skills: `deploy-site` (ship now), `workers-builds-ci` (pipeline and CI
questions), `preview-site` (look at a large change first),
`maintain-project-docs` (doc map and changelog format).

Plugins: Cloudflare (`cloudflare`) and Notion (`notion-workspace`).

MCP servers in `.cursor/mcp.json`: Cloudflare Workers (docs, bindings,
builds, observability) and Notion (`https://mcp.notion.com/mcp`). Notion
needs a one-time OAuth in Cursor Customize. For Cloud Agents, add the
same HTTP URL in the Agents MCP list and sign in there too. Do not
commit Notion tokens.

## Changing them

Add a rule when an agent repeats the same mistake, not in advance. When
an agent goes off track, ask it what context it was missing and fix that
one file. Then run:

```sh
npm run check:agents
```
