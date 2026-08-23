---
name: check-live-site
description: >-
  Verify what is actually on https://rtikhonov.com with curl. Use when the user
  says check now, is it live, did you publish, or something is missing on prod.
---

# Check live site

## Fast path

1. Read `INSPIRATION_ENABLED` (and any other flags) in `rtikhonov.com/src/consts.ts`.
2. Curl in parallel — headers + a small body grep. Do not start with branch archaeology.

```bash
curl -sI https://rtikhonov.com/
curl -sL https://rtikhonov.com/ | tr '\n' ' ' | grep -oE 'Work|Inspiration|era|timeline' | sort -u
curl -sI https://rtikhonov.com/inspiration/
curl -sI https://rtikhonov.com/inspiration/rss.xml
# Add post paths only if checking a specific note
```

3. Map results to flag state:

| Flag | Home | `/inspiration/` | Post URL | RSS |
| :--- | :--- | :--- | :--- | :--- |
| off | No Inspiration chrome | Redirect / home | 404 | 404 |
| on | Inspiration block/nav | 200 index | 200 post | 200 feed |

4. Reply in a few lines: live evidence + whether a **redeploy** is still needed (`git push` ≠ publish).

## Optional

- `npx wrangler deployments list` (after PATH + `cd rtikhonov.com`) for Version ID.
- Cloudflare MCP `workers_list` / observability if curl is not enough.

## Do not

- Re-explain Pages vs Workers unless curl shows non-Cloudflare hosting.
- Treat a green GitHub Actions run as proof of live content.
- Ask for an API token just to *check* the public site.
