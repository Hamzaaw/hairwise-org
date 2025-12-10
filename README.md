# HairWise+ Landing Page

A Next.js landing page for the HairWise+ mobile app.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Components:** Shadcn/UI
- **Icons:** Lucide React
- **Animations:** Framer Motion

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2: GitHub Integration
1. Push this code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repo
5. Click "Deploy"

No environment variables required.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, features, FAQ |
| `/terms` | Terms of Service |
| `/privacy` | Privacy Policy |
| `/support` | Contact/Support page |

## Domain Setup

After deploying to Vercel:
1. Go to Project Settings → Domains
2. Add `hairwise.org`
3. Update DNS records as instructed

## Support Email

All support links point to: `support@hairwise.org`

## Legal Disclaimer

The footer contains the required App Store disclaimer:
> "HairWise is for cosmetic and educational use only. It does not diagnose medical conditions like Alopecia. Consult a professional for medical advice."

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Home page
│   ├── layout.tsx        # Root layout
│   ├── globals.css       # Global styles & theme
│   ├── terms/page.tsx    # Terms of Service
│   ├── privacy/page.tsx  # Privacy Policy
│   └── support/page.tsx  # Support contact
├── components/
│   ├── landing/          # Page sections
│   │   ├── navigation.tsx
│   │   ├── hero.tsx
│   │   ├── problem-section.tsx
│   │   ├── how-it-works.tsx
│   │   ├── features.tsx
│   │   ├── faq.tsx
│   │   └── footer.tsx
│   └── ui/               # Shadcn components
└── lib/
    └── utils.ts
public/
├── logo.png              # App logo
├── screenshot-*.png      # App screenshots
```

## Color Palette

- **Primary (Slate Blue):** `#3B4B66`
- **Accent (Teal):** `#25A393`
- **Background:** `#FAFAFB`
- **Text (Ink):** `#0F172A`

---

Built for HairWise+ | December 2025
