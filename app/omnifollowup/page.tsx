import type { Metadata } from 'next'
import { OmniFollowUpPage } from '@/components/omnifollowup-page'

export const metadata: Metadata = {
  title: 'OmniFollowUp — Estimate Follow-Up Automation | OmniGrid Digital',
  description:
    'OmniFollowUp helps local service businesses automatically track, follow up, and convert more estimates into booked jobs — without changing their existing workflow.',
}

export default function Page() {
  return <OmniFollowUpPage />
}
