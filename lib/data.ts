// ─────────────────────────────────────────────
//  JinnJob — Mock Data
//  TODO for dev: replace each section with
//  real API calls (Supabase / REST)
// ─────────────────────────────────────────────

export type BadgeType = 'LIVE' | 'AI'

export interface Video {
  id: string
  badge: BadgeType
  views: string
  title: string
  subtitle: string
  author: string
  authorRole: string
  duration: string
  likes: number
  comments: number
  thumbnail?: string // URL when real
}

export interface Category {
  emoji: string
  label: string
  slug: string
}

export interface Expert {
  id: string
  name: string
  role: string
  rating: number
  online: boolean
  initials: string
  color: string
}

export interface PricingTier {
  id: string
  name: string
  emoji: string
  price: number
  currency: string
  period: string
  highlight: boolean
  description: string
  features: string[]
  cta: string
}

// ─── CATEGORIES ───────────────────────────────
export const CATEGORIES: Category[] = [
  { emoji: '⊞',  label: 'All',     slug: 'all' },
  { emoji: '🚗', label: 'Car',     slug: 'car' },
  { emoji: '🏠', label: 'Home',    slug: 'home' },
  { emoji: '✈️', label: 'Travel',  slug: 'travel' },
  { emoji: '❤️', label: 'Health',  slug: 'health' },
  { emoji: '💬', label: 'Ask',     slug: 'ask' },
]

// ─── FEED VIDEOS ──────────────────────────────
export const FEED_VIDEOS: Video[] = [
  {
    id: 'v1',
    badge: 'LIVE',
    views: '342',
    title: 'Fix leaking sink in 2 min 💧',
    subtitle: 'Simple fix anyone can do!',
    author: 'Ali Plumbing',
    authorRole: 'Plumbing Expert',
    duration: '1:28',
    likes: 128,
    comments: 24,
  },
  {
    id: 'v2',
    badge: 'AI',
    views: '1.2K',
    title: "Car won't start? Try this 🚗",
    subtitle: 'Step-by-step AI guide',
    author: 'Jinn AI',
    authorRole: 'AI Assistant',
    duration: '2:15',
    likes: 256,
    comments: 42,
  },
  {
    id: 'v3',
    badge: 'LIVE',
    views: '512',
    title: 'Top 5 things before visiting Dubai 🇦🇪',
    subtitle: 'Save money & time!',
    author: 'Travel With Omar',
    authorRole: 'Travel Expert',
    duration: '1:45',
    likes: 192,
    comments: 31,
  },
  {
    id: 'v4',
    badge: 'AI',
    views: '892',
    title: 'Tourist visa step by step 📋',
    subtitle: 'Full AI video guide',
    author: 'Jinn AI',
    authorRole: 'AI Assistant',
    duration: '2:40',
    likes: 178,
    comments: 28,
  },
]

// ─── EXPERTS ──────────────────────────────────
export const EXPERTS_ONLINE: Expert[] = [
  { id: 'e1', name: 'Ali',     role: 'Plumbing',    rating: 4.9, online: true,  initials: 'A',  color: 'from-blue-600 to-blue-400' },
  { id: 'e2', name: 'Sami',    role: 'Electrician', rating: 4.8, online: true,  initials: 'S',  color: 'from-purple-600 to-purple-400' },
  { id: 'e3', name: 'Omar',    role: 'Mechanic',    rating: 4.9, online: true,  initials: 'O',  color: 'from-green-600 to-green-400' },
  { id: 'e4', name: 'Dr. Sara',role: 'Doctor',      rating: 4.9, online: true,  initials: 'DS', color: 'from-pink-600 to-pink-400' },
  { id: 'e5', name: 'Youssef', role: 'Lawyer',      rating: 4.7, online: false, initials: 'Y',  color: 'from-amber-600 to-amber-400' },
]

// ─── STATS ────────────────────────────────────
export const STATS = [
  { value: '10K+',  label: 'Happy Users' },
  { value: '500+',  label: 'Experts Online' },
  { value: '4.9★',  label: 'User Rating' },
  { value: '100%',  label: 'Private & Secure' },
]

// ─── PRICING ──────────────────────────────────
export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'lamp',
    name: 'Lamp',
    emoji: '🪔',
    price: 0,
    currency: 'KWD',
    period: 'forever',
    highlight: false,
    description: 'Get started. Talk to Jinn free.',
    features: [
      '✅ Unlimited AI Jinn chat',
      '✅ 3 service categories',
      '✅ Arabic + English',
      '⚡ Expert calls: 1.50 KWD / 5min',
      '❌ Call recordings',
      '❌ Priority matching',
    ],
    cta: 'Start Free',
  },
  {
    id: 'jinn',
    name: 'Jinn',
    emoji: '🧞',
    price: 2.99,
    currency: 'KWD',
    period: 'month',
    highlight: true,
    description: 'Most popular. For regular help.',
    features: [
      '✅ Unlimited AI Jinn + memory',
      '✅ All categories',
      '✅ 5 free expert minutes / month',
      '⚡ Expert calls: 1 KWD / 5min',
      '✅ Call recordings',
      '✅ Priority matching',
    ],
    cta: 'Get Jinn',
  },
  {
    id: 'sultan',
    name: 'Sultan',
    emoji: '👑',
    price: 7.99,
    currency: 'KWD',
    period: 'month',
    highlight: false,
    description: 'Power users, families & teams.',
    features: [
      '✅ Everything in Jinn',
      '✅ 30 free expert minutes / month',
      '⚡ Expert calls: 0.75 KWD / 5min',
      '✅ 3 family/team seats',
      '✅ VIP instant expert match',
      '✅ Custom Jinn name & personality',
    ],
    cta: 'Go Sultan',
  },
]

// ─── HOW IT WORKS ─────────────────────────────
export const HOW_IT_WORKS = [
  { step: '1', icon: '💬', title: 'Ask Jinn',        desc: 'Type or speak your problem in Arabic or English. Free, instant, no signup.' },
  { step: '2', icon: '🤖', title: 'AI solves it',    desc: 'Jinn guides you with step-by-step AI solutions immediately.' },
  { step: '3', icon: '🎥', title: 'Need more help?', desc: 'One tap connects you to a verified human expert via live video.' },
]
