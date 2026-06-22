import type { Metadata } from 'next'
import { PricingDetailPage, type Step, type Feature } from '@/components/pricing-detail-page'

export const metadata: Metadata = {
  title: 'Foundation — Omniviq Digital',
  description: 'A straightforward, cash-based retainer partnership. Full-service digital marketing with predictable billing and a dedicated team.',
}

const STEPS: Step[] = [
  {
    number: '01',
    title:  'Free Audit',
    body:   'We assess your current digital presence — website, ads, content — and identify the highest-impact opportunities for your business.',
  },
  {
    number: '02',
    title:  'Strategy & Scope',
    body:   'We agree on which services to run, the monthly deliverables, and a retainer that matches your goals and budget.',
  },
  {
    number: '03',
    title:  'Execution',
    body:   'Your dedicated team gets to work. Clear timelines, regular check-ins, and consistent output every single month.',
  },
  {
    number: '04',
    title:  'Review & Optimise',
    body:   'Monthly performance reports and strategy calls keep everything aligned. We adjust, improve, and push further.',
  },
]

const FEATURES: Feature[] = [
  {
    title: 'Full Service Access',
    body:  'Web Design, Paid Ads, and Video Production — all under one retainer, one team, one point of contact.',
  },
  {
    title: 'Dedicated Account Manager',
    body:  'One person who knows your business inside out and is always available to you. No rotating contacts.',
  },
  {
    title: 'Monthly Strategy Sessions',
    body:  'A scheduled call every month to review performance, align on priorities, and plan the next period.',
  },
  {
    title: 'Performance Dashboards',
    body:  'Live dashboards showing your ad spend, results, and website metrics — always accessible, always current.',
  },
  {
    title: 'Priority Support',
    body:  'Direct access to the team when you need it. Questions, urgent changes, and time-sensitive requests handled fast.',
  },
  {
    title: 'No Hidden Fees',
    body:  'One fixed monthly retainer. No surprise invoices, no add-on charges — everything agreed upfront.',
  },
]

const IDEAL_FOR: string[] = [
  'Established local businesses with consistent monthly revenue who want a reliable, ongoing agency partner.',
  'Business owners who value predictability — same team, same billing, no surprises.',
  'Companies that have tried DIY marketing and are ready to hand it to professionals.',
  'Brands that want to build long-term digital presence, not just run one-off campaigns.',
  'Franchises and multi-location businesses looking for consistent marketing across locations.',
]

export default function FoundationPage() {
  return (
    <PricingDetailPage
      plan="foundation"
      name="Foundation"
      subtitle="Traditional Cash Partnership"
      tagline="The clean, no-surprises way to work with a full-service agency."
      description="Foundation is our standard retainer model. You pay a fixed monthly amount, we deliver consistent, high-quality marketing work — web design, paid ads, and video — with full transparency on what's being done and why. No equity, no complex agreements. Just results."
      commitment="Monthly or quarterly retainer"
      payment="Cash — billed at the start of each period"
      steps={STEPS}
      features={FEATURES}
      idealFor={IDEAL_FOR}
    />
  )
}
