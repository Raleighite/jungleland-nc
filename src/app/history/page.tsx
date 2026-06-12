import type { Metadata } from 'next'
import Timeline from '@/components/Timeline'

export const metadata: Metadata = {
  title: 'Park History | Jungle Land NC',
  description: 'The history of Jungle Land amusement park in Atlantic Beach, North Carolina.',
}

// PLACEHOLDER — timeline entries reflect current community research; refine as submissions come in
const timelineEntries = [
  {
    year: '~1970s',
    title: 'Jungle Land Opens',
    desc: 'The park opens on Bogue Banks, Atlantic Beach NC, becoming an immediate summer fixture for coastal NC families.',
  },
  {
    year: '1980s',
    title: 'Peak Years',
    desc: "Summer crowds at their height. Families drive from across the state. The Ferris wheel becomes the park's defining landmark.",
  },
  {
    year: '1990s',
    title: 'Expansion Era',
    desc: 'Go-karts, bumper boats, and an expanded arcade join the lineup. The park becomes a multi-day destination for some families.',
  },
  {
    year: '~2002–2006',
    title: 'The Gates Close',
    desc: 'The park closes. Exact date disputed — community research ongoing. The entrance arch disappears. A piece of the coast goes quiet.',
  },
  {
    year: '2026',
    title: 'The Archive Opens',
    desc: 'Community effort launched to collect and preserve every photo, story, and memory that remains.',
  },
]

// PLACEHOLDER — attraction list built from early community recollections
const attractions = [
  { emoji: '🎡', name: 'Ferris Wheel' },
  { emoji: '🏎️', name: 'Go-Karts' },
  { emoji: '🚤', name: 'Bumper Boats' },
  { emoji: '⛳', name: 'Mini Golf' },
  { emoji: '🎢', name: 'Roller Coaster' },
  { emoji: '🕹️', name: 'Arcade' },
  { emoji: '🌴', name: 'Entrance Arch' },
  { emoji: '🍦', name: 'Concessions' },
]

export default function HistoryPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 animate-fade-in">
      <p className="text-jungle-amber text-sm uppercase tracking-widest mb-2">Atlantic Beach, NC</p>
      <h1 className="font-display text-4xl md:text-5xl text-jungle-bark mb-6">The History of Jungle Land</h1>
      <p className="text-jungle-bark/50 italic mb-10 text-sm">
        This page is a living document. As the community contributes more information, we&apos;ll fill in the gaps. If you have corrections or additions, please <a href="/submit" className="text-jungle-amber hover:underline">submit them</a>.
      </p>

      <div className="space-y-12 text-jungle-bark/80 leading-relaxed">
        <section>
          <h2 className="font-display text-2xl text-jungle-rust mb-3">What Was Jungle Land?</h2>
          <p>
            Jungle Land was a beloved amusement park located in Atlantic Beach, North Carolina — a coastal town on Bogue Banks known for its beaches and summer tourism. For roughly three decades, the park was a fixture of summers on the NC coast, drawing families and thrill-seekers from across the state. Ask anyone who grew up near the Crystal Coast in the &apos;80s or &apos;90s — odds are they have a Jungle Land story.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-jungle-rust mb-4">The Timeline</h2>
          <p className="mb-8">
            Here&apos;s what we&apos;ve pieced together so far. Some dates are approximate — that&apos;s where you come in. If you can confirm or correct anything below, <a href="/submit" className="text-jungle-amber hover:underline">we want to hear it</a>.
          </p>
          <Timeline entries={timelineEntries} />
        </section>

        <section>
          <h2 className="font-display text-2xl text-jungle-rust mb-3">Known Attractions</h2>
          <p className="mb-6">
            These are the rides and attractions the community remembers so far. Names, locations within the park, and years of operation are still being confirmed.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {attractions.map(a => (
              <div key={a.name}
                className="bg-jungle-cream border border-jungle-sand rounded-xl p-5 text-center hover:border-jungle-amber hover:shadow-md transition-all">
                <div className="text-3xl mb-2">{a.emoji}</div>
                <p className="text-jungle-bark/70 text-sm font-medium">{a.name}</p>
              </div>
            ))}
          </div>
          <div className="bg-jungle-sand/40 border border-jungle-sand rounded-xl p-5 text-sm text-jungle-bark/60 italic mt-6">
            🌿 Remember a ride that&apos;s missing? Know what the roller coaster was called? <a href="/submit" className="text-jungle-amber hover:underline not-italic font-medium">Add what you remember →</a>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl text-jungle-rust mb-3">The End of an Era</h2>
          <p>
            Like many independent amusement parks of its era, Jungle Land eventually closed its gates — sometime in the early 2000s, though even the exact year is part of what we&apos;re working to confirm. The physical park is gone, but its memory persists in photographs, home videos, and the stories of everyone who visited.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-jungle-rust mb-3">Help Write This History</h2>
          <p>
            We&apos;re building this page collaboratively. If you have dates, names of rides, photos, or any documented information about Jungle Land, please submit it below. Every contribution helps us preserve this piece of North Carolina history accurately.
          </p>
          <div className="mt-4">
            <a href="/submit"
              className="inline-block bg-jungle-amber text-jungle-bark font-bold px-6 py-3 rounded-full hover:bg-jungle-rust hover:text-jungle-cream transition-colors text-sm uppercase tracking-wide">
              Contribute to the History →
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
