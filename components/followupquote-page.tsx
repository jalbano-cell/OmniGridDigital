'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight, Check, AlertTriangle, MessageSquareOff, Hourglass, TrendingDown,
  FileInput, Bot, Send, Trophy,
  TrendingUp, CalendarClock, RefreshCcw, PlugZap, Workflow,
  BarChart3, LogIn,
} from 'lucide-react'
import { Nav } from '@/components/nav'
import { FaqItem } from '@/components/faq-item'
import ContactForm from '@/app/contact-form'
import { APP_URL } from '@/lib/config'
import { cn } from '@/lib/utils'

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]
const heading = 'font-[family-name:var(--font-heading)]'

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
      <div className="absolute -top-[20%] -left-[12%] w-[900px] h-[900px] rounded-full bg-gold-400/[0.10] blur-[200px]" />
      <div className="absolute -top-[10%] right-[-15%] w-[750px] h-[750px] rounded-full bg-[#2563EB]/[0.10] blur-[180px]" />
      <div className="absolute top-[45%] right-[-8%] w-[650px] h-[650px] rounded-full bg-[#0EA5E9]/[0.06] blur-[180px]" />
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />
    </div>
  )
}

// ─── Content ────────────────────────────────────────────────────────────────
const PROBLEMS = [
  { title: 'Estimates Go Quiet',        body: 'You send a quote, then real work pulls your attention away — and the follow-up never happens.',        icon: MessageSquareOff },
  { title: 'Manual Follow-Up Is Slow',  body: 'Chasing every open estimate by hand takes time you don’t have between jobs.',                        icon: Hourglass        },
  { title: 'Jobs Slip to Competitors',  body: 'Customers who don’t hear back often just book with whoever follows up first.',                       icon: TrendingDown     },
  { title: 'No Visibility',             body: 'Without a system, it’s hard to know which estimates are still open or how much revenue is waiting.', icon: AlertTriangle    },
]

const STEPS = [
  { number: '01', title: 'Send Your Estimate as Usual',   body: 'Keep using the estimating or quoting tool you already have — nothing changes there.',            icon: FileInput },
  { number: '02', title: 'FollowupQuote Tracks It',        body: 'Every estimate is logged automatically, so nothing gets forgotten or falls through the cracks.', icon: Bot       },
  { number: '03', title: 'A Follow-Up Gets Drafted',       body: 'When it’s time to check in, a ready-to-send follow-up message is prepared for you.',        icon: Send      },
  { number: '04', title: 'You Approve & Win the Job',      body: 'Review it, send it, and turn more of your estimates into booked work.',                        icon: Trophy    },
]

const BENEFITS = [
  { title: 'Win More Jobs',                    body: 'Estimates that get a timely follow-up close at a meaningfully higher rate than the ones left to go cold.', icon: TrendingUp    },
  { title: 'Never Forget an Estimate',         body: 'Every quote you send is tracked automatically from the moment it goes out.',                               icon: CalendarClock },
  { title: 'Automate the Follow-Up',           body: 'Follow-up messages are drafted for you — no more chasing customers manually.',                             icon: RefreshCcw    },
  { title: 'Works With What You Already Use',  body: 'FollowupQuote fits around your existing estimating tools — nothing to switch, nothing to migrate.',        icon: PlugZap       },
  { title: 'No Workflow Replacement',          body: 'It’s an addition to how your business already runs, not a new system your team has to learn.',        icon: Workflow      },
]

const IDEAL_FOR = [
  'Contractors and home renovation businesses that send multiple estimates a week',
  'Roofing, HVAC, plumbing, and electrical companies quoting jobs on-site',
  'Landscaping and property service businesses juggling seasonal demand',
  'Any local service business where an unanswered estimate means a lost job',
]

const FAQS = [
  {
    q: 'Do I need to change how I create estimates?',
    a: 'No. FollowupQuote works alongside the estimating or quoting tool you already use — there’s no new system to learn and nothing to migrate.',
  },
  {
    q: 'Will this replace my existing workflow?',
    a: 'No. FollowupQuote is designed to add automated follow-up on top of your current process, not replace it.',
  },
  {
    q: 'How does the follow-up actually get sent?',
    a: 'FollowupQuote drafts the follow-up message for you at the right time. You review and approve it before it goes out, so you stay in control of what customers hear.',
  },
  {
    q: 'What kind of businesses is this built for?',
    a: 'Local service businesses that send estimates or quotes and don’t have time to manually chase every one — contractors, home service companies, and similar trades.',
  },
  {
    q: 'How do I see this in action?',
    a: 'Book a demo below and we’ll walk you through exactly how FollowupQuote would work for your business.',
  },
]

export function FollowUpQuotePage() {
  return (
    <>
      <PageBackground />
      <Nav />

      <main className="pt-[68px]">

        {/* ── Hero ── */}
        <section className="py-[100px] border-b border-white/[0.06]">
          <div className="max-w-[1200px] mx-auto px-8">
            <motion.div
              initial="hidden"
              animate="show"
              variants={staggerContainer(0.1, 0.05)}
              className="max-w-[700px]"
            >
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.55, ease }}
                className="inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-full border border-gold-400/[0.20] bg-gold-400/[0.06]"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-300 opacity-60" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold-300" />
                </span>
                <span className="text-[11.5px] font-medium tracking-[0.02em] text-gold-300">OmniGrid Digital&rsquo;s Flagship Product</span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.75, ease }}
                className={cn('text-[clamp(44px,6vw,72px)] font-bold leading-[1.06] tracking-[-0.03em] text-ink-0 mb-6', heading)}
              >
                Never Lose Another Job<br />
                <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
                  to a Forgotten Estimate.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.6, ease }}
                className="text-[18px] text-ink-1 leading-[1.75] max-w-[560px] mb-10"
              >
                FollowupQuote automates your estimate follow-up so you win more jobs — without changing the
                tools or workflow your business already runs on.
              </motion.p>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5, ease }}
                className="flex items-center gap-3 flex-wrap"
              >
                <motion.a
                  href="#demo"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.18, ease }}
                  className="inline-flex items-center gap-2.5 h-12 px-7 rounded-xl bg-gold-400 text-white text-[14px] font-semibold shadow-[0_0_40px_rgba(37,99,235,0.45),0_0_80px_rgba(14,165,233,0.18)] hover:bg-gold-500 transition-all"
                >
                  Book a Demo
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.18, ease }}
                  className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-white/[0.05] border border-white/[0.14] text-ink-1 text-[14px] font-medium hover:bg-white/[0.09] hover:text-ink-0 hover:border-white/[0.22] transition-all"
                >
                  <LogIn className="w-3.5 h-3.5 opacity-60" />
                  Client Login
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── Problem ── */}
        <section className="py-[100px] border-b border-white/[0.06]">
          <div className="max-w-[1200px] mx-auto px-8">
            <motion.div
              className="mb-14 max-w-[560px]"
              initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp} transition={{ duration: 0.6, ease }}
            >
              <p className="text-[11.5px] font-semibold tracking-[0.16em] uppercase text-gold-300 mb-4">The Problem</p>
              <h2 className={cn('text-[clamp(30px,4vw,44px)] font-bold leading-[1.1] tracking-[-0.03em] text-ink-0', heading)}>
                Silence Is Costing You Jobs.
              </h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1"
              initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
              variants={staggerContainer(0.1)}
            >
              {PROBLEMS.map((p) => {
                const Icon = p.icon
                return (
                  <motion.div
                    key={p.title}
                    variants={fadeUp}
                    transition={{ duration: 0.55, ease }}
                    className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 flex flex-col gap-4"
                  >
                    <div className="w-9 h-9 rounded-lg border border-white/[0.10] bg-white/[0.04] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-gold-300" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-[15.5px] font-bold tracking-[-0.01em] text-ink-0 leading-snug mb-2">{p.title}</h3>
                      <p className="text-[13.5px] text-ink-2 leading-[1.7]">{p.body}</p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="py-[100px] border-b border-white/[0.06]">
          <div className="max-w-[1200px] mx-auto px-8">
            <motion.div
              className="mb-14 max-w-[560px]"
              initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp} transition={{ duration: 0.6, ease }}
            >
              <p className="text-[11.5px] font-semibold tracking-[0.16em] uppercase text-gold-300 mb-4">How It Works</p>
              <h2 className={cn('text-[clamp(30px,4vw,44px)] font-bold leading-[1.1] tracking-[-0.03em] text-ink-0', heading)}>
                Fits Around What You Already Do.
              </h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1"
              initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
              variants={staggerContainer(0.1)}
            >
              {STEPS.map((step, i) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.number}
                    variants={fadeUp}
                    transition={{ duration: 0.6, ease }}
                    className="relative"
                  >
                    {i < STEPS.length - 1 && (
                      <div className="absolute top-[22px] left-[calc(100%+12px)] w-[calc(100%-24px)] h-px bg-gold-400/[0.15] max-lg:hidden" aria-hidden="true" />
                    )}
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl border border-gold-400/[0.18] bg-gold-400/[0.06] flex items-center justify-center shrink-0">
                          <Icon className="w-[18px] h-[18px] text-gold-300" strokeWidth={1.5} />
                        </div>
                        <span className="text-[11px] font-bold tracking-[0.14em] text-gold-400/50">{step.number}</span>
                      </div>
                      <h3 className="text-[16.5px] font-bold tracking-[-0.02em] text-ink-0 leading-snug">{step.title}</h3>
                      <p className="text-[14px] text-ink-2 leading-[1.75]">{step.body}</p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* ── Benefits ── */}
        <section className="py-[100px] border-b border-white/[0.06]">
          <div className="max-w-[1200px] mx-auto px-8">
            <motion.div
              className="mb-14 max-w-[560px]"
              initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp} transition={{ duration: 0.6, ease }}
            >
              <p className="text-[11.5px] font-semibold tracking-[0.16em] uppercase text-gold-300 mb-4">Benefits</p>
              <h2 className={cn('text-[clamp(30px,4vw,44px)] font-bold leading-[1.1] tracking-[-0.03em] text-ink-0', heading)}>
                What You Get.
              </h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1"
              initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
              variants={staggerContainer(0.08)}
            >
              {BENEFITS.map((b) => {
                const Icon = b.icon
                return (
                  <motion.div
                    key={b.title}
                    variants={fadeUp}
                    transition={{ duration: 0.55, ease }}
                    className="bg-gold-400/[0.03] border border-gold-400/[0.10] rounded-xl p-7 flex flex-col gap-3"
                  >
                    <div className="w-7 h-7 rounded-lg border border-gold-400/[0.20] bg-gold-400/[0.06] flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5 text-gold-300" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-[15px] font-bold tracking-[-0.01em] text-ink-0 leading-snug">{b.title}</h3>
                    <p className="text-[13.5px] text-ink-1 leading-[1.7]">{b.body}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* ── ROI ── */}
        <section className="py-[100px] border-b border-white/[0.06] relative overflow-hidden">
          <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#2563EB]/[0.08] blur-[150px] pointer-events-none" />
          <div className="max-w-[1200px] mx-auto px-8 relative z-10">
            <div className="grid grid-cols-[1fr_460px] gap-16 items-center max-lg:grid-cols-1 max-lg:gap-10">
              <motion.div
                initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
                variants={fadeUp} transition={{ duration: 0.65, ease }}
              >
                <p className="text-[11.5px] font-semibold tracking-[0.16em] uppercase text-gold-300 mb-4">ROI</p>
                <h2 className={cn('text-[clamp(30px,4vw,44px)] font-bold leading-[1.1] tracking-[-0.03em] text-ink-0 mb-5', heading)}>
                  The Math Is Simple.
                </h2>
                <p className="text-[16px] text-ink-1 leading-[1.8] max-w-[440px]">
                  Every estimate that goes unanswered is potential revenue sitting on the table. Recovering
                  even one job a month through better follow-up often justifies the entire cost of the system —
                  everything after that is upside.
                </p>
              </motion.div>

              <motion.div
                className="bg-surface-2/55 backdrop-blur-xl border border-white/[0.09] rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.45)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.65, ease }}
              >
                <div className="px-7 py-5 border-b border-white/[0.06] flex items-center gap-2.5">
                  <BarChart3 className="w-4 h-4 text-gold-300" />
                  <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-ink-3">Illustrative Example</p>
                </div>
                <div className="p-7 flex flex-col gap-4">
                  {[
                    { label: 'Estimates sent per month',        value: '40'  },
                    { label: 'Left without a proper follow-up', value: '~60%' },
                    { label: 'Jobs recovered with follow-up',   value: '1–3 extra' },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between py-3 border-b border-white/[0.06] last:border-0">
                      <span className="text-[13.5px] text-ink-2">{row.label}</span>
                      <span className={cn('text-[17px] font-bold text-gold-300', heading)}>{row.value}</span>
                    </div>
                  ))}
                  <p className="text-[12px] text-ink-3 leading-[1.7] pt-1">
                    Actual results vary by business and estimate volume — this is illustrative, not a guarantee.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Who It's For ── */}
        <section className="py-[100px] border-b border-white/[0.06]">
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="grid grid-cols-[1fr_520px] gap-20 items-start max-lg:grid-cols-1 max-lg:gap-10">
              <motion.div
                initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
                variants={fadeUp} transition={{ duration: 0.65, ease }}
              >
                <p className="text-[11.5px] font-semibold tracking-[0.16em] uppercase text-gold-300 mb-4">Who It&rsquo;s For</p>
                <h2 className={cn('text-[clamp(30px,4vw,44px)] font-bold leading-[1.1] tracking-[-0.03em] text-ink-0 mb-5', heading)}>
                  Built for Local<br />Service Businesses.
                </h2>
                <p className="text-[15px] text-ink-1 leading-[1.8] max-w-[360px]">
                  If your business sends estimates and doesn&rsquo;t have time to chase every one, FollowupQuote was built for you.
                </p>
              </motion.div>

              <motion.ul
                className="flex flex-col gap-4"
                initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
                variants={staggerContainer(0.08, 0.1)}
              >
                {IDEAL_FOR.map((item) => (
                  <motion.li
                    key={item}
                    variants={fadeIn}
                    transition={{ duration: 0.5, ease }}
                    className="flex items-start gap-4 py-5 border-b border-white/[0.06] last:border-0"
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

        {/* ── FAQ ── */}
        <section className="py-[100px] border-b border-white/[0.06]">
          <div className="max-w-[720px] mx-auto px-8">
            <motion.div
              className="text-center mb-10"
              initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp} transition={{ duration: 0.65, ease }}
            >
              <p className="text-[11.5px] font-semibold tracking-[0.15em] uppercase text-gold-300 mb-3">FAQ</p>
              <h2 className={cn('text-[clamp(26px,3.5vw,38px)] font-bold tracking-[-0.03em] text-ink-0', heading)}>
                Common Questions
              </h2>
            </motion.div>

            <motion.div
              className="backdrop-blur-sm bg-white/[0.02] border border-white/[0.07] rounded-2xl px-8 max-sm:px-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease }}
            >
              {FAQS.map((faq) => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Book a Demo ── */}
        <section id="demo" className="py-[120px] border-b border-white/[0.06] scroll-mt-[68px]">
          <div className="max-w-[720px] mx-auto px-8">
            <motion.div
              className="text-center mb-12"
              initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp} transition={{ duration: 0.65, ease }}
            >
              <div className="flex items-center justify-center gap-3 mb-5">
                <span className="w-6 h-px bg-gold-300/50" />
                <p className="text-[11.5px] font-semibold tracking-[0.15em] uppercase text-gold-300">Get Started</p>
                <span className="w-6 h-px bg-gold-300/50" />
              </div>
              <h2 className={cn('text-[clamp(32px,5vw,52px)] font-bold leading-[1.08] tracking-[-0.03em] text-ink-0 mb-5', heading)}>
                Book a Demo or<br />Schedule a Discovery Call.
              </h2>
              <p className="text-[16.5px] text-ink-2 leading-[1.75] max-w-[440px] mx-auto">
                See exactly how FollowupQuote would work for your business — no commitment, no pressure.
              </p>
            </motion.div>

            <motion.div
              className="bg-surface-0/80 backdrop-blur-2xl border border-white/[0.08] rounded-2xl p-10 max-sm:p-6"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
            >
              <ContactForm defaultService="FollowupQuote — Book a Demo" submitLabel="Book My Demo" />
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-2 mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-[13.5px] text-ink-3">Already a client?</span>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13.5px] font-semibold text-gold-300 hover:text-gold-400 transition-colors inline-flex items-center gap-1.5"
              >
                Client Login
                <ArrowRight className="w-3 h-3" />
              </a>
            </motion.div>
          </div>
        </section>

      </main>

      <footer className="border-t border-white/[0.06] bg-surface-0/70 backdrop-blur-xl py-8">
        <div className="max-w-[1200px] mx-auto px-8 flex items-center justify-between flex-wrap gap-3">
          <a href="/" className="text-[15px] font-extrabold tracking-tight text-white transition-opacity hover:opacity-80">
            OmniGrid Digital
          </a>
          <span className="text-[12.5px] text-ink-3">
            &copy; {new Date().getFullYear()} OmniGrid Digital. Toronto, ON. All rights reserved.
          </span>
          <a
            href="mailto:zaink@omnigriddigital.ca"
            className="text-[12.5px] text-ink-2 transition-colors hover:text-gold-300"
          >
            zaink@omnigriddigital.ca
          </a>
        </div>
      </footer>
    </>
  )
}
