# 🎬 Pranto Das — Creative Full Stack Developer & Video Director Portfolio

A high-performance, cinematic video portfolio and creative development showcase built with **React 19**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**.

Designed for creative engineers and technical directors who bridge full-stack web development with high-impact visual storytelling and motion design.

---

## ✨ Features & Highlights

- **🎥 Cinema Video & Case Study Modal Player**
  - Full-screen case study modal with embedded reel video player.
  - Interactive video controls: Play/Pause, Mute/Unmute audio, and duration badges.
  - Key business metrics (e.g., `+180% Engagement`, `<0.4s First Paint`), challenges, solutions, and technology stack chips.
  - Quick links to live demos and GitHub repositories.
  - Supports `Escape` key, backdrop click, and close button triggers.

- **⚡ Filterable Project Showcase**
  - Instant category filtering: **All Projects**, **Full Stack Web Apps**, **Commercial & Reels**, and **Creative 3D & Motion**.
  - Hover previews, animated status pills, and duration chips.

- **🔊 Upgraded Hero with Audio & Scrubber**
  - Audio toggle with animated CSS sound-wave equalizer bars.
  - Real-time clickable video scrubber bar along the bottom.
  - Live availability status pill (`🟢 Available for Freelance & Senior Roles`).
  - Key stats counter strip (`5+ Yrs Experience` • `40+ Shipped Apps` • `100% Client Satisfaction`).

- **🧭 Active Scroll-Spy Navigation**
  - Navbar automatically highlights the active section in real-time as you scroll.
  - Dynamic frosted glass backdrop blur with subtle border upon scrolling.
  - Responsive mobile slide-down menu with section jumping.

- **🪪 Interactive 3D ID Badge & Skills Tabs**
  - Realistic suspended lanyard ID badge with subtle 3D hover tilt.
  - Interactive tech stack tabs: **Frontend & UI**, **Backend & Cloud**, and **Creative & Motion**.
  - 1-click "Download CV / Resume" action.

- **📈 4-Stage Engineering & Creative Pipeline**
  - Interactive roadmap tracing: Define, Design, Build, and Launch.
  - Scroll-triggered animated path and deliverables checklists for each phase.

- **💬 Client Testimonials Carousel**
  - Social proof slider highlighting quotes from product founders, VPs, and creative directors.
  - 5-star rating badges and company tags with slide navigation arrows.

- **📬 Functional Contact Form & Quick Email Copy**
  - React controlled form with validation across first name, email, service scope, and message.
  - Animated submission feedback with transmission spinner and success confirmation.
  - 1-click "Copy Email" button (`hello@prantodas.com`) with instant tooltip feedback.
  - Direct connect social links (GitHub, LinkedIn, X).

- **🖱️ Polish & Micro-Interactions**
  - **Custom Magnetic Cursor**: Smooth follower cursor with hover expansion on links and buttons (auto-disabled on touch devices).
  - **Scroll-to-Top Button**: Circular SVG progress ring indicating current page scroll depth with 1-click return to top.
  - **Smooth Water-Fill Preloader**: Splash entrance animation before page reveal.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Modern UI framework with React Server & Client components |
| **Vite 8** | Next-generation frontend tooling and ultra-fast HMR |
| **Tailwind CSS v4** | Modern utility-first CSS engine via `@tailwindcss/vite` |
| **Framer Motion 12** | Declarative fluid animations, scroll hooks, and transitions |
| **AOS (Animate On Scroll)** | Lightweight scroll-triggered entrance animations |
| **Google Fonts** | `Outfit` (body typography) & `Space Grotesk` (mono elements) |

---

## 📁 Project Structure

```text
video_portfolio/
├── public/                     # Static public assets (favicons, icons)
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/                 # Profile images, tech logos, and hero video reel
│   │   ├── about/              # ID badge photo, React, Node, MongoDB logos
│   │   └── hero video/         # Background cinematic video reel (.mp4)
│   ├── components/
│   │   ├── About.jsx           # Bio, 3D ID lanyard card, interactive skills tabs
│   │   ├── Contact.jsx         # Controlled contact form & 1-click email copy
│   │   ├── CustomCursor.jsx    # Custom magnetic mouse follower cursor
│   │   ├── Footer.jsx          # Giant brand typography, studio details, links
│   │   ├── Hero.jsx            # Video hero, sound toggle, scrubber, stats
│   │   ├── Navbar.jsx          # Scroll-spy header with frosted glass blur
│   │   ├── Preloader.jsx       # Water-fill entrance preloader screen
│   │   ├── Projects.jsx        # Filterable project showcase & cinema modal
│   │   ├── ScrollToTop.jsx     # Floating button with circular SVG progress
│   │   ├── Services.jsx        # Animated dashed line & 4-stage pipeline
│   │   └── Testimonials.jsx    # Client reviews and endorsements carousel
│   ├── App.jsx                 # Main layout assembling all components
│   ├── index.css               # Design tokens, custom scrollbars, animations
│   └── main.jsx                # React root mount
├── index.html                  # HTML template with SEO metadata & Google Fonts
├── package.json                # Project dependencies and npm scripts
├── vite.config.js              # Vite & Tailwind plugins configuration
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18.x, 20.x, or higher)
- npm (version 9.x or higher)

### Installation

1. **Clone or open the repository:**
   ```bash
   cd video_portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173/` (or the port specified by Vite).

---

## 📦 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local Vite development server with Hot Module Replacement (HMR) |
| `npm run build` | Compiles and bundles the application for production in `/dist` |
| `npm run preview` | Locally previews the production build output |
| `npm run lint` | Runs ESLint across all `.js`, `.jsx` files to verify code quality |

---

## 🎨 Customization Guide

### Updating Projects & Media
Open `src/components/Projects.jsx` and edit the `projectsData` array to add, edit, or reorder projects:
```javascript
{
  id: 'your-project-id',
  title: 'Your Project Title',
  category: 'fullstack', // 'fullstack' | 'commercial' | 'creative'
  categoryName: 'Full Stack Web Apps',
  badge: 'Live App',
  metrics: '+150% Growth',
  duration: '1:45 Reel',
  description: 'Project summary...',
  problem: 'What challenge was tackled...',
  solution: 'How it was solved...',
  tech: ['React 19', 'Next.js', 'Node.js'],
  videoUrl: heroVideo,
  gradient: 'from-purple-900 via-indigo-950 to-black',
  accentColor: '#8b5cf6',
  liveUrl: 'https://your-site.com',
  githubUrl: 'https://github.com/your-username/your-repo',
}
```

### Changing the Hero Video
Place your `.mp4` video in `src/assets/hero video/` and update the import in `src/components/Hero.jsx`:
```javascript
import heroVideo from '../assets/hero video/your-new-video.mp4';
```

### Updating Contact Email
In `src/components/Contact.jsx` and `src/components/Footer.jsx`, update `hello@prantodas.com` to your personal or business email address.

---

## 📄 License

This project is licensed under the MIT License — feel free to use and customize it for your personal portfolio.

**Crafted with precision by Pranto Das.**
