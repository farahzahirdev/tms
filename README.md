# Rise TMS Landing Page

A Next.js landing page for Rise TMS — TMS therapy in Westlake Village, CA. Built from the standalone HTML design with a component-based architecture and SCSS modules.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **SCSS Modules**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/                    # Next.js app router (layout, page, globals)
├── components/
│   ├── forms/              # Consultation forms (hero + contact)
│   ├── icons/              # Shared SVG icon components
│   ├── layout/             # Header, Footer
│   └── sections/           # Page sections (Hero, Benefits, About, etc.)
├── data/                   # Site content and constants
└── styles/                 # SCSS variables, mixins, animations
public/
└── images/                 # Logo, hero background, photos
```

## Scripts

| Command       | Description              |
|---------------|--------------------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build       |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint              |

## Sections

- Sticky header with navigation and phone CTA
- Hero with consultation form
- Trust bar (FDA-cleared, stats)
- What is TMS
- Benefits / Why TMS
- How it works (4-step process)
- Conditions we treat
- About Dr. Priya Parmar
- Spravato offering
- Patient testimonials
- Contact form with office info
- Footer with links and hours
