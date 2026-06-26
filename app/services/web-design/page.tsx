import type { Metadata } from 'next'
import { ServiceCatalogPage, type Project } from '@/components/service-catalog-page'

export const metadata: Metadata = {
  title: 'Web Design — OmniGrid Digital',
  description: 'Custom websites built to convert visitors into customers. Fast, mobile-first, and built to last.',
}

const PROJECTS: Project[] = [
  {
    project:   'Restaurant Rebrand & Booking Flow',
    year:      '2024',
    tags:      ['Web Design', 'Booking'],
    stat:      '+40%',
    statLabel: 'online reservations',
    image:     '/good-eats-hero.jpg',
    link:      'https://goodeatss.netlify.app/',
  },
  {
    project:   'Gym Membership Landing Page',
    year:      '2024',
    tags:      ['Web Design', 'CRO'],
    stat:      '3×',
    statLabel: 'sign-up rate',
    image:     '/gym-hero.webp',
    link:      'https://gymtests.netlify.app/',
  },
  {
    project:   'E-Commerce & Brand Site',
    year:      '2025',
    tags:      ['Web Design', 'E-Commerce'],
  },
  {
    project:   'Real Estate Agency Site',
    year:      '2025',
    tags:      ['Web Design', 'Real Estate'],
  },
  {
    project:   'Service & Booking Site',
    year:      '2025',
    tags:      ['Web Design', 'Booking'],
    image:     '/barbershop-hero.jpg',
    link:      'https://celebrated-brigadeiros-dfac03.netlify.app/',
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
