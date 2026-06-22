'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ContactForm from './contact-form'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

const Globe = dynamic(() => import('./globe').then(m => m.Globe), { ssr: false })

gsap.registerPlugin(ScrollTrigger)

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
        <Work />
        <Team />
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

// ─── Nav ──────────────────────────────────────────────────────────────────────
function Nav() {
  const links = [
    { href: '#services', label: 'Services'  },
    { href: '#why-us',   label: 'Why Us'    },
    { href: '#work',     label: 'Our Work'  },
    { href: '#team',     label: 'Team'      },
    { href: '#contact',  label: 'Contact'   },
  ]
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[68px] border-b border-[#888888]/20 bg-[rgba(0,0,0,0.85)] backdrop-blur-2xl">
      <div className="h-full max-w-[1200px] mx-auto px-8 flex items-center gap-10">
        <a href="/" className="text-[17px] font-extrabold tracking-tight text-gold-300 shrink-0 transition-colors hover:text-gold-200">
          Vanta Marketing
        </a>
        <nav className="flex items-center gap-0.5 flex-1 max-md:hidden" aria-label="Main navigation">
          {links.map(({ href, label }) => (
            <a key={href} href={href} className="text-sm font-medium text-ink-1 px-3.5 py-1.5 rounded-md transition-colors hover:text-ink-0 hover:bg-gold-400/[0.06]">
              {label}
            </a>
          ))}
        </nav>
        <motion.a
          href="#contact"
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
          <motion.a
            href="#work"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease }}
            className={cn(buttonVariants({ variant: 'outline' }), 'border-gold-400/[0.18] text-ink-1 bg-gold-400/[0.04] backdrop-blur-sm hover:border-gold-400/30 hover:bg-gold-400/[0.08] hover:text-ink-0 text-sm font-semibold h-11 px-6')}
          >
            See Our Work
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
  { number: '01', title: 'Web Design',       body: 'Custom websites built to convert visitors into customers. Fast, mobile-first, and built to last.' },
  { number: '02', title: 'Paid Ads',         body: 'Meta and Google ad campaigns managed for maximum ROI. We handle the strategy, creative, and optimization.' },
  { number: '03', title: 'Video Production', body: 'Professional video content shot and edited for ads, reels, and social media. Real production, real results.' },
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
            <motion.div
              key={s.number}
              variants={fadeUp}
              transition={{ duration: 0.6, ease }}
              whileHover={{ y: -7, transition: { duration: 0.25, ease } }}
            >
              <Card className="bg-gold-400/[0.03] backdrop-blur-md border border-gold-400/[0.10] rounded-2xl shadow-none relative overflow-hidden group transition-colors duration-300 hover:bg-gold-400/[0.07] hover:border-gold-400/[0.18] h-full">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-400" aria-hidden="true" />
                <CardContent className="p-10 flex flex-col gap-4">
                  <span className="text-[11px] font-bold tracking-[0.12em] text-gold-500">{s.number}</span>
                  <h3 className="text-lg font-bold tracking-[-0.02em] text-gold-200 leading-snug">{s.title}</h3>
                  <p className="text-[14.5px] text-ink-1 leading-[1.75]">{s.body}</p>
                </CardContent>
              </Card>
            </motion.div>
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

// ─── Work ─────────────────────────────────────────────────────────────────────
const WORK = [
  { client: 'Maplewood Bistro', type: 'Web Design',       title: 'Local Restaurant Rebrand',  stat: '+40%',  statLabel: 'online reservations',   body: 'Full site redesign with a streamlined booking flow — new site increased online reservations by 40%.' },
  { client: 'FitForge Gym',     type: 'Paid Ads',         title: 'Gym Meta Ad Campaign',       stat: '3.8×',  statLabel: 'ROAS in first 60 days', body: 'Meta ad strategy built from the ground up — 3.8x return on ad spend in the first 60 days.' },
  { client: 'Ember & Grain',    type: 'Video Production', title: 'Food Brand Content Shoot',   stat: '200K+', statLabel: 'organic reach',         body: '12 reels produced and edited for social — 200K+ organic reach with zero paid promotion.' },
]

const scaleUp = {
  hidden: { opacity: 0, scale: 0.88 },
  show:   { opacity: 1, scale: 1    },
}

function Work() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.stat-value',
        { opacity: 0, scale: 0.55, y: 8 },
        {
          opacity: 1, scale: 1, y: 0,
          duration: 0.7,
          stagger: 0.18,
          ease: 'back.out(1.8)',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 68%',
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-[120px] border-t border-gold-400/[0.07]" id="work">
      <div className="max-w-[1200px] mx-auto px-8">

        <motion.div
          className="mb-[72px]"
          initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp} transition={{ duration: 0.65, ease }}
        >
          <p className="text-[11.5px] font-semibold tracking-[0.15em] uppercase text-gold-400 mb-5">Portfolio</p>
          <h2 className="text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-gold-300">
            Work That<br />
            <span className="text-gold-200">Speaks for Itself.</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1"
          initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer(0.11)}
        >
          {WORK.map((item) => (
            <motion.div
              key={item.client}
              variants={scaleUp}
              transition={{ duration: 0.55, ease }}
              whileHover={{ y: -8, transition: { duration: 0.25, ease } }}
              className="group relative"
            >
              <Card className="bg-gold-400/[0.03] backdrop-blur-md border border-gold-400/[0.10] rounded-2xl overflow-hidden shadow-none transition-colors duration-300 hover:bg-gold-400/[0.07] hover:border-gold-400/[0.18] h-full">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                <CardContent className="p-9 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-[11px] font-bold tracking-[0.12em] uppercase text-gold-500 bg-gold-400/[0.08] border-gold-400/25 rounded-[4px] px-2.5 py-1 h-auto">
                      {item.type}
                    </Badge>
                    <span className="text-[12.5px] text-ink-2 font-medium">{item.client}</span>
                  </div>
                  <div className="flex flex-col gap-0.5 py-2">
                    <span className="stat-value opacity-0 text-[52px] font-extrabold tracking-[-0.04em] leading-none text-gold-300">
                      {item.stat}
                    </span>
                    <span className="text-[12.5px] text-ink-2 font-medium tracking-wide">{item.statLabel}</span>
                  </div>
                  <h3 className="text-[19px] font-bold tracking-[-0.02em] text-gold-200 leading-snug">{item.title}</h3>
                  <p className="text-sm text-ink-1 leading-[1.75]">{item.body}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

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
const FOOTER_LINKS = {
  Services:  ['Web Design', 'Paid Ads', 'Video Production'],
  Company:   ['About', 'Our Work', 'Team', 'Contact'],
  Resources: ['Blog', 'Case Studies', 'Free Audit'],
}

function Footer() {
  return (
    <footer className="border-t border-gold-400/[0.07] bg-surface-0/70 backdrop-blur-xl pt-[72px] pb-10">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-[260px_1fr] gap-20 mb-16 max-md:grid-cols-1 max-md:gap-12">
          <div>
            <a href="/" className="text-base font-extrabold tracking-tight text-gold-300 transition-colors hover:text-gold-200">
              Vanta Marketing
            </a>
            <p className="mt-5 text-sm text-ink-2 leading-[1.7]">
              Full-service digital marketing<br />for local businesses in Toronto.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-10 max-sm:grid-cols-2">
            {Object.entries(FOOTER_LINKS).map(([group, links]) => (
              <div key={group}>
                <span className="block text-[11px] font-bold tracking-[0.12em] uppercase text-ink-2 mb-5">{group}</span>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a href={`#${link.toLowerCase().replace(/\s/g, '-')}`} className="text-sm text-ink-2 transition-colors hover:text-ink-0">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <Separator className="bg-gold-400/[0.08] mb-8" />
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="text-[12.5px] text-ink-3">
            &copy; {new Date().getFullYear()} Vanta Marketing. Toronto, ON. All rights reserved.
          </span>
          <a href="mailto:support@vantamarketing.ca" className="text-[12.5px] text-ink-2 transition-colors hover:text-gold-300">
            support@vantamarketing.ca
          </a>
        </div>
      </div>
    </footer>
  )
}
