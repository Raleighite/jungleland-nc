import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Park History | Jungle Land NC',
  description: 'The history of Jungle Land amusement park in Atlantic Beach, North Carolina.',
}

export default function HistoryPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-jungle-amber text-sm uppercase tracking-widest mb-2">Atlantic Beach, NC</p>
      <h1 className="font-display text-4xl md:text-5xl text-jungle-bark mb-6">The History of Jungle Land</h1>
      <p className="text-jungle-bark/50 italic mb-10 text-sm">
        This page is a living document. As the community contributes more information, we'll fill in the gaps. If you have corrections or additions, please <a href="/submit" className="text-jungle-amber hover:underline">submit them</a>.
      </p>

      <div className="space-y-10 text-jungle-bark/80 leading-relaxed">
        <section>
          <h2 className="font-display text-2xl text-jungle-rust mb-3">What Was Jungle Land?</h2>
          <p>
            Jungle Land was a beloved amusement park located in Atlantic Beach, North Carolina — a coastal town on the Outer Banks known for its beaches and summer tourism. The park was a fixture of summers on the NC coast, drawing families and thrill-seekers for decades.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-jungle-rust mb-3">The Rides & Attractions</h2>
          <p className="mb-3">
            Details about the park's specific rides and attractions are still being gathered from community submissions. If you remember specific rides, their names, or what they looked like, we'd love to hear from you.
          </p>
          <div className="bg-jungle-sand/40 border border-jungle-sand rounded-xl p-5 text-sm text-jungle-bark/60 italic">
            🌿 This section grows as the community shares memories. <a href="/submit" className="text-jungle-amber hover:underline not-italic font-medium">Add what you remember →</a>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl text-jungle-rust mb-3">The End of an Era</h2>
          <p>
            Like many independent amusement parks of its era, Jungle Land eventually closed its gates. The physical park is gone, but its memory persists in photographs, home videos, and the stories of everyone who visited.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-jungle-rust mb-3">Help Write This History</h2>
          <p>
            We're building this page collaboratively. If you have dates, names of rides, photos, or any documented information about Jungle Land, please submit it below. Every contribution helps us preserve this piece of North Carolina history accurately.
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
