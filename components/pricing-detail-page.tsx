'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, Check, Banknote, CalendarDays, Handshake } from 'lucide-react'
import { Nav } from '@/components/nav'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const PLAN_ICONS = {
  foundation: Banknote,
  catalyst:   CalendarDays,
  venture:    Handshake,
} as const

export type PlanKey = keyof typeof PLAN_ICONS

export interface Step {
  number: string
  title:  string
  body:   string
}

export interface Feature {
  title: string
  body:  string
}

export interface PricingDetailPageProps {
  plan:        PlanKey
  name:        string
  subtitle:    string
  tagline:     string
  description: string
  commitment:  string
  payment:     string
  steps:       Step[]
  features:    Feature[]
  idealFor:    string[]
}

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0  },
}

const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1 },
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

export function PricingDetailPage({
  plan,
  name,
  subtitle,
  tagline,
  description,
  commitment,
  payment,
  steps,
  features,
  idealFor,
}: PricingDetailPageProps) {
  const Icon = PLAN_ICONS[plan]
  return (
    <>
      <PageBackground />
      <Nav />

      <main className="pt-[68px]">

        {/* ── Hero ── */}
        <section className="py-[80px] border-b border-gold-400/[0.07]">
          <div className="max-w-[1200px] mx-auto px-8">
            <motion.a
              href="/#pricing"
              className="inline-flex items-center gap-2 text-[12.5px] font-semibold text-ink-2 hover:text-ink-1 transition-colors mb-10"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, ease }}
            >
              <ArrowLeft className="w-3.5 h-3.5" strokeWidth={2.5} />
              Back to Pricing
            </motion.a>

            <div className="grid grid-cols-[1fr_340px] gap-16 items-start max-lg:grid-cols-1 max-lg:gap-10">

              {/* Left — text */}
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
                  Pricing Model
                </motion.p>
                <motion.h1
                  variants={fadeUp}
                  transition={{ duration: 0.7, ease }}
                  className="text-[clamp(48px,7vw,88px)] font-extrabold leading-none tracking-[-0.04em] text-gold-300 mb-3"
                >
                  {name}
                </motion.h1>
                <motion.p
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease }}
                  className="text-[13px] font-bold tracking-[0.06em] uppercase text-gold-400 mb-8"
                >
                  {subtitle}
                </motion.p>
                <motion.p
                  variants={fadeUp}
                  transition={{ duration: 0.65, ease }}
                  className="max-w-[540px] text-[18px] text-gold-200 font-semibold leading-[1.6] mb-5"
                >
                  {tagline}
                </motion.p>
                <motion.p
                  variants={fadeUp}
                  transition={{ duration: 0.6, ease }}
                  className="max-w-[540px] text-[16px] text-ink-1 leading-[1.8]"
                >
                  {description}
                </motion.p>
              </motion.div>

              {/* Right — summary card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease, delay: 0.3 }}
                className="bg-gold-400/[0.04] backdrop-blur-md border border-gold-400/[0.12] rounded-2xl p-8 flex flex-col gap-6"
              >
                <div className="w-14 h-14 rounded-2xl border border-gold-400/[0.18] bg-gold-400/[0.06] flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-gold-300" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-ink-3">Commitment</span>
                    <span className="text-[15px] font-semibold text-gold-200">{commitment}</span>
                  </div>
                  <div className="h-px bg-gold-400/[0.08]" />
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-ink-3">Payment Model</span>
                    <span className="text-[15px] font-semibold text-gold-200">{payment}</span>
                  </div>
                </div>
                <motion.a
                  href="/#contact"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.18, ease }}
                  className={cn(
                    buttonVariants(),
                    'bg-gold-400 text-white hover:bg-gold-200 font-bold text-sm h-11 w-full justify-center'
                  )}
                >
                  Get a Free Audit
                  <ArrowRight className="w-3.5 h-3.5 ml-2" />
                </motion.a>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="py-[100px] border-b border-gold-400/[0.07]">
          <div className="max-w-[1200px] mx-auto px-8">
            <motion.div
              className="mb-14"
              initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp} transition={{ duration: 0.6, ease }}
            >
              <p className="text-[11.5px] font-semibold tracking-[0.16em] uppercase text-gold-400 mb-4">Process</p>
              <h2 className="text-[clamp(30px,4vw,44px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-gold-300">
                How It Works
              </h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1"
              initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
              variants={staggerContainer(0.1)}
            >
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  variants={fadeUp}
                  transition={{ duration: 0.6, ease }}
                  className="relative"
                >
                  {i < steps.length - 1 && (
                    <div className="absolute top-[18px] left-[calc(100%+12px)] w-[calc(100%-24px)] h-px bg-gold-400/[0.10] max-lg:hidden" aria-hidden="true" />
                  )}
                  <div className="flex flex-col gap-4">
                    <span className="text-[11px] font-bold tracking-[0.14em] text-gold-500">{step.number}</span>
                    <h3 className="text-[17px] font-bold tracking-[-0.02em] text-gold-200 leading-snug">{step.title}</h3>
                    <p className="text-[14px] text-ink-1 leading-[1.75]">{step.body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── What's Included ── */}
        <section className="py-[100px] border-b border-gold-400/[0.07]">
          <div className="max-w-[1200px] mx-auto px-8">
            <motion.div
              className="mb-14"
              initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp} transition={{ duration: 0.6, ease }}
            >
              <p className="text-[11.5px] font-semibold tracking-[0.16em] uppercase text-gold-400 mb-4">Deliverables</p>
              <h2 className="text-[clamp(30px,4vw,44px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-gold-300">
                What&rsquo;s Included
              </h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1"
              initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
              variants={staggerContainer(0.08)}
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={fadeUp}
                  transition={{ duration: 0.55, ease }}
                  className="bg-gold-400/[0.03] border border-gold-400/[0.10] rounded-xl p-7 flex flex-col gap-3"
                >
                  <div className="w-7 h-7 rounded-lg border border-gold-400/[0.20] bg-gold-400/[0.06] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-gold-300" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-[15px] font-bold tracking-[-0.01em] text-gold-200 leading-snug">{feature.title}</h3>
                  <p className="text-[13.5px] text-ink-1 leading-[1.7]">{feature.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Ideal For ── */}
        <section className="py-[100px] border-b border-gold-400/[0.07]">
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="grid grid-cols-[1fr_520px] gap-20 items-start max-lg:grid-cols-1 max-lg:gap-10">

              <motion.div
                initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
                variants={fadeUp} transition={{ duration: 0.65, ease }}
              >
                <p className="text-[11.5px] font-semibold tracking-[0.16em] uppercase text-gold-400 mb-4">Fit</p>
                <h2 className="text-[clamp(30px,4vw,44px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-gold-300 mb-5">
                  Is This Right<br />
                  <span className="text-gold-200">for You?</span>
                </h2>
                <p className="text-[15px] text-ink-1 leading-[1.8] max-w-[360px]">
                  The {name} model works best for the right type of business. Here&rsquo;s who we designed it for.
                </p>
              </motion.div>

              <motion.ul
                className="flex flex-col gap-4"
                initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
                variants={staggerContainer(0.08, 0.1)}
              >
                {idealFor.map((item) => (
                  <motion.li
                    key={item}
                    variants={fadeIn}
                    transition={{ duration: 0.5, ease }}
                    className="flex items-start gap-4 py-5 border-b border-gold-400/[0.07] last:border-0"
                  >
                    <div className="w-6 h-6 rounded-full border border-gold-400/[0.25] bg-gold-400/[0.06] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-gold-300" strokeWidth={2.5} />
                    </div>
                    <span className="text-[15px] text-ink-1 leading-[1.7]">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>

            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-[100px]">
          <div className="max-w-[1200px] mx-auto px-8 text-center">
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
              variants={staggerContainer(0.1)}
            >
              <motion.p
                variants={fadeUp} transition={{ duration: 0.55, ease }}
                className="text-[11.5px] font-semibold tracking-[0.16em] uppercase text-gold-400 mb-5"
              >
                Get Started
              </motion.p>
              <motion.h2
                variants={fadeUp} transition={{ duration: 0.7, ease }}
                className="text-[clamp(36px,5vw,60px)] font-extrabold leading-[1.05] tracking-[-0.035em] text-gold-300 mb-5"
              >
                Ready to Start on<br />
                <span className="text-gold-200">{name}?</span>
              </motion.h2>
              <motion.p
                variants={fadeUp} transition={{ duration: 0.6, ease }}
                className="text-[17px] text-ink-1 leading-[1.75] max-w-[440px] mx-auto mb-10"
              >
                Book a free audit and we&rsquo;ll walk you through exactly how the {name} model works for your business.
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
            Omnigrid Digital
          </a>
          <span className="text-[12.5px] text-ink-3">
            &copy; {new Date().getFullYear()} Omnigrid Digital. Toronto, ON. All rights reserved.
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
