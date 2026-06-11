import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Virtual Recreation | Jungle Land NC',
  description: 'Our long-term goal: an interactive virtual recreation of Jungle Land amusement park, built by the community.',
}

export default function VirtualPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <p className="text-jungle-amber text-sm uppercase tracking-widest mb-2">Coming Together</p>
        <h1 className="font-display text-4xl md:text-5xl text-jungle-bark mb-4">Virtual Recreation</h1>
        <p className="text-jungle-bark/60 max-w-xl mx-auto leading-relaxed">
          Our long-term mission: rebuild Jungle Land as an interactive virtual experience that anyone can explore — built entirely from community-contributed knowledge, photos, and memories.
        </p>
      </div>

      {/* Vision */}
      <div className="bg-jungle-bark text-jungle-sand rounded-3xl p-10 mb-12 text-center">
        <div className="text-5xl mb-5">🗺️</div>
        <h2 className="font-display text-2xl text-jungle-amber mb-4">The Vision</h2>
        <p className="text-jungle-sand/80 leading-relaxed max-w-lg mx-auto">
          Imagine walking through a virtual Jungle Land — seeing the entrance arch, hearing the rides, exploring each section of the park — all reconstructed from photos and memories shared by people who were actually there.
        </p>
      </div>

      {/* Phases */}
      <h2 className="font-display text-2xl text-jungle-rust mb-6 text-center">How We Get There</h2>
      <div className="space-y-4 mb-12">
        {[
          { phase: '01', title: 'Archive Phase', status: 'Active Now', desc: 'Collect every photo, video, and story we can find. Build the source material for reconstruction.', active: true },
          { phase: '02', title: 'Mapping Phase', status: 'Coming Soon', desc: 'Use submitted photos and memories to create a best-guess layout map of the park — what was where.', active: false },
          { phase: '03', title: 'Model Phase', status: 'Future', desc: 'Begin 3D modeling rides and buildings based on photographic evidence and community knowledge.', active: false },
          { phase: '04', title: 'Experience Phase', status: 'Future', desc: 'Launch an interactive browser-based or VR experience that anyone can explore, free and forever.', active: false },
        ].map(p => (
          <div key={p.phase}
            className={`border rounded-2xl p-6 flex gap-5 items-start transition-all ${p.active ? 'border-jungle-amber bg-jungle-amber/10' : 'border-jungle-sand bg-white/40'}`}>
            <div className={`font-display text-3xl font-bold ${p.active ? 'text-jungle-amber' : 'text-jungle-sand'}`}>{p.phase}</div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="font-display text-lg text-jungle-bark">{p.title}</h3>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${p.active ? 'bg-jungle-amber text-jungle-bark' : 'bg-jungle-sand text-jungle-bark/50'}`}>{p.status}</span>
              </div>
              <p className="text-jungle-bark/60 text-sm leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center bg-jungle-sand/30 rounded-2xl p-10 border border-jungle-sand">
        <h2 className="font-display text-2xl text-jungle-bark mb-3">The archive comes first</h2>
        <p className="text-jungle-bark/60 mb-6 max-w-md mx-auto text-sm leading-relaxed">
          The virtual recreation is only possible if we collect enough photos and memories to reconstruct the park accurately. Every submission gets us closer.
        </p>
        <Link href="/submit"
          className="inline-block bg-jungle-rust text-jungle-cream font-bold px-8 py-3 rounded-full hover:bg-jungle-bark transition-colors text-sm uppercase tracking-wide">
          Submit Your Memories →
        </Link>
      </div>
    </div>
  )
}
