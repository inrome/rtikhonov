---
name: maintain-project-docs
description: Keeps README, focused docs, CHANGELOG, and llms.txt aligned with the site. Use after notable code or content changes, when editing documentation, when rebuilding history from Git, and before a commit, release, or deployment.
---

# Maintain Project Docs

## Workflow

1. Read the changed files and `git diff --name-status`.
2. Read only the focused docs related to those changes.
3. Update existing docs before creating a new page.
4. Update `README.md` when a doc is added, removed, or renamed.
5. Update `rtikhonov.com/public/llms.txt` when its public summary changes.
6. Add only significant work to `CHANGELOG.md`.
7. Run the validator:

```bash
npm --prefix rtikhonov.com run check:docs
```

Before deployment, use:

```bash
npm --prefix rtikhonov.com run deploy
```

That command checks docs, builds the site, and deploys with IPv4-first DNS.

## Doc map

- `README.md`: short project overview, doc index, commands, deploy notes
- `docs/features.md`: page anatomy and user-facing features
- `docs/design-principles.md`: design intent and decision rules
- `docs/content.md`: project schema and timeline data rules
- `docs/visual-system.md`: tokens, layout, type, cards, images, icons
- `docs/interactions.md`: motion and input behavior
- `docs/seo-social.md`: titles, meta, Open Graph, favicons, sharing rules
- `docs/crawling-ai.md`: crawler access and privacy preferences
- `CHANGELOG.md`: dated record of significant changes

Keep each fact in one focused page. Link to it instead of copying it elsewhere.

## Changelog format

```markdown
## YYYY-MM-DD — Movie Or Song Title

- Significant change in plain, active B1 English.
```

- Use a real movie or song title that fits the work.
- A playful or self-mocking title is welcome.
- There is no word-count limit on the title.
- Group work from the same date.
- Put newest dates first.
- Use short bullets. Skip minor internal changes.
- Use a PostHog-like voice: clear, specific, direct, honest, and conversational.
- Lead with what changed for the reader. Do not start with “Added” or “Changed.”
- Prefer active voice and present tense. Write like you are talking to a smart friend.
- Cut buzzwords, filler, hedging, and forced jokes. Clear beats clever.
- When rebuilding history, inspect Git dates and diffs. Do not paste commit messages.

## Deployment gate

Do not deploy until:

- README links resolve.
- Every focused doc is listed in README.
- Docs match current behavior.
- The changelog covers notable pending work.
- `npm run check:docs` and the site build pass (`npm run deploy` runs both).
