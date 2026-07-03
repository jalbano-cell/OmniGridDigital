'use client'

import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { APP_URL } from '@/lib/config'

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]

const LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#why-us',   label: 'Why Us'   },
  { href: '#pricing',  label: 'Pricing'  },
  { href: '#contact',  label: 'Contact'  },
]

export function Nav() {
  const pathname = usePathname()
  const isFollowUpQuote = pathname === '/followupquote'
  const base = pathname === '/' ? '' : '/'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[68px] border-b border-white/[0.06] bg-surface-0/80 backdrop-blur-2xl">
      <div className="h-full max-w-[1200px] mx-auto px-8 flex items-center gap-10">

        <a href="/" className="shrink-0 flex items-center gap-2.5 group">
          <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true" className="shrink-0">
            <defs>
              <linearGradient id="nav-arc-g" x1="16" y1="2" x2="30" y2="16" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#1e3a5f"/>
                <stop offset="100%" stopColor="#2563EB"/>
              </linearGradient>
            </defs>
            <path d="M 16 2 A 14 14 0 1 0 30 16" stroke="url(#nav-arc-g)" strokeWidth="3" strokeLinecap="round" fill="none"/>
            <circle cx="16" cy="2" r="2.2" fill="#0EA5E9"/>
            <circle cx="2" cy="16" r="2.2" fill="#0EA5E9"/>
            <circle cx="16" cy="30" r="2.2" fill="#0EA5E9"/>
            <circle cx="16" cy="16" r="1.8" fill="#0EA5E9"/>
            <line x1="17.8" y1="16" x2="26" y2="16" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span className="text-[15px] font-bold tracking-tight text-ink-0 transition-opacity group-hover:opacity-80">
            OmniGrid Digital
          </span>
        </a>

        <nav className="flex items-center gap-0.5 flex-1 max-md:hidden" aria-label="Main navigation">
          {LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={`${base}${href}`}
              className="text-[13.5px] font-medium text-ink-2 px-3.5 py-1.5 rounded-lg transition-colors hover:text-ink-0 hover:bg-white/[0.06]"
            >
              {label}
            </a>
          ))}
          <a
            href="/followupquote"
            className={cn(
              'text-[13.5px] font-medium px-3.5 py-1.5 rounded-lg transition-colors hover:text-ink-0 hover:bg-white/[0.06]',
              isFollowUpQuote ? 'text-ink-0 bg-white/[0.06]' : 'text-ink-2'
            )}
          >
            FollowupQuote
          </a>
        </nav>

        <div className="shrink-0 flex items-center gap-4">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-medium text-ink-2 transition-colors hover:text-ink-0 max-sm:hidden"
          >
            Client Login
          </a>

          <motion.a
            href={isFollowUpQuote ? '#demo' : `${base}#contact`}
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.18, ease }}
            className="inline-flex items-center justify-center h-9 px-5 rounded-lg bg-gold-400 text-white text-[13px] font-semibold transition-all hover:bg-gold-500 shadow-[0_0_24px_rgba(37,99,235,0.55),0_0_48px_rgba(14,165,233,0.20)]"
          >
            {isFollowUpQuote ? 'Book a Demo' : 'Book a Free Call'}
          </motion.a>
        </div>
      </div>
    </header>
  )
}
