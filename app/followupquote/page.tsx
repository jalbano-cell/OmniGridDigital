import type { Metadata } from 'next'
import { FollowUpQuotePage } from '@/components/followupquote-page'

export const metadata: Metadata = {
  title: 'FollowupQuote — Estimate Follow-Up Automation | OmniGrid Digital',
  description:
    'FollowupQuote automates estimate follow-up for local service businesses so you win more jobs — without changing the tools or workflow you already use.',
}

export default function Page() {
  return <FollowUpQuotePage />
}
