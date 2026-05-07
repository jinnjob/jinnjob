import Link from 'next/link'
import { MessageCircle, Zap, Shield } from 'lucide-react'

// TODO: Replace src with /jinn-hero.png from your public folder
// (export the hooded Jinn PNG from your AI-gen tool and drop it in /public)
const JINN_PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 280'%3E%3Cellipse cx='100' cy='240' rx='60' ry='20' fill='rgba(139,61,255,0.3)'/%3E%3Ccircle cx='100' cy='120' r='70' fill='rgba(139,61,255,0.15)' stroke='rgba(139,61,255,0.3)' stroke-width='1'/%3E%3Ctext x='100' y='130' text-anchor='middle' font-size='80' fill='rgba(200,150,255,0.9)'%3E🧞%3C/text%3E%3C/svg%3E"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pt-8 pb-4">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80
                        bg-[radial-gradient(ellipse,rgba(139,61,255,0.2),transparent_70%)]" />
        <div className="absolute bottom-0 left-0 w-60 h-60
                        bg-[radial-gradient(ellipse,rgba(90,27,154,0.12),transparent_70%)]" />
      </div>

      <div className="relative max-w-lg mx-auto">
        {/* Status pill */}
        <div className="inline-flex items-center gap-2 bg-[rgba(139,61,255,0.12)]
                        border border-[rgba(139,61,255,0.25)] rounded-full
                        px-3 py-1 text-xs text-gray-400 mb-4">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-blink inline-block" />
          AI-Powered · Human-Backed · 24/7
        </div>

        {/* Hero grid — text left, Jinn right */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h1 className="font-display font-black text-4xl leading-[1.08] mb-1">
              Need help?<br />
              <span className="text-[#C26BFF]"
                    style={{ textShadow: '0 0 40px rgba(194,107,255,0.5)' }}>
                Ask Jinn.
              </span>
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              AI or real experts,<br />instantly.
            </p>

            {/* CTA */}
            <Link href="/chat"
                  className="inline-flex items-center gap-2
                             bg-gradient-to-r from-[#8B3DFF] to-[#C26BFF]
                             text-white font-semibold rounded-2xl px-6 py-3.5
                             shadow-[0_0_30px_rgba(139,61,255,0.55)]
                             hover:scale-105 hover:shadow-[0_0_50px_rgba(139,61,255,0.7)]
                             transition-all duration-200 text-[15px]">
              <MessageCircle size={18} />
              Talk to Jinn
            </Link>
            <p className="text-gray-500 text-xs mt-2">
              Free to try · No signup
            </p>
          </div>

          {/* Jinn character */}
          <div className="relative w-40 flex-shrink-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_50%,
                            rgba(139,61,255,0.35),transparent_70%)]
                            animate-glow-pulse" />
            <img
              src={JINN_PLACEHOLDER}
              alt="Jinn AI"
              className="relative z-10 w-full animate-float
                         drop-shadow-[0_0_30px_rgba(139,61,255,0.8)]"
              // TODO: swap above src with Image component:
              // import Image from 'next/image'
              // <Image src="/jinn-hero.png" alt="Jinn AI" width={160} height={220} />
            />
          </div>
        </div>

        {/* Trust pills */}
        <div className="flex items-center gap-3 mt-4 flex-wrap">
          {[
            { icon: <Zap size={12} />,    text: 'Instant Help' },
            { icon: <Shield size={12} />, text: 'Verified Experts' },
            { icon: '🔒',                 text: '100% Private' },
          ].map((pill, i) => (
            <div key={i} className="flex items-center gap-1.5
                                    bg-[rgba(139,61,255,0.08)]
                                    border border-[rgba(139,61,255,0.2)]
                                    rounded-full px-3 py-1 text-xs text-gray-400">
              {pill.icon}
              {pill.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
