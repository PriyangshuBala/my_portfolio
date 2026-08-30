# Priyangshu Bala — Data, AI & Product Portfolio

A responsive, animated personal portfolio built with Next.js, React and TypeScript. The site presents Priyangshu Bala's experience across business analysis, LLM evaluation, applied machine learning, product thinking and software development.

## Highlights

- Editorial, data-inspired visual identity
- Responsive layouts designed for desktop, tablet and smartphones
- Scroll-triggered reveal animations and a continuous skills marquee
- Touch-friendly navigation and calls to action
- Reduced-motion accessibility support
- Optimized professional portrait using `next/image`
- Direct links to GitHub, LinkedIn, email and selected projects

## Run locally

Requirements: Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Deploy on Vercel

1. Create a new GitHub repository and upload the contents of this folder so `package.json` is at the repository root.
2. In Vercel, choose **Add New → Project** and import that GitHub repository.
3. Keep the detected framework as **Next.js**.
4. No environment variables are required.
5. Select **Deploy**.

Vercel will run `npm run build` automatically. Future pushes to the main branch will trigger new deployments.

## Main files

- `app/page.tsx` — portfolio content and interactions
- `app/globals.css` — visual system, animations and responsive layouts
- `app/layout.tsx` — page metadata and document layout
- `public/priyangshu-professional-portrait.png` — professional portrait asset

## Personalization

Update portfolio copy and project data in `app/page.tsx`. Adjust colors, spacing and mobile breakpoints in `app/globals.css`. Replace the portrait only with an image using the same filename, or update its path in `app/page.tsx`.

## Ownership

Portfolio content and personal assets belong to Priyangshu Bala.
