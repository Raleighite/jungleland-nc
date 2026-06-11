import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gallery | Jungle Land NC',
  description: 'Community-submitted photos and videos of Jungle Land amusement park, Atlantic Beach NC.',
}

export default function GalleryPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <p className="text-jungle-amber text-sm uppercase tracking-widest mb-2">Community Archive</p>
        <h1 className="font-display text-4xl md:text-5xl text-jungle-bark mb-4">Gallery</h1>
        <p className="text-jungle-bark/60 max-w-xl mx-auto">
          Photos, videos, and memories submitted by people who were there. Every image is a piece of history.
        </p>
      </div>

      {/* Empty state — waiting for community submissions */}
      <div className="bg-jungle-sand/30 border-2 border-dashed border-jungle-sand rounded-3xl py-24 px-8 text-center">
        <div className="text-6xl mb-6">📸</div>
        <h2 className="font-display text-2xl text-jungle-rust mb-3">The Archive is Just Getting Started</h2>
        <p className="text-jungle-bark/60 max-w-md mx-auto mb-8 leading-relaxed">
          This gallery will grow as the community shares memories. Got photos, home videos, or scanned tickets from Jungle Land? Be the first to contribute.
        </p>
        <Link href="/submit"
          className="inline-block bg-jungle-amber text-jungle-bark font-bold px-8 py-3 rounded-full hover:bg-jungle-rust hover:text-jungle-cream transition-colors text-sm uppercase tracking-wide">
          Submit Your Photos →
        </Link>
      </div>

      {/* Categories placeholder */}
      <div className="mt-16">
        <h2 className="font-display text-2xl text-jungle-bark mb-6 text-center">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Rides', 'Signage & Entrance', 'People & Events', 'Aerial & Maps'].map(cat => (
            <div key={cat}
              className="bg-jungle-cream border border-jungle-sand rounded-xl p-6 text-center hover:border-jungle-amber transition-colors cursor-pointer group">
              <p className="text-jungle-bark/60 text-sm font-medium group-hover:text-jungle-amber transition-colors">{cat}</p>
              <p className="text-xs text-jungle-bark/30 mt-1">0 items</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
