import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, ChevronDown, FolderKanban } from 'lucide-react'
import { projects } from '../data/content'

// Desktop dropdown listing every project. Clicking a project scrolls to it.
export default function ProjectsMenu() {
  const [open, setOpen] = useState(false)
  const wrap = useRef<HTMLLIElement>(null)

  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      if (wrap.current && !wrap.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <li
      ref={wrap}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((o) => !o)}
        className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-[15px] font-medium transition-colors hover:bg-surface-2 hover:text-ink ${
          open ? 'bg-surface-2 text-ink' : 'text-muted'
        }`}
      >
        Projects
        <ChevronDown className={`size-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute top-full left-1/2 w-80 -translate-x-1/2 pt-2">
          <div className="card !rounded-2xl p-2">
            <p className="px-3 pt-2 pb-1 text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">
              My projects
            </p>
            <ul>
              {projects.map((p, i) => (
                <li key={p.id}>
                  <a
                    href={`#${p.id}`}
                    onClick={() => setOpen(false)}
                    className="group flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-accent-soft"
                  >
                    {p.image ? (
                      <img src={p.image} alt="" className="size-11 shrink-0 rounded-lg object-cover" />
                    ) : (
                      <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-accent-soft font-display text-sm font-extrabold text-accent">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    )}
                    <span className="min-w-0 flex-1">
                      <span className="block font-display font-bold text-ink">{p.name}</span>
                      <span className="block truncate text-sm text-muted">{p.short}</span>
                    </span>
                    <ArrowUpRight className="size-4 shrink-0 text-muted transition-colors group-hover:text-accent" />
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#work"
              onClick={() => setOpen(false)}
              className="mt-1 flex items-center gap-2 border-t border-line px-3 pt-3 pb-2 text-sm font-semibold text-accent"
            >
              <FolderKanban className="size-4" /> View all projects
            </a>
          </div>
        </div>
      )}
    </li>
  )
}
