'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/[0.06] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className={cn(
          'text-[15px] font-semibold text-ink-0 leading-snug transition-colors group-hover:text-[#60A5FA]',
          open && 'text-[#60A5FA]'
        )}>
          {q}
        </span>
        <ChevronDown className={cn(
          'w-4 h-4 shrink-0 text-ink-3 transition-transform duration-300',
          open && 'rotate-180 text-[#60A5FA]'
        )} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p className="pb-5 text-[14.5px] text-ink-2 leading-[1.8]">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
