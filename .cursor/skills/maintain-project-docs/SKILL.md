---
name: maintain-project-docs
description: >-
  Keeps README, the focused docs, CHANGELOG, and llms.txt aligned with the
  site, and holds the doc map and changelog entry format. Use when notable
  code or content changed, when editing documentation, when rebuilding
  history from Git, or when undocumented pending changes block a ship. For
  deploy-only requests, use deploy-site instead.
---

# Maintain project docs

## Workflow

1. Read the changed files and `git diff --name-status` — pending work
   only, not `main...HEAD` unless asked.
2. Read only the focused docs related to those changes.
3. Update an existing doc before creating a new page.
4. Update `README.md` when a doc is added, removed, or renamed.
5. Update `public/llms.txt` when its public summary changed.
6. Add only significant work to `CHANGELOG.md`.
7. Run `npm run check:docs`.

Docs current and the user also asked to ship → hand off to skill
`deploy-site`. Skip this skill for a clean-tree deploy-only request.

## Doc map

- `README.md`: overview, doc index, commands, deploy summary
- `docs/features.md`: page anatomy and user-facing features
- `docs/design-principles.md`: design intent and decision rules
- `docs/content.md`: project schema and timeline data rules
- `docs/visual-system.md`: tokens, layout, type, cards, images, icons
- `docs/interactions.md`: motion and input behavior
- `docs/seo-social.md`: titles, meta, Open Graph, favicons, sharing
- `docs/crawling-ai.md`: crawler access and privacy preferences
- `docs/deploy.md`: Workers Builds settings, ship by size, emergency Wrangler
- `docs/agent-context.md`: how rules and skills are written and budgeted
- `CHANGELOG.md`: dated record of significant changes

Keep each fact on one page. Link to it instead of copying it.

## Changelog format

```markdown
## YYYY-MM-DD — Movie Or Song Title
```

- Use a real movie or song title that fits the work. Playful or
  self-mocking is welcome; no length limit.
- Newest dates first. Group work from the same date.
- Short bullets, significant changes only. Skip minor internal edits.
- Lead with the outcome for the reader, not "Added" or "Changed".
- Plain B1 English, active voice, present tense, short sentences.
- Clear and conversational, like explaining it to a smart friend. No
  buzzwords, filler, hedging, or forced jokes.
- When rebuilding history, read Git dates and diffs. Do not paste commit
  messages.
