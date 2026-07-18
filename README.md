# rtikhonov.com

Personal site built with [Astro](https://astro.build), hosted on [Cloudflare Workers](https://developers.cloudflare.com/workers/).

## Commands

| Command | Action |
| :------ | :----- |
| `npm install` | Install dependencies |
| `npm run dev` | Local Astro dev server |
| `npm run build` | Build static site to `./dist/` |
| `npm run preview` | Preview production build with Wrangler |
| `npm run deploy` | Build and deploy to Cloudflare Workers |

## Deploy

Push to `main` runs the GitHub Actions deploy workflow (needs `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` secrets), or deploy locally:

```sh
npm run deploy
```
