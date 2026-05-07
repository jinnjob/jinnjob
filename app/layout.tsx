import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'JinnJob – Your Jinn. Real Help. Anytime.',
  description: 'Free AI chat. Connect with verified experts via live video. Only $1/5 min.',
  keywords: ['AI assistant', 'expert help', 'Kuwait', 'live video', 'Jinn'],
  openGraph: {
    title: 'JinnJob',
    description: 'AI or real experts, instantly.',
    url: 'https://jinnjob.com',
    siteName: 'JinnJob',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#07070f] text-white antialiased">
        {children}
      </body>
    </html>
  )
}
