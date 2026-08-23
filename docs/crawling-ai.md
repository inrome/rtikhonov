# Crawling / AI

`robots.txt` allows search and AI crawlers for the site. Opt-outs:

- **Portrait** (`/_astro/roman*`): `Disallow` for AI bots + `X-Robots-Tag: noai, noimageai` via `_headers`
- **Contact** (LinkedIn / Telegram / Cal): omitted from `/llms.txt`; targets and social handles are obfuscated in HTML (`data-nosnippet` on nav, `rel=nofollow`, base64 `data-u` / `data-l`). All contact rows keep non-linked prefixes (`LinkedIn:`, `Telegram:`, `Meet:`). Static HTML keeps service-name placeholders; a small client script decodes handles into visible text (`/in/romantikhonov`, `@rvtikhonov`) on load and reveals all hrefs only after user interaction. The Cal CTA stays readable as “15 min call”

Short LLM summary: `/llms.txt`. These are machine-readable preferences — not a hard technical lock.

Sharing metadata (Open Graph / Twitter) uses `/og.jpg` for previews and may include the public bio, but must not include clear contact URLs or handles. The optimized homepage portrait under `/_astro/roman*` stays opted out of AI training. See [seo-social.md](seo-social.md).
