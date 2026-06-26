import type { Metadata } from 'next'
import { ServiceCatalogPage, type Project } from '@/components/service-catalog-page'

export const metadata: Metadata = {
  title: 'Paid Ads — OmniGrid Digital',
  description: 'Meta and Google ad campaigns managed for maximum ROI. Strategy, creative, and optimization — all handled.',
}

const PROJECTS: Project[] = [
  {
    project:   'Meta Membership Campaign',
    year:      '2024',
    tags:      ['Meta Ads', 'Fitness'],
    stat:      '3.8×',
    statLabel: 'ROAS in first 60 days',
  },
  {
    project:   'Google Local Search Campaign',
    year:      '2024',
    tags:      ['Google Ads', 'Local'],
    stat:      '2.4×',
    statLabel: 'local visibility increase',
  },
  {
    project:   'Instagram & Facebook Brand Awareness',
    year:      '2024',
    tags:      ['Meta Ads', 'Brand'],
    stat:      '200K+',
    statLabel: 'people reached',
  },
  {
    project:   'Meta Product Launch Campaign',
    year:      '2025',
    tags:      ['Meta Ads', 'E-Commerce'],
    stat:      '45%',
    statLabel: 'lower cost per acquisition',
  },
  {
    project:   'Google Real Estate Lead Ads',
    year:      '2025',
    tags:      ['Google Ads', 'Real Estate'],
    stat:      '58',
    statLabel: 'qualified leads per month',
  },
  {
    project:   'Local Google Ads Campaign',
    year:      '2025',
    tags:      ['Google Ads', 'Local'],
    stat:      '2.1×',
    statLabel: 'booking rate increase',
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
