import { Award, Eye } from 'lucide-react'
import { certificates } from '../data/content'
import SectionHeader from './SectionHeader'
import type { LightboxItem } from './Lightbox'

type Props = { onOpen: (item: LightboxItem) => void }

export default function Certificates({ onOpen }: Props) {
  return (
    <section id="certificates" className="container-x py-12 sm:py-16">
      <SectionHeader eyebrow="Certificates" title="Certifications" />
      <div className="grid gap-6 md:grid-cols-2">
        {certificates.map((c) => (
          <button
            key={c.title}
            type="button"
            onClick={() => onOpen({ src: c.image, title: c.title, subtitle: `${c.issuer} · ${c.date}` })}
            className="card group cursor-zoom-in overflow-hidden text-left transition-all duration-300 hover:-translate-y-1"
          >
            <div className="clay-in m-3 mb-0 overflow-hidden rounded-[1.5rem] bg-surface-2 p-4">
              <img
                src={c.image}
                alt={`${c.title} certificate`}
                loading="lazy"
                className="aspect-[2/1] w-full rounded-xl bg-surface object-cover object-top shadow-sm transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
            <div className="flex items-center justify-between gap-4 px-6 py-5">
              <div className="flex items-start gap-3">
                <Award className="mt-0.5 size-5 shrink-0 text-accent" />
                <div>
                  <p className="font-display text-lg font-bold">{c.title}</p>
                  <p className="text-sm text-muted">
                    {c.issuer} · {c.date}
                  </p>
                </div>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-accent">
                <Eye className="size-4" /> View
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
