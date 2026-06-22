'use client'

import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]

const LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#why-us',   label: 'Why Us'   },
  { href: '#team',     label: 'Team'     },
  { href: '#pricing',  label: 'Pricing'  },
  { href: '#contact',  label: 'Contact'  },
]

export function Nav() {
  const pathname = usePathname()
  const base = pathname === '/' ? '' : '/'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[68px] border-b border-[#888888]/20 bg-[rgba(0,0,0,0.85)] backdrop-blur-2xl">
      <div className="h-full max-w-[1200px] mx-auto px-8 flex items-center gap-10">
        <a href="/" className="text-[17px] font-extrabold tracking-tight text-gold-300 shrink-0 transition-colors hover:text-gold-200">
          Omniviq Digital
        </a>
        <nav className="flex items-center gap-0.5 flex-1 max-md:hidden" aria-label="Main navigation">
          {LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={`${base}${href}`}
              className="text-sm font-medium text-ink-1 px-3.5 py-1.5 rounded-md transition-colors hover:text-ink-0 hover:bg-gold-400/[0.06]"
            >
              {label}
            </a>
          ))}
        </nav>
        <motion.a
          href={`${base}#contact`}
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.18, ease }}
          className={cn(buttonVariants(), 'bg-gold-400 text-white hover:bg-gold-200 text-[13.5px] font-bold px-5 h-9 shrink-0')}
        >
          Get a Free Audit
        </motion.a>
      </div>
    </header>
  )
}
