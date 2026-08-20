# Mpaka José — Portfolio

Professional, bilingual (PT/EN) portfolio for Mpaka José, Software Developer. Built with React, TypeScript, Vite, Tailwind CSS, i18next and lucide-react.

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build (outputs to dist/)
npm run preview    # preview the production build locally
```

## Before you deploy

1. **Profile photo** — replace `public/profile.jpg` with a real photo (same filename). A placeholder respecting the brand palette is included so the layout renders correctly out of the box.
2. **Real links** — open `src/config/site.ts` and set the real GitHub URL, LinkedIn URL and email address. These were intentionally left as placeholders since no real profile links were provided.
3. **Project links** — `src/data/projects.ts` has `githubUrl` / `liveUrl` fields per project, currently `undefined` (buttons render disabled). Fill these in once repos/demos are public.
4. **Contact form** — `src/components/Contact/Contact.tsx` currently simulates a submission. Wire the `handleSubmit` function to a real backend, serverless function, or a service like Formspree/Resend before going live.

## Project structure

```text
src/
├── components/       # One folder per feature/UI piece (Navbar, Hero, About, ...)
├── config/site.ts    # Real external links (GitHub, LinkedIn, email)
├── data/             # Static content: projects, skills, process steps
├── hooks/            # useTheme, useScrollProgress, useReveal, useSeo
├── i18n/              # i18next config + pt/en locale JSON files
├── pages/Home.tsx    # Composes all sections
├── App.tsx
└── main.tsx
```

## Notes

- **Color palette** — strictly `#01E7F6` (primary), `#20232C` (ink), `#FFFFFF` (paper). All surfaces, borders and elevation use opacity variants of these three colors only, defined as CSS variables in `src/index.css` (swapped between `.dark` and `.light`).
- **i18n** — all copy lives in `src/i18n/locales/pt.json` and `en.json`. Default language is Portuguese; language and theme preferences persist to `localStorage`.
- **Scroll progress** — the thin cyan bar fixed to the left edge is driven by `useScrollProgress`, throttled with `requestAnimationFrame` for performance.
- **Accessibility** — semantic landmarks, visible focus states, `aria-label`s on icon-only controls, and `prefers-reduced-motion` support are built in.
