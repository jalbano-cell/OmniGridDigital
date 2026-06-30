import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import { localBusinessSchema } from '@/lib/schema'
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
  description:
    'Toronto digital marketing agency. High-converting websites, Google Ads, Meta Ads, and SEO that generate real revenue for local businesses.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn('antialiased', spaceGrotesk.variable, inter.variable)}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-[family-name:var(--font-sans)]">{children}</body>
    </html>
  )
}
