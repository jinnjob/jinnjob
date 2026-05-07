import Link from 'next/link'
import { EXPERTS_ONLINE } from '@/lib/data'

export default function ExpertsStrip() {
  return (
    <div className="px-4 py-3">
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-semibold text-sm">Experts online now</h2>
        <Link href="/experts" className="text-[#C26BFF] text-xs">See all</Link>
      </div>
      <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1">
        {EXPERTS_ONLINE.map((expert) => (
          <Link key={expert.id} href={`/experts/${expert.id}`}
                className="flex flex-col items-center gap-1.5 flex-shrink-0">
            <div className="relative">
              <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${expert.color}
                              flex items-center justify-center text-sm font-bold text-white
                              border-2 border-[rgba(139,61,255,0.3)]`}>
                {expert.initials}
              </div>
              {expert.online && (
                <span className="absolute bottom-0.5 right-0.5
                                 w-3 h-3 bg-green-400 rounded-full
                                 border-2 border-[#07070f]" />
              )}
            </div>
            <p className="text-xs font-medium text-center w-16 truncate">{expert.name}</p>
            <p className="text-[10px] text-gray-500 text-center">{expert.role}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
