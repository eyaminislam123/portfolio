# Video Editor Portfolio

Professional cinematic portfolio website for video editors, built with React, Framer Motion, Lucide icons, and react-fast-marquee. Production-ready with Nginx and Docker deployment.

## Tech Stack

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** — cinematic dark theme
- **Framer Motion** — page animations, scroll effects, preloader
- **Lucide React** — professional icons
- **react-fast-marquee** — scrolling banners & testimonials
- **Nginx** — production SPA serving with caching & security headers
- **Docker** — containerized deployment

## Features

- Cinematic preloader with progress bar
- Custom cursor with hover effects
- Scroll progress indicator
- Hero section with stats & social links
- Portfolio grid with category filtering & project modal
- About section with skills bars & career timeline
- Services showcase (6 services)
- 6-step workflow process
- Dual-direction testimonial marquee
- **Showreel section** with YouTube modal player & parallax
- **Featured work** horizontal scroll carousel
- **Pricing packages** (Starter / Professional / Premium)
- **Client logos** section
- **CTA section** with WhatsApp, Email, Book a Call
- Hero **parallax scroll** effect
- Contact form with project type & budget
- Fully responsive (mobile-first)
- Film grain overlay effect
- Glass morphism cards

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build for Production

```bash
npm run build
npm run preview
```

## Deploy with Docker

```bash
docker build -t video-editor-portfolio .
docker run -p 80:80 video-editor-portfolio
```

## Deploy with Nginx (Manual)

1. Build the project: `npm run build`
2. Copy `dist/` contents to `/usr/share/nginx/html`
3. Copy `nginx/default.conf` to `/etc/nginx/conf.d/default.conf`
4. Restart Nginx: `sudo systemctl restart nginx`

## Customize

Edit `src/data/portfolio.ts` to update:

- Personal info (name, email, bio, stats)
- Projects / portfolio items
- Services offered
- Testimonials
- Skills & timeline
- Social media links

## Project Structure

```
src/
├── components/     # UI components
├── data/           # Portfolio content (edit here)
├── App.tsx         # Main layout
├── index.css       # Global styles & Tailwind
└── main.tsx        # Entry point
nginx/
└── default.conf    # Nginx SPA config
Dockerfile          # Multi-stage Docker build
```

## License

MIT
