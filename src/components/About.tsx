import { Briefcase, GraduationCap } from 'lucide-react'
import { education, experience } from '../data/content'
import SectionHeader from './SectionHeader'

export default function About() {
  return (
    <section id="about" className="container-x py-12 sm:py-16">
      <SectionHeader eyebrow="About" title="Experience & education" />

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card p-7 sm:p-9">
          <div className="mb-7 flex items-center gap-3">
            <span className="clay-sm grid size-12 place-items-center rounded-2xl bg-accent text-on-accent">
              <Briefcase className="size-5" />
            </span>
            <h3 className="font-display text-xl font-bold">Experience</h3>
          </div>
          {experience.map((e) => (
            <div key={e.role}>
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-display text-lg font-bold">{e.role}</p>
                {e.current && (
                  <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-bold text-accent">
                    Current
                  </span>
                )}
              </div>
              <p className="mt-1 font-medium text-accent">{e.org}</p>
              <p className="mt-1 text-sm text-muted">{e.period}</p>
              <p className="mt-4 leading-relaxed text-muted">{e.description}</p>
            </div>
          ))}
        </div>

        <div className="card p-7 sm:p-9">
          <div className="mb-7 flex items-center gap-3">
            <span className="clay-sm grid size-12 place-items-center rounded-2xl bg-accent text-on-accent">
              <GraduationCap className="size-5" />
            </span>
            <h3 className="font-display text-xl font-bold">Education</h3>
          </div>
          <ol className="relative space-y-7 border-l-4 border-accent-soft pl-6">
            {education.map((ed) => (
              <li key={ed.school} className="relative">
                <span className="absolute top-1.5 -left-[31px] size-3 rounded-full border-2 border-white bg-accent ring-2 ring-accent/25" />
                <p className="font-display text-lg font-bold">{ed.school}</p>
                <p className="mt-1 text-muted">{ed.qualification}</p>
                <p className="mt-1 text-sm text-muted">{ed.period}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
