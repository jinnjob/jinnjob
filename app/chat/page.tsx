'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Send, Video, Mic, MicOff } from 'lucide-react'

interface Message {
  id: string
  role: 'user' | 'jinn'
  text: string
  time: string
}

const QUICK_PROMPTS = [
  'My car won\'t start 🚗',
  'Sink is leaking 🔧',
  'Need a doctor 🩺',
  'Travel help ✈️',
]

const INITIAL_MSG: Message = {
  id: '0',
  role: 'jinn',
  text: 'مرحباً! أنا جنّك الذكي. كيف أقدر أساعدك اليوم؟\n\nHello! I\'m your AI Jinn. How can I help you today? Ask me anything — for free! 🧞✨',
  time: 'Now',
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MSG])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // TODO: Replace this mock with real Claude/OpenAI API call
  // POST /api/chat  { messages: [...], userMessage: input }
  async function sendMessage() {
    if (!input.trim() || loading) return
    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }
    setMessages((m) => [...m, userMsg])
    setInput('')
    setLoading(true)

    // Simulated response — replace with API call
    await new Promise((r) => setTimeout(r, 1200))
    const jinnReply: Message = {
      id: (Date.now() + 1).toString(),
      role: 'jinn',
      text: getMockReply(input),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }
    setMessages((m) => [...m, jinnReply])
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-[#07070f] flex flex-col max-w-lg mx-auto">
      {/* Header */}
      <div className="sticky top-0 z-50 flex items-center gap-3 px-4 py-3
                      bg-[rgba(7,7,15,0.95)] border-b border-[rgba(139,61,255,0.15)]
                      backdrop-blur-xl">
        <Link href="/" className="w-8 h-8 flex items-center justify-center
                                   rounded-xl bg-[#0f0f1c] border border-[rgba(139,61,255,0.2)]">
          <ArrowLeft size={16} />
        </Link>
        <div className="flex items-center gap-2 flex-1">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#8B3DFF] to-[#C26BFF]
                          flex items-center justify-center text-lg
                          shadow-[0_0_14px_rgba(139,61,255,0.6)]">
            🧞
          </div>
          <div>
            <p className="font-semibold text-sm">Jinn AI</p>
            <p className="text-[10px] text-green-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block" />
              Online · Free
            </p>
          </div>
        </div>
        {/* Connect to expert */}
        <Link href="/experts"
              className="flex items-center gap-1.5 bg-gradient-to-r from-[#8B3DFF] to-[#C26BFF]
                         text-white text-xs font-semibold px-3 py-1.5 rounded-xl
                         hover:opacity-90 transition-opacity">
          <Video size={12} />
          Expert $1/5m
        </Link>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
        {messages.map((msg) => (
          <div key={msg.id}
               className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.role === 'jinn' && (
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#8B3DFF] to-[#C26BFF]
                              flex items-center justify-center text-sm mr-2 flex-shrink-0 mt-1">
                🧞
              </div>
            )}
            <div className={`max-w-[78%] rounded-2xl px-4 py-3 text-sm leading-relaxed
                            ${msg.role === 'user'
                              ? 'bg-gradient-to-br from-[#8B3DFF] to-[#C26BFF] text-white rounded-br-sm'
                              : 'bg-[#0f0f1c] border border-[rgba(139,61,255,0.15)] text-gray-200 rounded-bl-sm'
                            }`}>
              <p className="whitespace-pre-wrap">{msg.text}</p>
              <p className={`text-[10px] mt-1 ${msg.role === 'user' ? 'text-white/60' : 'text-gray-500'}`}>
                {msg.time}
              </p>
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#8B3DFF] to-[#C26BFF]
                            flex items-center justify-center text-sm">🧞</div>
            <div className="bg-[#0f0f1c] border border-[rgba(139,61,255,0.15)]
                            rounded-2xl rounded-bl-sm px-4 py-3">
              <div className="flex gap-1">
                {[0,1,2].map(i => (
                  <span key={i} className="w-2 h-2 bg-[#8B3DFF] rounded-full animate-bounce"
                        style={{ animationDelay: `${i * 0.15}s` }} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Expert upsell after 3 messages */}
        {messages.length >= 4 && (
          <div className="bg-[rgba(139,61,255,0.1)] border border-[rgba(139,61,255,0.3)]
                          rounded-2xl p-4 text-center">
            <p className="text-sm font-semibold mb-1">Need more detailed help?</p>
            <p className="text-xs text-gray-400 mb-3">Connect to a verified expert via live video</p>
            <Link href="/experts"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8B3DFF] to-[#C26BFF]
                             text-white text-sm font-semibold px-5 py-2.5 rounded-xl
                             hover:opacity-90 transition-opacity">
              <Video size={14} />
              Connect Now — $1 / 5 min
            </Link>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Quick prompts */}
      {messages.length <= 1 && (
        <div className="px-4 pb-2 flex gap-2 overflow-x-auto scrollbar-hide">
          {QUICK_PROMPTS.map((p) => (
            <button key={p} onClick={() => setInput(p)}
                    className="flex-shrink-0 bg-[#0f0f1c] border border-[rgba(139,61,255,0.2)]
                               rounded-xl px-3 py-2 text-xs text-gray-300 whitespace-nowrap
                               hover:border-[#8B3DFF] transition-colors">
              {p}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="sticky bottom-0 px-4 pb-6 pt-2
                      bg-[rgba(7,7,15,0.95)] border-t border-[rgba(139,61,255,0.1)]">
        <div className="flex gap-2">
          <div className="flex-1 flex items-center gap-2
                          bg-[#0f0f1c] border border-[rgba(139,61,255,0.2)]
                          rounded-2xl px-4 py-3 focus-within:border-[#8B3DFF] transition-colors">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ask anything..."
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-500"
            />
            <button className="text-gray-500 hover:text-[#C26BFF] transition-colors">
              <Mic size={16} />
            </button>
          </div>
          <button onClick={sendMessage}
                  disabled={!input.trim() || loading}
                  className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#8B3DFF] to-[#C26BFF]
                             flex items-center justify-center text-white
                             disabled:opacity-40 hover:opacity-90 transition-opacity
                             shadow-[0_0_16px_rgba(139,61,255,0.5)]">
            <Send size={18} />
          </button>
        </div>
        <p className="text-center text-[10px] text-gray-600 mt-2">
          Free AI · Real experts from $1/5min
        </p>
      </div>
    </div>
  )
}

// Mock reply — replace with real API
function getMockReply(input: string): string {
  const lower = input.toLowerCase()
  if (lower.includes('car') || lower.includes('سيارة'))
    return "I can help with your car! 🚗\n\nFirst, let's diagnose the problem:\n1. Is the engine making a clicking noise?\n2. Does anything happen when you turn the key?\n3. Are any warning lights on?\n\nTell me more and I'll guide you step by step. Or connect to a live mechanic instantly 👇"
  if (lower.includes('sink') || lower.includes('leak') || lower.includes('plumb'))
    return "Leaking sink? Let's fix it! 🔧\n\n**Quick check:**\n1. Is it leaking from the faucet or under the cabinet?\n2. Is the water dripping or a steady stream?\n\nFor most faucet drips, a washer replacement takes 10 minutes. Want a step-by-step guide?"
  if (lower.includes('doctor') || lower.includes('health') || lower.includes('sick'))
    return "I can help you understand your symptoms 🩺\n\nPlease describe:\n- What symptoms are you experiencing?\n- How long have you had them?\n- Any fever or pain?\n\n**Note:** For emergencies, call 112 immediately. I can also connect you to a certified doctor via video in seconds."
  return "I understand! Let me help you with that 🧞✨\n\nCould you give me a bit more detail? The more you tell me, the better I can guide you — or connect you to the perfect expert.\n\nWhat's the main problem you're facing?"
}
