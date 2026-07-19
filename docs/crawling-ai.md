# Crawling / AI

`robots.txt` allows search and AI crawlers for the site. Opt-outs:

- **Portrait** (`/_astro/roman*`): `Disallow` for AI bots + `X-Robots-Tag: noai, noimageai` via `_headers`
- **Contact** (LinkedIn / Telegram): omitted from `/llms.txt`; links are obfuscated in HTML (`data-nosnippet` on nav, `rel=nofollow`, href revealed only after user interaction)

Short LLM summary: `/llms.txt`. These are machine-readable preferences — not a hard technical lock.
