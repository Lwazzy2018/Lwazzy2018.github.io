import { useCallback, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Lightbox, { type LightboxItem } from './components/Lightbox'
import { usePalette } from './hooks/usePalette'

export default function App() {
  const { palette, choose } = usePalette()
  const [preview, setPreview] = useState<LightboxItem | null>(null)
  const close = useCallback(() => setPreview(null), [])

  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar palette={palette} onChoosePalette={choose} />
      <main>
        <Hero />
        <Projects onOpen={setPreview} />
        <About />
        <Skills />
        <Certificates onOpen={setPreview} />
        <Contact />
      </main>
      <Footer />
      <Lightbox item={preview} onClose={close} />
    </>
  )
}
