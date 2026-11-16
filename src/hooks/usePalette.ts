import { useCallback, useEffect, useState } from 'react'

export const palettes = [
  { id: 'blueberry', name: 'Blueberry', swatch: ['#4f6bff', '#ff8fb1'] },
  { id: 'peach', name: 'Peach', swatch: ['#ff7356', '#7a6bff'] },
  { id: 'mint', name: 'Mint', swatch: ['#10a37a', '#ffad42'] },
  { id: 'lavender', name: 'Lavender', swatch: ['#8b5cf6', '#2ccfb8'] },
] as const

export type PaletteId = (typeof palettes)[number]['id']
const KEY = 'ln-palette'

export function usePalette() {
  const [palette, setPalette] = useState<PaletteId>(
    () => (document.documentElement.getAttribute('data-palette') as PaletteId) || 'blueberry',
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-palette', palette)
    const bg = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim()
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', bg)
    try {
      localStorage.setItem(KEY, palette)
    } catch {
      /* storage unavailable */
    }
  }, [palette])

  const choose = useCallback((id: PaletteId) => setPalette(id), [])
  return { palette, choose }
}
