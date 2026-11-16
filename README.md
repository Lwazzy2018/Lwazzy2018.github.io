# Lwazi Nkambule – Portfolio

Personal portfolio of **Lwazi Nkambule**, Junior Software Developer (Flutter & C#).

**Live site:** https://lwazzy2018.github.io/

Built with **React, TypeScript, Vite, Tailwind CSS and Lucide icons**.

---

## Features

- Professional soft-UI design with subtle depth, compact spacing and a mobile-first layout
- 4 dark colour themes (Blueberry, Peach, Mint, Lavender), picked from the palette button and remembered
- Dark-only design on a true black background
- Smooth scrolling navigation with a mobile menu
- Projects section with 4 placeholder cards, linked from a Projects menu in the navigation bar
- Certificate previews
- Copy-email button and CV download
- Keyboard accessible (skip link, focus styles, Esc closes previews)
- Link previews for LinkedIn and WhatsApp (Open Graph image)

## Folder structure

```
public/
  img/            profile photos (add project images here)
  certs/          certificate images
  files/          CV (PDF)
  favicon.svg
  og-image.png    link-preview image (1200 × 630)
src/
  data/content.ts all text, links and image paths (edit content here)
  components/     one file per section (Navbar, ProjectsMenu, Hero, Projects, About,
                  Skills, Certificates, Contact, Footer, Lightbox)
  hooks/usePalette.ts colour themes (palette colours are defined in index.css)
  lib/download.ts     CV download helper
  App.tsx, main.tsx, index.css
.github/workflows/deploy.yml   automatic GitHub Pages deployment
```

## Run it on your computer

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install
npm run dev        # opens a local preview, usually at http://localhost:5173
npm run build      # creates the production site in /dist
```

## Deploy to GitHub Pages

1. Create a **public** repository named exactly **`Lwazzy2018.github.io`**.
2. Upload **all** project files (everything in this folder, except `node_modules` and `dist`). Make sure the hidden `.github` folder is included.
3. In the repository, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
4. Push or upload to the `main` branch. The workflow in `.github/workflows/deploy.yml` builds the site and publishes it. Check progress in the **Actions** tab.
5. After a minute or two the site is live at **https://lwazzy2018.github.io/**.

Every later change you push to `main` redeploys the site automatically.

**No-build alternative:** run `npm run build`, then upload the *contents* of the `dist` folder to the repository and set Pages to **Deploy from a branch → main → / (root)**. The `dist` folder is already included in the ZIP if you want to skip building.

## How to replace content

| What | Where | How |
|---|---|---|
| Text, links, email, phone | `src/data/content.ts` | Edit the values and save |
| Hero photo | `public/img/profile-hero.jpg` | Replace with a portrait photo (about 640 × 800 px), same file name |
| Small photo | `public/img/profile.jpg` | Square photo (about 440 × 440 px), same file name |
| CV | `public/files/Lwazi-Nkambule-CV.pdf` | Replace the PDF, same file name |
| Certificates | `public/certs/*.jpg` | Replace the images, same names. To add one, copy an entry in `certificates` in `content.ts` |
| Link preview image | `public/og-image.png` | 1200 × 630 px image |

Using a different file name? Update the matching path in `src/data/content.ts`.

## Changing the colours

The site is dark-only. Each colour theme is a block of CSS variables in `src/index.css` named like `.dark[data-palette="peach"]` (the light blocks above them are unused but kept in case you want light mode back). Change `--accent` (main colour) or `--accent-2` (second colour) to restyle the whole site. To change which theme new visitors see first, edit `'blueberry'` in the small script in `index.html`.

## Adding a project

The 4 project cards show "Coming soon" until you fill them in. Open `src/data/content.ts`, find the `projects` list, and replace a placeholder like this:

```ts
{
  id: 'campus-coupon',            // becomes the link #campus-coupon
  name: 'Campus Coupon',
  short: 'Campus event rewards app', // shown in the Projects menu
  problem:
    'Explain the real-life problem and how the project solves it, in under 3 sentences.',
  role: 'Flutter Developer',
  year: '2026',
  tech: ['Flutter', 'Supabase'],
  image: asset('img/campus-coupon.jpg'), // put the image in public/img
  links: {
    github: 'https://github.com/you/your-repo',
    live: 'https://your-demo-link',
  },
},
```

Remove `comingSoon: true` when the project is real. Any field you leave out simply doesn't show. Images look best at 1600 × 1000 px (16:10), and clicking one enlarges it. To show fewer or more than 4 projects, delete or add entries.

## Contact

- Email: nkambulelwazi2002@gmail.com
- LinkedIn: https://www.linkedin.com/in/lwazi-nkambule-b959b5415
- GitHub: https://github.com/Lwazzy2018
