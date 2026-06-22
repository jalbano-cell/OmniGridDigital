import type { Metadata } from 'next'
import { PricingDetailPage, type Step, type Feature } from '@/components/pricing-detail-page'

export const metadata: Metadata = {
  title: 'Catalyst — Omniviq Digital',
  description: 'Get started now and spread payments over 6–12 months. Full agency services from day one, structured to fit your cash flow.',
}

const STEPS: Step[] = [
  {
    number: '01',
    title:  'Free Audit & Scoping',
    body:   'We audit your business and scope out exactly what needs to be done — services, deliverables, and a total project value.',
  },
  {
    number: '02',
    title:  'Choose Your Term',
    body:   'Select a 6 or 12-month payment plan. Longer terms mean lower monthly payments. You pick what works for your cash flow.',
  },
  {
    number: '03',
    title:  'Small Deposit, Immediate Start',
    body:   'A manageable upfront deposit kicks things off. Work begins the same week — no waiting for the budget to clear.',
  },
  {
    number: '04',
    title:  'Fixed Monthly Payments',
    body:   'The remaining balance is split evenly across your chosen term with a transparent, fixed surcharge. No surprises, ever.',
  },
]

const FEATURES: Feature[] = [
  {
    title: 'Full Services From Day One',
    body:  'Web Design, Paid Ads, and Video Production all start immediately — you don\'t wait until you\'ve "paid enough."',
  },
  {
    title: '6 or 12-Month Payment Plans',
    body:  'Choose the term that fits your budget. Shorter term, higher monthly payment. Longer term, more breathing room.',
  },
  {
    title: 'Transparent Surcharge',
    body:  'A fixed, clearly stated surcharge covers the cost of deferred payments. Agreed upfront — no hidden interest.',
  },
  {
    title: 'Same Team as Foundation',
    body:  'Dedicated account manager, monthly strategy sessions, and priority support. No difference in service quality.',
  },
  {
    title: 'Flexible Scope Adjustments',
    body:  'Need to shift priorities mid-term? We can adjust the scope within the agreed value without renegotiating everything.',
  },
  {
    title: 'Performance Reporting',
    body:  'Monthly dashboards and strategy calls — identical to Foundation. You always know exactly what your investment is doing.',
  },
]

const IDEAL_FOR: string[] = [
  'Growing businesses that need professional marketing now but can\'t commit to large upfront payments.',
  'Seasonal businesses that need to invest before peak season without draining working capital.',
  'Business owners who want agency-quality work but need structured cash flow to make it work.',
  'Brands that have a clear growth window and want to capitalise on it without waiting.',
  'Companies that have been quoted high retainers elsewhere and couldn\'t justify the upfront commitment.',
]

export default function CatalystPage() {
  return (
    <PricingDetailPage
      plan="catalyst"
      name="Catalyst"
      subtitle="Flexible Payment Model"
      tagline="Start now. Pay over time. Don't let cash flow hold your growth back."
      description="Catalyst gives you access to the full Omniviq Digital service suite today, with payments spread across 6 or 12 months. A small deposit gets work underway immediately, and a transparent, fixed surcharge covers the deferred balance. Everything you'd get in Foundation — structured to fit your budget."
      commitment="6 or 12-month payment agreement"
      payment="Deposit + fixed monthly instalments with surcharge"
      steps={STEPS}
      features={FEATURES}
      idealFor={IDEAL_FOR}
    />
  )
}
