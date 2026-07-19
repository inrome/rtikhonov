# rtikhonov.com

Personal site built with [Astro](https://astro.build), hosted on [Cloudflare Workers](https://developers.cloudflare.com/workers/).

The site lives in `rtikhonov.com/`. See [DESIGN.md](DESIGN.md) for features and design guidelines.

## Features

- Header with bio and LinkedIn / Telegram links
- Horizontal projects gallery (content collection)
- Career timeline

## Commands

Run these from the repository root:

```sh
npm --prefix rtikhonov.com install
npm --prefix rtikhonov.com run dev
npm --prefix rtikhonov.com run build
npm --prefix rtikhonov.com run preview
npm --prefix rtikhonov.com run deploy
```

## Deploy

Deployment is handled by Cloudflare, not GitHub Actions. `npm run deploy` builds the site and runs `wrangler deploy` from `rtikhonov.com/`. If the repo is connected to Cloudflare Workers Builds, set the build **Root directory** to `rtikhonov.com` in the Cloudflare dashboard.
