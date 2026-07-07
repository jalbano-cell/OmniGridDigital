'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import ContactForm from './contact-form'
import { Nav } from '@/components/nav'
import { FaqItem } from '@/components/faq-item'
import { cn } from '@/lib/utils'
import { ArrowRight, X, TrendingUp, Globe2, Zap, BarChart3, CheckCircle2, Check, Minus, Phone, FileText, MapPin, ShieldCheck, LayoutGrid, BrainCircuit } from 'lucide-react'

const Globe          = dynamic(() => import('./globe').then(m => m.Globe), { ssr: false })
import { GalaxyBackground } from './galaxy-background'

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0  },
}

function staggerContainer(stagger = 0.1, delayChildren = 0) {
  return {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren } },
  }
}

const heading = 'font-[family-name:var(--font-heading)]'

export default function Home() {
  const [showContact, setShowContact] = useState(false)
  const [contactService, setContactService] = useState('')
  const openContact = (service?: string) => {
    setContactService(service ?? '')
    setShowContact(true)
  }

  return (
    <>
      <PageBackground />
      <Nav />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Pricing onContact={openContact} />
        <ContactSection />
      </main>
      <Footer />
      <AnimatePresence>
        {showContact && <ContactModal onClose={() => setShowContact(false)} defaultService={contactService} />}
      </AnimatePresence>
    </>
  )
}

// ─── Page Background ──────────────────────────────────────────────────────────
function PageBackground() {
  return <GalaxyBackground />
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
const FLOAT_CARDS = [
  { label: '+18 Jobs',    sub: 'Won This Month',  icon: TrendingUp,   color: 'text-gold-300',  bg: 'bg-gold-400/[0.12] border-gold-400/[0.18]'  },
  { label: '82%',         sub: 'Follow-Up Rate',  icon: BarChart3,    color: 'text-gold-400',  bg: 'bg-gold-400/[0.12] border-gold-400/[0.18]'  },
  { label: 'Auto',        sub: 'AI-Drafted',      icon: Zap,          color: 'text-[#60A5FA]', bg: 'bg-[#3B82F6]/[0.12] border-[#3B82F6]/[0.20]' },
  { label: '+40%',        sub: 'Close Rate',      icon: CheckCircle2, color: 'text-[#86EFAC]', bg: 'bg-[#22c55e]/[0.10] border-[#22c55e]/[0.18]' },
]

const DASHBOARD_STATS = [
  { label: 'Follow-Up Rate', value: '82%',   pct: 82, colorFrom: 'from-gold-400',   colorTo: 'to-gold-300',    icon: TrendingUp,   iconColor: 'text-gold-300'  },
  { label: 'Jobs Won',       value: '18',    pct: 92, colorFrom: 'from-[#60A5FA]',  colorTo: 'to-[#3B82F6]',  icon: BarChart3,    iconColor: 'text-[#60A5FA]' },
  { label: 'Estimates Open', value: '6',     pct: 40, colorFrom: 'from-[#C084FC]',  colorTo: 'to-[#7C3AED]',  icon: CheckCircle2, iconColor: 'text-[#C084FC]' },
]

function Hero() {
  return (
    <section className="relative min-h-svh flex items-center pt-[68px] overflow-hidden">
      {/* Subtle dot-grid background — 21st.dev inspired */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.055) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Vignette over grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,transparent_30%,rgba(15,23,42,0.95)_100%)] pointer-events-none" />

      {/* Ambient glows */}
      <div className="absolute -top-[25%] -left-[10%] w-[800px] h-[800px] rounded-full bg-gold-400/[0.04] blur-[160px] pointer-events-none" />
      <div className="absolute top-[5%] right-[-14%] w-[700px] h-[700px] rounded-full bg-[#2563EB]/[0.06] blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 py-24 w-full">
        <div className="grid grid-cols-[1fr_500px] gap-16 items-center max-lg:grid-cols-1 max-lg:gap-14">

          {/* Left — copy */}
          <div>
            {/* Badge with live pulse */}
            <motion.div
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-gold-400/[0.20] bg-gold-400/[0.06] backdrop-blur-sm"
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-300 opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold-300" />
              </span>
              <span className="text-[11.5px] font-medium tracking-[0.02em] text-gold-300">Digital Marketing Agency&nbsp;&nbsp;•&nbsp;&nbsp;Toronto &amp; GTA</span>
            </motion.div>

            <motion.h1
              className={cn('text-[clamp(46px,6.5vw,80px)] font-bold leading-[1.06] tracking-[-0.03em] text-ink-0 mb-6', heading)}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease, delay: 0.15 }}
            >
              Grow Your Business<br />
              <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
                With AI-Powered Systems.
              </span>
            </motion.h1>

            <motion.p
              className="text-[18px] text-ink-1 leading-[1.75] max-w-[520px] mb-10"
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.3 }}
            >
              We build websites, run ad campaigns, and design custom AI automations that help local
              businesses win more customers — without adding to their workload.
            </motion.p>

            <motion.div
              className="flex items-center gap-3 flex-wrap mb-10"
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.42 }}
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.18, ease }}
                className="inline-flex items-center gap-2.5 h-12 px-7 rounded-xl bg-gold-400 text-white text-[14px] font-semibold shadow-[0_0_40px_rgba(37,99,235,0.45),0_0_80px_rgba(14,165,233,0.18)] hover:bg-gold-500 transition-all"
              >
                Book a Free Call
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.18, ease }}
                className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-white/[0.05] border border-white/[0.14] text-ink-1 text-[14px] font-medium hover:bg-white/[0.09] hover:text-ink-0 hover:border-white/[0.22] transition-all"
              >
                See Our Services
                <ArrowRight className="w-3.5 h-3.5 opacity-50" />
              </motion.a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="flex items-center gap-5 flex-wrap text-[12px] text-ink-3"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {[
                'Local business focus',
                'No long-term contracts',
                'Setup in days',
              ].map((t, i) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-300/70 shrink-0" />
                  {t}
                  {i < 2 && <span className="ml-5 w-1 h-1 rounded-full bg-ink-3/25" />}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — premium dashboard card */}
          <motion.div
            className="relative h-[500px]"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.5 }}
          >
            {/* Diffuse glow behind the card */}
            <div className="absolute inset-[10px] rounded-3xl bg-gold-400/[0.05] blur-[50px] pointer-events-none" />
            <div className="absolute top-[10%] right-[-5%] w-48 h-48 bg-[#2563EB]/[0.08] blur-[80px] rounded-full pointer-events-none" />

            {/* Glassmorphism dashboard card */}
            <div className="absolute inset-[14px] rounded-2xl bg-surface-2/55 backdrop-blur-2xl border border-white/[0.09] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.04)]">
              {/* Top shimmer line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
              {/* Inner corner glow */}
              <div className="absolute top-0 right-0 w-56 h-56 bg-gold-400/[0.05] blur-[70px] -mr-20 -mt-20 pointer-events-none" />

              {/* Header */}
              <div className="relative z-10 px-6 py-4 border-b border-white/[0.06] flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-ink-3">AI Automation Dashboard</p>
                  <p className="text-[10px] text-ink-3/40 mt-0.5">Growth Pipeline · This Month</p>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#22c55e]/[0.12] border border-[#22c55e]/[0.22]">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-70" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#22c55e]" />
                  </span>
                  <span className="text-[9px] font-bold tracking-[0.14em] uppercase text-[#4ade80]">LIVE</span>
                </div>
              </div>

              {/* Animated progress-bar stats — from 21st.dev pattern */}
              <div className="relative z-10 px-6 py-5 space-y-3">
                {DASHBOARD_STATS.map((stat, i) => {
                  const Icon = stat.icon
                  return (
                    <div key={stat.label} className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[11px] text-ink-3">{stat.label}</span>
                        <Icon className={cn('w-3.5 h-3.5', stat.iconColor)} />
                      </div>
                      <p className={cn('text-[26px] font-bold tracking-[-0.04em] text-ink-0 leading-none mb-2.5', heading)}>{stat.value}</p>
                      <div className="h-1.5 w-full bg-white/[0.07] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${stat.pct}%` }}
                          transition={{ duration: 1.1, delay: 0.85 + i * 0.14, ease: [0.16, 1, 0.3, 1] }}
                          className={cn('h-full rounded-full bg-gradient-to-r', stat.colorFrom, stat.colorTo)}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Bottom mini-metrics row */}
              <div className="relative z-10 px-6 pb-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex-1 h-px bg-white/[0.05]" />
                  <span className="text-[9px] text-ink-3/35 uppercase tracking-wider">Updated 2m ago</span>
                  <div className="flex-1 h-px bg-white/[0.05]" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: 'Avg. Response Time', value: '2.4h', delta: '-38%' },
                    { label: 'Win Rate',           value: '61%',  delta: '+14%' },
                  ].map((m) => (
                    <div key={m.label} className="bg-white/[0.03] rounded-lg p-3 border border-white/[0.04]">
                      <p className="text-[9.5px] text-ink-3 mb-1">{m.label}</p>
                      <p className={cn('text-[18px] font-bold tracking-tight text-ink-0 leading-none', heading)}>{m.value}</p>
                      <p className="text-[10px] text-gold-300 font-semibold mt-0.5">{m.delta}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating metric chips — glassmorphism with icon bg */}
            {FLOAT_CARDS.map((card, i) => {
              const positions = [
                'top-0 -left-8',
                'top-0 -right-8',
                'bottom-6 -left-8',
                'bottom-6 -right-8',
              ]
              const Icon = card.icon
              return (
                <motion.div
                  key={card.label}
                  className={cn('absolute z-20', positions[i])}
                  initial={{ opacity: 0, scale: 0.82 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
                  transition={{
                    opacity: { duration: 0.5, delay: 0.9 + i * 0.12 },
                    scale:   { duration: 0.5, delay: 0.9 + i * 0.12 },
                    y:       { duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 + 1 },
                  }}
                >
                  <div className="flex items-center gap-2.5 bg-surface-2/90 backdrop-blur-2xl border border-white/[0.13] rounded-xl px-3.5 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.03)]">
                    <div className={cn('w-7 h-7 rounded-lg border flex items-center justify-center shrink-0', card.bg)}>
                      <Icon className={cn('w-3.5 h-3.5', card.color)} />
                    </div>
                    <div>
                      <p className={cn('text-[13px] font-bold text-ink-0 leading-none', heading)}>{card.label}</p>
                      <p className="text-[10px] text-ink-3 mt-0.5">{card.sub}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

// ─── Services ─────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    number: '01',
    title: 'Web Design & Development',
    href: '/services/web-design',
    body: 'Custom websites built to convert visitors into customers. Fast, mobile-first, and built to last.',
    icon: Globe2,
    stat: '~1 wk',
    statLabel: 'Avg. Launch',
    features: ['AI-Friendly Structure', 'SEO & GEO Foundation', 'Mobile-First Design', 'Conversion Optimized', 'Analytics Setup'],
    linkLabel: 'View Work',
  },
  {
    number: '02',
    title: 'Paid Ads Management',
    href: '/services/paid-ads',
    body: 'Google, Meta & TikTok campaigns managed for maximum ROI. Strategy, creatives, and optimization — all in one place.',
    icon: TrendingUp,
    stat: '5.8×',
    statLabel: 'Avg. ROAS',
    features: ['Google & Meta Ads', 'Ad Creative Design', 'Audience Research', 'Conversion Tracking', 'Weekly Optimization'],
    linkLabel: 'View Work',
  },
  {
    number: '03',
    title: 'AI Business Integration',
    href: '#contact',
    body: 'Custom AI automations built around how your business already runs — from lead intake to follow-up to reporting, without replacing your existing tools.',
    icon: BrainCircuit,
    stat: 'New',
    statLabel: 'AI Automation',
    features: ['Custom Workflow Automation', 'AI-Drafted Communications', 'Works With Your Existing Tools', 'No Workflow Replacement', 'Ongoing Optimization'],
    linkLabel: 'Get Started',
  },
]

function Services() {
  return (
    <section className="py-[120px] border-t border-white/[0.06] relative overflow-hidden" id="services">
      {/* Dot-grid — 21st.dev FeatureGrid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.038) 1.5px, transparent 0)',
          backgroundSize: '30px 30px',
        }}
      />
      <div className="absolute -top-[20%] left-[4%] w-[700px] h-[700px] rounded-full bg-gold-400/[0.05] blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-[15%] right-[4%] w-[600px] h-[600px] rounded-full bg-[#2563EB]/[0.06] blur-[130px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-8 relative z-10">

        <motion.div
          className="mb-20 max-w-[600px]"
          initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp} transition={{ duration: 0.65, ease }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-gold-300/50" />
            <p className="text-[11.5px] font-semibold tracking-[0.15em] uppercase text-gold-300">What We Do</p>
          </div>
          <h2 className={cn('text-[clamp(36px,5vw,54px)] font-bold leading-[1.08] tracking-[-0.03em] text-ink-0 mb-6', heading)}>
            Everything Your Business Needs<br />
            <span className="text-ink-2">to Dominate Online.</span>
          </h2>
          <p className="text-[17px] text-ink-1 leading-[1.8]">
            Three core disciplines, one focused team, zero outsourcing.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 gap-6 max-lg:grid-cols-1 max-lg:max-w-[480px] max-lg:mx-auto"
          initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer(0.14)}
        >
          {SERVICES.map((s, i) => {
            const Icon = s.icon
            const isGold = i % 2 === 0
            return (
              <motion.a
                key={s.number}
                href={s.href}
                variants={fadeUp}
                transition={{ duration: 0.6, ease }}
                whileHover={{ y: -6, transition: { duration: 0.22, ease } }}
                className="group block relative rounded-2xl overflow-hidden backdrop-blur-xl transition-all duration-300"
              >
                {/* Card background — 21st.dev glassmorphism FeatureCard */}
                <div className={cn(
                  'absolute inset-0 rounded-2xl transition-all duration-300',
                  isGold
                    ? 'bg-gradient-to-br from-gold-400/[0.10] via-gold-400/[0.04] to-transparent border border-gold-400/[0.18] group-hover:border-gold-400/[0.30] group-hover:shadow-[0_24px_70px_rgba(0,0,0,0.35)]'
                    : 'bg-gradient-to-br from-[#1a3561]/55 via-white/[0.02] to-transparent border border-[#3B82F6]/[0.22] group-hover:border-[#3B82F6]/[0.38] group-hover:shadow-[0_24px_70px_rgba(0,0,0,0.35)]'
                )} />
                {/* Top shimmer line */}
                <div className={cn(
                  'absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent to-transparent',
                  isGold ? 'via-gold-400/55' : 'via-[#3B82F6]/55'
                )} />
                {/* Corner glow */}
                <div className={cn(
                  'absolute top-0 right-0 w-52 h-52 blur-[90px] rounded-full -mr-18 -mt-18 pointer-events-none',
                  isGold ? 'bg-gold-400/[0.09]' : 'bg-[#3B82F6]/[0.11]'
                )} />

                <div className="relative z-10 p-9">
                  {/* Service number + stat badge */}
                  <div className="flex items-start justify-between mb-8">
                    <span className={cn(
                      'text-[10px] font-bold tracking-[0.20em] uppercase mt-0.5',
                      isGold ? 'text-gold-400/40' : 'text-[#60A5FA]/40'
                    )}>
                      {s.number}
                    </span>
                    <div className={cn(
                      'text-right px-3.5 py-2 rounded-xl border',
                      isGold
                        ? 'bg-gold-400/[0.08] border-gold-400/[0.18]'
                        : 'bg-[#3B82F6]/[0.08] border-[#3B82F6]/[0.18]'
                    )}>
                      <p className={cn(
                        'text-[28px] font-bold tracking-[-0.04em] leading-none',
                        heading,
                        isGold ? 'text-gold-300' : 'text-[#60A5FA]'
                      )}>{s.stat}</p>
                      <p className="text-[10px] text-ink-3 mt-0.5 font-medium tracking-wide">{s.statLabel}</p>
                    </div>
                  </div>

                  {/* Icon + title — 21st.dev ServiceItem pattern */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={cn(
                      'w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300',
                      isGold
                        ? 'bg-gradient-to-br from-gold-400/[0.22] to-gold-300/[0.10] border-gold-400/[0.28] shadow-[0_0_18px_rgba(234,179,8,0.12)] group-hover:shadow-[0_0_32px_rgba(234,179,8,0.24)] group-hover:border-gold-400/[0.45]'
                        : 'bg-gradient-to-br from-[#3B82F6]/[0.22] to-[#2563EB]/[0.10] border-[#3B82F6]/[0.28] shadow-[0_0_18px_rgba(59,130,246,0.12)] group-hover:shadow-[0_0_32px_rgba(59,130,246,0.24)] group-hover:border-[#3B82F6]/[0.45]'
                    )}>
                      <Icon
                        className={cn('w-6 h-6 transition-transform duration-300 group-hover:scale-110', isGold ? 'text-gold-400' : 'text-[#60A5FA]')}
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className={cn('text-[22px] font-semibold tracking-[-0.025em] text-ink-0 group-hover:text-white transition-colors duration-200', heading)}>
                      {s.title}
                    </h3>
                  </div>

                  <p className="text-[16px] text-ink-2 leading-[1.8] mb-7">{s.body}</p>

                  <div className={cn('h-px mb-6', isGold ? 'bg-gold-400/[0.12]' : 'bg-[#3B82F6]/[0.12]')} />

                  {/* Features — gradient circle check, from 21st.dev pricing pattern */}
                  <ul className="flex flex-col gap-2.5 mb-8">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <span className={cn(
                          'w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0',
                          isGold
                            ? 'bg-gradient-to-br from-gold-400/30 to-gold-300/15 border border-gold-400/[0.28]'
                            : 'bg-gradient-to-br from-[#3B82F6]/28 to-[#2563EB]/14 border border-[#3B82F6]/[0.28]'
                        )}>
                          <Check
                            className={cn('w-2.5 h-2.5', isGold ? 'text-gold-300' : 'text-[#60A5FA]')}
                            strokeWidth={3}
                          />
                        </span>
                        <span className="text-[13.5px] text-ink-2">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <span className={cn(
                    'inline-flex items-center gap-2 text-[13px] font-semibold transition-all duration-200',
                    isGold ? 'text-gold-400 group-hover:text-gold-300' : 'text-[#60A5FA] group-hover:text-[#93C5FD]'
                  )}>
                    {s.linkLabel}
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </motion.a>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}

// ─── Why Us ───────────────────────────────────────────────────────────────────
const WHY_US = [
  { number: '01', title: 'Local Focus',       body: 'We work exclusively with local businesses. We know your market because we live in it.',  icon: MapPin      },
  { number: '02', title: 'Data-Driven Ads',   body: 'Every campaign is built on data. We test, optimize, and scale what works.',              icon: BarChart3    },
  { number: '03', title: 'Full Transparency', body: 'Monthly reports in plain English. You always know exactly what your money is doing.',    icon: ShieldCheck  },
]

function WhyUs() {
  return (
    <section className="py-[120px] border-t border-white/[0.06] relative overflow-hidden" id="why-us">
      {/* Dot-grid — 21st.dev pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.038) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute top-[8%] right-[-12%] w-[680px] h-[680px] rounded-full bg-[#2563EB]/[0.06] blur-[145px] pointer-events-none" />
      <div className="absolute bottom-[0%] left-[-5%] w-[560px] h-[560px] rounded-full bg-gold-400/[0.04] blur-[130px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-8 relative z-10">
        <div className="grid grid-cols-[360px_1fr] gap-20 items-start max-lg:grid-cols-1 max-lg:gap-12">

          {/* Left — sticky heading */}
          <motion.div
            className="sticky top-[calc(68px+32px)] max-lg:static"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-gold-300/50" />
              <p className="text-[11.5px] font-semibold tracking-[0.15em] uppercase text-gold-300">Why Us</p>
            </div>
            <h2 className={cn('text-[clamp(32px,4.5vw,50px)] font-bold leading-[1.08] tracking-[-0.03em] text-ink-0 mb-5', heading)}>
              Not Another<br />Generic Agency.
            </h2>
            <p className="text-[16.5px] text-ink-2 leading-[1.8] mb-8">
              Two specialists. One focused mission. Results you can actually measure.
            </p>

            {/* Decorative trust chip — 21st.dev inspired */}
            <div className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
              <div className="w-8 h-8 rounded-lg bg-gold-400/[0.14] border border-gold-400/[0.24] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4 text-gold-400" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[12px] font-semibold text-ink-0">Local Business Focus</p>
                <p className="text-[11px] text-ink-3 mt-0.5">Toronto &amp; GTA specialists</p>
              </div>
            </div>
          </motion.div>

          {/* Right — feature list — 21st.dev About section stagger pattern */}
          <motion.div
            className="flex flex-col"
            initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer(0.12, 0.05)}
          >
            {WHY_US.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.number}
                  variants={{ hidden: { opacity: 0, x: 28 }, show: { opacity: 1, x: 0 } }}
                  transition={{ duration: 0.6, ease }}
                  className={cn('py-9 group relative', i < WHY_US.length - 1 && 'border-b border-white/[0.06]')}
                >
                  {/* Animated left accent bar — 21st.dev ServiceItem direction pattern */}
                  <div className="absolute left-0 top-9 bottom-9 w-[2px] rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gold-400/0 group-hover:bg-gold-400/55 transition-all duration-350" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-gold-400/40 to-gold-300/20 origin-top"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, delay: 0.15 + i * 0.1, ease }}
                    />
                  </div>

                  <div className="flex items-start gap-5 pl-6">
                    {/* Number */}
                    <span className="text-[10px] font-bold tracking-[0.20em] uppercase text-gold-400/35 mt-1.5 min-w-[18px] shrink-0">
                      {item.number}
                    </span>

                    {/* Icon — 21st.dev FeatureCard icon container style */}
                    <div className={cn(
                      'w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 mt-0.5',
                      'bg-gold-400/[0.09] border-gold-400/[0.16]',
                      'group-hover:bg-gold-400/[0.20] group-hover:border-gold-400/[0.36] group-hover:shadow-[0_0_22px_rgba(234,179,8,0.16)]'
                    )}>
                      <Icon
                        className="w-[18px] h-[18px] text-gold-400 transition-transform duration-300 group-hover:scale-110"
                        strokeWidth={1.5}
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className={cn('text-[21px] font-semibold tracking-[-0.025em] text-ink-0 mb-2.5 group-hover:text-white transition-colors duration-200', heading)}>
                        {item.title}
                      </h3>
                      <p className="text-[16px] text-ink-2 leading-[1.8]">{item.body}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

        </div>
      </div>
    </section>
  )
}


// ─── Pricing ──────────────────────────────────────────────────────────────────
const PLANS = [
  {
    id: 'launch',
    name: 'Launch',
    cadence: null,
    title: 'Build Your Digital Foundation',
    tagline: 'Premium custom website designed to establish credibility and prepare for growth.',
    customNote: 'Every build is scoped and fully customized after a free discovery call.',
    cta: 'Launch My Project',
    service: 'Launch — Build Your Digital Foundation',
    featured: false,
    badge: '',
    inherit: null,
    features: [
      'Custom Website Design & Development',
      'SEO & GEO Foundation',
      'AI-Ready Structure',
      'Performance Optimization',
      'Analytics & Search Console Setup',
      'Booking & Payment Integration',
      'SSL Security',
      'Post-Launch Support',
    ],
  },
  {
    id: 'grow',
    name: 'Grow',
    cadence: 'CAD / Month',
    title: 'AI-Powered Growth System',
    tagline: 'Turn your website into a lead generation and automation system with AI-powered marketing and optimization.',
    customNote: 'All solutions are fully customized after a discovery call.',
    cta: 'Start Scaling My Business',
    service: 'Grow — AI-Powered Growth System',
    featured: true,
    badge: 'Most Popular',
    inherit: 'Everything in Launch, plus:',
    features: [
      'SEO + GEO Optimization',
      'Funnel & Landing Page Optimization',
      'Multi-Platform Ad Management',
      'AI Lead Qualification',
      'Automated Email Follow-Ups & Lead Tracking',
      'Conversion Tracking & Analytics',
      'A/B Testing & Optimization',
      'Growth Dashboards',
      'Monthly Strategy Calls',
    ],
  },
  {
    id: 'transform',
    name: 'Transform',
    cadence: 'CAD / Month',
    title: 'Custom AI & Software Systems',
    tagline: 'Advanced custom software, AI agents, and automation systems built around your business operations.',
    customNote: 'All builds are fully tailored to your business requirements.',
    cta: 'Book a Discovery Call',
    service: 'Transform — Custom AI & Software Systems',
    featured: false,
    badge: '',
    inherit: 'Everything in Grow, plus:',
    features: [
      'Custom Web Applications',
      'AI Agents & Chatbots',
      'CRM / ERP Integrations',
      'Business Process Automation',
      'Internal Dashboards',
      'Client / Employee Portals',
      'API Integrations',
      'Advanced Systems & Reporting',
    ],
  },
]

const COMPARE_ROWS: { label: string; launch: boolean; grow: boolean; transform: boolean }[] = [
  { label: 'Custom Website Design',          launch: true,  grow: true,  transform: true  },
  { label: 'SEO & GEO Foundation',           launch: true,  grow: true,  transform: true  },
  { label: 'AI-Ready Structure',             launch: true,  grow: true,  transform: true  },
  { label: 'Performance Optimization',       launch: true,  grow: true,  transform: true  },
  { label: 'Analytics & Search Console',     launch: true,  grow: true,  transform: true  },
  { label: 'Booking & Payment Integration',  launch: true,  grow: true,  transform: true  },
  { label: 'SSL Security',                   launch: true,  grow: true,  transform: true  },
  { label: 'SEO + GEO Optimization',         launch: false, grow: true,  transform: true  },
  { label: 'Funnel & Landing Page Optim.',   launch: false, grow: true,  transform: true  },
  { label: 'Multi-Platform Ad Management',   launch: false, grow: true,  transform: true  },
  { label: 'AI Lead Qualification',          launch: false, grow: true,  transform: true  },
  { label: 'Automated Follow-Ups',           launch: false, grow: true,  transform: true  },
  { label: 'Conversion Tracking & Analytics',launch: false, grow: true,  transform: true  },
  { label: 'Monthly Strategy Calls',         launch: false, grow: true,  transform: true  },
  { label: 'Custom Web Applications',        launch: false, grow: false, transform: true  },
  { label: 'AI Agents & Chatbots',           launch: false, grow: false, transform: true  },
  { label: 'CRM / ERP Integrations',         launch: false, grow: false, transform: true  },
  { label: 'Business Process Automation',    launch: false, grow: false, transform: true  },
  { label: 'Client / Employee Portals',      launch: false, grow: false, transform: true  },
]

const FAQS = [
  {
    q: 'Do I own my website?',
    a: "Yes — 100%. Once your site is live, you own all the code, content, and assets. We never hold your website hostage.",
  },
  {
    q: 'How does pricing work?',
    a: "There's no one-size-fits-all rate card. Every engagement — Launch, Grow, or Transform — is scoped around your specific goals during a free discovery call, so you get a proposal built for your business, not a generic package.",
  },
  {
    q: 'Can I move to a different tier later?',
    a: "Absolutely. You can move from Launch → Grow or Grow → Transform at any time. We'll revisit your goals on a quick call and scope the next phase together — no restart required.",
  },
  {
    q: 'How long does it take to launch?',
    a: "Most websites are designed, built, and live within a week. Projects with custom integrations may take up to 2 weeks. We move fast without cutting corners.",
  },
  {
    q: 'What is SEO / GEO Optimization?',
    a: "SEO helps you rank on Google. GEO (Generative Engine Optimization) is the newer layer — optimizing your content so AI tools like ChatGPT, Perplexity, and Google AI Overviews surface and recommend your business. Both are included from day one.",
  },
  {
    q: 'What makes a website AI-Friendly?',
    a: "AI-Friendly means your site is structured so AI assistants can read, understand, and cite it. This includes schema markup, clear entity definitions, fast load times, and content written to answer real queries — not keyword-stuffed pages.",
  },
]

function Pricing({ onContact }: { onContact: (service?: string) => void }) {
  const [showCompare, setShowCompare] = useState(false)

  return (
    <section className="py-[120px] border-t border-white/[0.06] relative overflow-hidden" id="pricing">
      {/* Dot-grid background — 21st.dev pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.045) 1.5px, transparent 0)',
          backgroundSize: '30px 30px',
        }}
      />
      {/* Ambient glows */}
      <div className="absolute -top-[15%] left-[6%] w-[650px] h-[650px] rounded-full bg-[#2563EB]/[0.07] blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-[15%] right-[6%] w-[650px] h-[650px] rounded-full bg-gold-400/[0.05] blur-[130px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-8 relative z-10">

        {/* Header */}
        <motion.div
          className="mb-20 text-center max-w-[580px] mx-auto"
          initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp} transition={{ duration: 0.65, ease }}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-6 h-px bg-gold-300/50" />
            <p className="text-[11.5px] font-semibold tracking-[0.15em] uppercase text-gold-300">Pricing</p>
            <span className="w-6 h-px bg-gold-300/50" />
          </div>
          <h2 className={cn('text-[clamp(36px,5vw,58px)] font-bold leading-[1.04] tracking-[-0.03em] text-ink-0 mb-5', heading)}>
            Solutions Built Around Your Business.
          </h2>
          <p className="text-[17px] text-ink-2 leading-[1.8]">
            No fixed packages. Every engagement starts with a free discovery call, so what you get is scoped and customized to your business — not a one-size-fits-all rate card.
          </p>
        </motion.div>

        {/* Pricing Cards — glassmorphism, floating badge, gradient checks */}
        <motion.div
          className="grid grid-cols-3 gap-5 max-lg:grid-cols-1 max-lg:max-w-[420px] max-lg:mx-auto mb-24"
          initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer(0.12)}
        >
          {PLANS.map((plan) => (
            <motion.div
              key={plan.id}
              variants={fadeUp}
              transition={{ duration: 0.6, ease }}
              className="relative"
            >
              {/* Floating pill badge — 21st.dev style */}
              {plan.badge && (
                <div className="absolute -top-[18px] left-1/2 -translate-x-1/2 z-20">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[10.5px] font-bold tracking-[0.10em] uppercase bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white shadow-[0_4px_20px_rgba(59,130,246,0.55)]">
                    {plan.badge}
                  </span>
                </div>
              )}

              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.22, ease } }}
                className={cn(
                  'relative h-full flex flex-col overflow-hidden rounded-2xl transition-all duration-300 backdrop-blur-xl',
                  plan.featured
                    ? 'bg-gradient-to-br from-[#1a3561]/70 via-[#0f1f3d]/60 to-[#0a0f1e]/50 border border-[#3B82F6]/45 shadow-[0_0_80px_rgba(59,130,246,0.18),0_0_0_1px_rgba(59,130,246,0.08)]'
                    : 'bg-gradient-to-br from-white/[0.055] via-white/[0.025] to-transparent border border-white/[0.08] hover:border-white/[0.16] hover:shadow-[0_20px_60px_rgba(0,0,0,0.30)]'
                )}
              >
                {plan.featured && (
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/70 to-transparent" />
                )}
                {/* Inner corner glow for featured card */}
                {plan.featured && (
                  <div className="absolute top-0 right-0 w-52 h-52 bg-[#3B82F6]/[0.07] blur-[70px] -mr-14 -mt-14 pointer-events-none rounded-full" />
                )}

                <div className="p-8 flex flex-col flex-1 relative z-10">
                  <div className="flex items-center gap-3 flex-wrap mb-3">
                    <h3 className={cn(
                      'text-[34px] font-bold tracking-[-0.02em] leading-none',
                      plan.featured ? 'text-white' : 'text-ink-0',
                      heading
                    )}>
                      {plan.name}
                    </h3>
                    {plan.cadence && (
                      <span className={cn(
                        'text-[10.5px] font-bold tracking-[0.10em] uppercase px-2.5 py-1 rounded-full border',
                        plan.featured
                          ? 'bg-[#60A5FA]/[0.12] text-[#60A5FA] border-[#60A5FA]/30'
                          : 'bg-gold-400/[0.10] text-gold-300 border-gold-400/25'
                      )}>
                        {plan.cadence}
                      </span>
                    )}
                  </div>

                  <p className={cn(
                    'text-[14.5px] font-semibold tracking-[-0.01em] mb-4',
                    plan.featured ? 'text-[#60A5FA]' : 'text-gold-300'
                  )}>
                    {plan.title}
                  </p>

                  <p className="text-[15px] text-ink-2 leading-[1.7] mb-4">{plan.tagline}</p>

                  <p className={cn(
                    'text-[12.5px] font-semibold leading-[1.6] mb-7',
                    plan.featured ? 'text-[#60A5FA]' : 'text-gold-300'
                  )}>
                    {plan.customNote}
                  </p>

                  <div className="h-px bg-white/[0.06] mb-4" />

                  {plan.inherit && (
                    <p className="text-[11.5px] font-semibold text-[#60A5FA] mb-3">{plan.inherit}</p>
                  )}

                  {/* Feature list — gradient circle check icons from 21st.dev */}
                  <ul className="flex flex-col gap-2 mb-5 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <span className={cn(
                          'w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-[2px]',
                          plan.featured
                            ? 'bg-gradient-to-br from-[#3B82F6] to-[#2563EB] shadow-[0_0_8px_rgba(59,130,246,0.35)]'
                            : 'bg-gradient-to-br from-gold-400/25 to-gold-300/15 border border-gold-400/[0.22]'
                        )}>
                          <Check className={cn('w-2 h-2', plan.featured ? 'text-white' : 'text-gold-300')} strokeWidth={3} />
                        </span>
                        <span className="text-[12.5px] text-ink-2 leading-[1.6]">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    onClick={() => onContact(plan.service)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className={cn(
                      'inline-flex items-center justify-center gap-2 h-10 rounded-xl text-[13px] font-semibold transition-all w-full',
                      plan.featured
                        ? 'bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white shadow-[0_0_28px_rgba(59,130,246,0.40)] hover:shadow-[0_0_40px_rgba(59,130,246,0.55)]'
                        : 'bg-white/[0.06] border border-white/[0.12] text-ink-0 hover:bg-white/[0.10] hover:border-white/[0.20]'
                    )}
                  >
                    {plan.cta}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Compare Plans button */}
        <motion.div
          className="flex justify-center mb-24"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease }}
        >
          <motion.button
            onClick={() => setShowCompare(true)}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.18, ease }}
            className="inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-white/[0.06] border border-white/[0.14] text-ink-0 text-[13.5px] font-medium hover:bg-white/[0.10] hover:border-white/[0.22] transition-all"
          >
            <LayoutGrid className="w-3.5 h-3.5 text-gold-300" />
            Compare Plans
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {showCompare && <ComparePlansModal onClose={() => setShowCompare(false)} />}
        </AnimatePresence>

        {/* FAQ */}
        <motion.div
          className="mb-24 max-w-[720px] mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease }}
        >
          <div className="text-center mb-10">
            <p className="text-[11.5px] font-semibold tracking-[0.15em] uppercase text-gold-300 mb-3">FAQ</p>
            <h3 className={cn('text-[clamp(26px,3.5vw,38px)] font-bold tracking-[-0.03em] text-ink-0', heading)}>
              Common Questions
            </h3>
          </div>

          <div className="backdrop-blur-sm bg-white/[0.02] border border-white/[0.07] rounded-2xl px-8 max-sm:px-5">
            {FAQS.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="relative rounded-2xl overflow-hidden text-center px-10 py-16 max-sm:px-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a3561]/60 via-[#0F172A]/80 to-[#0F172A]/90 border border-[#3B82F6]/20 rounded-2xl" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/60 to-transparent" />
          <div className="absolute -top-[40%] right-0 w-[500px] h-[500px] rounded-full bg-[#3B82F6]/[0.07] blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <p className="text-[11.5px] font-semibold tracking-[0.15em] uppercase text-[#60A5FA] mb-4">Get Started</p>
            <h3 className={cn('text-[clamp(28px,4vw,46px)] font-bold tracking-[-0.03em] text-ink-0 mb-4 leading-[1.1]', heading)}>
              Ready to Grow Your Business?
            </h3>
            <p className="text-[16px] text-ink-2 leading-[1.75] max-w-[460px] mx-auto mb-9">
              Book a free strategy call and let&rsquo;s build a custom growth plan for your business.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <motion.button
                onClick={() => onContact()}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.18, ease }}
                className="inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white text-[13.5px] font-semibold hover:shadow-[0_0_40px_rgba(59,130,246,0.55)] transition-all shadow-[0_0_30px_rgba(59,130,246,0.40)]"
              >
                <Phone className="w-3.5 h-3.5" />
                Book Free Consultation
              </motion.button>
              <motion.button
                onClick={() => onContact()}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.18, ease }}
                className="inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-white/[0.06] border border-white/[0.14] text-ink-0 text-[13.5px] font-medium hover:bg-white/[0.10] transition-all"
              >
                <FileText className="w-3.5 h-3.5" />
                Get Custom Proposal
              </motion.button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function ContactSection() {
  return (
    <section className="relative border-t border-white/[0.06] overflow-hidden min-h-[860px] flex items-center bg-[#0F172A]" id="contact">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Globe />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_75%_at_65%_50%,transparent_35%,#0F172A_80%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#0F172A_78%)]" />
      </div>

      <div className="relative z-10 w-full max-w-[720px] mx-auto px-8 py-[120px]">
        <motion.div
          className="text-center mb-12"
          initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp} transition={{ duration: 0.65, ease }}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-6 h-px bg-gold-300/50" />
            <p className="text-[11.5px] font-semibold tracking-[0.15em] uppercase text-gold-300">Get in Touch</p>
            <span className="w-6 h-px bg-gold-300/50" />
          </div>
          <h2 className={cn('text-[clamp(38px,6vw,62px)] font-bold leading-[1.04] tracking-[-0.03em] text-ink-0 mb-5', heading)}>
            Ready to Grow<br />Your Business?
          </h2>
          <p className="text-[17.5px] text-ink-2 leading-[1.75] max-w-[440px] mx-auto">
            Let&rsquo;s build something that works. Get a free audit — no commitment, no pressure.
          </p>
        </motion.div>

        <motion.div
          className="bg-surface-0/80 backdrop-blur-2xl border border-white/[0.08] rounded-2xl p-10 max-sm:p-6"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease, delay: 0.15 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  )
}

// ─── Compare Plans Modal ──────────────────────────────────────────────────────
function ComparePlansModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      <motion.div
        className="relative z-10 w-full max-w-2xl bg-surface-1 border border-white/[0.10] rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.7)] max-h-[88vh] flex flex-col overflow-hidden"
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.24, ease }}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />

        <div className="px-8 pt-7 pb-5 border-b border-white/[0.06] flex items-start justify-between shrink-0">
          <div>
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-gold-300 mb-1">Plans</p>
            <h3 className="text-[20px] font-bold tracking-[-0.02em] text-ink-0 leading-tight font-[family-name:var(--font-heading)]">
              Everything Side by Side
            </h3>
          </div>
          <button
            onClick={onClose}
            className="relative z-10 w-8 h-8 flex items-center justify-center rounded-lg text-ink-3 hover:text-ink-0 hover:bg-white/[0.08] transition-all ml-4 mt-0.5 shrink-0"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="overflow-y-auto">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse">
              <thead>
                <tr className="border-b border-white/[0.08] bg-white/[0.03] sticky top-0">
                  <th className="text-left px-6 py-4 text-[11px] font-bold tracking-[0.12em] uppercase text-ink-3">Feature</th>
                  <th className="px-4 py-4 text-center text-[11px] font-bold tracking-[0.12em] uppercase text-gold-300">Launch</th>
                  <th className="px-4 py-4 text-center text-[11px] font-bold tracking-[0.12em] uppercase text-[#60A5FA]">Grow</th>
                  <th className="px-4 py-4 text-center text-[11px] font-bold tracking-[0.12em] uppercase text-gold-300">Transform</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row, i) => (
                  <tr
                    key={row.label}
                    className={cn(
                      'border-b border-white/[0.05] last:border-0 transition-colors hover:bg-white/[0.025]',
                      i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.01]'
                    )}
                  >
                    <td className="px-6 py-3.5 text-[13.5px] text-ink-2">{row.label}</td>
                    {(['launch', 'grow', 'transform'] as const).map((key) => (
                      <td key={key} className="px-4 py-3.5 text-center">
                        {row[key] ? (
                          <span className={cn(
                            'inline-flex w-[20px] h-[20px] rounded-full items-center justify-center',
                            key === 'grow'
                              ? 'bg-gradient-to-br from-[#3B82F6] to-[#2563EB] shadow-[0_0_6px_rgba(59,130,246,0.35)]'
                              : 'bg-gradient-to-br from-gold-400/25 to-gold-300/15 border border-gold-400/[0.22]'
                          )}>
                            <Check className={cn('w-3 h-3', key === 'grow' ? 'text-white' : 'text-gold-300')} strokeWidth={3} />
                          </span>
                        ) : (
                          <Minus className="w-4 h-4 text-ink-3/35 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ─── Contact Modal ────────────────────────────────────────────────────────────
function ContactModal({ onClose, defaultService }: { onClose: () => void; defaultService?: string }) {
  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Backdrop — sibling so clicks inside modal never reach it */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      <motion.div
        className="relative z-10 w-full max-w-lg bg-surface-1 border border-white/[0.10] rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.7)] max-h-[90vh] flex flex-col overflow-hidden"
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.24, ease }}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />

        <div className="px-8 pt-7 pb-5 border-b border-white/[0.06] flex items-start justify-between shrink-0">
          <div>
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-gold-300 mb-1">Free Strategy Call</p>
            <h3 className={cn('text-[20px] font-bold tracking-[-0.02em] text-ink-0 leading-tight', heading)}>
              Let&rsquo;s Build Your Growth Plan
            </h3>
            <p className="text-[13px] text-ink-2 mt-1">No commitment &mdash; free audit included.</p>
          </div>
          <button
            onClick={onClose}
            className="relative z-10 w-8 h-8 flex items-center justify-center rounded-lg text-ink-3 hover:text-ink-0 hover:bg-white/[0.08] transition-all ml-4 mt-0.5 shrink-0"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="px-8 py-7 overflow-y-auto">
          <ContactForm defaultService={defaultService} />
        </div>
      </motion.div>
    </motion.div>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
const FOOTER_LINKS: Record<string, { label: string; href: string; external?: boolean }[]> = {
  Services: [
    { label: 'Web Design',            href: '/services/web-design' },
    { label: 'Paid Ads',              href: '/services/paid-ads'   },
    { label: 'AI Business Integration', href: '#contact'           },
  ],
  Company: [
    { label: 'Team',    href: '#team'    },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ],
  Resources: [
    { label: 'Free Audit', href: '#contact' },
  ],
}

function FooterContactModal({ onClose }: { onClose: () => void }) {
  const [form, setForm]     = useState({ name: '', subject: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  function set(field: string) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(prev => ({ ...prev, [field]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/support', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const inputCls = 'w-full bg-white/[0.04] border border-white/[0.10] rounded-lg px-4 py-3 text-[14px] text-ink-0 placeholder:text-ink-3 outline-none transition-all hover:bg-white/[0.06] focus:border-gold-400/50 focus:ring-2 focus:ring-gold-400/10'

  return (
    <motion.div
      className="fixed inset-0 z-[60]"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Widget — anchored to bottom-right */}
      <motion.div
        className="absolute bottom-6 right-6 w-[320px] bg-surface-1 border border-white/[0.12] rounded-2xl shadow-[0_24px_64px_rgba(0,0,0,0.6)] overflow-hidden"
        initial={{ opacity: 0, x: 40, y: 16 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: 40, y: 16 }}
        transition={{ duration: 0.26, ease }}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />

        <div className="px-5 pt-5 pb-4 border-b border-white/[0.06] flex items-start justify-between">
          <div>
            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-gold-300 mb-1">Support</p>
            <h3 className={cn('text-[17px] font-bold tracking-[-0.02em] text-ink-0 leading-tight', heading)}>Get in Touch</h3>
            <p className="text-[12px] text-ink-2 mt-0.5">We&rsquo;ll get back to you within 24 hours.</p>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 flex items-center justify-center rounded-lg text-ink-3 hover:text-ink-0 hover:bg-white/[0.08] transition-all shrink-0 ml-3 mt-0.5"
            aria-label="Close"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="px-5 py-5">
          {status === 'sent' ? (
            <div className="flex flex-col items-start gap-3 py-2">
              <div className="w-9 h-9 rounded-full border-2 border-gold-300 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-gold-300" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-[15px] font-bold text-ink-0">Message sent!</p>
                <p className="text-[12px] text-ink-2 mt-1">We&rsquo;ll review your message and follow up shortly.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-semibold tracking-[0.04em] text-ink-2">Name</label>
                <input required placeholder="Your full name" value={form.name} onChange={set('name')} className={inputCls} />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-semibold tracking-[0.04em] text-ink-2">Subject</label>
                <input required placeholder="What's this about?" value={form.subject} onChange={set('subject')} className={inputCls} />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-semibold tracking-[0.04em] text-ink-2">Email</label>
                <input required type="email" placeholder="you@example.com" value={form.email} onChange={set('email')} className={inputCls} />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-semibold tracking-[0.04em] text-ink-2">Message</label>
                <textarea required placeholder="How can we help?" value={form.message} onChange={set('message')} rows={3} className={`${inputCls} resize-none`} />
              </div>
              {status === 'error' && (
                <p className="text-[11px] text-red-400 bg-red-600/10 border border-red-600/20 rounded-lg px-3 py-2">
                  Something went wrong — please try again.
                </p>
              )}
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15, ease }}
                className="h-10 rounded-xl bg-gold-400 text-white text-[13px] font-semibold hover:bg-gold-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(37,99,235,0.3)]"
              >
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </motion.button>
            </form>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

function Footer() {
  const [showModal, setShowModal] = useState(false)

  return (
    <footer className="border-t border-white/[0.06] bg-[#111827]">
      <div className="max-w-[1200px] mx-auto px-8 py-16">
        <div className="grid grid-cols-[240px_1fr] gap-16 mb-14 max-md:grid-cols-1 max-md:gap-10">

          <div>
            <a href="/" className="inline-flex items-center gap-2.5 mb-4">
              <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true" className="shrink-0">
                <defs>
                  <linearGradient id="footer-arc-g" x1="16" y1="2" x2="30" y2="16" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#1e3a5f"/>
                    <stop offset="100%" stopColor="#2563EB"/>
                  </linearGradient>
                </defs>
                <path d="M 16 2 A 14 14 0 1 0 30 16" stroke="url(#footer-arc-g)" strokeWidth="3" strokeLinecap="round" fill="none"/>
                <circle cx="16" cy="2" r="2.2" fill="#0EA5E9"/>
                <circle cx="2" cy="16" r="2.2" fill="#0EA5E9"/>
                <circle cx="16" cy="30" r="2.2" fill="#0EA5E9"/>
                <circle cx="16" cy="16" r="1.8" fill="#0EA5E9"/>
                <line x1="17.8" y1="16" x2="26" y2="16" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className={cn('text-[15px] font-bold text-ink-0', heading)}>OmniGrid Digital</span>
            </a>
            <p className="text-[13.5px] text-ink-3 leading-[1.7] max-w-[200px]">
              Full-service digital marketing for local businesses in Toronto.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 max-sm:grid-cols-2">
            {Object.entries(FOOTER_LINKS).map(([group, links]) => (
              <div key={group}>
                <p className="text-[11px] font-bold tracking-[0.13em] uppercase text-ink-3 mb-4">{group}</p>
                <ul className="flex flex-col gap-2.5">
                  {links.map(({ label, href, external }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target={external ? '_blank' : undefined}
                        rel={external ? 'noopener noreferrer' : undefined}
                        className="text-[13.5px] text-ink-2 hover:text-ink-0 transition-colors"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
                {group === 'Resources' && (
                  <button
                    onClick={() => setShowModal(true)}
                    className="mt-2.5 text-[13.5px] text-gold-300 hover:text-gold-400 transition-colors"
                  >
                    zaink@omnigriddigital.ca
                  </button>
                )}
              </div>
            ))}
          </div>

        </div>

        <div className="border-t border-white/[0.06] pt-8 flex items-center justify-between flex-wrap gap-3">
          <span className="text-[12.5px] text-ink-3">
            &copy; {new Date().getFullYear()} OmniGrid Digital. Toronto, ON. All rights reserved.
          </span>
          <div className="flex items-center gap-5">
            <a href="/privacy-policy.html" className="text-[12.5px] text-ink-3 hover:text-ink-2 transition-colors">Privacy Policy</a>
            <a href="/terms.html" className="text-[12.5px] text-ink-3 hover:text-ink-2 transition-colors">Terms</a>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showModal && <FooterContactModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </footer>
  )
}
