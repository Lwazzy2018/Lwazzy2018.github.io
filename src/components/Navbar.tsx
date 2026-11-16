import { Fragment, useEffect, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { navLinks, profile, projects } from '../data/content'
import ProjectsMenu from './ProjectsMenu'
import PalettePicker from './PalettePicker'
import type { PaletteId } from '../hooks/usePalette'
import { handleDownload } from '../lib/download'

type Props = {
  palette: PaletteId
  onChoosePalette: (id: PaletteId) => void
}

export default function Navbar({ palette, onChoosePalette }: Props) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-line'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-[72px] items-center justify-between" aria-label="Main">
        <a href="#home" className="font-display text-[15px] font-extrabold tracking-[0.14em]">
          LWAZI NKAMBULE
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l, i) => (
            <Fragment key={l.href}>
              <li>
                <a
                  href={l.href}
                  className="rounded-full px-4 py-2 text-[15px] font-medium text-muted transition-colors hover:bg-surface-2 hover:text-ink dark:text-muted"
                >
                  {l.label}
                </a>
              </li>
              {i === 0 && <ProjectsMenu />}
            </Fragment>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <PalettePicker palette={palette} onChoose={onChoosePalette} />
          <a
            href={profile.cv}
            download={profile.cvFileName}
            onClick={(e) => handleDownload(e, profile.cv, profile.cvFileName)}
            className="btn-primary hidden !px-4 !py-2.5 text-sm sm:inline-flex"
          >
            <Download className="size-4" /> Download CV
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="grid size-10 place-items-center rounded-full bg-surface clay-sm md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-4 mb-3 rounded-3xl bg-surface px-5 pb-5 md:hidden" style={{ boxShadow: 'var(--clay)' }}>
          <ul className="flex flex-col">
            {navLinks.map((l, i) => (
              <Fragment key={l.href}>
                <li>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-line py-3.5 font-display text-lg font-bold"
                  >
                    {l.label}
                  </a>
                </li>
                {i === 0 && (
                  <li className="border-b border-line py-3.5">
                    <p className="font-display text-lg font-bold">Projects</p>
                    <ul className="mt-2 space-y-1">
                      {projects.map((p, i) => (
                        <li key={p.id}>
                          <a
                            href={`#${p.id}`}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-3 rounded-xl bg-surface-2 p-2.5"
                          >
                            {p.image ? (
                              <img src={p.image} alt="" className="size-10 shrink-0 rounded-lg object-cover" />
                            ) : (
                              <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-accent-soft font-display text-sm font-extrabold text-accent">
                                {String(i + 1).padStart(2, '0')}
                              </span>
                            )}
                            <span>
                              <span className="block font-bold">{p.name}</span>
                              <span className="block text-sm text-muted">{p.short}</span>
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                )}
              </Fragment>
            ))}
          </ul>
          <a
            href={profile.cv}
            download={profile.cvFileName}
            onClick={(e) => handleDownload(e, profile.cv, profile.cvFileName)}
            className="btn-primary mt-4 w-full"
          >
            <Download className="size-4" /> Download CV
          </a>
        </div>
      )}
    </header>
  )
}
