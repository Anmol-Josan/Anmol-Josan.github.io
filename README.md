# Scroll-Driven Personal Website

High-end scrollytelling portfolio built with Next.js App Router, TypeScript,
Tailwind CSS, GSAP ScrollTrigger, and Lenis.

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
- Edit project stories, metrics, principles, and current work in the exported arrays.

## Animation Notes

- Scroll-linked animation logic is scoped inside section components with `useGsapScope`.
- `ScrollTrigger` handles pinning and scrubbed timelines.
- `SmoothScrollProvider` wires Lenis into GSAP's ticker.
- `prefers-reduced-motion` is respected by disabling GSAP setup and showing static content.
