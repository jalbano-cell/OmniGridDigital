import type { Metadata } from 'next'
import { ServiceCatalogPage, type Project } from '@/components/service-catalog-page'

export const metadata: Metadata = {
  title: 'Web Design — Omnigrid Digital',
  description: 'Custom websites built to convert visitors into customers. Fast, mobile-first, and built to last.',
}

const PROJECTS: Project[] = [
  {
    client:      'Maplewood Bistro',
    project:     'Restaurant Rebrand & Booking Flow',
    year:        '2024',
    description: 'Full site redesign with a streamlined online reservation system. The new booking flow cut friction and drove measurable growth in covers.',
    tags:        ['Web Design', 'Booking'],
    stat:        '+40%',
    statLabel:   'online reservations',
  },
  {
    client:      'FitForge Gym',
    project:     'Gym Membership Landing Page',
    year:        '2024',
    description: 'High-converting membership page with class schedule integration and a frictionless online sign-up flow.',
    tags:        ['Web Design', 'CRO'],
    stat:        '3×',
    statLabel:   'sign-up rate',
    image:       '/gym-hero.webp',
    link:        'https://gymtests.netlify.app/',
  },
  {
    client:      'Ember & Grain',
    project:     'Restaurant Brand Site',
    year:        '2024',
    description: 'Full brand site built around the restaurant\'s story — menu, gallery, events, and a custom reservations experience.',
    tags:        ['Web Design', 'Branding'],
  },
  {
    client:      'Ridgeline Coffee Co.',
    project:     'E-Commerce & Brand Site',
    year:        '2025',
    description: 'Online store with product pages, a subscription flow, and a brand story section that builds trust before the first purchase.',
    tags:        ['Web Design', 'E-Commerce'],
  },
  {
    client:      'North & Main',
    project:     'Real Estate Agency Site',
    year:        '2025',
    description: 'Property listings platform with search filters, agent profiles, and neighbourhood guides — built to generate leads.',
    tags:        ['Web Design', 'Real Estate'],
  },
  {
    client:      'The Vault Barbershop',
    project:     'Service & Booking Site',
    year:        '2025',
    description: 'Service menu, team profiles, and a seamless online booking integration — all in one clean, mobile-first experience.',
    tags:        ['Web Design', 'Booking'],
    image:       '/barbershop-hero.jpg',
    link:        'https://celebrated-brigadeiros-dfac03.netlify.app/',
  },
]

export default function WebDesignPage() {
  return (
    <ServiceCatalogPage
      service="Web Design"
      headline="Sites That Work"
      subheadline="While You Sleep."
      description="Custom-built websites for local businesses. Every project is designed to convert visitors into customers — fast, mobile-first, and built to last."
      projects={PROJECTS}
    />
  )
}
