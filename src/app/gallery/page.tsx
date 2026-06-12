import type { Metadata } from 'next'
import Link from 'next/link'
import GalleryGrid from '@/components/GalleryGrid'

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

      {/* PLACEHOLDER — sample cards show the vision; swap for real submissions when live */}
      <GalleryGrid />

      {/* Contribute CTA */}
      <div className="mt-16 bg-jungle-sand/30 border-2 border-dashed border-jungle-sand rounded-3xl py-12 px-8 text-center">
        <div className="text-4xl mb-4">📸</div>
        <h2 className="font-display text-2xl text-jungle-rust mb-3">Your Shoebox Might Hold the Missing Piece</h2>
        <p className="text-jungle-bark/60 max-w-md mx-auto mb-6 leading-relaxed">
          Got photos, home videos, or scanned tickets from Jungle Land? Every contribution makes the archive more complete.
        </p>
        <Link href="/submit"
          className="inline-block bg-jungle-amber text-jungle-bark font-bold px-8 py-3 rounded-full hover:bg-jungle-rust hover:text-jungle-cream transition-colors text-sm uppercase tracking-wide">
          Submit Your Photos →
        </Link>
      </div>
    </div>
  )
}
