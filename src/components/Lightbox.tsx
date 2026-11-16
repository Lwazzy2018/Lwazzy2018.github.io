import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

export type LightboxItem = { src: string; title: string; subtitle?: string }

type Props = { item: LightboxItem | null; onClose: () => void }

export default function Lightbox({ item, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!item) return
    const previous = document.activeElement as HTMLElement | null
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      previous?.focus()
    }
  }, [item, onClose])

  if (!item) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-[100] flex animate-[fade_.2s_ease-out] items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative max-h-full w-auto max-w-4xl overflow-auto rounded-3xl bg-surface p-4 shadow-2xl">
        <div className="mb-3 flex items-start justify-between gap-6 px-1">
          <div>
            <p className="font-display text-lg font-bold">{item.title}</p>
            {item.subtitle && <p className="text-sm text-muted">{item.subtitle}</p>}
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close preview"
            className="grid size-10 shrink-0 place-items-center rounded-full bg-surface clay-sm hover:text-accent"
          >
            <X className="size-5" />
          </button>
        </div>
        <img src={item.src} alt={item.title} className="mx-auto max-h-[78vh] w-auto rounded-2xl bg-surface" />
      </div>
    </div>
  )
}
