import Navbar from '@/components/layout/Navbar'
import BottomNav from '@/components/layout/BottomNav'
import PricingCard from '@/components/ui/PricingCard'
import { PRICING_TIERS } from '@/lib/data'
import Link from 'next/link'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#07070f]">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-12 pb-28">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[rgba(139,61,255,0.1)]
                          border border-[rgba(139,61,255,0.25)] rounded-full
                          px-4 py-1.5 text-xs text-[#C26BFF] mb-4">
            Simple, transparent pricing
          </div>
          <h1 className="font-display font-black text-4xl md:text-5xl mb-4">
            Choose your Jinn
          </h1>
          <p className="text-gray-400 max-w-md mx-auto">
            Start free. Upgrade when you need more. Cancel anytime.
          </p>
        </div>

        {/* Pricing grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {PRICING_TIERS.map((tier) => (
            <PricingCard key={tier.id} tier={tier} />
          ))}
        </div>

        {/* Pay-per-use note */}
        <div className="text-center mt-8 p-4 bg-[#0f0f1c] border border-[rgba(139,61,255,0.15)]
                        rounded-2xl max-w-lg mx-auto">
          <p className="text-sm text-gray-300">
            💡 <strong className="text-white">No subscription?</strong> Use AI free forever.
            Expert video calls are <strong className="text-[#C26BFF]">$1 / 5 minutes</strong> pay-as-you-go.
          </p>
        </div>

        {/* Payment methods */}
        <div className="text-center mt-10">
          <p className="text-xs text-gray-500 mb-3">Accepted payment methods</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {['KNET 🇰🇼', 'Apple Pay 🍎', 'Google Pay', 'Visa', 'Mastercard'].map((m) => (
              <span key={m}
                    className="bg-[#0f0f1c] border border-[rgba(139,61,255,0.15)]
                               rounded-lg px-3 py-1.5 text-xs text-gray-400">
                {m}
              </span>
            ))}
          </div>
          <p className="text-[10px] text-gray-600 mt-3">
            {/* TODO: Integrate Tap Payments for KNET support */}
            Powered by Tap Payments · SSL Secure · 100% Private
          </p>
        </div>

        {/* FAQ teaser */}
        <div className="mt-12 max-w-lg mx-auto">
          <h2 className="font-display font-bold text-xl mb-4 text-center">Common questions</h2>
          {[
            { q: 'Is AI Jinn really free?', a: 'Yes — unlimited AI chat, forever free. No card needed.' },
            { q: 'How does $1/5min work?', a: 'You buy credits (min. $5) and spend them on live expert video calls. Unused credits never expire.' },
            { q: 'Are experts verified?', a: 'All experts complete KYC identity + qualification verification before going live.' },
            { q: 'Can I cancel anytime?', a: 'Yes. No lock-in. Cancel from your profile in one tap.' },
          ].map((faq, i) => (
            <details key={i}
                     className="bg-[#0f0f1c] border border-[rgba(139,61,255,0.15)]
                                rounded-xl px-4 py-3 mb-2 cursor-pointer group">
              <summary className="text-sm font-medium flex items-center justify-between
                                  list-none select-none">
                {faq.q}
                <span className="text-[#8B3DFF] group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link href="/chat"
                className="inline-flex items-center gap-2
                           bg-gradient-to-r from-[#8B3DFF] to-[#C26BFF]
                           text-white font-semibold rounded-2xl px-8 py-4 text-base
                           shadow-[0_0_40px_rgba(139,61,255,0.5)]
                           hover:scale-105 transition-all duration-200">
            🧞 Start free — Talk to Jinn Now
          </Link>
          <p className="text-xs text-gray-500 mt-2">No signup · No card · Instant</p>
        </div>
      </main>
      <BottomNav />
    </div>
  )
}
