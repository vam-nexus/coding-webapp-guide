# Repository Guidelines

## Project Structure & Module Organization
- `src/app/` contains the Next.js App Router pages and shared layout (`layout.tsx`, `page.tsx`, `globals.css`).
- `public/` holds static assets served at the site root (e.g., `/logo.svg`).
- `.github/workflows/nextjs.yml` defines the GitHub Pages build/deploy pipeline.
- `.next/` and `out/` are generated build outputs; do not edit them manually.

## Build, Test, and Development Commands
- `npm run dev` starts the local dev server at `http://localhost:3000`.
- `npm run build` creates the production build and static export into `out/`.
- `npm run start` runs a production server (use only when serving a non-exported build).
- `npm run lint` runs ESLint checks.

## Coding Style & Naming Conventions
- TypeScript + React (Next.js App Router); keep components in `src/app/`.
- Use 2-space indentation, semicolons, and double quotes to match existing files.
- Tailwind CSS is the primary styling method; keep global CSS in `src/app/globals.css`.
- Follow Next.js file naming conventions (`page.tsx`, `layout.tsx`, route folders).

## Testing Guidelines
- No test framework or `npm test` script is configured yet.
- If you add tests, keep them under `src/` (e.g., `src/__tests__/`) and document the new command here.

## Commit & Pull Request Guidelines
- Commit messages are short, imperative sentences (example from history: "Create nextjs.yml").
- PRs should include a concise summary, a list of key changes, and screenshots for UI updates.
- Link related issues or tickets when applicable.

## Configuration & Deployment Notes
- Static export is enabled (`output: "export"`), so server-only features need alternatives.
- Images are unoptimized; keep assets in `public/` or update `next.config.ts` if needed.
