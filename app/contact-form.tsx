'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const inputBase =
  'w-full bg-white/[0.04] border border-white/[0.10] rounded-xl px-4 py-3.5 text-[15px] text-ink-0 placeholder:text-ink-3 outline-none transition-all hover:bg-white/[0.06] focus:border-gold-400/50 focus:bg-white/[0.06] focus:ring-2 focus:ring-gold-400/10 disabled:opacity-50 disabled:cursor-not-allowed'

const inputError =
  'border-red-600 ring-2 ring-red-600/10 focus:border-red-600 focus:ring-red-600/15'

interface ContactFormProps {
  defaultService?: string
  submitLabel?:    string
}

export default function ContactForm({ defaultService = '', submitLabel = 'Get a Free Audit' }: ContactFormProps) {
  const [email, setEmail]           = useState('')
  const [emailError, setEmailError] = useState('')
  const [loading, setLoading]       = useState(false)
  const [serverError, setServerError] = useState('')
  const [submitted, setSubmitted]   = useState(false)

  const validateEmail = (v: string) => EMAIL_RE.test(v.trim())

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    if (emailError && validateEmail(e.target.value)) setEmailError('')
  }

  const handleEmailBlur = () => {
    if (email && !validateEmail(email)) {
      setEmailError('Please enter a valid email address.')
    } else {
      setEmailError('')
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setServerError('')
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.')
      return
    }
    const data = Object.fromEntries(new FormData(e.currentTarget).entries())
    setLoading(true)
    try {
      const res  = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      const json = await res.json()
      if (!res.ok) { setServerError(json.error || 'Something went wrong. Please try again.'); return }
      setSubmitted(true)
    } catch {
      setServerError('Could not send your message. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 p-12 bg-white/[0.03] border border-white/[0.10] rounded-2xl">
        <div className="w-11 h-11 rounded-full border-2 border-gold-300 flex items-center justify-center">
          <svg className="w-4 h-4 text-gold-300" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-[22px] font-bold tracking-[-0.02em] text-ink-0">We&rsquo;ll be in touch soon.</h3>
        <p className="text-[15px] text-ink-2 leading-[1.7]">
          Thanks for reaching out &mdash; we&rsquo;ll review your details and follow up within one business day.
        </p>
      </div>
    )
  }

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
        <div className="flex flex-col gap-2">
          <label className="text-[13px] font-semibold tracking-[0.03em] text-ink-2" htmlFor="name">Name</label>
          <input className={inputBase} id="name" name="name" type="text" placeholder="Your full name" required disabled={loading} />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[13px] font-semibold tracking-[0.03em] text-ink-2" htmlFor="business">Business Name</label>
          <input className={inputBase} id="business" name="business" type="text" placeholder="Your business name" required disabled={loading} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
        <div className="flex flex-col gap-2">
          <label className="text-[13px] font-semibold tracking-[0.03em] text-ink-2" htmlFor="email">Email</label>
          <input
            className={cn(inputBase, emailError && inputError)}
            id="email" name="email" type="email"
            placeholder="you@yourbusiness.com"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            required disabled={loading}
            aria-describedby={emailError ? 'email-error' : undefined}
            aria-invalid={!!emailError}
          />
          {emailError && (
            <span className="text-[12.5px] font-medium text-red-400" id="email-error" role="alert">
              {emailError}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[13px] font-semibold tracking-[0.03em] text-ink-2" htmlFor="phone">Phone</label>
          <input className={inputBase} id="phone" name="phone" type="tel" placeholder="+1 (416) 000-0000" disabled={loading} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[13px] font-semibold tracking-[0.03em] text-ink-2" htmlFor="service">Service Interested In</label>
        <div className="relative">
          <select
            className={cn(inputBase, 'appearance-none pr-11 cursor-pointer font-semibold')}
            id="service" name="service" defaultValue={defaultService} disabled={loading}
          >
            <option value="">Select a solution…</option>
            <option>Launch — Build Your Digital Foundation</option>
            <option>Grow — AI-Powered Growth System</option>
            <option>Transform — Custom AI &amp; Software Systems</option>
            <option>FollowupQuote — Book a Demo</option>
            <option>Not Sure Yet — Book a Discovery Call</option>
          </select>
          <span
            className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] border-l-transparent border-r-transparent border-t-ink-2"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[13px] font-semibold tracking-[0.03em] text-ink-2" htmlFor="message">Message</label>
        <textarea
          className={cn(inputBase, 'resize-y min-h-[130px]')}
          id="message" name="message"
          placeholder="Tell us about your business and what you're looking to achieve..."
          rows={5} disabled={loading}
        />
      </div>

      {serverError && (
        <p className="text-sm text-red-400 px-4 py-3 bg-red-600/10 border border-red-600/30 rounded-lg" role="alert">
          {serverError}
        </p>
      )}

      <Button
        type="submit"
        className="self-start mt-2 bg-gold-400 text-white hover:bg-gold-500 font-semibold text-[15px] px-8 h-12 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(37,99,235,0.4)] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
        disabled={loading}
      >
        {loading ? 'Sending…' : submitLabel}
      </Button>
    </form>
  )
}
