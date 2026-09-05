# Tayyab Khan Satti — Portfolio

Personal portfolio site for Tayyab Khan Satti, Frontend Engineer, built with Next.js, TypeScript and MUI.

## Stack

- Next.js (App Router, static export)
- TypeScript
- Material UI (MUI)
- ESLint

## Development

```bash
npm install
npm run dev
```

## Build (static export)

```bash
npm run build
```

Output is written to `out/`.

## Editing content

All editable content lives under `src/data/`:

- `profile.ts` — name, contact details, GitHub/LinkedIn/resume links
- `experience.ts` — professional experience timeline
- `professionalProjects.ts` — high-level, non-confidential descriptions of company work
- `projects.ts` — public/personal projects (GitHub + live demo links)
- `skills.ts` — skill categories and engineering principles

## Deployment

Deployed automatically to GitHub Pages via `.github/workflows/deploy.yml` on every push to `main`.
