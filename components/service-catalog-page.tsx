'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowLeft, Upload, ArrowRight } from 'lucide-react'
import { Nav } from '@/components/nav'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export interface Project {
  client:      string
  project:     string
  year:        string
  description: string
  tags:        string[]
  stat?:       string
  statLabel?:  string
}

interface ServiceCatalogPageProps {
  service:      string
  headline:     string
  subheadline:  string
  description:  string
  projects:     Project[]
}

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0  },
}

function staggerContainer(stagger = 0.1, delayChildren = 0) {
  return {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren } },
  }
}

function PageBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden" aria-hidden="true">
      <div className="absolute -top-[20%] -left-[12%] w-[900px] h-[900px] rounded-full bg-[#888888]/[0.14] blur-[180px]" />
      <div className="absolute -top-[10%] right-[-15%] w-[750px] h-[750px] rounded-full bg-[#505050]/[0.18] blur-[160px]" />
      <div className="absolute top-[45%] right-[-8%] w-[650px] h-[650px] rounded-full bg-[#d1d0d0]/[0.06] blur-[160px]" />
      <div className="absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay" />
    </div>
  )
}

function AssetPlaceholder() {
  return (
    <div className="relative w-full aspect-video bg-surface-2 rounded-xl overflow-hidden border border-gold-400/[0.08] flex items-center justify-center group-hover:border-gold-400/[0.18] transition-colors duration-300">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 rounded-full border border-gold-400/[0.18] bg-gold-400/[0.05] flex items-center justify-center">
          <Upload className="w-4 h-4 text-ink-3" strokeWidth={1.5} />
        </div>
        <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-ink-3">
          Asset Uploading
        </span>
      </div>
    </div>
  )
}

export function ServiceCatalogPage({
  service,
  headline,
  subheadline,
  description,
  projects,
}: ServiceCatalogPageProps) {
  return (
    <>
      <PageBackground />
      <Nav />

      <main className="pt-[68px]">

        {/* ── Hero ── */}
        <section className="py-[80px] border-b border-gold-400/[0.07]">
          <div className="max-w-[1200px] mx-auto px-8">
            <motion.a
              href="/#services"
              className="inline-flex items-center gap-2 text-[12.5px] font-semibold text-ink-2 hover:text-ink-1 transition-colors mb-10"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, ease }}
            >
              <ArrowLeft className="w-3.5 h-3.5" strokeWidth={2.5} />
              Back to Services
            </motion.a>

            <motion.div
              initial="hidden"
              animate="show"
              variants={staggerContainer(0.1, 0.05)}
            >
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.55, ease }}
                className="text-[11.5px] font-semibold tracking-[0.16em] uppercase text-gold-400 mb-5"
              >
                {service}
              </motion.p>
              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.7, ease }}
                className="text-[clamp(40px,7vw,84px)] font-extrabold leading-none tracking-[-0.04em] text-gold-300 mb-6"
              >
                {headline}<br />
                <span className="text-gold-200">{subheadline}</span>
              </motion.h1>
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.6, ease }}
                className="max-w-[520px] text-[17px] text-ink-1 leading-[1.75]"
              >
                {description}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── Portfolio Grid ── */}
        <section className="py-[100px]">
          <div className="max-w-[1200px] mx-auto px-8">
            <motion.p
              className="text-[11.5px] font-semibold tracking-[0.16em] uppercase text-ink-3 mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {projects.length} Projects
            </motion.p>

            <motion.div
              className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              variants={staggerContainer(0.1)}
            >
              {projects.map((p) => (
                <motion.div
                  key={p.project}
                  variants={fadeUp}
                  transition={{ duration: 0.6, ease }}
                  whileHover={{ y: -6, transition: { duration: 0.25, ease } }}
                  className="group"
                >
                  <div className="bg-gold-400/[0.03] backdrop-blur-md border border-gold-400/[0.10] rounded-2xl overflow-hidden transition-colors duration-300 hover:bg-gold-400/[0.07] hover:border-gold-400/[0.18] h-full">
                    <div className="p-3 pb-0">
                      <AssetPlaceholder />
                    </div>
                    <div className="p-6 pt-5 flex flex-col gap-3">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          {p.tags.map((tag) => (
                            <Badge
                              key={tag}
                              className="text-[11px] font-bold tracking-[0.1em] text-gold-400 bg-gold-400/[0.08] border border-gold-400/25 rounded-[4px] px-2.5 py-1 h-auto"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <span className="text-[12px] text-ink-3 font-medium shrink-0">{p.year}</span>
                      </div>

                      {p.stat && (
                        <div className="flex items-baseline gap-2 pt-1">
                          <span className="text-[30px] font-extrabold tracking-[-0.03em] text-gold-300 leading-none">
                            {p.stat}
                          </span>
                          {p.statLabel && (
                            <span className="text-[12.5px] text-ink-2">{p.statLabel}</span>
                          )}
                        </div>
                      )}

                      <h3 className="text-[17px] font-bold tracking-[-0.02em] text-gold-200 leading-snug">
                        {p.project}
                      </h3>
                      <span className="text-[12.5px] font-semibold text-ink-2">{p.client}</span>
                      <p className="text-sm text-ink-1 leading-[1.75]">{p.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-[100px] border-t border-gold-400/[0.07]">
          <div className="max-w-[1200px] mx-auto px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              variants={staggerContainer(0.1)}
            >
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.55, ease }}
                className="text-[11.5px] font-semibold tracking-[0.16em] uppercase text-gold-400 mb-5"
              >
                Start a Project
              </motion.p>
              <motion.h2
                variants={fadeUp}
                transition={{ duration: 0.7, ease }}
                className="text-[clamp(36px,5vw,60px)] font-extrabold leading-[1.05] tracking-[-0.035em] text-gold-300 mb-5"
              >
                Ready to Add Your Business<br />
                <span className="text-gold-200">to the List?</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.6, ease }}
                className="text-[17px] text-ink-1 leading-[1.75] max-w-[440px] mx-auto mb-10"
              >
                Get a free audit and see exactly what we can build for you.
              </motion.p>
              <motion.a
                href="/#contact"
                variants={fadeUp}
                transition={{ duration: 0.5, ease }}
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className={cn(
                  buttonVariants(),
                  'bg-gold-400 text-white hover:bg-gold-200 font-bold text-sm px-8 h-11 inline-flex shadow-[0_0_0_0_rgba(136,136,136,0)] hover:shadow-[0_8px_32px_rgba(136,136,136,0.35)] transition-shadow duration-300'
                )}
              >
                Get a Free Audit
              </motion.a>
            </motion.div>
          </div>
        </section>

      </main>

      <footer className="border-t border-gold-400/[0.07] bg-surface-0/70 backdrop-blur-xl py-8">
        <div className="max-w-[1200px] mx-auto px-8 flex items-center justify-between flex-wrap gap-3">
          <a href="/" className="text-[15px] font-extrabold tracking-tight text-white transition-opacity hover:opacity-80">
            Omniviq Digital
          </a>
          <span className="text-[12.5px] text-ink-3">
            &copy; {new Date().getFullYear()} Omniviq Digital. Toronto, ON. All rights reserved.
          </span>
          <a
            href="mailto:support@omniviqdigital.ca"
            className="text-[12.5px] text-ink-2 transition-colors hover:text-gold-300"
          >
            support@omniviqdigital.ca
          </a>
        </div>
      </footer>
    </>
  )
}
