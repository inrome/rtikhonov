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

## Cursor Cloud specific instructions

This is a single, fully static Astro site — one service, no backend, database,
env vars, or secrets. The startup update script already runs `npm ci`, so
dependencies are installed when a session starts.

- Standard commands live in the README and the `## Development` section above
  (`npm run dev`, `npm run check`, `npm run build`, `npm run preview`).
- The dev server listens on `http://localhost:4321/`. It is bound to localhost
  only; pass `--host` if you need to reach it from outside the VM.
- `astro dev --background` is a real daemon mode in this Astro version (manage it
  with `astro dev stop|status|logs`). It refuses to start a second server if one
  is already running and reports the existing pid, so check `astro dev status`
  before starting another. In cloud you can also just run `npm run dev` in a
  tmux session.
- Adding or editing a Markdown file under `src/content/inspiration/` is picked up
  by the running dev server via hot reload — no restart needed. Posts with
  `draft: true` show on the dev server (marked DRAFT) but are excluded from builds.
