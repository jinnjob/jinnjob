import Link from 'next/link'
import type { PricingTier } from '@/lib/data'

interface PricingCardProps {
  tier: PricingTier
}

export default function PricingCard({ tier }: PricingCardProps) {
  return (
    <div className={`relative rounded-2xl p-6 flex flex-col gap-4
                    ${tier.highlight
                      ? 'bg-gradient-to-b from-[rgba(139,61,255,0.25)] to-[rgba(90,27,154,0.1)] border-2 border-[#8B3DFF] shadow-[0_0_40px_rgba(139,61,255,0.3)]'
                      : 'bg-[#0f0f1c] border border-[rgba(139,61,255,0.15)]'
                    }`}>

      {tier.highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2
                        bg-gradient-to-r from-[#8B3DFF] to-[#C26BFF]
                        text-white text-xs font-bold px-4 py-1 rounded-full
                        shadow-[0_0_16px_rgba(139,61,255,0.6)]">
          ⭐ Most Popular
        </div>
      )}

      {/* Header */}
      <div>
        <div className="text-3xl mb-2">{tier.emoji}</div>
        <h3 className="font-display font-bold text-xl">{tier.name}</h3>
        <p className="text-gray-400 text-sm mt-1">{tier.description}</p>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-1">
        {tier.price === 0 ? (
          <span className="font-display font-black text-4xl">Free</span>
        ) : (
          <>
            <span className="font-display font-black text-4xl">{tier.price}</span>
            <span className="text-gray-400 text-sm">{tier.currency} / {tier.period}</span>
          </>
        )}
      </div>

      {/* Features */}
      <ul className="flex flex-col gap-2 flex-1">
        {tier.features.map((f, i) => (
          <li key={i} className="text-sm text-gray-300 leading-snug">{f}</li>
        ))}
      </ul>

      {/* CTA */}
      <Link href={tier.price === 0 ? '/chat' : `/pricing/${tier.id}`}
            className={`w-full text-center py-3 rounded-xl font-semibold text-sm transition-all duration-200
                       ${tier.highlight
                         ? 'bg-gradient-to-r from-[#8B3DFF] to-[#C26BFF] text-white shadow-[0_0_20px_rgba(139,61,255,0.5)] hover:opacity-90'
                         : 'border border-[rgba(139,61,255,0.3)] text-white hover:bg-[rgba(139,61,255,0.1)] hover:border-[#8B3DFF]'
                       }`}>
        {tier.cta}
      </Link>
    </div>
  )
}
