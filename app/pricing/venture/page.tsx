import type { Metadata } from 'next'
import { PricingDetailPage, type Step, type Feature } from '@/components/pricing-detail-page'

export const metadata: Metadata = {
  title: 'Venture — Omniviq Digital',
  description: 'Offset up to 50% of marketing costs through an equity or revenue-share agreement. We become your dedicated growth partner.',
}

const STEPS: Step[] = [
  {
    number: '01',
    title:  'Apply',
    body:   'Submit your business details, vision, and growth targets. We review each Venture application carefully — this is a long-term partnership, not a transaction.',
  },
  {
    number: '02',
    title:  'Partnership Structuring',
    body:   'We negotiate an equity or revenue-share agreement tailored specifically to your business — fair to both sides, with clear terms.',
  },
  {
    number: '03',
    title:  'Deep Integration',
    body:   'We operate as your in-house marketing department. Strategic involvement at every level — not just execution of tasks.',
  },
  {
    number: '04',
    title:  'Shared Growth',
    body:   'As your business scales, so does our partnership. We\'re directly incentivised to deliver because our return is tied to yours.',
  },
]

const FEATURES: Feature[] = [
  {
    title: 'Up to 50% Cost Offset',
    body:  'Trade equity or future revenue for up to half the cost of your marketing engagement. Structured per partnership.',
  },
  {
    title: 'Full Agency Services',
    body:  'Web Design, Paid Ads, and Video Production — the complete suite, applied with a long-term strategic lens.',
  },
  {
    title: 'Senior Team Involvement',
    body:  'Venture partnerships get direct involvement from our founders and senior strategists — not just account managers.',
  },
  {
    title: 'Unlimited Collaboration',
    body:  'Regular strategy sessions, open communication, and deep involvement in brand and growth decisions.',
  },
  {
    title: 'Quarterly Partnership Reviews',
    body:  'Formal reviews every quarter to assess performance, revisit strategy, and plan the next phase of growth together.',
  },
  {
    title: 'Long-Term Alignment',
    body:  'Because we share in the outcome, every decision we make is oriented around your sustainable, long-term growth.',
  },
]

const IDEAL_FOR: string[] = [
  'Funded startups with strong growth potential that want a deeply invested marketing partner, not just a vendor.',
  'Early-stage brands with equity or future revenue to offer but limited immediate cash flow.',
  'Founders who want a true partner — someone at the table who shares the risk and the reward.',
  'High-growth businesses in competitive markets where best-in-class marketing is a strategic necessity.',
  'Purpose-driven brands whose mission aligns with ours and who want to build something lasting together.',
]

export default function VenturePage() {
  return (
    <PricingDetailPage
      plan="venture"
      name="Venture"
      subtitle="Equity-Based Collaboration"
      tagline="We don't just work for you. We grow with you."
      description="Venture is our most committed partnership model. By offsetting up to 50% of costs through equity or a revenue-share agreement, we become directly invested in your success. This isn't an agency-client relationship — it's a long-term partnership where both sides have skin in the game."
      commitment="Long-term partnership (12+ months typical)"
      payment="Equity or revenue-share — up to 50% cost offset"
      steps={STEPS}
      features={FEATURES}
      idealFor={IDEAL_FOR}
    />
  )
}
