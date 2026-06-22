import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const TO = 'support@omniviqmarketing.ca'

export async function POST(req: NextRequest) {
  let body: Record<string, string>

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const { name, business, email, phone, service, message } = body

  if (!EMAIL_RE.test(email?.trim())) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const html = `
    <div style="font-family:system-ui,sans-serif;max-width:560px;margin:0 auto;color:#1a1a2e;">
      <div style="background:#0d0d12;padding:32px;border-radius:10px 10px 0 0;border-bottom:2px solid #c9a840;">
        <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#c9a840;">
          New Audit Request
        </p>
        <h1 style="margin:12px 0 0;font-size:26px;font-weight:800;color:#f4f4f8;letter-spacing:-.02em;">
          ${name}
        </h1>
        <p style="margin:4px 0 0;font-size:14px;color:#9090a8;">${business}</p>
      </div>
      <div style="background:#f9f9fb;padding:32px;border-radius:0 0 10px 10px;">
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #e5e5f0;font-size:13px;color:#9090a8;font-weight:600;width:36%;vertical-align:top;">Email</td>
            <td style="padding:10px 0;border-bottom:1px solid #e5e5f0;font-size:14px;color:#1a1a2e;vertical-align:top;">
              <a href="mailto:${email}" style="color:#c9a840;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #e5e5f0;font-size:13px;color:#9090a8;font-weight:600;vertical-align:top;">Phone</td>
            <td style="padding:10px 0;border-bottom:1px solid #e5e5f0;font-size:14px;color:#1a1a2e;vertical-align:top;">${phone || '—'}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #e5e5f0;font-size:13px;color:#9090a8;font-weight:600;vertical-align:top;">Service</td>
            <td style="padding:10px 0;border-bottom:1px solid #e5e5f0;font-size:14px;color:#1a1a2e;vertical-align:top;">${service || '—'}</td>
          </tr>
          <tr>
            <td style="padding:14px 0 0;font-size:13px;color:#9090a8;font-weight:600;vertical-align:top;">Message</td>
            <td style="padding:14px 0 0;font-size:14px;color:#1a1a2e;line-height:1.7;vertical-align:top;">${message ? message.replace(/\n/g, '<br>') : '—'}</td>
          </tr>
        </table>
      </div>
    </div>
  `

  try {
    await transporter.sendMail({
      from: `"Omniviq Marketing Website" <${process.env.SMTP_USER}>`,
      to: TO,
      replyTo: `"${name}" <${email}>`,
      subject: `Audit Request — ${name} @ ${business} (${service})`,
      html,
    })
  } catch (err) {
    console.error('[contact] email failed:', err)
    return NextResponse.json({ error: 'Failed to send. Please try again.' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
