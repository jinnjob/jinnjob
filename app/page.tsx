import Navbar from '@/components/layout/Navbar'
import BottomNav from '@/components/layout/BottomNav'
import HeroSection from '@/components/sections/HeroSection'
import CategoryTabs from '@/components/sections/CategoryTabs'
import VideoCard from '@/components/sections/VideoCard'
import ExpertsStrip from '@/components/sections/ExpertsStrip'
import { FEED_VIDEOS, STATS } from '@/lib/data'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#07070f]">
      <Navbar />

      <main className="max-w-lg mx-auto pb-24">
        {/* Hero */}
        <HeroSection />

        {/* Stats strip */}
        <div className="grid grid-cols-4 gap-2 px-4 py-3">
          {STATS.map((s, i) => (
            <div key={i} className="text-center">
              <p className="font-display font-bold text-base text-[#C26BFF]">{s.value}</p>
              <p className="text-[10px] text-gray-500 leading-tight">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Category tabs */}
        <CategoryTabs />

        {/* Live Solutions feed */}
        <div className="px-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold flex items-center gap-2">
              🔥 Live Solutions
            </h2>
            <Link href="/live" className="text-[#C26BFF] text-xs">See all →</Link>
          </div>

          <div className="flex flex-col gap-3">
            {FEED_VIDEOS.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>

        {/* Experts strip */}
        <div className="mt-4">
          <ExpertsStrip />
        </div>

        {/* New user CTA banner */}
        <div className="mx-4 mt-4 rounded-2xl
                        bg-gradient-to-r from-[rgba(139,61,255,0.2)] to-[rgba(90,27,154,0.1)]
                        border border-[rgba(139,61,255,0.3)] p-4
                        flex items-center justify-between gap-3">
          <div>
            <p className="text-xs text-[#C26BFF] font-semibold mb-0.5">⭐ New to JinnJob?</p>
            <p className="text-xs text-gray-400">Try AI Jinn free. No signup needed!</p>
          </div>
          <Link href="/chat"
                className="flex-shrink-0 bg-gradient-to-r from-[#8B3DFF] to-[#C26BFF]
                           text-white text-xs font-semibold px-4 py-2 rounded-xl
                           whitespace-nowrap hover:opacity-90 transition-opacity">
            ▶ Learn how it works
          </Link>
        </div>
      </main>

      <BottomNav />
    </div>
  )
}
