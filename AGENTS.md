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

**Published** means a visitor can open it on the live site: https://rtikhonov.com

Do **not** treat these as published:

- Code on `main`, a clean working tree, or a pushed commit
- A green GitHub check
- A post without `draft: true` (`draft` only controls this repo's production *build*)

Never deploy with GitHub Pages or GitHub Actions. Ship only with Cloudflare
Workers (`wrangler` / Workers Builds). GitHub is version control only.

The public domain is Cloudflare. Inspiration is **not** live:
`https://rtikhonov.com/inspiration/` is 404 even though the section exists on
`main`.

When the owner asks if something is unpublished, live, or public:

1. Check the live URL first (`https://rtikhonov.com` and the specific path).
2. Report git status only as "in this repo", never as "published".

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
