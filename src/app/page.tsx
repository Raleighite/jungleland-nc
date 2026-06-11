import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-jungle-bark text-jungle-sand py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/texture.svg')] bg-repeat" />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-jungle-amber text-sm uppercase tracking-widest mb-3 font-medium">Atlantic Beach, North Carolina</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Jungle Land<br />
            <span className="text-jungle-amber">Lives On.</span>
          </h1>
          <p className="text-jungle-sand/80 text-lg md:text-xl max-w-xl mx-auto mb-10">
            The rides are gone. The gates are closed. But the memories belong to everyone who was ever there — and now we're building it back together.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/submit"
              className="bg-jungle-amber text-jungle-bark font-bold px-8 py-3 rounded-full hover:bg-jungle-sand transition-colors text-sm uppercase tracking-wide">
              Share a Memory
            </Link>
            <Link href="/gallery"
              className="border border-jungle-sand/40 text-jungle-sand px-8 py-3 rounded-full hover:border-jungle-amber hover:text-jungle-amber transition-colors text-sm uppercase tracking-wide">
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="font-display text-3xl text-jungle-rust mb-4">Why This Exists</h2>
        <p className="text-jungle-bark/70 text-lg leading-relaxed max-w-2xl mx-auto">
          Jungle Land was more than an amusement park. It was a landmark, a summer ritual, a memory shared by generations of North Carolinians. When it closed, a piece of coastal history disappeared. This site exists to preserve what remains — and, eventually, to virtually recreate what was lost.
        </p>
      </section>

      {/* Three pillars */}
      <section className="bg-jungle-sand/40 py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {[
            { emoji: '📸', title: 'Community Archive', desc: 'Photos, videos, ticket stubs, programs — if you have it, we want to preserve it.', href: '/gallery' },
            { emoji: '📜', title: 'Park History', desc: 'What was Jungle Land? When did it open? What rides were there? We\'re piecing it together.', href: '/history' },
            { emoji: '🗺️', title: 'Virtual Recreation', desc: 'Our long-term goal: an interactive virtual Jungle Land built from community knowledge.', href: '/virtual' },
          ].map(p => (
            <Link key={p.title} href={p.href}
              className="bg-jungle-cream border border-jungle-sand rounded-2xl p-8 hover:border-jungle-amber hover:shadow-md transition-all group">
              <div className="text-4xl mb-4">{p.emoji}</div>
              <h3 className="font-display text-xl text-jungle-rust mb-2 group-hover:text-jungle-amber transition-colors">{p.title}</h3>
              <p className="text-jungle-bark/60 text-sm leading-relaxed">{p.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <h2 className="font-display text-3xl text-jungle-bark mb-4">Were you there?</h2>
        <p className="text-jungle-bark/60 mb-8 max-w-lg mx-auto">
          Every photo, every story, every blurry home video — it all matters. Help us rebuild this piece of NC history.
        </p>
        <Link href="/submit"
          className="bg-jungle-rust text-jungle-cream font-bold px-10 py-4 rounded-full hover:bg-jungle-bark transition-colors text-sm uppercase tracking-wide inline-block">
          Submit Your Memory →
        </Link>
      </section>
    </div>
  )
}
