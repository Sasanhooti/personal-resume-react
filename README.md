# Sasan Hooti — Developer Portfolio

A responsive, bilingual (English/Persian) developer portfolio built with React, TypeScript, Vite, Tailwind CSS v4, Lucide React, and Motion for React.

## Features

- Dark, modern visual design
- English and Persian content with `LTR` / `RTL` switching
- Responsive layouts for desktop, tablet, and mobile
- Project cards, skills, education, achievements, and contact section
- Print stylesheet for saving the CV as PDF from the browser
- Reduced-motion support and keyboard-visible focus states
- Data separated from UI components for easier maintenance

## Requirements

- Node.js (current LTS recommended)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Customize before publishing

1. Update `src/data/portfolio.ts` with accurate project descriptions, verified education details, dates, and achievements.
2. In `src/components/Hero.tsx`, replace the GitHub and LinkedIn profile URLs.
3. In `src/App.tsx`, replace `hello@example.com` with your professional email.
4. Update project `link` values in `src/data/portfolio.ts` to point to the correct repositories.
5. Add your final PDF resume to `public/cv.pdf` if you also want a direct PDF file link.
6. Check both languages, all links, and mobile layouts before publishing.

## Save as PDF

Open the website in Chrome or Edge, click **Print / Save CV**, select **Save as PDF**, choose A4 paper, and enable background graphics only if you want to preserve browser-rendered colors. The print stylesheet intentionally removes navigation and decorative elements.

## Suggested GitHub repository description

> A responsive bilingual developer portfolio built with React, TypeScript, Vite, and Tailwind CSS, featuring project highlights and a print-ready CV.

## Important content note

The initial project cards and credential descriptions are editable examples. Verify all details and replace placeholder links and contact information before making the portfolio public.
