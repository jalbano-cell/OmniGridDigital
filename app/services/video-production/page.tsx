import type { Metadata } from 'next'
import { ServiceCatalogPage, type Project } from '@/components/service-catalog-page'

export const metadata: Metadata = {
  title: 'Video Production — Omniviq Digital',
  description: 'Professional video content shot and edited for ads, reels, and social media. Real production, real results.',
}

const PROJECTS: Project[] = [
  {
    client:      'Ember & Grain',
    project:     'Food Brand Content Series',
    year:        '2024',
    description: '12 reels shot, edited, and delivered for social — covering signature dishes, behind-the-scenes moments, and seasonal specials.',
    tags:        ['Reels', 'Brand Content'],
    stat:        '200K+',
    statLabel:   'organic reach, zero paid spend',
  },
  {
    client:      'FitForge Gym',
    project:     'Transformation Story Reels',
    year:        '2024',
    description: 'Six-part member transformation series — interview-driven, cinematic short-form content used for both organic and paid.',
    tags:        ['Reels', 'Social Ads'],
    stat:        '6',
    statLabel:   'episodes produced',
  },
  {
    client:      'Maplewood Bistro',
    project:     'Chef Spotlight Series',
    year:        '2024',
    description: 'Eight-episode series profiling the kitchen team and signature dishes — built to humanise the brand and drive reservations.',
    tags:        ['Brand Film', 'Reels'],
    stat:        '8',
    statLabel:   'episodes produced',
  },
  {
    client:      'Ridgeline Coffee Co.',
    project:     'Origin Story Mini-Doc',
    year:        '2025',
    description: 'Two-minute brand film following the founders from sourcing to first cup — used across web, social, and paid channels.',
    tags:        ['Brand Film', 'Documentary'],
  },
  {
    client:      'North & Main',
    project:     'Property Showcase Reels',
    year:        '2025',
    description: 'Weekly short-form property walk-throughs produced for Instagram and Facebook — consistent content at scale.',
    tags:        ['Reels', 'Real Estate'],
  },
  {
    client:      'The Vault Barbershop',
    project:     'Day-in-the-Life Content Series',
    year:        '2025',
    description: 'Monthly content series capturing the atmosphere, craft, and team — built to grow a loyal local following.',
    tags:        ['Brand Content', 'Reels'],
  },
]

export default function VideoProductionPage() {
  return (
    <ServiceCatalogPage
      service="Video Production"
      headline="Content That Gets"
      subheadline="People Talking."
      description="Professional video shot and edited in-house — no outsourcing, no markups. Reels, brand films, and social content that actually performs."
      projects={PROJECTS}
    />
  )
}
