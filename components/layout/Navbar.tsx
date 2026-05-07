'use client'
import Link from 'next/link'
import { Bell, Globe } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-4 py-3
                    bg-[rgba(7,7,15,0.92)] backdrop-blur-xl border-b border-[rgba(139,61,255,0.15)]">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#8B3DFF] to-[#C26BFF]
                        flex items-center justify-center text-sm font-bold shadow-[0_0_14px_rgba(139,61,255,0.6)]">
          🧞
        </div>
        <span className="font-display font-bold text-lg">
          Jinn<span className="text-[#C26BFF]">Job</span>
        </span>
      </Link>

      {/* Desktop nav links */}
      <div className="hidden md:flex items-center gap-6 text-sm text-gray-400">
        <Link href="/"        className="hover:text-white transition-colors">Home</Link>
        <Link href="/live"    className="hover:text-white transition-colors">Live</Link>
        <Link href="/experts" className="hover:text-white transition-colors">Experts</Link>
        <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        <button className="hidden md:flex items-center gap-1.5 text-sm text-gray-400
                           border border-[rgba(139,61,255,0.2)] rounded-xl px-3 py-1.5
                           hover:border-[#8B3DFF] transition-colors">
          <Globe size={14} />
          EN
        </button>
        <button className="relative w-9 h-9 flex items-center justify-center
                           bg-[#0f0f1c] border border-[rgba(139,61,255,0.2)] rounded-xl
                           hover:border-[#8B3DFF] transition-colors">
          <Bell size={16} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#8B3DFF] rounded-full
                           text-[10px] font-bold flex items-center justify-center">3</span>
        </button>
        <Link href="/chat"
              className="btn-primary text-sm px-4 py-2">
          Talk to Jinn
        </Link>
      </div>
    </nav>
  )
}
