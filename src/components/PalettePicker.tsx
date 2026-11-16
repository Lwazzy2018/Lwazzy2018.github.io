import { useEffect, useRef, useState } from 'react'
import { Check, Palette } from 'lucide-react'
import { palettes, type PaletteId } from '../hooks/usePalette'

type Props = { palette: PaletteId; onChoose: (id: PaletteId) => void }

// Small menu of colour themes. The choice is saved for the next visit.
export default function PalettePicker({ palette, onChoose }: Props) {
  const [open, setOpen] = useState(false)
  const wrap = useRef<HTMLDivElement>(null)

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
    <div ref={wrap} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Choose a colour theme"
        aria-expanded={open}
        className="clay-sm grid size-10 place-items-center rounded-full bg-surface transition-all hover:-translate-y-0.5 hover:text-accent"
      >
        <Palette className="size-[18px]" />
      </button>

      {open && (
        <div className="card absolute top-full right-0 mt-3 w-56 !rounded-3xl p-3">
          <p className="px-2 pb-2 text-[11px] font-bold tracking-[0.14em] text-muted uppercase">Colour theme</p>
          <ul className="space-y-1">
            {palettes.map((p) => (
              <li key={p.id}>
                <button
                  type="button"
                  onClick={() => {
                    onChoose(p.id)
                    setOpen(false)
                  }}
                  aria-pressed={palette === p.id}
                  className={`flex w-full items-center gap-3 rounded-2xl px-2.5 py-2 text-left font-semibold transition-colors ${
                    palette === p.id ? 'clay-in bg-surface-2' : 'hover:bg-surface-2'
                  }`}
                >
                  <span className="flex -space-x-1.5">
                    {p.swatch.map((c) => (
                      <span
                        key={c}
                        className="size-6 rounded-full border-2 border-surface"
                        style={{ background: c, boxShadow: 'inset 2px 2px 4px rgba(255,255,255,.4), inset -2px -2px 4px rgba(0,0,0,.18)' }}
                      />
                    ))}
                  </span>
                  <span className="flex-1">{p.name}</span>
                  {palette === p.id && <Check className="size-4 text-accent" />}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
