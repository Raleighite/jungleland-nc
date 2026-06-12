type TimelineEntry = {
  year: string
  title: string
  desc: string
}

export default function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="relative border-l-2 border-jungle-sand ml-3 space-y-10">
      {entries.map(entry => (
        <li key={entry.year + entry.title} className="relative pl-8">
          {/* Dot */}
          <span
            className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-jungle-amber ring-4 ring-jungle-cream"
            aria-hidden="true"
          />
          <p className="font-body text-sm font-bold uppercase tracking-widest text-jungle-bark/50 mb-1">
            {entry.year}
          </p>
          <h3 className="font-display text-xl text-jungle-rust mb-2">{entry.title}</h3>
          <p className="text-jungle-bark/70 leading-relaxed font-body">{entry.desc}</p>
        </li>
      ))}
    </ol>
  )
}
