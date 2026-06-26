'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import ContactForm from './contact-form'
import { Nav } from '@/components/nav'
import { cn } from '@/lib/utils'
import { ArrowRight, X, TrendingUp, Globe2, Zap, BarChart3, CheckCircle2, Check, Minus, ChevronDown, Phone, FileText, MapPin, ShieldCheck } from 'lucide-react'

const Globe = dynamic(() => import('./globe').then(m => m.Globe), { ssr: false })

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
  const openContact = () => setShowContact(true)

  return (
    <>
      <PageBackground />
      <Nav />
      <main>
        <Hero onContact={openContact} />
        <Ticker />
        <Stats />
        <Services />
        <WhyUs />
        <Pricing onContact={openContact} />
        <ContactSection />
      </main>
      <Footer />
      <AnimatePresence>
        {showContact && <ContactModal onClose={() => setShowContact(false)} />}
      </AnimatePresence>
    </>
  )
}

// ─── Page Background ──────────────────────────────────────────────────────────
const C_STARS: [number, number, number, number][] = [
  [88,42,0.8,0.35],[145,78,1.1,0.45],[210,35,0.7,0.3],[290,112,0.9,0.4],[365,55,1.2,0.5],
  [435,145,0.8,0.35],[510,28,0.9,0.4],[592,165,1,0.45],[648,68,0.8,0.3],[715,135,1.1,0.5],
  [780,42,0.7,0.35],[852,168,0.9,0.4],[920,55,1.2,0.45],[995,128,0.8,0.35],[1058,72,1,0.4],
  [1125,148,0.9,0.5],[1195,38,0.8,0.35],[1270,125,1.1,0.45],[1340,68,0.7,0.3],[1410,155,0.9,0.4],
  [62,225,1,0.4],[148,305,0.8,0.35],[225,258,1.1,0.45],[318,348,0.7,0.3],[392,275,0.9,0.4],
  [468,338,1.2,0.5],[545,248,0.8,0.35],[622,315,1,0.45],[698,258,0.9,0.4],[772,368,0.8,0.35],
  [928,348,0.7,0.3],[1005,225,0.9,0.4],[1082,298,1,0.45],[1235,358,1.1,0.4],[1312,238,0.7,0.3],
  [1388,325,0.9,0.45],[42,455,0.9,0.4],[125,538,0.8,0.35],[198,478,1.1,0.45],[275,558,0.7,0.3],
  [355,488,0.9,0.4],[428,565,1,0.45],[505,438,0.8,0.35],[580,542,1.1,0.4],[658,468,0.7,0.3],
  [735,555,0.9,0.45],[812,448,1.2,0.5],[888,528,0.8,0.35],[962,488,1,0.4],[1038,568,0.9,0.45],
  [1115,452,0.8,0.35],[1192,548,1.1,0.4],[1268,472,0.7,0.3],[1345,558,0.9,0.4],[1415,498,1,0.45],
  [75,668,0.8,0.35],[155,748,1.1,0.45],[232,695,0.9,0.4],[308,775,0.7,0.3],[388,718,1,0.45],
  [465,798,0.8,0.35],[545,672,0.9,0.4],[622,758,1.1,0.5],[698,702,0.7,0.35],[775,782,1,0.4],
  [852,658,0.8,0.35],[928,738,0.9,0.45],[1082,778,0.8,0.35],[1158,715,1,0.4],[1235,798,0.9,0.45],
  [1312,672,0.7,0.3],[1388,752,1.1,0.4],[1420,842,0.8,0.35],[165,435,0.7,0.3],[490,345,0.9,0.4],
  [1050,195,0.8,0.35],[1430,385,0.7,0.3],[30,148,1,0.4],[1440,248,0.8,0.35],[720,855,1,0.4],
]

const C_HUBS: [number, number, number, string][] = [
  [145,78,2.2,'#0EA5E9'],
  [365,55,2.5,'#2563EB'],
  [510,28,2,'#0EA5E9'],
  [715,135,2.8,'#2563EB'],
  [920,55,2.2,'#0EA5E9'],
  [1125,148,2.5,'#2563EB'],
  [1340,68,2,'#0EA5E9'],
  [225,258,2.2,'#2563EB'],
  [545,248,2.8,'#0EA5E9'],
  [848,285,2.2,'#2563EB'],
  [1158,265,2.5,'#0EA5E9'],
  [1388,325,2,'#2563EB'],
  [388,718,2,'#2563EB'],
  [698,702,2.5,'#0EA5E9'],
  [1005,688,2.2,'#2563EB'],
]

const C_EDGES: [number, number][] = [
  [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],
  [0,7],[7,8],[8,9],[9,10],[10,11],
  [1,7],[3,8],[4,9],[5,10],
  [8,12],[9,13],[10,14],[12,13],[13,14],
]

function PageBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Ambient color blobs */}
      <div className="absolute -top-[30%] -left-[10%] w-[800px] h-[800px] rounded-full bg-[#2563EB]/[0.14] blur-[180px]" />
      <div className="absolute -top-[10%] right-[-18%] w-[700px] h-[700px] rounded-full bg-[#0EA5E9]/[0.09] blur-[160px]" />
      <div className="absolute top-[55%] right-[-8%] w-[600px] h-[600px] rounded-full bg-[#2563EB]/[0.07] blur-[140px]" />
      <div className="absolute top-[65%] -left-[5%] w-[500px] h-[500px] rounded-full bg-[#0EA5E9]/[0.06] blur-[150px]" />

      {/* Constellation layer */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {C_STARS.map(([cx, cy, r, o], i) => (
          <circle key={i} cx={cx} cy={cy} r={r} fill="white" fillOpacity={o} />
        ))}
        {C_EDGES.map(([a, b], i) => (
          <line
            key={i}
            x1={C_HUBS[a][0]} y1={C_HUBS[a][1]}
            x2={C_HUBS[b][0]} y2={C_HUBS[b][1]}
            stroke="#3B82F6"
            strokeWidth="0.6"
            strokeOpacity="0.2"
          />
        ))}
        {C_HUBS.map(([cx, cy, r, color], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r={r + 8} fill={color} fillOpacity="0.04" />
            <circle cx={cx} cy={cy} r={r + 3} fill={color} fillOpacity="0.12" />
            <circle cx={cx} cy={cy} r={r} fill={color} fillOpacity="0.65" />
          </g>
        ))}
      </svg>
    </div>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
const FLOAT_CARDS = [
  { label: '+42 Leads',         sub: 'This Week',      icon: TrendingUp,   color: 'text-gold-300' },
  { label: 'ROAS 5.8×',        sub: 'Google Ads',     icon: BarChart3,    color: 'text-gold-400' },
  { label: 'Speed 98',          sub: 'PageSpeed Score',icon: Zap,          color: 'text-gold-300' },
  { label: '+36% Conv.',        sub: 'Landing Page',   icon: CheckCircle2, color: 'text-gold-400' },
]

function Hero({ onContact }: { onContact: () => void }) {
  return (
    <section className="relative min-h-svh flex items-center pt-[68px] overflow-hidden">
      <div className="relative z-10 max-w-[1200px] mx-auto px-8 py-24 w-full">
        <div className="grid grid-cols-[1fr_480px] gap-16 items-center max-lg:grid-cols-1 max-lg:gap-14">

          {/* Left — copy */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease }}
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-300 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-300" />
              </span>
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-ink-1">Toronto, ON</span>
              <span className="w-px h-3.5 bg-ink-3/40 shrink-0" />
              <span className="text-[11px] font-medium tracking-[0.06em] text-ink-3">Digital Marketing Agency</span>
            </motion.div>

            <motion.h1
              className={cn('text-[clamp(44px,7vw,88px)] font-bold leading-[1.05] tracking-[-0.03em] text-ink-0 mb-6', heading)}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease, delay: 0.15 }}
            >
              Turn More Clicks<br />
              <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
                Into Customers.
              </span>
            </motion.h1>

            <motion.p
              className="text-[18px] text-ink-1 leading-[1.75] max-w-[500px] mb-10"
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.3 }}
            >
              We help Toronto businesses grow through high-converting websites, Google Ads, Meta Ads,
              and digital marketing systems designed to generate real revenue.
            </motion.p>

            <motion.div
              className="flex items-center gap-3 flex-wrap mb-16"
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.42 }}
            >
              <motion.button
                onClick={onContact}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.18, ease }}
                className="inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-gold-400 text-white text-[14px] font-semibold shadow-[0_0_36px_rgba(37,99,235,0.60),0_0_72px_rgba(14,165,233,0.25)] hover:bg-gold-500 transition-all"
              >
                Book a Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.a
                href="/services/web-design"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.18, ease }}
                className="inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-white/[0.06] border border-white/[0.12] text-ink-0 text-[14px] font-medium hover:bg-white/[0.10] transition-all"
              >
                View Our Work
              </motion.a>
            </motion.div>

          </div>

          {/* Right — metric cards */}
          <motion.div
            className="relative h-[420px]"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.5 }}
          >
            {/* Central dashboard card */}
            <div className="absolute inset-[20px] rounded-2xl bg-surface-2/80 backdrop-blur-xl border border-white/[0.08] overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
              <div className="p-5 border-b border-white/[0.06]">
                <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-ink-3">Campaign Dashboard</p>
              </div>
              <div className="p-5 grid grid-cols-2 gap-3">
                {[
                  { label: 'Leads Generated', value: '248', delta: '+18%' },
                  { label: 'ROAS',            value: '5.8×', delta: '+0.4' },
                  { label: 'Conv. Rate',      value: '4.2%', delta: '+36%' },
                  { label: 'Cost Per Lead',   value: '$12',  delta: '-22%' },
                ].map((m) => (
                  <div key={m.label} className="bg-white/[0.04] rounded-xl p-3.5">
                    <p className="text-[10.5px] text-ink-3 mb-1.5">{m.label}</p>
                    <p className={cn('text-[22px] font-bold tracking-tight text-ink-0', heading)}>{m.value}</p>
                    <p className="text-[11px] text-gold-300 font-semibold mt-0.5">{m.delta}</p>
                  </div>
                ))}
              </div>
              {/* Bar chart shimmer */}
              <div className="px-5 pb-5">
                <div className="flex items-end gap-1.5 h-12">
                  {[40, 55, 35, 70, 50, 80, 60, 90, 65, 85, 72, 95].map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-sm bg-gradient-to-t from-gold-400/60 to-gold-300/40"
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 0.8 + i * 0.05, duration: 0.5, ease }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating metric chips */}
            {FLOAT_CARDS.map((card, i) => {
              const positions = [
                'top-0 -left-6',
                'top-0 -right-6',
                'bottom-8 -left-6',
                'bottom-8 -right-6',
              ]
              const Icon = card.icon
              return (
                <motion.div
                  key={card.label}
                  className={cn('absolute', positions[i])}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                >
                  <div className="flex items-center gap-2.5 bg-surface-2/90 backdrop-blur-xl border border-white/[0.12] rounded-xl px-3.5 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                    <Icon className={cn('w-3.5 h-3.5 shrink-0', card.color)} />
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

// ─── Ticker + Stats ───────────────────────────────────────────────────────────
const TICKER_ITEMS = [
  'Google Ads', 'Meta Ads', 'TikTok Ads',
  'SEO Optimization', 'GEO Optimization', 'Web Design',
  'AI-Ready Websites', 'Landing Pages', 'Conversion Tracking',
  'Analytics Setup', 'Google Business Profile',
]

const STATS = [
  { value: '~1 Week', label: 'Average Launch Time' },
  { value: '100%',    label: 'Client Ownership'    },
  { value: 'Zero',    label: 'Long-Term Contracts' },
]

function Ticker() {
  return (
    <div className="border-b border-white/[0.05] py-4 overflow-hidden bg-white/[0.015]">
      <div className="flex animate-marquee whitespace-nowrap select-none">
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 mx-5 text-[11.5px] font-semibold tracking-[0.12em] uppercase text-ink-3">
            {item}
            <span className="w-1 h-1 rounded-full bg-gold-400/50 inline-block shrink-0" />
          </span>
        ))}
      </div>
    </div>
  )
}

function Stats() {
  return (
    <div className="relative border-b border-white/[0.06] overflow-hidden bg-white/[0.015]">
      <motion.div
        className="max-w-[1200px] mx-auto px-8"
        initial="hidden" whileInView="show" viewport={{ once: true }}
        variants={staggerContainer(0.1)}
      >
        <div className="grid grid-cols-3 max-sm:grid-cols-1">
          {STATS.map(({ value, label }, i) => (
            <motion.div
              key={label}
              variants={fadeUp}
              transition={{ duration: 0.5, ease }}
              className={cn(
                'px-8 py-10 flex flex-col gap-1.5',
                i > 0 && 'border-l border-white/[0.06] max-sm:border-l-0 max-sm:border-t max-sm:border-white/[0.06]',
                i === 0 && 'pl-0',
              )}
            >
              <p className={cn('text-[clamp(30px,4vw,44px)] font-bold tracking-[-0.04em] text-ink-0 leading-none', heading)}>
                {value}
              </p>
              <p className="text-[13px] text-ink-3 mt-1">{label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

// ─── Services ─────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    number: '01',
    title: 'Web Design & Development',
    slug: 'web-design',
    body: 'Custom websites built to convert visitors into customers. Fast, mobile-first, and built to last.',
    icon: Globe2,
    stat: '~1 wk',
    statLabel: 'Avg. Launch',
    features: ['AI-Friendly Structure', 'SEO & GEO Foundation', 'Mobile-First Design', 'Conversion Optimized', 'Analytics Setup'],
  },
  {
    number: '02',
    title: 'Paid Ads Management',
    slug: 'paid-ads',
    body: 'Google, Meta & TikTok campaigns managed for maximum ROI. Strategy, creatives, and optimization — all in one place.',
    icon: TrendingUp,
    stat: '5.8×',
    statLabel: 'Avg. ROAS',
    features: ['Google & Meta Ads', 'Ad Creative Design', 'Audience Research', 'Conversion Tracking', 'Weekly Optimization'],
  },
]

function Services() {
  return (
    <section className="py-[120px] border-t border-white/[0.06]" id="services">
      <div className="max-w-[1200px] mx-auto px-8">

        <motion.div
          className="mb-16 max-w-[600px]"
          initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp} transition={{ duration: 0.65, ease }}
        >
          <p className="text-[11.5px] font-semibold tracking-[0.15em] uppercase text-gold-300 mb-4">What We Do</p>
          <h2 className={cn('text-[clamp(36px,5vw,52px)] font-bold leading-[1.1] tracking-[-0.03em] text-ink-0 mb-5', heading)}>
            Everything Your Business Needs<br />
            <span className="text-ink-2">to Dominate Online.</span>
          </h2>
          <p className="text-[17px] text-ink-1 leading-[1.75]">
            Two core disciplines, one focused team, zero outsourcing.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-5 max-sm:grid-cols-1"
          initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer(0.13)}
        >
          {SERVICES.map((s) => {
            const Icon = s.icon
            return (
              <motion.a
                key={s.number}
                href={`/services/${s.slug}`}
                variants={fadeUp}
                transition={{ duration: 0.6, ease }}
                whileHover={{ y: -5, transition: { duration: 0.22, ease } }}
                className="group block bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden hover:bg-white/[0.05] hover:border-white/[0.14] transition-all duration-300"
              >
                {/* Card header with gradient */}
                <div className="relative p-8 pb-6 bg-gradient-to-br from-gold-400/[0.08] to-transparent border-b border-white/[0.06]">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gold-400/[0.12] border border-gold-400/[0.20] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-gold-400" strokeWidth={1.5} />
                    </div>
                    <div className="text-right">
                      <p className={cn('text-[30px] font-bold tracking-[-0.04em] text-ink-0 leading-none', heading)}>{s.stat}</p>
                      <p className="text-[11px] text-ink-3 mt-0.5">{s.statLabel}</p>
                    </div>
                  </div>
                  <h3 className={cn('text-[22px] font-semibold tracking-[-0.02em] text-ink-0 mb-2.5', heading)}>{s.title}</h3>
                  <p className="text-[14.5px] text-ink-2 leading-[1.75]">{s.body}</p>
                </div>

                {/* Card body */}
                <div className="p-8 pt-6">
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 mb-7">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-300/60 shrink-0" />
                        <span className="text-[13px] text-ink-2">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gold-400 group-hover:text-gold-300 transition-colors">
                    View Work <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
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
    <section className="py-[120px] border-t border-white/[0.06]" id="why-us">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-[360px_1fr] gap-20 items-start max-lg:grid-cols-1 max-lg:gap-12">

          <motion.div
            className="sticky top-[calc(68px+32px)] max-lg:static"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="text-[11.5px] font-semibold tracking-[0.15em] uppercase text-gold-300 mb-4">Why Us</p>
            <h2 className={cn('text-[clamp(32px,4.5vw,48px)] font-bold leading-[1.1] tracking-[-0.03em] text-ink-0 mb-5', heading)}>
              Not Another<br />Generic Agency.
            </h2>
            <p className="text-[16px] text-ink-2 leading-[1.75]">
              Two specialists. One focused mission. Results you can actually measure.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col"
            initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer(0.1, 0.05)}
          >
            {WHY_US.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.number}
                  variants={{ hidden: { opacity: 0, x: 24 }, show: { opacity: 1, x: 0 } }}
                  transition={{ duration: 0.55, ease }}
                  className={cn('py-9 group', i < WHY_US.length - 1 && 'border-b border-white/[0.06]')}
                >
                  <div className="flex items-start gap-5">
                    <div className="w-11 h-11 rounded-xl bg-gold-400/[0.10] border border-gold-400/[0.18] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-gold-400/[0.18] transition-colors duration-200">
                      <Icon className="w-[18px] h-[18px] text-gold-400" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className={cn('text-[20px] font-semibold tracking-[-0.02em] text-ink-0 mb-2', heading)}>{item.title}</h3>
                      <p className="text-[15px] text-ink-2 leading-[1.75]">{item.body}</p>
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
    price: '$1,000',
    cadence: 'CAD · One-Time',
    tagline: 'Perfect for businesses that need a professional, AI-ready website.',
    cta: 'Launch My Website',
    adSpendNote: null,
    featured: false,
    badge: '',
    inherit: null,
    features: [
      'Custom Website Design & Development',
      'SEO Foundation & GEO Optimization',
      'AI-Friendly Website Structure',
      'Fast Performance Optimization',
      'Google Analytics & Search Console',
      'Google Business Profile Setup',
      'Booking & Payment Integration',
      'SSL Security',
      '30 Days Post-Launch Support',
    ],
  },
  {
    id: 'starter',
    name: 'Starter',
    price: '$299',
    cadence: 'CAD/month + Ad Spend',
    tagline: 'Maintain your site and run ads on one platform to start generating leads.',
    cta: 'Start Growing',
    adSpendNote: 'Ad spend paid directly to Google or Meta by you.',
    featured: true,
    badge: 'Most Popular',
    inherit: 'Everything in Launch, plus:',
    features: [
      'Website Maintenance & Monthly Updates',
      'Ongoing SEO & GEO Optimization',
      'Monthly Performance Reports',
      'Google Ads or Meta Ads (1 Platform)',
      'Campaign Setup & Audience Research',
      'Conversion Tracking',
      'Ad Creative Design',
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '$599',
    cadence: 'CAD/month + Ad Spend',
    tagline: 'Dominate multiple platforms with advanced strategy and full-scale optimization.',
    cta: 'Scale My Business',
    adSpendNote: 'Ad spend paid directly to Google, Meta, or TikTok by you.',
    featured: false,
    badge: '',
    inherit: 'Everything in Starter, plus:',
    features: [
      'Google + Meta + TikTok Ads (up to 2 Platforms)',
      'Multi-Platform Campaign Management',
      'Advanced Audience & Competitor Research',
      'Unlimited Campaign Optimization',
      'Advanced A/B Testing',
      'Funnel & Landing Page Optimization',
      'Weekly Optimizations & Detailed ROI Reports',
      'Monthly Strategy Calls',
      'Priority Support',
    ],
  },
]

const COMPARE_ROWS: { label: string; launch: boolean; starter: boolean; growth: boolean }[] = [
  { label: 'Custom Website Design',          launch: true,  starter: true,  growth: true  },
  { label: 'SEO Foundation & GEO Optim.',    launch: true,  starter: true,  growth: true  },
  { label: 'AI-Friendly Website Structure',  launch: true,  starter: true,  growth: true  },
  { label: 'Performance Optimization',       launch: true,  starter: true,  growth: true  },
  { label: 'Google Analytics Setup',         launch: true,  starter: true,  growth: true  },
  { label: 'Google Business Profile',        launch: true,  starter: true,  growth: true  },
  { label: 'SSL Security',                   launch: true,  starter: true,  growth: true  },
  { label: 'Website Maintenance',            launch: false, starter: true,  growth: true  },
  { label: 'Monthly Updates',                launch: false, starter: true,  growth: true  },
  { label: 'Performance Reports',            launch: false, starter: true,  growth: true  },
  { label: 'Ads Management (1 Platform)',    launch: false, starter: true,  growth: true  },
  { label: 'Conversion Tracking',            launch: false, starter: true,  growth: true  },
  { label: 'Multi-Platform Ads (2+)',        launch: false, starter: false, growth: true  },
  { label: 'Advanced A/B Testing',           launch: false, starter: false, growth: true  },
  { label: 'Funnel & Landing Page Optim.',   launch: false, starter: false, growth: true  },
  { label: 'Monthly Strategy Calls',         launch: false, starter: false, growth: true  },
  { label: 'Priority Support',               launch: false, starter: false, growth: true  },
]

const FAQS = [
  {
    q: 'Do I own my website?',
    a: "Yes — 100%. Once your site is live, you own all the code, content, and assets. We never hold your website hostage.",
  },
  {
    q: 'What is ad spend and who pays it?',
    a: "Ad spend is the budget that goes directly to Google, Meta, or TikTok to run your ads. You pay the platforms from your own account — our monthly fee covers strategy, setup, management, and optimization only.",
  },
  {
    q: 'Can I upgrade my plan?',
    a: "Absolutely. You can move from Launch → Starter or Starter → Growth at any time. We'll adjust your billing and transition you seamlessly — no restart required.",
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

function FaqItem({ q, a }: { q: string; a: string }) {
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

function Pricing({ onContact }: { onContact: () => void }) {
  return (
    <section className="py-[120px] border-t border-white/[0.06]" id="pricing">
      <div className="max-w-[1200px] mx-auto px-8">

        {/* Header */}
        <motion.div
          className="mb-16 text-center max-w-[580px] mx-auto"
          initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp} transition={{ duration: 0.65, ease }}
        >
          <p className="text-[11.5px] font-semibold tracking-[0.15em] uppercase text-gold-300 mb-4">Pricing</p>
          <h2 className={cn('text-[clamp(36px,5vw,56px)] font-bold leading-[1.05] tracking-[-0.03em] text-ink-0 mb-5', heading)}>
            Simple, Transparent Pricing.
          </h2>
          <p className="text-[17px] text-ink-2 leading-[1.75]">
            No hidden fees. No surprises. Pick the plan that fits where your business is today.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-3 gap-5 max-lg:grid-cols-1 max-lg:max-w-[480px] max-lg:mx-auto mb-20"
          initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer(0.12)}
        >
          {PLANS.map((plan) => (
            <motion.div
              key={plan.id}
              variants={fadeUp}
              transition={{ duration: 0.6, ease }}
              whileHover={{ y: -6, transition: { duration: 0.22, ease } }}
              className={cn(
                'relative rounded-2xl flex flex-col overflow-hidden transition-all duration-300',
                plan.featured
                  ? 'bg-gradient-to-b from-[#1a3561]/70 to-[#111827]/70 border border-[#3B82F6]/40 shadow-[0_0_60px_rgba(59,130,246,0.12)]'
                  : 'bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.05] hover:border-white/[0.14]'
              )}
            >
              {plan.featured && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/80 to-transparent" />
              )}
              {plan.badge && (
                <div className="absolute top-0 right-0">
                  <span className="block text-[10px] font-bold tracking-[0.12em] uppercase bg-[#3B82F6] text-white px-3.5 py-1.5 rounded-bl-xl rounded-tr-2xl">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="p-8 flex flex-col flex-1">
                <p className={cn(
                  'text-[11px] font-bold tracking-[0.16em] uppercase mb-5',
                  plan.featured ? 'text-[#60A5FA]' : 'text-ink-3'
                )}>
                  {plan.name}
                </p>

                <div className="mb-1">
                  <span className={cn('text-[48px] font-bold tracking-[-0.04em] leading-none text-ink-0', heading)}>
                    {plan.price}
                  </span>
                </div>
                <p className="text-[12.5px] text-ink-3 font-medium mb-5 mt-1">{plan.cadence}</p>
                <p className="text-[14px] text-ink-2 leading-[1.65] mb-7">{plan.tagline}</p>
                <div className="h-px bg-white/[0.06] mb-6" />

                {plan.inherit && (
                  <p className="text-[12px] font-semibold text-[#60A5FA] mb-4">{plan.inherit}</p>
                )}

                <ul className="flex flex-col gap-3 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className={cn(
                        'w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0 mt-[2px]',
                        plan.featured ? 'bg-[#3B82F6]/20 text-[#60A5FA]' : 'bg-gold-300/10 text-gold-300'
                      )}>
                        <Check className="w-2.5 h-2.5" strokeWidth={3} />
                      </span>
                      <span className="text-[13.5px] text-ink-2 leading-[1.6]">{f}</span>
                    </li>
                  ))}
                </ul>

                {plan.adSpendNote && (
                  <p className="text-[12px] text-ink-3 italic mb-5 leading-[1.6] border-t border-white/[0.05] pt-4">
                    {plan.adSpendNote}
                  </p>
                )}

                <motion.button
                  onClick={onContact}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className={cn(
                    'inline-flex items-center justify-center gap-2 h-11 rounded-xl text-[13.5px] font-semibold transition-all w-full',
                    plan.featured
                      ? 'bg-[#3B82F6] text-white hover:bg-[#2563EB] shadow-[0_0_28px_rgba(59,130,246,0.40)]'
                      : 'bg-white/[0.06] border border-white/[0.12] text-ink-0 hover:bg-white/[0.10]'
                  )}
                >
                  {plan.cta}
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison table */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease }}
        >
          <div className="text-center mb-10">
            <p className="text-[11.5px] font-semibold tracking-[0.15em] uppercase text-gold-300 mb-3">Compare Plans</p>
            <h3 className={cn('text-[clamp(26px,3.5vw,38px)] font-bold tracking-[-0.03em] text-ink-0', heading)}>
              Everything Side by Side
            </h3>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/[0.08]">
            <div className="grid grid-cols-[1fr_90px_90px_90px] max-sm:grid-cols-[1fr_64px_64px_64px] bg-white/[0.04] border-b border-white/[0.08]">
              <div className="px-6 py-4 text-[11px] font-bold tracking-[0.12em] uppercase text-ink-3">Feature</div>
              {PLANS.map((p) => (
                <div key={p.id} className={cn(
                  'px-3 py-4 text-center text-[11px] font-bold tracking-[0.12em] uppercase',
                  p.featured ? 'text-[#60A5FA]' : 'text-ink-3'
                )}>
                  {p.name}
                </div>
              ))}
            </div>

            {COMPARE_ROWS.map((row, i) => (
              <div
                key={row.label}
                className={cn(
                  'grid grid-cols-[1fr_90px_90px_90px] max-sm:grid-cols-[1fr_64px_64px_64px] border-b border-white/[0.05] last:border-0 transition-colors hover:bg-white/[0.02]',
                  i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.01]'
                )}
              >
                <div className="px-6 py-3.5 text-[13.5px] text-ink-2">{row.label}</div>
                {(['launch', 'starter', 'growth'] as const).map((key) => (
                  <div key={key} className="flex items-center justify-center py-3.5">
                    {row[key] ? (
                      <span className="w-5 h-5 rounded-full bg-[#3B82F6]/15 flex items-center justify-center">
                        <Check className="w-3 h-3 text-[#3B82F6]" strokeWidth={3} />
                      </span>
                    ) : (
                      <Minus className="w-4 h-4 text-ink-3/40" />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          className="mb-20 max-w-[720px] mx-auto"
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

          <div className="bg-white/[0.02] border border-white/[0.07] rounded-2xl px-8 max-sm:px-5">
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
                onClick={onContact}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.18, ease }}
                className="inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-[#3B82F6] text-white text-[13.5px] font-semibold hover:bg-[#2563EB] transition-all shadow-[0_0_32px_rgba(59,130,246,0.40)]"
              >
                <Phone className="w-3.5 h-3.5" />
                Book Free Consultation
              </motion.button>
              <motion.button
                onClick={onContact}
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
    <section className="relative border-t border-white/[0.06] overflow-hidden min-h-[860px] flex items-center" id="contact">
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
          <p className="text-[11.5px] font-semibold tracking-[0.15em] uppercase text-gold-300 mb-5">Get in Touch</p>
          <h2 className={cn('text-[clamp(36px,6vw,60px)] font-bold leading-[1.05] tracking-[-0.03em] text-ink-0 mb-4', heading)}>
            Ready to Grow<br />Your Business?
          </h2>
          <p className="text-[17px] text-ink-2 leading-[1.7] max-w-[440px] mx-auto">
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

// ─── Contact Modal ────────────────────────────────────────────────────────────
function ContactModal({ onClose }: { onClose: () => void }) {
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
          <ContactForm />
        </div>
      </motion.div>
    </motion.div>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
const FOOTER_LINKS: Record<string, { label: string; href: string }[]> = {
  Services: [
    { label: 'Web Design', href: '/services/web-design' },
    { label: 'Paid Ads',   href: '/services/paid-ads'   },
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
    <footer className="border-t border-white/[0.06] bg-surface-1/80 backdrop-blur-xl">
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
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <a href={href} className="text-[13.5px] text-ink-2 hover:text-ink-0 transition-colors">
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
                    support@omnigriddigital.ca
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
            <a href="#" className="text-[12.5px] text-ink-3 hover:text-ink-2 transition-colors">Privacy Policy</a>
            <a href="#" className="text-[12.5px] text-ink-3 hover:text-ink-2 transition-colors">Terms</a>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showModal && <FooterContactModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </footer>
  )
}
