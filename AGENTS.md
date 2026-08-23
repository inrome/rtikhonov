## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

Run `npm run check` before you commit. It type-checks components and validates post
frontmatter against the content collection schema.

## Content

Blog posts live in the `inspiration` content collection (`src/content/inspiration/*.md`).
The schema is in `src/content.config.ts`, and shared queries are in
`src/lib/inspiration.ts` — use `getInspirationPosts()` instead of calling
`getCollection()` directly, so drafts and sorting stay consistent everywhere.

See the README for the post frontmatter fields and the steps to add a post.

## What "published" means

**Published** means a visitor can open the change on https://rtikhonov.com

These are **not** published: a merge to `main`, a green GitHub check, or
`draft: false` on a post.

This `main` tree (root `package.json`, no `wrangler.jsonc`) is **not** the live
site. Live code is `rtikhonov.com/` on `cursor/cloudflare-workers-hosting`.

## Deploy

GitHub is version control only. Never GitHub Pages or GitHub Actions deploy.

Follow `.cursor/rules/deploy.mdc` and `.cursor/skills/deploy-site/`:

1. If `rtikhonov.com/wrangler.jsonc` is missing, fetch
   `origin/cursor/cloudflare-workers-hosting` and work on that line.
2. `cd rtikhonov.com && npx wrangler whoami` — if it fails, ask for
   `CLOUDFLARE_API_TOKEN` on the Cursor Cloud environment and stop.
3. `cd rtikhonov.com && npm run deploy`
4. `curl` https://rtikhonov.com and confirm the new copy.

When asked if something is live: check the live URL first. Report git only as
"in this repo".

## Security and privacy (public repo)

This repository is public. Everything committed is visible on the internet.

- Never commit secrets (API keys, tokens, passwords, private keys) or `.env*` files.
- Never commit private personal data (address, phone, IDs) unless the owner explicitly wants it public.
- Use placeholders for unpublished contact details; only ship emails/links the owner approved.
- Put deploy secrets in GitHub Actions secrets / environment variables, not in source.
- If a secret may already be in git history, warn the owner and rotate it — removing the file is not enough.
- When unsure whether content should be public, ask before adding it.

See also `.cursor/rules/public-repo-security.mdc`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
