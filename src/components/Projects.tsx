import { ExternalLink, Github, Hourglass, ImageIcon } from 'lucide-react'
import { projects, type Project } from '../data/content'
import SectionHeader from './SectionHeader'
import type { LightboxItem } from './Lightbox'

type Props = { onOpen: (item: LightboxItem) => void }

function ProjectCard({ p, index, onOpen }: { p: Project; index: number; onOpen: Props['onOpen'] }) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <article
      id={p.id}
      className={`group flex scroll-mt-24 flex-col overflow-hidden rounded-3xl transition-all duration-300 ${
        p.comingSoon
          ? 'card'
          : 'card hover:-translate-y-1'
      }`}
    >
      {/* Image area */}
      {p.image ? (
        <button
          type="button"
          onClick={() => onOpen({ src: p.image!, title: p.name, subtitle: p.short })}
          aria-label={`Enlarge the ${p.name} image`}
          className="clay-in m-3 mb-0 aspect-[16/10] cursor-zoom-in overflow-hidden rounded-[1.5rem] bg-surface-2"
        >
          <img src={p.image} alt={`${p.name} preview`} loading="lazy" className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
        </button>
      ) : (
        <div className="clay-in relative m-3 mb-0 grid aspect-[16/6] place-items-center overflow-hidden rounded-[1.25rem] bg-accent-soft">
          <div
            className="absolute inset-0 opacity-70 [background-image:radial-gradient(rgba(37,99,235,0.16)_1px,transparent_1px)] [background-size:20px_20px]"
            aria-hidden="true"
          />
          <span className="absolute top-3 left-4 font-display text-3xl font-extrabold text-accent/20" aria-hidden="true">
            {number}
          </span>
          <span className="clay-sm relative grid size-12 place-items-center rounded-2xl bg-surface text-accent">
            {p.comingSoon ? <Hourglass className="size-6" /> : <ImageIcon className="size-6" />}
          </span>
        </div>
      )}

      {/* Details */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
          {p.comingSoon ? (
            <span className="tag !px-3 !py-1 !text-xs">Coming soon</span>
          ) : (
            <>
              {p.role && <span className="rounded-full bg-accent px-3 py-1 text-on-accent">{p.role}</span>}
              {p.year && (
                <span className="tag !px-3 !py-1 !text-xs">{p.year}</span>
              )}
            </>
          )}
        </div>

        <h3 className="mt-3 font-display text-xl font-extrabold tracking-tight sm:text-2xl">{p.name}</h3>
        <p className="mt-2 leading-relaxed text-muted">{p.problem}</p>

        {p.tech && p.tech.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span key={t} className="tag !py-1 !text-[13px]">{t}</span>
            ))}
          </div>
        )}

        {(p.links?.github || p.links?.live) && (
          <div className="mt-auto flex flex-wrap gap-3 pt-6">
            {p.links?.github && (
              <a href={p.links.github} target="_blank" rel="noreferrer" className="btn-primary !px-4 !py-2.5 text-sm">
                <Github className="size-4" /> Code
              </a>
            )}
            {p.links?.live && (
              <a href={p.links.live} target="_blank" rel="noreferrer" className="btn-ghost !px-4 !py-2.5 text-sm">
                <ExternalLink className="size-4" /> Live demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

export default function Projects({ onOpen }: Props) {
  return (
    <section id="work" className="container-x py-12 sm:py-16">
      <SectionHeader eyebrow="Projects" title="Selected work" />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} p={p} index={i} onOpen={onOpen} />
        ))}
      </div>
    </section>
  )
}
