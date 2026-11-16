// On GitHub Pages the CV link is an ordinary download link.
// Inside the Claude artifact viewer, plain downloads are blocked, so the
// viewer's own save prompt is used instead (when the page is opened there).

type Downloads = { save: (req: { filename: string; data: Blob }) => Promise<unknown> }
type ClaudeHost = { use?: (name: string) => Promise<unknown> }

let saver: Promise<Downloads | null> | null = null

function getSaver(): Promise<Downloads | null> {
  if (!saver) {
    const host = (window as unknown as { claude?: ClaudeHost }).claude
    saver =
      host && typeof host.use === 'function'
        ? host.use('downloads').then((d) => (d as Downloads) ?? null).catch(() => null)
        : Promise.resolve(null)
  }
  return saver
}

// Start detecting early so the first click is fast.
if (typeof window !== 'undefined') void getSaver()

export async function handleDownload(
  event: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  filename: string,
) {
  const host = (window as unknown as { claude?: ClaudeHost }).claude
  if (!host || typeof host.use !== 'function') return // normal browser download
  event.preventDefault()
  const dl = await getSaver()
  if (!dl) {
    window.open(href, '_blank')
    return
  }
  try {
    const res = await fetch(href)
    await dl.save({ filename, data: await res.blob() })
  } catch {
    /* declined or unavailable */
  }
}
