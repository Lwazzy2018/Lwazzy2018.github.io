import { Github, Linkedin } from 'lucide-react'
import { contact } from '../data/content'

export default function Footer() {
  return (
    <footer className="container-x flex flex-col-reverse items-center justify-between gap-4 border-t border-line py-8 text-sm text-muted sm:flex-row dark:text-muted">
      <p>© 2026 Lwazi Nkambule. Designed &amp; developed with purpose.</p>
      <div className="flex gap-2">
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="grid size-10 place-items-center rounded-full bg-surface clay-sm transition-all hover:-translate-y-0.5 hover:text-accent"
        >
          <Linkedin className="size-[18px]" />
        </a>
        <a
          href={contact.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="grid size-10 place-items-center rounded-full bg-surface clay-sm transition-all hover:-translate-y-0.5 hover:text-accent"
        >
          <Github className="size-[18px]" />
        </a>
      </div>
    </footer>
  )
}
