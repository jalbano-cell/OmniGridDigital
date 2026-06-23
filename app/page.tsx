'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import gsap from 'gsap'
import ContactForm from './contact-form'
import { Nav } from '@/components/nav'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { ArrowRight, X } from 'lucide-react'

const Globe = dynamic(() => import('./globe').then(m => m.Globe), { ssr: false })


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

export default function Home() {
  return (
    <>
      <PageBackground />
      <Nav />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Team />
        <Pricing />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

// ─── Page Background ──────────────────────────────────────────────────────────
function PageBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden" aria-hidden="true">
      <div className="absolute -top-[20%] -left-[12%] w-[900px] h-[900px] rounded-full bg-[#888888]/[0.14] blur-[180px]" />
      <div className="absolute -top-[10%] right-[-15%] w-[750px] h-[750px] rounded-full bg-[#505050]/[0.18] blur-[160px]" />
      <div className="absolute top-[45%] right-[-8%] w-[650px] h-[650px] rounded-full bg-[#d1d0d0]/[0.06] blur-[160px]" />
      <div className="absolute top-[62%] -left-[8%] w-[750px] h-[750px] rounded-full bg-[#505050]/[0.14] blur-[170px]" />
      <div className="absolute bottom-[-5%] left-[28%] w-[600px] h-[600px] rounded-full bg-[#888888]/[0.10] blur-[150px]" />
      <div className="absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay" />
    </div>
  )
}

// ─── Pulsing status dot ───────────────────────────────────────────────────────
function PulsingDot() {
  return (
    <span className="relative flex h-2 w-2 shrink-0">
      <motion.span
        className="absolute inline-flex h-full w-full rounded-full bg-gold-400"
        animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
      />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
    </span>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
const TRUST_NAMES = ['Maplewood Bistro', 'FitForge Gym', 'Ember & Grain', 'North & Main', 'Ridgeline Coffee Co.']

function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.to('[data-h="eyebrow"]',  { opacity: 1, y: 0, duration: 0.65 })
        .to('[data-h="headline"]', { opacity: 1, y: 0, duration: 0.85 }, '-=0.45')
        .to('[data-h="sub"]',      { opacity: 1, y: 0, duration: 0.6  }, '-=0.55')
        .to('[data-h="actions"]',  { opacity: 1, y: 0, duration: 0.5  }, '-=0.45')
        .to('[data-h="trust"]',    { opacity: 1, y: 0, duration: 0.5  }, '-=0.35')
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-svh flex items-center pt-[68px] overflow-hidden">
      <div className="relative z-10 max-w-[1200px] mx-auto px-8 py-24">

        <div data-h="eyebrow" className="gsap-will-animate flex items-center gap-2.5 mb-7">
          <PulsingDot />
          <p className="text-[11.5px] font-semibold tracking-[0.16em] uppercase text-gold-400">
            Full-Service Digital Marketing Agency &mdash; Toronto, ON
          </p>
        </div>

        <h1 data-h="headline" className="gsap-will-animate text-[clamp(52px,9vw,110px)] font-extrabold leading-none tracking-[-0.04em] text-gold-300 mb-7">
          We Don&rsquo;t Just Market<br />
          Your Business.<br />
          <span className="text-gold-200">We Build Its Future.</span>
        </h1>

        <p data-h="sub" className="gsap-will-animate max-w-[540px] text-lg text-ink-1 leading-[1.7] mb-10">
          Full-service digital marketing for local businesses &mdash; websites,
          ads, and content that actually converts.
        </p>

        <div data-h="actions" className="gsap-will-animate flex items-center gap-3 flex-wrap mb-20">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03, y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease }}
            className={cn(buttonVariants(), 'bg-gold-400 text-white hover:bg-gold-200 font-bold text-sm px-6 h-11 shadow-[0_0_0_0_rgba(136,136,136,0)] hover:shadow-[0_8px_32px_rgba(136,136,136,0.35)] transition-shadow duration-300')}
          >
            Get a Free Audit
          </motion.a>
        </div>

        <div data-h="trust" className="gsap-will-animate border-t border-gold-400/[0.08] pt-8">
          <span className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-ink-2 mb-4">
            Trusted by local businesses across Toronto
          </span>
          <div className="flex items-center gap-10 flex-wrap">
            {TRUST_NAMES.map((name) => (
              <span key={name} className="text-sm font-bold tracking-tight text-ink-2 transition-colors hover:text-ink-1 cursor-default">
                {name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

// ─── Services ─────────────────────────────────────────────────────────────────
const SERVICES = [
  { number: '01', title: 'Web Design',       slug: 'web-design',       body: 'Custom websites built to convert visitors into customers. Fast, mobile-first, and built to last.' },
  { number: '02', title: 'Paid Ads',         slug: 'paid-ads',         body: 'Meta and Google ad campaigns managed for maximum ROI. We handle the strategy, creative, and optimization.' },
  { number: '03', title: 'Video Production', slug: 'video-production', body: 'Professional video content shot and edited for ads, reels, and social media. Real production, real results.' },
]

function Services() {
  return (
    <section className="py-[120px] border-t border-gold-400/[0.07]" id="services">
      <div className="max-w-[1200px] mx-auto px-8">

        <motion.div
          className="mb-[72px] max-w-[600px]"
          initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp} transition={{ duration: 0.65, ease }}
        >
          <p className="text-[11.5px] font-semibold tracking-[0.15em] uppercase text-gold-400 mb-5">What We Do</p>
          <h2 className="text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-gold-300 mb-5">
            Everything Your Business Needs<br />
            <span className="text-gold-200">to Dominate Online.</span>
          </h2>
          <p className="text-[17px] text-ink-1 leading-[1.75] max-w-[520px]">
            Three core disciplines, one focused team, zero outsourcing.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1"
          initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer(0.13)}
        >
          {SERVICES.map((s) => (
            <motion.a
              key={s.number}
              href={`/services/${s.slug}`}
              variants={fadeUp}
              transition={{ duration: 0.6, ease }}
              whileHover={{ y: -7, transition: { duration: 0.25, ease } }}
              className="block"
            >
              <Card className="bg-gold-400/[0.03] backdrop-blur-md border border-gold-400/[0.10] rounded-2xl shadow-none relative overflow-hidden group transition-colors duration-300 hover:bg-gold-400/[0.07] hover:border-gold-400/[0.18] h-full">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-400" aria-hidden="true" />
                <CardContent className="p-10 flex flex-col gap-4">
                  <span className="text-[11px] font-bold tracking-[0.12em] text-gold-500">{s.number}</span>
                  <h3 className="text-lg font-bold tracking-[-0.02em] text-gold-200 leading-snug">{s.title}</h3>
                  <p className="text-[14.5px] text-ink-1 leading-[1.75]">{s.body}</p>
                  <span className="mt-auto pt-2 flex items-center gap-1.5 text-[12px] font-semibold text-gold-400 group-hover:text-gold-300 transition-colors">
                    View Work
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

// ─── Why Us ───────────────────────────────────────────────────────────────────
const WHY_US = [
  { number: '01', title: 'Local Focus',           body: 'We work exclusively with local businesses. We know your market because we live in it.' },
  { number: '02', title: 'Real Video Production', body: 'An in-house videographer means no outsourcing, no markups, better creative.' },
  { number: '03', title: 'Data-Driven Ads',       body: 'Every campaign is built on data. We test, optimize, and scale what works.' },
  { number: '04', title: 'Full Transparency',     body: 'Monthly reports in plain English. You always know exactly what your money is doing.' },
]

const slideFromRight = {
  hidden: { opacity: 0, x: 36 },
  show:   { opacity: 1, x: 0  },
}

const slideFromLeft = {
  hidden: { opacity: 0, x: -28 },
  show:   { opacity: 1, x: 0   },
}

function WhyUs() {
  return (
    <section className="py-[120px] border-t border-gold-400/[0.07]" id="why-us">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-[380px_1fr] gap-20 items-start max-lg:grid-cols-1 max-lg:gap-12">

          <motion.div
            className="sticky top-[calc(68px+32px)] max-lg:static"
            initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
            variants={slideFromLeft} transition={{ duration: 0.7, ease }}
          >
            <p className="text-[11.5px] font-semibold tracking-[0.15em] uppercase text-gold-400 mb-5">Why Us</p>
            <h2 className="text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-gold-300 mb-5">
              Not Another<br />
              <span className="text-gold-200">Generic Agency.</span>
            </h2>
            <p className="text-[17px] text-ink-1 leading-[1.75] max-w-[340px]">
              Four specialists. One focused mission. Results you can actually measure.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col"
            initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer(0.09, 0.05)}
          >
            {WHY_US.map((item, i) => (
              <motion.div
                key={item.number}
                variants={slideFromRight}
                transition={{ duration: 0.55, ease }}
              >
                <div className="py-10 first:pt-0 last:pb-0">
                  <div className="flex items-center gap-5 mb-5">
                    <Badge className="text-xs font-bold tracking-[0.1em] text-gold-400 bg-gold-400/[0.08] border border-gold-400/25 rounded-md px-3 py-1.5 h-auto">
                      {item.number}
                    </Badge>
                    <div className="flex-1 h-px bg-gold-400/[0.10]" aria-hidden="true" />
                  </div>
                  <h3 className="text-[22px] font-bold tracking-[-0.025em] text-gold-200 mb-3 leading-snug">{item.title}</h3>
                  <p className="text-[15px] text-ink-1 leading-[1.75]">{item.body}</p>
                </div>
                {i < WHY_US.length - 1 && <Separator className="bg-gold-400/[0.08]" />}
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

// ─── Team ─────────────────────────────────────────────────────────────────────
const TEAM = [
  { name: 'John Albano',     title: 'Founder & Tech Director'              },
  { name: 'Ashton Pham',     title: 'Creative Director & Videographer'      },
  { name: 'Owen Caldwell',   title: 'Co-Creative Director & Design'         },
  { name: 'Zain Khan',       title: 'Head of Strategy & SEO'               },
  { name: 'Angelo De Ausen', title: 'Hospitality & Brand Specialist'        },
]

function AvatarPlaceholder() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="80" height="80" fill="#1e1e1e" />
      <circle cx="40" cy="28" r="16" fill="#3a3a3a" />
      <path d="M4 78C4 59.222 19.222 44 38 44h4c18.778 0 34 15.222 34 34" fill="#3a3a3a" />
    </svg>
  )
}

function Team() {
  return (
    <section className="py-[120px] border-t border-gold-400/[0.07]" id="team">
      <div className="max-w-[1200px] mx-auto px-8">

        <motion.div
          className="mb-[72px]"
          initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp} transition={{ duration: 0.65, ease }}
        >
          <p className="text-[11.5px] font-semibold tracking-[0.15em] uppercase text-gold-400 mb-5">The Team</p>
          <h2 className="text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-gold-300">
            The People Behind<br />
            <span className="text-gold-200">Every Campaign.</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-5 gap-5 max-xl:grid-cols-3 max-sm:grid-cols-2"
          initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer(0.09)}
        >
          {TEAM.map((member) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              transition={{ duration: 0.6, ease }}
              whileHover={{ y: -6, transition: { duration: 0.25, ease } }}
            >
              <Card className="bg-gold-400/[0.03] backdrop-blur-md border border-gold-400/[0.10] rounded-2xl shadow-none overflow-hidden transition-colors duration-300 hover:bg-gold-400/[0.07] hover:border-gold-400/[0.18] h-full">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-300/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-400" aria-hidden="true" />
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="w-[72px] h-[72px] rounded-full overflow-hidden mt-2 shrink-0">
                    <AvatarPlaceholder />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-[14.5px] font-bold tracking-[-0.01em] text-gold-200 leading-snug">{member.name}</h3>
                    <p className="text-[12px] text-ink-1 leading-[1.55]">{member.title}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

// ─── Pricing ──────────────────────────────────────────────────────────────────
type FeatureType   = 'yes' | 'no' | 'addon'
type BillingPeriod = 'monthly' | '6month' | 'annual'

const PACKAGES = [
  {
    name:           'Build & Handoff',
    price:          'One-time',
    priceSub:       'build fee — you own everything',
    tagline:        'For clients who want to fully own and edit the site themselves.',
    popular:        false,
    sixMonthPrice:  null as string | null,
    sixMonthSaving: null as string | null,
    annualPrice:    null as string | null,
    annualSaving:   null as string | null,
    features: [
      { type: 'no'    as FeatureType, text: 'Hosting & monthly costs — you manage' },
      { type: 'no'    as FeatureType, text: 'Maintenance — DIY'                    },
      { type: 'no'    as FeatureType, text: 'Uptime, SSL, security & backups'      },
      { type: 'addon' as FeatureType, text: 'CMS to edit without code — add-on'   },
      { type: 'addon' as FeatureType, text: 'Booking app — add-on'                },
      { type: 'no'    as FeatureType, text: 'New pages / features — quoted'        },
    ],
  },
  {
    name:           'Build & Care',
    price:          'From $149',
    priceSub:       '/ month',
    tagline:        'For most small businesses that just want it handled.',
    popular:        true,
    sixMonthPrice:  '$142',
    sixMonthSaving: 'Save 5%',
    annualPrice:    '$134',
    annualSaving:   'Save 10%',
    features: [
      { type: 'yes'   as FeatureType, text: 'Hosting & monthly costs — included'       },
      { type: 'yes'   as FeatureType, text: 'We maintain the site for you'             },
      { type: 'yes'   as FeatureType, text: 'Uptime, SSL, security & backups'          },
      { type: 'yes'   as FeatureType, text: 'Up to 4 edits / month, 48-hr turnaround' },
      { type: 'yes'   as FeatureType, text: 'CMS included — edit without code'         },
      { type: 'addon' as FeatureType, text: 'Booking app — add-on (+ small monthly)'  },
    ],
  },
  {
    name:           'Build & Grow',
    price:          'From $399',
    priceSub:       '/ month',
    tagline:        'For sites that drive leads, bookings, or sales.',
    popular:        false,
    sixMonthPrice:  '$367',
    sixMonthSaving: 'Save 8%',
    annualPrice:    '$349',
    annualSaving:   'Save 13%',
    features: [
      { type: 'yes' as FeatureType, text: 'Everything in Care, plus…'                  },
      { type: 'yes' as FeatureType, text: 'Larger edit allowance, priority turnaround' },
      { type: 'yes' as FeatureType, text: 'Monthly analytics & reporting'              },
      { type: 'yes' as FeatureType, text: 'Ongoing SEO & performance tuning'           },
      { type: 'yes' as FeatureType, text: 'Periodic new pages / features included'     },
      { type: 'yes' as FeatureType, text: 'Booking app — included'                     },
    ],
  },
]

const BILLING_OPTIONS: { id: BillingPeriod; label: string; badge?: string }[] = [
  { id: 'monthly', label: 'Monthly'   },
  { id: '6month',  label: '6 Months'  },
  { id: 'annual',  label: 'Annually', badge: 'Best Value' },
]

function Pricing() {
  const [billing, setBilling] = useState<BillingPeriod>('monthly')

  function getPriceInfo(pkg: typeof PACKAGES[0]) {
    if (billing === 'annual'  && pkg.annualPrice)    return { price: pkg.annualPrice,   sub: '/ month', saving: pkg.annualSaving,   commitment: 'Annual commitment'    }
    if (billing === '6month'  && pkg.sixMonthPrice)  return { price: pkg.sixMonthPrice, sub: '/ month', saving: pkg.sixMonthSaving, commitment: '6-month commitment'   }
    return { price: pkg.price, sub: pkg.priceSub, saving: null, commitment: null }
  }

  const isDiscounted = billing !== 'monthly'

  return (
    <section className="py-[120px] border-t border-gold-400/[0.07]" id="pricing">
      <div className="max-w-[1200px] mx-auto px-8">

        <motion.div
          className="mb-[56px] max-w-[600px]"
          initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp} transition={{ duration: 0.65, ease }}
        >
          <p className="text-[11.5px] font-semibold tracking-[0.15em] uppercase text-gold-400 mb-5">Pricing</p>
          <h2 className="text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-gold-300 mb-5">
            Website Packages<br />
            <span className="text-gold-200">Built Around You.</span>
          </h2>
          <p className="text-[17px] text-ink-1 leading-[1.75]">
            Every site starts with a one-time custom build. Pick how hands-on you want us afterward.
          </p>
        </motion.div>

        {/* Billing segmented control */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease, delay: 0.15 }}
        >
          <div className="inline-flex items-center bg-gold-400/[0.05] border border-gold-400/[0.12] rounded-xl p-1 gap-1">
            {BILLING_OPTIONS.map(({ id, label, badge }) => (
              <button
                key={id}
                onClick={() => setBilling(id)}
                className={cn(
                  'relative flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13.5px] font-semibold transition-all duration-200 cursor-pointer',
                  billing === id
                    ? 'bg-gold-400 text-white shadow-[0_2px_12px_rgba(136,136,136,0.25)]'
                    : 'text-ink-2 hover:text-ink-0'
                )}
              >
                {label}
                {badge && (
                  <span className={cn(
                    'text-[9.5px] font-extrabold tracking-[0.1em] uppercase px-2 py-0.5 rounded-full transition-colors duration-200',
                    billing === id
                      ? 'bg-white/20 text-white'
                      : 'bg-gold-400/[0.12] text-gold-400 border border-gold-400/[0.20]'
                  )}>
                    {badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 gap-5 max-md:grid-cols-1 mb-6"
          initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer(0.13)}
        >
          {PACKAGES.map((pkg) => {
            const { price, sub, saving, commitment } = getPriceInfo(pkg)
            const priceKey = billing + price

            return (
              <motion.div
                key={pkg.name}
                variants={fadeUp}
                transition={{ duration: 0.6, ease }}
                whileHover={{ y: -7, transition: { duration: 0.25, ease } }}
                className={cn(
                  'relative rounded-2xl overflow-hidden',
                  pkg.popular
                    ? 'bg-gold-400/[0.06] border border-gold-400/[0.25]'
                    : 'bg-gold-400/[0.03] border border-gold-400/[0.10]'
                )}
              >
                {pkg.popular && (
                  <>
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-300/50 to-transparent" aria-hidden="true" />
                    <div className="absolute top-0 left-0 right-0 flex justify-center">
                      <span className="text-[10px] font-extrabold tracking-[0.14em] uppercase bg-gold-300 text-black px-4 py-1.5 rounded-b-lg">
                        Most Popular
                      </span>
                    </div>
                  </>
                )}

                <div className={cn('p-9 flex flex-col h-full', pkg.popular && 'pt-12')}>
                  <div className="mb-7">
                    <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-gold-500 mb-3">
                      {pkg.name}
                    </p>

                    {/* Price */}
                    <div className="flex items-end gap-2.5 mb-1 min-h-[52px]">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={priceKey}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.22, ease }}
                          className="flex items-baseline gap-1.5"
                        >
                          <span className="text-[38px] font-extrabold tracking-[-0.04em] leading-none text-gold-300">
                            {price}
                          </span>
                          <span className="text-[13px] text-ink-2 font-medium">{sub}</span>
                        </motion.div>
                      </AnimatePresence>

                      <AnimatePresence>
                        {saving && (
                          <motion.span
                            key={billing + 'badge'}
                            initial={{ opacity: 0, scale: 0.75 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.75 }}
                            transition={{ duration: 0.22, ease }}
                            className="mb-1 text-[10.5px] font-extrabold tracking-[0.08em] uppercase text-black bg-gold-300 px-2.5 py-1 rounded-full shrink-0"
                          >
                            {saving}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>

                    <AnimatePresence>
                      {commitment && (
                        <motion.p
                          key={commitment}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.22, ease }}
                          className="text-[11.5px] font-semibold text-gold-400 mb-3 overflow-hidden"
                        >
                          {commitment}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    <p className="text-[14px] text-ink-1 leading-[1.65]">{pkg.tagline}</p>
                  </div>

                  <div className="h-px bg-gold-400/[0.08] mb-6" />

                  <ul className="flex flex-col gap-3.5">
                    {/* Build fee bonus — varies by billing period */}
                    <AnimatePresence>
                      {billing === '6month' && (pkg.sixMonthPrice) && (
                        <motion.li
                          key="6month-bonus"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease }}
                          className="flex items-start gap-3 overflow-hidden"
                        >
                          <span className="text-[13px] font-bold leading-none mt-[3px] shrink-0 w-4 text-center text-gold-300">✓</span>
                          <span className="text-[13.5px] leading-[1.6] text-gold-200 font-semibold">
                            Build fee 50% discount
                          </span>
                        </motion.li>
                      )}
                      {billing === 'annual' && (pkg.annualPrice) && (
                        <motion.li
                          key="annual-bonus"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease }}
                          className="flex items-start gap-3 overflow-hidden"
                        >
                          <span className="text-[13px] font-bold leading-none mt-[3px] shrink-0 w-4 text-center text-gold-300">✓</span>
                          <span className="text-[13.5px] leading-[1.6] text-gold-200 font-semibold">
                            Website build fee waived
                          </span>
                        </motion.li>
                      )}
                    </AnimatePresence>

                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className={cn(
                          'text-[13px] font-bold leading-none mt-[3px] shrink-0 w-4 text-center',
                          f.type === 'yes'   && 'text-gold-300',
                          f.type === 'no'    && 'text-ink-3',
                          f.type === 'addon' && 'text-gold-400',
                        )}>
                          {f.type === 'yes' ? '✓' : f.type === 'addon' ? '+' : '×'}
                        </span>
                        <span className={cn(
                          'text-[13.5px] leading-[1.6]',
                          f.type === 'no' ? 'text-ink-3' : 'text-ink-1',
                        )}>
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="bg-gold-400/[0.03] border border-gold-400/[0.08] rounded-xl p-6"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
        >
          <p className="text-[13.5px] text-ink-1 leading-[1.8]">
            <span className="font-bold text-gold-200">How it works: </span>
            Every site begins with a one-time custom build (typical range $1,000–$5,000 depending on scope).
            After launch, choose the plan that matches how involved you want us to be.
            Ask about <span className="font-semibold text-gold-300">reduced build pricing</span> when
            you commit to a 6 or 12-month Care or Grow plan. Plans are month-to-month and you can move up
            a tier any time. Taxes not included.{' '}
            <span className="text-ink-2">Prices may vary on a case-by-case basis depending on project complexity and requirements.</span>
          </p>
        </motion.div>

      </div>
    </section>
  )
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function ContactSection() {
  return (
    <section className="relative border-t border-gold-400/[0.07] overflow-hidden min-h-[860px] flex items-center" id="contact">

      {/* Globe as full-bleed background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Globe />
        {/* Radial fade — keeps edges and text readable */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_75%_at_65%_50%,transparent_35%,#000000_80%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#000000_78%)]" />
      </div>

      <div className="relative z-10 w-full max-w-[760px] mx-auto px-8 py-[120px]">
        <motion.div
          className="text-center mb-12"
          initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp} transition={{ duration: 0.65, ease }}
        >
          <p className="text-[11.5px] font-semibold tracking-[0.15em] uppercase text-gold-400 mb-5">Get in Touch</p>
          <h2 className="text-[clamp(40px,6vw,64px)] font-extrabold leading-[1.05] tracking-[-0.035em] text-gold-300 mb-4">
            Ready to Grow<br />
            <span className="text-white">Your Business?</span>
          </h2>
          <p className="text-[17px] text-ink-1 leading-[1.7] max-w-[480px] mx-auto">
            Let&rsquo;s build something that works. Get a free audit &mdash; no commitment, no pressure.
          </p>
        </motion.div>

        <motion.div
          className="bg-surface-0/70 backdrop-blur-2xl border border-gold-400/[0.10] rounded-2xl p-10 max-sm:p-6"
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

// ─── Footer ───────────────────────────────────────────────────────────────────
const FOOTER_LINKS: Record<string, { label: string; href: string }[]> = {
  Services: [
    { label: 'Web Design',       href: '/services/web-design'       },
    { label: 'Paid Ads',         href: '/services/paid-ads'         },
    { label: 'Video Production', href: '/services/video-production' },
  ],
  Company: [
    { label: 'Team',    href: '#team'    },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ],
  Resources: [
    { label: 'Blog',       href: '#'        },
    { label: 'Free Audit', href: '#contact' },
  ],
}

// ─── Footer contact modal ─────────────────────────────────────────────────────
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

  const inputCls = 'w-full bg-gold-400/[0.03] border border-gold-400/[0.14] rounded-lg px-4 py-3 text-[14px] text-ink-0 placeholder:text-ink-2 outline-none transition-all hover:bg-gold-400/[0.05] focus:border-gold-400/50 focus:bg-gold-400/[0.05] focus:ring-2 focus:ring-gold-400/10'

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-md bg-surface-0 border border-gold-400/[0.15] rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.6)] overflow-hidden"
        initial={{ opacity: 0, scale: 0.96, y: 14 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 14 }}
        transition={{ duration: 0.22, ease }}
        onClick={e => e.stopPropagation()}
      >
        {/* Gold top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />

        {/* Header */}
        <div className="px-8 pt-8 pb-6 border-b border-gold-400/[0.08]">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-ink-3 hover:text-ink-0 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
          <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-gold-400 mb-2">Support</p>
          <h3 className="text-[20px] font-extrabold tracking-[-0.02em] text-gold-200 leading-tight">Get in Touch</h3>
          <p className="text-[13px] text-ink-2 mt-1">We&rsquo;ll get back to you within 24 hours.</p>
        </div>

        {/* Body */}
        <div className="px-8 py-7">
          {status === 'sent' ? (
            <div className="flex flex-col items-start gap-4 py-4">
              <div className="w-10 h-10 rounded-full border-2 border-gold-400 flex items-center justify-center">
                <svg className="w-4 h-4 text-gold-400" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-[16px] font-bold text-gold-200">Message sent!</p>
                <p className="text-[13px] text-ink-2 mt-1">We&rsquo;ll review your message and follow up shortly.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold tracking-[0.04em] text-gold-400">Name</label>
                <input required placeholder="Your full name" value={form.name} onChange={set('name')} className={inputCls} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold tracking-[0.04em] text-gold-400">Subject</label>
                <input required placeholder="What's this about?" value={form.subject} onChange={set('subject')} className={inputCls} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold tracking-[0.04em] text-gold-400">Email</label>
                <input required type="email" placeholder="you@example.com" value={form.email} onChange={set('email')} className={inputCls} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold tracking-[0.04em] text-gold-400">Message</label>
                <textarea required placeholder="How can we help?" value={form.message} onChange={set('message')} rows={4} className={`${inputCls} resize-none`} />
              </div>
              {status === 'error' && (
                <p className="text-[12px] text-red-400 bg-red-600/10 border border-red-600/20 rounded-lg px-3 py-2">
                  Something went wrong — please try again.
                </p>
              )}
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15, ease }}
                className={cn(buttonVariants(), 'bg-gold-400 text-white hover:bg-gold-200 font-bold text-[13.5px] h-11 mt-1 shadow-[0_0_0_0_rgba(136,136,136,0)] hover:shadow-[0_8px_24px_rgba(136,136,136,0.25)] transition-shadow duration-300 disabled:opacity-60 disabled:cursor-not-allowed')}
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
    <>
      <footer className="border-t border-gold-400/[0.07] bg-surface-0/70 backdrop-blur-xl pt-[72px] pb-10">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-[260px_1fr] gap-20 mb-16 max-md:grid-cols-1 max-md:gap-12">
            <div>
              <a href="/" className="text-[17px] font-extrabold tracking-tight text-white transition-opacity hover:opacity-80">
                Omniviq Digital
              </a>
              <p className="mt-5 text-sm text-ink-2 leading-[1.7]">
                Full-service digital marketing<br />for local businesses in Toronto.
              </p>
            </div>
            <div className="grid grid-cols-4 gap-10 max-lg:grid-cols-2">
              {Object.entries(FOOTER_LINKS).map(([group, links]) => (
                <div key={group}>
                  <span className="block text-[11px] font-bold tracking-[0.12em] uppercase text-ink-2 mb-5">{group}</span>
                  <ul className="flex flex-col gap-3">
                    {links.map(({ label, href }) => (
                      <li key={label}>
                        <a href={href} className="text-sm text-ink-2 transition-colors hover:text-ink-0">
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Contact column */}
              <div>
                <span className="block text-[11px] font-bold tracking-[0.12em] uppercase text-ink-2 mb-5">Contact</span>
                <ul className="flex flex-col gap-3">
                  <li>
                    <button
                      onClick={() => setShowModal(true)}
                      className="text-sm text-ink-2 transition-colors hover:text-ink-0 text-left"
                    >
                      support@omniviqmarketing.ca
                    </button>
                  </li>
                  <li>
                    <a href="tel:+14168270920" className="text-sm text-ink-2 transition-colors hover:text-ink-0">
                      (416) 827-0920
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Separator className="bg-gold-400/[0.08] mb-8" />
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-[12.5px] text-ink-3">
              &copy; {new Date().getFullYear()} Omniviq Marketing. Toronto, ON. All rights reserved.
            </span>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showModal && <FooterContactModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </>
  )
}
