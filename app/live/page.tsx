import Navbar from '@/components/layout/Navbar'
import BottomNav from '@/components/layout/BottomNav'
import VideoCard from '@/components/sections/VideoCard'
import CategoryTabs from '@/components/sections/CategoryTabs'
import { FEED_VIDEOS } from '@/lib/data'

export default function LivePage() {
  return (
    <div className="min-h-screen bg-[#07070f]">
      <Navbar />
      <main className="max-w-lg mx-auto pb-28">
        <div className="px-4 pt-6 pb-2">
          <h1 className="font-display font-bold text-2xl mb-1 flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-blink" />
            Live Solutions
          </h1>
          <p className="text-gray-400 text-sm">Real experts streaming live. Ask for help anytime.</p>
        </div>
        <CategoryTabs />
        <div className="px-4 flex flex-col gap-3">
          {/* Show all videos + duplicated for demo */}
          {[...FEED_VIDEOS, ...FEED_VIDEOS].map((video, i) => (
            <VideoCard key={`${video.id}-${i}`} video={video} />
          ))}
        </div>
      </main>
      <BottomNav />
    </div>
  )
}
