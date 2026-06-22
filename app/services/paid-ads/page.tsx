import type { Metadata } from 'next'
import { ServiceCatalogPage, type Project } from '@/components/service-catalog-page'

export const metadata: Metadata = {
  title: 'Paid Ads — Omniviq Digital',
  description: 'Meta and Google ad campaigns managed for maximum ROI. Strategy, creative, and optimization — all handled.',
}

const PROJECTS: Project[] = [
  {
    client:      'FitForge Gym',
    project:     'Meta Membership Campaign',
    year:        '2024',
    description: 'Full-funnel Meta campaign targeting local fitness seekers. Built from the ground up — audience research, creative, A/B testing, and ongoing optimization.',
    tags:        ['Meta Ads', 'Fitness'],
    stat:        '3.8×',
    statLabel:   'ROAS in first 60 days',
  },
  {
    client:      'Maplewood Bistro',
    project:     'Google Local Search Campaign',
    year:        '2024',
    description: 'Google Ads campaign targeting high-intent local diners. Keyword strategy and ad copy designed to capture people searching right now.',
    tags:        ['Google Ads', 'Local'],
    stat:        '2.4×',
    statLabel:   'local visibility increase',
  },
  {
    client:      'Ember & Grain',
    project:     'Instagram & Facebook Brand Awareness',
    year:        '2024',
    description: 'Brand awareness campaign across Meta platforms. Creative-led strategy paired with precise audience targeting to build reach organically.',
    tags:        ['Meta Ads', 'Brand'],
    stat:        '200K+',
    statLabel:   'people reached',
  },
  {
    client:      'Ridgeline Coffee Co.',
    project:     'Meta Product Launch Campaign',
    year:        '2025',
    description: 'Product launch campaign for a new seasonal blend — drove online orders and subscription sign-ups from day one.',
    tags:        ['Meta Ads', 'E-Commerce'],
    stat:        '45%',
    statLabel:   'lower cost per acquisition',
  },
  {
    client:      'North & Main',
    project:     'Google Real Estate Lead Ads',
    year:        '2025',
    description: 'Lead generation campaign using Google Search and Display to capture buyers and sellers actively looking in target neighbourhoods.',
    tags:        ['Google Ads', 'Real Estate'],
    stat:        '58',
    statLabel:   'qualified leads per month',
  },
  {
    client:      'The Vault Barbershop',
    project:     'Local Google Ads Campaign',
    year:        '2025',
    description: 'Hyper-local Google Ads campaign targeting nearby customers actively searching for barbershops. Focused on booking-intent keywords.',
    tags:        ['Google Ads', 'Local'],
    stat:        '2.1×',
    statLabel:   'booking rate increase',
  },
]

export default function PaidAdsPage() {
  return (
    <ServiceCatalogPage
      service="Paid Ads"
      headline="Every Dollar Spent"
      subheadline="Working Harder."
      description="Meta and Google campaigns built on data, not guesswork. We handle the strategy, creative, targeting, and optimization — you see the results."
      projects={PROJECTS}
    />
  )
}
