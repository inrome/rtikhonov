---
name: maintain-project-docs
description: >-
  Keeps README, focused docs, CHANGELOG, and llms.txt aligned with the site.
  Use after notable code or content changes, when editing documentation, when
  rebuilding history from Git, or when a dirty tree blocks deploy. For
  deploy-only requests (deploy / ship / publish), use deploy-site instead.
---

# Maintain Project Docs

## Workflow

1. Read the changed files and `git diff --name-status` (pending work only — not `main...HEAD` unless needed).
2. Read only the focused docs related to those changes.
3. Update existing docs before creating a new page.
4. Update `README.md` when a doc is added, removed, or renamed.
5. Update `rtikhonov.com/public/llms.txt` when its public summary changes.
6. Add only significant work to `CHANGELOG.md`.
7. Run the validator:

```bash
export PATH="$HOME/.nvm/versions/node/v24.18.0/bin:$PATH"
npm --prefix rtikhonov.com run check:docs
```

If the user also asked to deploy, hand off to `deploy-site` after docs are current. Do not load this skill for a clean-tree deploy-only request.

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

## Dirty tree before deploy

If deploy is blocked by undocumented pending changes, fix docs here first. Then use `deploy-site`. Do not re-run a full manual gate when `git status` is already clean — `npm run deploy` runs `check:docs` and the build.
