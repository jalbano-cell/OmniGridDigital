import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'OmniGrid Digital — Digital Marketing Agency Toronto',
  icons: { icon: '/favicon.svg' },
  description:
    'Toronto digital marketing agency. High-converting websites, Google Ads, Meta Ads, and SEO that generate real revenue for local businesses.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn('antialiased', spaceGrotesk.variable, inter.variable)}>
      <body className="font-[family-name:var(--font-sans)]">{children}</body>
    </html>
  )
}
