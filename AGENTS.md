## Production (read this first)

Live site: **https://rtikhonov.com** → Cloudflare Workers → app in `rtikhonov.com/`.

- `git push` does not publish. Deploy with `cd rtikhonov.com && npm run deploy`.
- `main` / GitHub Pages is not what DNS serves. For “not live” bugs, curl prod and edit the Workers tree — see `.cursor/rules/production-source.mdc`.

## Efficiency (avoid repeating this chat)

Playbooks live in `.cursor/rules/agent-efficiency.mdc` (always on). Short version:

1. Curl live + read flags before theorizing.
2. “Publish but hide” → flag off, one deploy, document the flip.
3. Search `rtikhonov.com/` before porting from `main`.
4. `wrangler whoami` before API-token tutorials; OAuth is enough when logged in.
5. “Check now” → `.cursor/skills/check-live-site/`, not another architecture essay.
6. After a confusing multi-turn thread, update rules in the same session.

## Development

The Astro personal site lives in `rtikhonov.com/`. Run Astro commands from that folder. When starting the dev server, use background mode:

```
cd rtikhonov.com
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

Agent shells often lack Node on PATH and often reset cwd to the **repo** root. Every command should `cd` into the site and export nvm before npm/astro/wrangler:

```
export PATH="$HOME/.nvm/versions/node/v24.18.0/bin:$PATH"
cd rtikhonov.com
```

On Roman’s Mac the absolute path is often `/Users/rtikhonov/Desktop/rtikhonov.com/rtikhonov.com`. In Cursor Cloud use `/workspace/rtikhonov.com`.

For local UI checks, use `.cursor/skills/preview-site/` — one server, verify on the port from `astro dev status`, lean verify for CSS.

## Content

Inspiration posts live in `rtikhonov.com/src/content/inspiration/*.md`.
The schema is in `rtikhonov.com/src/content.config.ts`, and shared queries are in
`rtikhonov.com/src/lib/inspiration.ts` — use `getInspirationPosts()` instead of calling
`getCollection()` directly, so drafts and sorting stay consistent everywhere.

Public display is gated by `INSPIRATION_ENABLED` in `rtikhonov.com/src/consts.ts`
(currently `false`). Set it to `true` and redeploy to show the section.

See [docs/content.md](docs/content.md) for frontmatter fields and the steps to add a post.

## Deploy

When asked to deploy / ship / publish: follow `.cursor/rules/deploy.mdc` and `.cursor/skills/deploy-site/` — `wrangler whoami`, then `npm run deploy`, then curl live. Do not TodoWrite or diff against `main` for a clean-tree deploy.

## Security and privacy (public repo)

This repository is public. Everything committed is visible on the internet.

- Never commit secrets (API keys, tokens, passwords, private keys) or `.env*` files.
- Never commit private personal data (address, phone, IDs) unless the owner explicitly wants it public.
- Use placeholders for unpublished contact details; only ship emails/links the owner approved.
- Put deploy secrets in GitHub Actions secrets / Cursor environment secrets / env vars, not in source.
- If a secret may already be in git history, warn the owner and rotate it — removing the file is not enough.
- When unsure whether content should be public, ask before adding it.

See also `.cursor/rules/public-repo-security.mdc`.

## Cursor Cloud

Single static Astro app in `rtikhonov.com/` — no backend DB. `npm ci` in that folder if deps are missing.

- Dev: `http://localhost:4321/` (localhost-only unless `--host`).
- `astro dev --background` is real daemon mode; check `astro dev status` before starting another.
- Inspiration Markdown hot-reloads; `draft: true` shows in dev only.
- Wrangler may already have OAuth in the VM; check `wrangler whoami` before asking for tokens.
- Cloudflare MCP config: `.cursor/mcp.json`. Skill lockfile: `skills-lock.json`. Do not re-run the full Cloudflare agent-setup prompt unless MCP/skills are missing.

## Documentation

Site overview and doc index: [README.md](README.md). Detailed guides live under [docs/](docs/).

Full Astro documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
