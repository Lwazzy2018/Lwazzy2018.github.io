type Props = { eyebrow: string; title: string; children?: React.ReactNode }

export default function SectionHeader({ eyebrow, title, children }: Props) {
  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-4 sm:mb-14">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
      </div>
      {children}
    </div>
  )
}
