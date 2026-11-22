# Dr. Muhammad Maaz Arif — Portfolio Website

Personal portfolio website of **Dr. Muhammad Maaz Arif**, a Public Health Specialist, Medical Educator and Researcher based in Lahore, Pakistan.

Built with **React 18**, **Vite 5** and **React Router 6**.

---

## Getting Started

### Requirements
- Node.js 18 or newer
- npm

### Install and run

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:5173
```

### Other commands

```bash
npm run build    # production build into the dist/ folder
npm run preview  # preview the production build locally
```

---

## Project Structure

```
Muhammad-Maaz-Arif/
├── index.html              # HTML entry, page title, meta description, Google Fonts
├── package.json
├── vite.config.js
├── public/
│   ├── _redirects          # Netlify SPA routing (prevents 404 on page refresh)
│   └── maaz.jpg            # Profile photo (add this file yourself)
└── src/
    ├── main.jsx            # App entry, wraps App in BrowserRouter
    ├── App.jsx             # Routes + Navbar + Footer layout
    ├── data.js             # ALL site content (text, stats, contact info)
    ├── index.css           # Global styles and responsive layout
    ├── components/
    │   ├── Navbar.jsx      # Sticky top navigation with mobile menu
    │   └── Footer.jsx      # Footer with quick links and contact info
    └── pages/
        └── Home.jsx        # Home page
```

---

## Pages / Routes

| Route        | Page        | Status        |
|--------------|-------------|---------------|
| `/`          | Home        | ✅ Complete    |
| `/about`     | About       | 🚧 Coming soon |
| `/portfolio` | Portfolio   | 🚧 Coming soon |
| `/contact`   | Contact Us  | 🚧 Coming soon |
| `*`          | Not found   | Fallback page |

---

## Home Page Sections

1. **Navbar** — "MA" logo badge, name, links (Home, About, Portfolio, Contact Us) and a "Get in Touch" button. Collapses into a hamburger menu on mobile.
2. **Hero**
   - "Available for collaborations" badge
   - Name: Dr. Muhammad Maaz Arif
   - Tagline: Public Health Specialist · Medical Educator · Researcher
   - Intro paragraph
   - Buttons: **View Portfolio** and **Contact Me**
   - Location: Lahore, Pakistan
   - Portrait photo with a floating "50+ Published Articles" badge
3. **Stats**
   - 50+ Published Articles
   - 22 Articles Peer-Reviewed
   - 07 Articles Edited
   - 8+ Years of Experience
4. **What I Do** — "Teaching, research & public health impact"
   - Teaching & Mentoring
   - Research & Publishing
   - Public Health Consultancy
5. **Featured Work** — "Recent highlights" (with a "See all work" link)
   - 50+ Published / Accepted Articles — Author
   - Peer Reviewer — 22 Articles — Reviewer
   - Editor — 07 Articles — Editor
   - Each card shows Research / Ongoing tags, a Web of Science chip and a "View profile" link
6. **Call to Action** — "Let's work together" with a "Get in Touch" button
7. **Footer** — About text, Quick Links and Contact details

---

## Editing Content

All text lives in [`src/data.js`](src/data.js). Edit that file to change content — no need to touch the components.

| Export            | What it controls                                      |
|-------------------|-------------------------------------------------------|
| `profile`         | Name, initials, tagline, intro, location, email, phone, address, photo path |
| `navLinks`        | Navbar and footer links                               |
| `stats`           | The 4 statistic boxes                                 |
| `services`        | "What I Do" cards                                     |
| `featured`        | "Featured Work" cards                                 |
| `webOfScienceUrl` | Link used by the "View profile" buttons               |

Colors and fonts are defined as CSS variables at the top of [`src/index.css`](src/index.css) (`--primary`, `--accent`, etc.).

---

## Pending TODOs

- [ ] **Profile photo** — Add the photo as `public/maaz.jpg`. Until then, the "MA" initials are shown instead.
- [ ] **Web of Science link** — Replace `webOfScienceUrl` in `src/data.js` with the exact researcher profile URL.
- [ ] Build the **About**, **Portfolio** and **Contact Us** pages.

---

## Deployment (Netlify)

- **Build command:** `npm run build`
- **Publish directory:** `dist`

The `public/_redirects` file is copied into the build so that routes like `/about` work on refresh.

---

## Contact

- **Email:** maazarifbutt@gmail.com
- **Phone:** +92 322 4509884
- **Address:** Model Town, Lahore, Pakistan
