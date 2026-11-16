import { ArrowRight, CalendarCheck, Download, MapPin, Mail } from 'lucide-react'
import { profile } from '../data/content'
import { handleDownload } from '../lib/download'

export default function Hero() {
  return (
    <section id="home" className="container-x pt-28 pb-10 sm:pt-32 sm:pb-14">
      <div className="grid items-center gap-10 lg:grid-cols-[1.7fr_1fr] lg:gap-16">
        <div className="order-2 lg:order-1">
          <span className="clay-sm inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-xs font-extrabold tracking-[0.14em] text-ink">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            OPEN TO WORK
          </span>

          <p className="mt-7 text-lg font-medium text-muted">
            {profile.name} · {profile.title} <span className="text-accent">| {profile.specialty}</span>
          </p>

          <h1 className="mt-3 font-display text-5xl leading-[1.02] font-extrabold tracking-tight sm:text-6xl lg:text-[76px]">
            Building digital experiences through <span className="text-accent">code.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{profile.intro}</p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[15px] font-medium text-muted">
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-accent" /> {profile.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <CalendarCheck className="size-4 text-accent" /> {profile.availability}
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="btn-primary">
              View Projects <ArrowRight className="size-4" />
            </a>
            <a
              href={profile.cv}
              download={profile.cvFileName}
              onClick={(e) => handleDownload(e, profile.cv, profile.cvFileName)}
              className="btn-ghost"
            >
              <Download className="size-4" /> Download CV
            </a>
            <a href="#contact" className="btn-ghost">
              <Mail className="size-4" /> Contact Me
            </a>
          </div>
        </div>

        <div className="order-1 w-full max-w-[200px] sm:max-w-[240px] lg:order-2 lg:ml-auto lg:max-w-[300px]">
          <div className="relative">
            <div className="absolute -inset-2 -z-10 rounded-[1.9rem] bg-surface" style={{ boxShadow: 'var(--clay)' }} aria-hidden="true" />
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width={640}
              height={800}
              className="aspect-[4/5] w-full rounded-[1.6rem] object-cover object-[50%_35%]" style={{ boxShadow: 'var(--clay-in)' }}
            />
            <div className="card absolute -bottom-5 -left-4 hidden items-center gap-3 sm:flex !rounded-2xl px-3.5 py-2.5 whitespace-nowrap">
              <span className="clay-sm grid size-10 place-items-center rounded-xl bg-accent text-on-accent">
                <CalendarCheck className="size-5" />
              </span>
              <div>
                <p className="text-sm font-bold">{profile.availability}</p>
                <p className="text-xs text-muted">{profile.workPreference}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
