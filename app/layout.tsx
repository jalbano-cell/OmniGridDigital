import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
<<<<<<< HEAD
  title: 'Omniviq Marketing',
=======
  title: 'Omniviq Digital',
>>>>>>> b0ffe9eed9868b4ecb6614d762c4f520c5eb409d
  description:
    'Full-service digital marketing for local businesses — websites, ads, and content that actually converts.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn('font-sans antialiased', jakarta.variable)}>
      <body>{children}</body>
    </html>
  )
}
