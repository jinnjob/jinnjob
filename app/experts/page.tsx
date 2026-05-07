import Navbar from '@/components/layout/Navbar'
import BottomNav from '@/components/layout/BottomNav'
import { EXPERTS_ONLINE } from '@/lib/data'
import { Video, Star, Shield } from 'lucide-react'
import Link from 'next/link'

export default function ExpertsPage() {
  return (
    <div className="min-h-screen bg-[#07070f]">
      <Navbar />
      <main className="max-w-lg mx-auto px-4 py-6 pb-28">

        <h1 className="font-display font-bold text-2xl mb-1">Verified Experts</h1>
        <p className="text-gray-400 text-sm mb-6">
          All experts are KYC-verified. Only <strong className="text-[#C26BFF]">$1 / 5 min</strong>.
        </p>

        {/* Filter strip */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-4">
          {['All', 'Plumbing', 'Cars', 'Health', 'Legal', 'Travel'].map((f) => (
            <button key={f}
                    className="flex-shrink-0 text-xs px-3 py-1.5 rounded-full
                               border border-[rgba(139,61,255,0.2)] text-gray-400
                               hover:border-[#8B3DFF] hover:text-white transition-colors
                               first:bg-gradient-to-r first:from-[#8B3DFF] first:to-[#C26BFF] first:text-white first:border-transparent">
              {f}
            </button>
          ))}
        </div>

        {/* Expert cards */}
        <div className="flex flex-col gap-3">
          {EXPERTS_ONLINE.map((expert) => (
            <div key={expert.id}
                 className="bg-[#0f0f1c] border border-[rgba(139,61,255,0.15)]
                            rounded-2xl p-4 flex items-center gap-4
                            hover:border-[rgba(139,61,255,0.4)] transition-colors">
              <div className="relative">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${expert.color}
                                flex items-center justify-center font-bold text-white text-lg
                                border-2 border-[rgba(139,61,255,0.3)]`}>
                  {expert.initials}
                </div>
                {expert.online && (
                  <span className="absolute bottom-0.5 right-0.5
                                   w-3.5 h-3.5 bg-green-400 rounded-full
                                   border-2 border-[#07070f]" />
                )}
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <p className="font-semibold text-sm">{expert.name}</p>
                  <Shield size={12} className="text-[#8B3DFF]" />
                </div>
                <p className="text-xs text-gray-400">{expert.role}</p>
                <div className="flex items-center gap-1 mt-1">
                  <Star size={11} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-xs text-yellow-400 font-medium">{expert.rating}</span>
                  <span className="text-[10px] text-gray-500">· Verified</span>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2">
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full
                                  ${expert.online
                                    ? 'bg-green-400/10 text-green-400'
                                    : 'bg-gray-700 text-gray-400'}`}>
                  {expert.online ? '● Online' : '○ Away'}
                </span>
                {expert.online && (
                  <Link href={`/chat`}
                        className="flex items-center gap-1 bg-gradient-to-r from-[#8B3DFF] to-[#C26BFF]
                                   text-white text-xs font-semibold px-3 py-1.5 rounded-xl
                                   hover:opacity-90 transition-opacity">
                    <Video size={11} />
                    Connect
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* TODO: Load more from API */}
        <button className="w-full mt-4 py-3 rounded-xl border border-[rgba(139,61,255,0.2)]
                           text-sm text-gray-400 hover:border-[#8B3DFF] hover:text-white transition-colors">
          Load more experts
        </button>
      </main>
      <BottomNav />
    </div>
  )
}
