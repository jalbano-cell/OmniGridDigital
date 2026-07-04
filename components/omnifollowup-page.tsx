'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight, MessageSquareOff, Hourglass,
  FileInput, Clock, Sparkles, ThumbsUp, Mail, Eye,
  TrendingUp, Wrench, LineChart,
  LogIn,
} from 'lucide-react'
import { Nav } from '@/components/nav'
import ContactForm from '@/app/contact-form'
import { APP_URL } from '@/lib/config'
import { cn } from '@/lib/utils'

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]
const heading = 'font-[family-name:var(--font-heading)]'

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
      <div className="absolute -top-[20%] -left-[12%] w-[900px] h-[900px] rounded-full bg-gold-400/[0.10] blur-[200px]" />
      <div className="absolute -top-[10%] right-[-15%] w-[750px] h-[750px] rounded-full bg-[#2563EB]/[0.10] blur-[180px]" />
      <div className="absolute top-[45%] right-[-8%] w-[650px] h-[650px] rounded-full bg-[#0EA5E9]/[0.06] blur-[180px]" />
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />
    </div>
  )
}

// ─── Content ────────────────────────────────────────────────────────────────
const PROBLEMS = [
  { title: 'Jobs Lost to Silence',      body: 'You send an estimate, then it goes quiet — and the job goes to whoever follows up first.',       icon: MessageSquareOff },
  { title: 'Follow-Up Is Inconsistent', body: 'Without a system, checking back on every open estimate falls to memory and gets missed.',        icon: Hourglass        },
]

const STEPS = [
  { number: '01', title: 'Estimate Sent',          body: 'You send a quote the way you always have — nothing changes on your end.', icon: FileInput },
  { number: '02', title: 'Timing Is Tracked',       body: 'OmniFollowUp tracks each estimate and knows exactly when a follow-up is due.', icon: Clock     },
  { number: '03', title: 'AI Drafts the Follow-Up', body: 'A follow-up message is written for you, ready to review.',                  icon: Sparkles  },
  { number: '04', title: 'You Approve It',          body: 'Nothing goes out without your sign-off — you stay in control.',             icon: ThumbsUp  },
  { number: '05', title: 'Gmail Sends It',          body: 'Once approved, the email is sent straight from Gmail on your behalf.',       icon: Mail      },
  { number: '06', title: 'Replies Are Tracked',     body: 'Customer replies are tracked automatically, so you know what happened.',      icon: Eye       },
]

const BENEFITS = [
  { title: 'More Closed Jobs',              body: 'Consistent follow-up turns more of the estimates you already send into booked work.', icon: TrendingUp },
  { title: 'Less Manual Follow-Up Work',    body: 'Stop chasing every open estimate by hand — the drafting and tracking happens for you.', icon: Wrench     },
  { title: 'Better Pipeline Visibility',    body: 'See exactly which estimates are open, followed up on, or ready to close.',            icon: LineChart  },
]

export function OmniFollowUpPage() {
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
              className="max-w-[720px]"
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
                className={cn('text-[clamp(40px,5.5vw,64px)] font-bold leading-[1.1] tracking-[-0.03em] text-ink-0 mb-6', heading)}
              >
                Never Lose Another Job<br />
                <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
                  After Sending an Estimate.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.6, ease }}
                className="text-[18px] text-ink-1 leading-[1.75] max-w-[580px] mb-10"
              >
                OmniFollowUp helps service businesses automatically follow up on every estimate and turn
                more quotes into booked jobs — without changing how they already work.
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
              className="grid grid-cols-2 gap-5 max-sm:grid-cols-1"
              initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
              variants={staggerContainer(0.12)}
            >
              {PROBLEMS.map((p) => {
                const Icon = p.icon
                return (
                  <motion.div
                    key={p.title}
                    variants={fadeUp}
                    transition={{ duration: 0.55, ease }}
                    className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-7 flex flex-col gap-4"
                  >
                    <div className="w-9 h-9 rounded-lg border border-white/[0.10] bg-white/[0.04] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-gold-300" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-[16px] font-bold tracking-[-0.01em] text-ink-0 leading-snug mb-2">{p.title}</h3>
                      <p className="text-[14.5px] text-ink-2 leading-[1.75]">{p.body}</p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* ── Solution ── */}
        <section className="py-[100px] border-b border-white/[0.06] relative overflow-hidden">
          <div className="absolute top-[10%] right-[-10%] w-[550px] h-[550px] rounded-full bg-gold-400/[0.06] blur-[140px] pointer-events-none" />
          <div className="max-w-[1200px] mx-auto px-8 relative z-10">
            <motion.div
              className="max-w-[640px]"
              initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp} transition={{ duration: 0.65, ease }}
            >
              <p className="text-[11.5px] font-semibold tracking-[0.16em] uppercase text-gold-300 mb-4">The Solution</p>
              <h2 className={cn('text-[clamp(30px,4vw,44px)] font-bold leading-[1.1] tracking-[-0.03em] text-ink-0 mb-5', heading)}>
                Automated Follow-Up.<br />Zero Workflow Change.
              </h2>
              <p className="text-[16.5px] text-ink-1 leading-[1.8]">
                OmniFollowUp automates estimate follow-up from start to finish — tracking, drafting, and
                sending — while working with the estimating tools and process your business already uses.
                There&rsquo;s nothing to switch and nothing new to learn.
              </p>
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
                From Estimate to Booked Job.
              </h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1"
              initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
              variants={staggerContainer(0.08)}
            >
              {STEPS.map((step) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.number}
                    variants={fadeUp}
                    transition={{ duration: 0.55, ease }}
                    className="flex flex-col gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl border border-gold-400/[0.18] bg-gold-400/[0.06] flex items-center justify-center shrink-0">
                        <Icon className="w-[18px] h-[18px] text-gold-300" strokeWidth={1.5} />
                      </div>
                      <span className="text-[11px] font-bold tracking-[0.14em] text-gold-400/50">{step.number}</span>
                    </div>
                    <h3 className="text-[16px] font-bold tracking-[-0.02em] text-ink-0 leading-snug">{step.title}</h3>
                    <p className="text-[13.5px] text-ink-2 leading-[1.75]">{step.body}</p>
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
              className="grid grid-cols-3 gap-5 max-md:grid-cols-1"
              initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
              variants={staggerContainer(0.1)}
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

        {/* ── CTA ── */}
        <section id="demo" className="py-[120px] scroll-mt-[68px]">
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
                Book a Demo.
              </h2>
              <p className="text-[16.5px] text-ink-2 leading-[1.75] max-w-[440px] mx-auto">
                See exactly how OmniFollowUp would work for your business — no commitment, no pressure.
              </p>
            </motion.div>

            <motion.div
              className="bg-surface-0/80 backdrop-blur-2xl border border-white/[0.08] rounded-2xl p-10 max-sm:p-6"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
            >
              <ContactForm defaultService="OmniFollowUp — Book a Demo" submitLabel="Book My Demo" />
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
