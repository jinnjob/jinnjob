'use client'
import { useState } from 'react'
import { CATEGORIES } from '@/lib/data'

export default function CategoryTabs() {
  const [active, setActive] = useState('all')

  return (
    <div className="px-4 py-3">
      <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
        {CATEGORIES.map((cat) => {
          const isActive = active === cat.slug
          return (
            <button
              key={cat.slug}
              onClick={() => setActive(cat.slug)}
              className={`flex flex-col items-center gap-1 flex-shrink-0
                         rounded-2xl px-4 py-2.5 text-xs font-medium transition-all duration-200
                         ${isActive
                           ? 'bg-gradient-to-b from-[#8B3DFF] to-[#6d2ed4] text-white shadow-[0_0_16px_rgba(139,61,255,0.5)]'
                           : 'bg-[#0f0f1c] border border-[rgba(139,61,255,0.15)] text-gray-400 hover:border-[#8B3DFF] hover:text-white'
                         }`}
            >
              <span className="text-lg">{cat.emoji}</span>
              <span>{cat.label}</span>
              {isActive && (
                <span className="w-4 h-0.5 bg-[#C26BFF] rounded-full" />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
