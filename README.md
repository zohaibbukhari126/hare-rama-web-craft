# 🙏 Hare Rama Foundation Pakistan — Official Website

> **Empowering Marginalized Communities — Building a Better Tomorrow.**

The official website for **Hare Rama Foundation Pakistan (HRF)**, a non-profit organization working to uplift marginalized communities across Pakistan through education, skill development, women empowerment, emergency relief, and advocacy.

---

## 📋 Table of Contents

- [About the Organization](#-about-the-organization)
- [Pages & Features](#-pages--features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Scripts](#-scripts)
- [Deployment](#-deployment)
- [Partners](#-partners)
- [Contact](#-contact)

---

## 🌍 About the Organization

**Hare Rama Foundation Pakistan** was founded by **Ramesh Jaipal**, a prominent Pakistani social and human rights activist and Hubert H. Humphrey Fellow. The foundation believes in the dignity of every human being and works to create opportunities, raise voices, and influence policies for a more equitable Pakistan.

### Key Impact Numbers
| Metric | Value |
|---|---|
| Lives Impacted | 50,000+ |
| Education Centers | 200+ |
| Youth Trained | 5,000+ |
| Women Empowered | 3,000+ |
| Relief Operations | 100+ |

---

## 📄 Pages & Features

| Route | Description |
|---|---|
| `/` | **Homepage** — Hero section, stats bar, focus areas, programs overview, impact metrics, success stories carousel, news & partners |
| `/about` | **About Us** — Mission, vision & values; founder profile (Ramesh Jaipal); full leadership & team section |
| `/programs` | **Programs** — Detailed cards for all 5 program areas |
| `/donate` | **Donate** — Interactive PKR amount selector, PayPal integration, animated campaign progress bar |
| `/get-involved` | **Get Involved** — Volunteer and partnership opportunities |
| `/media` | **Media** — News, press coverage and updates |
| `/contact` | **Contact** — Contact form and office information |
| `/advocacy` | **Advocacy** — Policy and rights advocacy work |

### ✨ UI/UX Highlights

- **Parallax hero** with mouse-tracking animation using Framer Motion
- **Animated scroll reveal** on all sections
- **Interactive success stories carousel** with swipe/drag gesture support
- **Animated count-up numbers** for impact statistics
- **Campaign progress bar** with smooth spring animation
- **Hover micro-animations** on all cards
- **Floating decorative shapes** background
- **Fully responsive** — mobile-first design

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI framework |
| **TypeScript** | Type safety |
| **TanStack Router** | File-based routing with type-safety |
| **TanStack Start** | Full-stack SSR framework |
| **TanStack Query** | Server-state management |
| **Framer Motion** | Animations and gesture support |
| **Tailwind CSS v4** | Utility-first styling |
| **Radix UI** | Accessible headless UI primitives |
| **Lucide React** | Icon library |
| **Vite 7** | Build tool and dev server |
| **Nitro** | Server engine (Vercel preset) |
| **Zod** | Schema validation |
| **React Hook Form** | Form management |

---

## 📁 Project Structure

```
hare-rama-web-craft-main/
├── public/                     # Static assets
├── src/
│   ├── assets/                 # Images (hero, programs, team, news)
│   ├── components/
│   │   ├── ui/                 # Reusable UI components (animation wrappers, shadcn)
│   │   ├── site-header.tsx     # Global navigation header
│   │   ├── site-footer.tsx     # Global footer
│   │   └── page-shell.tsx      # Shared page layout wrapper
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utilities (cn, etc.)
│   ├── routes/
│   │   ├── __root.tsx          # Root layout (HTML head, providers)
│   │   ├── index.tsx           # Homepage
│   │   ├── about.tsx           # About page
│   │   ├── programs.tsx        # Programs page
│   │   ├── donate.tsx          # Donate page
│   │   ├── get-involved.tsx    # Get Involved page
│   │   ├── media.tsx           # Media page
│   │   ├── contact.tsx         # Contact page
│   │   ├── advocacy.tsx        # Advocacy page
│   │   └── sitemap[.]xml.ts    # Auto-generated sitemap
│   ├── routeTree.gen.ts        # Auto-generated route tree
│   ├── router.tsx              # Router configuration
│   ├── server.ts               # SSR server entry
│   ├── start.ts                # App start entry
│   └── styles.css              # Global styles & design tokens
├── vite.config.ts              # Vite + Nitro configuration
├── tsconfig.json               # TypeScript configuration
├── components.json             # shadcn/ui configuration
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** or **bun** (project uses bun.lock)

### Installation

```bash
# Clone the repository
git clone https://github.com/zohaibbukhari126/hare-rama-web-craft.git
cd hare-rama-web-craft-main

# Install dependencies
npm install
# or with bun
bun install
```

### Run Development Server

```bash
npm run dev
# or
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Build for production |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint checks |
| `npm run format` | Format code with Prettier |

---

## 🌐 Deployment

This project is configured for deployment on **Vercel** using the Nitro server engine.

The Vite config (`vite.config.ts`) uses:
- **Preset:** `vercel`
- **Output dir:** `.vercel/output`
- **Server functions:** `.vercel/output/functions/__server.func`
- **Static assets:** `.vercel/output/static`

To deploy:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or simply connect your GitHub repository to [vercel.com](https://vercel.com) for automatic deployments.

---

## 🤝 Partners

Hare Rama Foundation collaborates with leading international and local organizations:

- **CARE**
- **UN Women**
- **Oxfam**
- **UNHCR**
- **SDPI** (Sustainable Development Policy Institute)
- **Sightsavers**

---

## 💳 Donations

The website supports two donation methods:

1. **PKR Bank Transfer** — For local donors within Pakistan
2. **PayPal** — For international donors (USD), processed securely via `info@hrfpk.org`
3. **Cash at Office** — In-person donations

---

## 📞 Contact

- **Email:** info@hrfpk.org
- **Website:** [hrfpk.org](https://hrfpk.org)

---

## 📄 License

This project is the property of **Hare Rama Foundation Pakistan**. All rights reserved.

---

<p align="center">
  Made with ❤️ for the marginalized communities of Pakistan
</p>
