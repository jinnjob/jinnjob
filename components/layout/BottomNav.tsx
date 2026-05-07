'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Radio, ClipboardList, User } from 'lucide-react'

const NAV = [
  { href: '/',        icon: Home,          label: 'Home' },
  { href: '/live',    icon: Radio,         label: 'Live' },
  { href: '/experts', icon: ClipboardList, label: 'Requests' },
  { href: '/profile', icon: User,          label: 'Profile' },
]

export default function BottomNav() {
  const path = usePathname()

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden
                    bg-[rgba(7,7,15,0.97)] border-t border-[rgba(139,61,255,0.15)]
                    backdrop-blur-xl pb-safe">
      <div className="flex items-center justify-around px-2 pt-2 pb-3 max-w-lg mx-auto relative">
        {NAV.map((item, i) => {
          const active = path === item.href
          const Icon = item.icon
          if (i === 2) {
            // Insert center Jinn button before index 2
            return (
              <>
                {/* Center CTA */}
                <Link key="jinn-cta" href="/chat"
                      className="flex flex-col items-center -mt-5">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#8B3DFF] to-[#C26BFF]
                                  flex items-center justify-center text-2xl
                                  shadow-[0_0_24px_rgba(139,61,255,0.7)] border-2 border-[#C26BFF]">
                    🧞
                  </div>
                </Link>
                {/* Item */}
                <Link key={item.href} href={item.href}
                      className={`flex flex-col items-center gap-1 text-[10px]
                                  ${active ? 'text-[#C26BFF]' : 'text-gray-500'}`}>
                  <Icon size={20} />
                  {item.label}
                </Link>
              </>
            )
          }
          return (
            <Link key={item.href} href={item.href}
                  className={`flex flex-col items-center gap-1 text-[10px]
                              ${active ? 'text-[#C26BFF]' : 'text-gray-500'}`}>
              <Icon size={20} />
              {item.label}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
