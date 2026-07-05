import { OMNIFOLLOWUP_API } from '@/lib/config'

const INTAKE_PATH = '/api/intake'
const TIMEOUT_MS = 8000

export interface OmniFollowUpIntakePayload {
  name: string
  email: string
  phone?: string
  company?: string
  service?: string
  message?: string
}

export class OmniFollowUpApiError extends Error {
  status?: number

  constructor(message: string, status?: number) {
    super(message)
    this.name = 'OmniFollowUpApiError'
    this.status = status
  }
}

/** Forwards a lead to the OmniFollowUp intake API. Throws OmniFollowUpApiError on any failure. */
export async function submitToOmniFollowUp(payload: OmniFollowUpIntakePayload): Promise<void> {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS)

  const apiKey = process.env.OMNIFOLLOWUP_API_KEY
  const headers: Record<string, string> = { 'Content-Type': 'application/json' }
  if (apiKey) headers.Authorization = `Bearer ${apiKey}`

  let res: Response
  try {
    res = await fetch(`${OMNIFOLLOWUP_API}${INTAKE_PATH}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
      signal: controller.signal,
      redirect: 'manual',
    })
  } catch (err) {
    if (err instanceof Error && err.name === 'AbortError') {
      throw new OmniFollowUpApiError('OmniFollowUp API request timed out.')
    }
    throw new OmniFollowUpApiError('Could not reach the OmniFollowUp API.')
  } finally {
    clearTimeout(timeout)
  }

  // redirect: 'manual' means a redirect (e.g. to a login page) surfaces as an
  // opaque, non-ok response here instead of silently following to a false "200 OK".
  if (res.redirected || !res.ok) {
    throw new OmniFollowUpApiError(`OmniFollowUp API responded with an error (${res.status}).`, res.status)
  }
}
