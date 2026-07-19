# SEO and social sharing

Source of truth for titles, meta tags, icons, and link-preview behavior on this one-page site.

## Defaults

- One canonical homepage: `https://rtikhonov.com/`
- Set `site: "https://rtikhonov.com"` in `astro.config.mjs` so absolute URLs resolve
- Page `<title>`: person name
- Meta description: name plus bio
- Canonical `<link>` matches the homepage URL
- Browser chrome: `theme-color` `#fafafa` (light) and `#111` (dark)

## Open Graph and Twitter

Required tags on the homepage:

- `og:title`, `og:description`, `og:type` (`website`), `og:url`, `og:image`, `og:image:alt`
- `twitter:card` (`summary_large_image`), `twitter:title`, `twitter:description`, `twitter:image`, `twitter:image:alt`

Rules:

- `og:url` and image URLs must be absolute (`https://…`)
- Sharing image is `/og.jpg` (public portrait copy for previews). Keep `/_astro/roman*` opted out of AI training; do not point `og:image` at that path or FacebookBot / similar crawlers will miss the preview.
- Image alt text names the person (for example, “Roman Tikhonov portrait”)
- Do not put contact URLs or handles in meta tags, `llms.txt`, or crawler-facing copy

## Icons

- Primary: `/favicon.svg` (supports light/dark via CSS)
- Fallback: `/favicon.ico` — real multi-size ICO (16/32/48), not a renamed PNG
- iOS home screen: `/apple-touch-icon.png` (180×180) on solid `#fafafa`

## Privacy boundary

Social previews may use the approved public portrait and bio. Contact links stay obfuscated in HTML and out of metadata. See [crawling-ai.md](crawling-ai.md).

## Release checklist

1. Build the site and inspect `dist/index.html` for title, description, canonical, OG, and Twitter tags.
2. Confirm canonical and image URLs are absolute.
3. Confirm image alt text is present and meaningful.
4. After deploy, spot-check previews with common validators (LinkedIn, Facebook Sharing Debugger, Twitter/X Card Validator).
5. Keep `robots.txt`, `_headers`, and [crawling-ai.md](crawling-ai.md) aligned with any crawler or portrait policy changes.
