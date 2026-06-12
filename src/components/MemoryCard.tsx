import type { MemoryCategory, MemoryType } from '@/data/memories'

type MemoryCardProps = {
  name: string
  year: string
  category: string
  type: 'photo' | 'video' | 'story'
  story: string
  /** Marks the card as an example of what to contribute, not a real submission */
  example?: boolean
}

// PLACEHOLDER — gradient stands in for the real photo/video thumbnail
const categoryGradients: Record<MemoryCategory, string> = {
  'Rides':              'from-jungle-amber/70 via-jungle-rust/60 to-jungle-bark/80',
  'Signage & Entrance': 'from-jungle-rust/70 via-jungle-bark/60 to-jungle-moss/70',
  'People & Events':    'from-jungle-moss/70 via-jungle-sky/50 to-jungle-amber/60',
  'Aerial & Maps':      'from-jungle-sky/70 via-jungle-moss/50 to-jungle-sand/80',
}

const typeIcons: Record<MemoryType, { icon: string; label: string }> = {
  photo: { icon: '📷', label: 'Photo' },
  video: { icon: '🎞️', label: 'Video' },
  story: { icon: '📖', label: 'Story' },
}

export default function MemoryCard({ name, year, category, type, story, example = false }: MemoryCardProps) {
  const gradient = categoryGradients[category as MemoryCategory] ?? categoryGradients['Rides']
  const typeInfo = typeIcons[type]

  return (
    <article className="bg-white/70 border border-jungle-sand rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      {/* Placeholder image area */}
      <div className={`relative h-40 bg-gradient-to-br ${gradient}`}>
        <div className="absolute inset-0 bg-[url('/texture.svg')] opacity-10" />
        {example && (
          <span className="absolute top-3 left-3 bg-jungle-cream/90 text-jungle-rust text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
            ✨ Example
          </span>
        )}
        <span
          className="absolute top-3 right-3 bg-jungle-bark/60 text-jungle-cream text-xs px-2.5 py-1 rounded-full backdrop-blur-sm"
          title={typeInfo.label}
        >
          {typeInfo.icon} {typeInfo.label}
        </span>
        <span className="absolute bottom-3 left-3 bg-jungle-cream/90 text-jungle-bark text-xs font-bold px-2.5 py-1 rounded-full">
          {year}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between gap-2 mb-2">
          <p className="font-display text-jungle-rust group-hover:text-jungle-amber transition-colors">{name}</p>
          <span className="text-[11px] uppercase tracking-wide text-jungle-bark/40 bg-jungle-sand/50 px-2 py-0.5 rounded-full whitespace-nowrap">
            {category}
          </span>
        </div>
        <p className="text-jungle-bark/60 text-sm leading-relaxed line-clamp-2">
          {example ? story : <>&ldquo;{story}&rdquo;</>}
        </p>
      </div>
    </article>
  )
}
