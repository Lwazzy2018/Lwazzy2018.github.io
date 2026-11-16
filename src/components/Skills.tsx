import { skills } from '../data/content'
import SectionHeader from './SectionHeader'

export default function Skills() {
  return (
    <section id="skills" className="container-x py-12 sm:py-16">
      <SectionHeader eyebrow="Skills" title="Technical skills" />
      <ul className="flex flex-wrap gap-3">
        {skills.map((s) => (
          <li
            key={s}
            className="clay-sm rounded-2xl bg-surface px-5 py-3 font-display text-base font-bold transition-all duration-200 hover:-translate-y-1 hover:text-accent sm:text-lg"
          >
            {s}
          </li>
        ))}
      </ul>
    </section>
  )
}
