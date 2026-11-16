import { useState } from 'react'
import { Check, Copy, Download, Github, Linkedin, Mail, Phone } from 'lucide-react'
import { contact, profile } from '../data/content'
import { handleDownload } from '../lib/download'

export default function Contact() {
  const [copied, setCopied] = useState<'idle' | 'done' | 'failed'>('idle')

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email)
      setCopied('done')
    } catch {
      setCopied('failed')
    }
    setTimeout(() => setCopied('idle'), 2000)
  }

  const rows = [
    { icon: Phone, label: 'Phone', value: contact.phone, href: contact.phoneHref },
    { icon: Linkedin, label: 'LinkedIn', value: contact.linkedinLabel, href: contact.linkedin },
    { icon: Github, label: 'GitHub', value: contact.githubLabel, href: contact.github },
  ]

  return (
    <section id="contact" className="container-x py-12 sm:py-16">
      <div className="relative overflow-hidden rounded-3xl bg-accent p-8 text-on-accent sm:p-12" style={{ boxShadow: '0 20px 40px -24px color-mix(in srgb, var(--accent) 80%, transparent), inset 0 1px 0 rgba(255,255,255,.25)' }}>
        <div className="relative grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.16em] uppercase opacity-80">Contact</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">Let's build something great.</h2>
            <p className="mt-5 max-w-md text-lg opacity-85">
              Open to junior developer opportunities, graduate programmes and collaborations.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2.5 font-display text-lg font-bold break-all underline decoration-accent-2 decoration-2 underline-offset-[6px] sm:text-2xl"
              >
                <Mail className="size-5 shrink-0" />
                {contact.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 rounded-full bg-surface px-4 py-2 text-sm font-bold text-ink clay-sm transition-transform hover:-translate-y-0.5"
                aria-live="polite"
              >
                {copied === 'done' ? <Check className="size-4 text-emerald-600" /> : <Copy className="size-4" />}
                {copied === 'done' ? 'Copied!' : copied === 'failed' ? 'Select & copy' : 'Copy'}
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {rows.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl bg-white/15 px-5 py-4 transition-all hover:-translate-y-0.5 hover:bg-white/25" style={{ boxShadow: 'inset 3px 3px 8px rgba(255,255,255,.18), inset -3px -3px 8px rgba(0,0,0,.12)' }}
              >
                <Icon className="size-5 shrink-0" />
                <span className="min-w-0">
                  <span className="block text-xs font-bold tracking-wider uppercase opacity-75">{label}</span>
                  <span className="block truncate font-medium">{value}</span>
                </span>
              </a>
            ))}
            <a
              href={profile.cv}
              download={profile.cvFileName}
              onClick={(e) => handleDownload(e, profile.cv, profile.cvFileName)}
              className="btn mt-2 w-full !py-4 bg-surface text-ink clay-sm"
            >
              <Download className="size-4" /> Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
