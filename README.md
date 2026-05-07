# JinnJob — Developer Handoff Guide
> "Your Jinn. Real Help. Anytime."

## 🚀 Quick Start

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## 📁 Project Structure

```
jinnjob/
├── app/
│   ├── page.tsx          ← Home feed (TikTok-style)
│   ├── chat/page.tsx     ← AI Jinn chat
│   ├── pricing/page.tsx  ← 3-tier pricing
│   ├── experts/page.tsx  ← Expert listing
│   ├── live/page.tsx     ← Live video feed
│   ├── layout.tsx        ← Root layout
│   └── globals.css       ← Brand tokens + utilities
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx    ← Top navigation
│   │   └── BottomNav.tsx ← Mobile tab bar
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── CategoryTabs.tsx
│   │   ├── VideoCard.tsx
│   │   └── ExpertsStrip.tsx
│   └── ui/
│       └── PricingCard.tsx
│
└── lib/
    └── data.ts           ← ALL mock data lives here
                            Replace each section with real API calls
```

## 🎨 Brand Colors

```css
--purple:  #8B3DFF   /* Primary CTA */
--violet:  #C26BFF   /* Accent / highlights */
--dark:    #5A1B9A   /* Dark purple */
--bg:      #07070f   /* Page background */
--card:    #0f0f1c   /* Card background */
```

## 📝 TODO for Developer

### Priority 1 — Core functionality
- [ ] **AI Chat** (`app/chat/page.tsx` line ~60)
  - Replace `getMockReply()` with real Claude/OpenAI API call
  - POST to `/api/chat` endpoint
  - Add conversation history / memory

- [ ] **Jinn Character Image**
  - Drop `jinn-hero.png` into `/public/`
  - Update `HeroSection.tsx` to use `<Image>` from next/image

### Priority 2 — Payments
- [ ] **Tap Payments integration** (for KNET + Apple Pay in Kuwait)
  - Sign up at https://www.tap.company
  - Add `TAP_SECRET_KEY` to `.env.local`
  - Create `/api/checkout` route
- [ ] **Stripe** (for international cards)
  - Add `STRIPE_SECRET_KEY` to `.env.local`

### Priority 3 — Backend
- [ ] **Supabase** (recommended free tier)
  - Users table (id, name, email, credits, tier)
  - Experts table (id, name, role, rating, online, kyc_verified)
  - Messages table (conversation history)
  - Bookings table (expert call sessions)

### Priority 4 — Features
- [ ] Expert video call (Daily.co or Whereby embed)
- [ ] Push notifications (for expert availability)
- [ ] Arabic RTL support toggle
- [ ] Expert KYC onboarding flow
- [ ] Admin dashboard

## 🔑 Environment Variables

Create `.env.local`:
```
NEXT_PUBLIC_APP_URL=https://jinnjob.com
OPENAI_API_KEY=sk-...         # or Anthropic key
SUPABASE_URL=https://...
SUPABASE_ANON_KEY=...
TAP_SECRET_KEY=sk_test_...
STRIPE_SECRET_KEY=sk_test_...
```

## 📦 Deploy to Vercel

```bash
git init
git add .
git commit -m "JinnJob MVP"
git remote add origin https://github.com/jinnjob/jinnjob.git
git push -u origin main
# Then connect repo to Vercel at vercel.com
```

## 💰 Pricing Model

| Tier   | Price     | Key Feature              |
|--------|-----------|--------------------------|
| Lamp   | Free      | Unlimited AI chat        |
| Jinn   | 2.99 KWD  | 5 free expert mins/month |
| Sultan | 7.99 KWD  | 30 min + 3 seats         |

Expert calls: 1 KWD / 5 min (platform takes 30% commission)

---
Built with Next.js 14 · Tailwind CSS · TypeScript
