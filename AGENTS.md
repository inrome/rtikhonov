## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

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

## Design inspiration (agents only)

Reference site for future design work: [ambrosino.io](https://ambrosino.io).

Do not copy it wholesale or surface this list on the public site. Use it as inspiration when the owner asks for layout or interaction updates.

Key features to notice:

- Name + short tagline header (no portrait required in the first viewport)
- Sectioned lists with muted labels (e.g. Latest / Earlier / Misc)
- Work rows: org mark or logo, company, role (+ optional note), tabular dates
- Linked rows with hover expand, title underline, and a small arrow cue
- Sticky bottom social dock with a fade into the page background
- Staggered entrance motion (blur + fade + slight rise); respect `prefers-reduced-motion`
- System light/dark theme and a clean variable sans (e.g. Geist)
- Narrow centered column, hairline separators, restrained color
