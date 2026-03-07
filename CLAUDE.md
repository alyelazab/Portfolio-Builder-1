# Portfolio Website — Aly Elazab

## Project
Personal portfolio site built with Vite + React + Express + Tailwind v4 + Framer Motion + shadcn/ui. Currently enhancing section by section before going live.

## Architecture
- **Stack**: Vite 7, React 19, Express 5, Tailwind CSS v4, Framer Motion, shadcn/ui (Radix)
- **Data file**: All text content lives in `client/src/lib/data.ts` — edit copy there, not in components
- **Components**: Each section is its own component in `client/src/components/`
- **Sections** (in page order): Nav, Hero, About, Projects, Process, Experience, Speaking, BeyondWork, Contact, Footer
- **Page**: `client/src/pages/home.tsx` composes all sections
- **Case study**: `docs/portfolio-case-study.md` (MyMasareef)
- **Server**: Express server in `server/` serves the Vite app, binds to `process.env.PORT` (default: 3000)
- **Local dev URL**: http://localhost:3000
- **Deploy target**: Railway

## About Aly
**Aly Elazab** — Senior AI Product Manager
- Email: alyelazab.1@gmail.com
- LinkedIn: linkedin.com/in/aly-elazab-23858716b
- GitHub: github.com/alyelazab
- From Egypt, based in Abu Dhabi UAE
- Ohio State University — B.S. Information Systems, 2020, Dean's List, 3.53 GPA
- Professional volleyball player
- Native Arabic speaker

## Experience Naming Rules
- Sales Engineer role: **Luciq.ai (formerly Instabug)**
- All other roles (APM, PM, Senior PM): **Luciq.ai**
- Do NOT mention Contango or Abu Dhabi in the experience section. Hero badge says "Announcing soon" as placeholder.

### Career (newest first)
- 2025: Senior PM — Luciq.ai — Workflows & Alerting squad. Built MCP server shipped to 10+ enterprise betas.
- 2024: PM — Luciq.ai — Launched Business Impact Dashboard. Shipped AI-powered release insights.
- 2023: APM, Growth — Luciq.ai — Redesigned pricing model driving 175% ARPU growth.
- 2021–2023: Sales Engineer — Luciq.ai (formerly Instabug) — 100+ tailored demos and enterprise POCs.
- 2020: Full-Stack Developer — Itlize Global

### Key Metrics
- **175% ARPU growth** — pricing model redesign
- **20% increase in MAU & power users** — product improvements and activation optimization
- **Shipped AI-powered insights** — cut manual navigation time for release-level analysis

## Side Projects

### MyMasareef (mymasareef.com) — Live Product
Case study at `docs/portfolio-case-study.md`. AI-powered spending analysis for CIB Egypt bank customers. Three-layer classification (pattern matching → Gemini Flash → user override) with crowdsourced merchant dictionary. Privacy-first: financial data never leaves the browser.
- Tech: React, TypeScript, Tailwind, Supabase, Express, Gemini 2.5 Flash, Recharts, Framer Motion

### Call Transcript Analyzer — Internal Tool
Multi-stage AI pipeline extracting structured product feedback from hundreds of Clari Copilot sales call transcripts. Claude Code-powered pipeline: ingestion → extraction → categorization → deduplication → Confluence-ready reports.
- Tech: Claude Code, Claude API, Confluence

## Design Tokens
- Background: #FFFFFF / alt #F7F7F8
- Text: #111111 headlines, #444444 body
- Primary accent: blue-violet #6C5CE7
- Secondary: coral #FF6B6B (sparingly)
- Tertiary: teal #00B894
- Font: Manrope
- Rounded corners everywhere
- CSS variables defined in `client/src/index.css`

## Rules
- Do NOT use em dashes (the long dash character). Use commas, periods, or reword instead
- Do NOT add a resume download or PDF
- Do NOT add dark mode
- Do NOT redesign sections unless asked
- All text content goes in `client/src/lib/data.ts`
- Keep components modular — sections may be swapped individually
- Use Framer Motion for animations
- Fully responsive (375px, 768px, 1024px+)
