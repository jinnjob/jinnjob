import Link from 'next/link'
import { Heart, MessageCircle, Share2, Eye, MoreHorizontal } from 'lucide-react'
import type { Video } from '@/lib/data'

interface VideoCardProps {
  video: Video
}

// Placeholder thumbnails by category
const THUMB_COLORS: Record<string, string> = {
  v1: 'from-slate-800 to-slate-700',
  v2: 'from-gray-800 to-gray-700',
  v3: 'from-blue-950 to-blue-900',
  v4: 'from-green-950 to-green-900',
}

const THUMB_EMOJIS: Record<string, string> = {
  v1: '🔧', v2: '🚗', v3: '✈️', v4: '📋',
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <div className="bg-[#0f0f1c] border border-[rgba(139,61,255,0.12)]
                    rounded-2xl overflow-hidden
                    hover:border-[rgba(139,61,255,0.35)] transition-all duration-200">
      <div className="flex gap-3 p-3">
        {/* Thumbnail */}
        <Link href={`/live/${video.id}`} className="flex-shrink-0">
          <div className={`w-28 h-20 rounded-xl bg-gradient-to-br ${THUMB_COLORS[video.id] ?? 'from-slate-800 to-slate-700'}
                          flex items-center justify-center text-3xl relative overflow-hidden`}>
            {THUMB_EMOJIS[video.id] ?? '🎬'}
            {/* Badge */}
            <div className="absolute top-1.5 left-1.5">
              {video.badge === 'LIVE'
                ? <span className="live-badge">LIVE</span>
                : <span className="ai-badge">AI</span>
              }
            </div>
            {/* Views */}
            <div className="absolute bottom-1 right-1.5 flex items-center gap-0.5
                            text-[10px] text-white/70">
              <Eye size={10} />
              {video.views}
            </div>
          </div>
        </Link>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-sm leading-tight mb-0.5 line-clamp-2">
            {video.title}
          </h3>
          <p className="text-gray-400 text-xs mb-2">{video.subtitle}</p>

          {/* Author */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#8B3DFF] to-[#C26BFF]
                            flex items-center justify-center text-[10px] font-bold">
              {video.author[0]}
            </div>
            <div>
              <p className="text-xs font-medium">{video.author}</p>
              <p className="text-[10px] text-gray-500">{video.authorRole}</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col items-center gap-3 text-gray-500 flex-shrink-0">
          <button className="flex flex-col items-center gap-0.5 hover:text-red-400 transition-colors">
            <Heart size={16} />
            <span className="text-[10px]">{video.likes}</span>
          </button>
          <button className="flex flex-col items-center gap-0.5 hover:text-blue-400 transition-colors">
            <MessageCircle size={16} />
            <span className="text-[10px]">{video.comments}</span>
          </button>
          <button className="hover:text-white transition-colors">
            <Share2 size={16} />
          </button>
          <button className="hover:text-white transition-colors">
            <MoreHorizontal size={14} />
          </button>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-2 px-3 pb-3">
        <Link href="/chat"
              className="flex-1 flex items-center justify-center gap-1.5
                         bg-[rgba(139,61,255,0.12)] border border-[rgba(139,61,255,0.25)]
                         rounded-xl py-2 text-xs font-medium text-[#C26BFF]
                         hover:bg-[rgba(139,61,255,0.2)] transition-colors">
          <MessageCircle size={13} />
          Ask Jinn
        </Link>
        <Link href="/experts"
              className="flex-1 flex items-center justify-center gap-1.5
                         bg-gradient-to-r from-[#8B3DFF] to-[#C26BFF]
                         rounded-xl py-2 text-xs font-semibold text-white
                         hover:opacity-90 transition-opacity">
          Expert $1/5m
        </Link>
        <button className="flex-1 flex items-center justify-center gap-1.5
                           bg-[#161628] border border-[rgba(139,61,255,0.15)]
                           rounded-xl py-2 text-xs font-medium text-gray-400
                           hover:border-[#8B3DFF] transition-colors">
          Request
        </button>
      </div>
    </div>
  )
}
