# Anmol Josan Personal Website

Fast, static portfolio built with Next.js App Router and TypeScript. The page
uses semantic HTML, CSS, and native disclosure controls instead of scroll
scrubbing, timers, cursor effects, or client-side loading states.

## Run Locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Deploy To GitHub Pages

This project is configured for GitHub Pages. Push the `main` branch to the
`anmol-josan/anmol-josan.github.io` repository, then set the repository's Pages
source to **GitHub Actions**. Every push to `main` will build the static export
and deploy it to `https://anmol-josan.github.io`.

## Customize Content

Most portfolio content lives in `data/profile.ts`.

- Update name, contact links, and resume path in `profile`.
- Replace `public/resume.html` with the final resume asset.
- Edit project stories, research steps, leadership, activities, and current work in the exported arrays.

## Performance Notes

- The home page is rendered as a server component with no client-side JavaScript.
- CSS uses static backgrounds and restrained transitions rather than continuous animation.
- Project notes use native `<details>` elements, so they remain accessible without a UI library.
- `prefers-reduced-motion` is respected by disabling the remaining transitions and smooth scrolling.
