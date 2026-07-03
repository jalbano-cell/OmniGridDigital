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
    tags:      ['Grow'],
    stat:      '3.8×',
    statLabel: 'ROAS in first 60 days',
    image:     '/ads-fitness.jpg',
  },
  {
    project:   'Google Local Search Campaign',
    year:      '2024',
    tags:      ['Grow'],
    stat:      '2.4×',
    statLabel: 'local visibility increase',
    image:     '/ads-search.jpg',
  },
  {
    project:   'Instagram & Facebook Brand Awareness',
    year:      '2024',
    tags:      ['Grow'],
    stat:      '200K+',
    statLabel: 'people reached',
    image:     '/ads-brand.jpg',
  },
  {
    project:   'Meta Product Launch Campaign',
    year:      '2025',
    tags:      ['Grow'],
    stat:      '45%',
    statLabel: 'lower cost per acquisition',
    image:     '/ads-ecommerce.jpg',
  },
  {
    project:   'Google Real Estate Lead Ads',
    year:      '2025',
    tags:      ['Grow'],
    stat:      '58',
    statLabel: 'qualified leads per month',
    image:     '/ads-realestate.jpg',
  },
  {
    project:   'Local Google Ads Campaign',
    year:      '2025',
    tags:      ['Grow'],
    stat:      '2.1×',
    statLabel: 'booking rate increase',
    image:     '/ads-local-map.jpg',
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
