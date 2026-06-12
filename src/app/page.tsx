import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-jungle-bark text-jungle-sand py-16 px-4 text-center relative overflow-hidden">
        {/* Subtle wood-grain overlay */}
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 22px, rgba(255,255,255,0.4) 22px, rgba(255,255,255,0.4) 23px)' }} />

        <div className="relative max-w-4xl mx-auto">
          {/* Sign Logo — the hero visual */}
          <div className="mb-10 flex justify-center">
            <Image
              src="/logo-badge.png"
              alt="Jungleland — Atlantic Beach, NC"
              width={420}
              height={373}
              className="w-64 sm:w-80 md:w-[420px] h-auto"
              style={{ filter: 'drop-shadow(0 20px 48px rgba(0,0,0,0.6))' }}
              priority
            />
          </div>

          <p className="text-jungle-gold text-xs uppercase tracking-[0.2em] mb-4 font-body font-bold">
            Atlantic Beach · North Carolina
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-black mb-5 leading-tight text-jungle-sand">
            The memories belong<br />
            <span className="text-jungle-amber italic">to everyone.</span>
          </h1>
          <p className="text-jungle-sand/75 text-base md:text-lg max-w-xl mx-auto mb-10 font-body leading-relaxed">
            The rides are gone. The gates are closed. But a park this beloved doesn't disappear — 
            it lives in the people who were there. Help us rebuild this piece of NC history.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/submit"
              className="bg-jungle-amber text-jungle-bark font-body font-bold px-8 py-3 rounded-full hover:bg-jungle-gold transition-colors text-sm uppercase tracking-widest shadow-lg">
              Share a Memory
            </Link>
            <Link href="/gallery"
              className="border border-jungle-sand/50 text-jungle-sand font-body px-8 py-3 rounded-full hover:border-jungle-amber hover:text-jungle-amber transition-colors text-sm uppercase tracking-widest">
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Why This Exists */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <p className="text-jungle-teal text-xs font-body font-bold uppercase tracking-[0.2em] mb-3">Our Mission</p>
        <h2 className="font-display text-3xl md:text-4xl text-jungle-rust mb-5">Why This Exists</h2>
        <p className="text-jungle-bark/70 text-lg leading-relaxed max-w-2xl mx-auto font-body">
          Jungle Land was more than an amusement park. It was a landmark, a summer ritual, a memory 
          shared by generations of North Carolinians. When it closed, a piece of coastal history 
          disappeared. This site exists to preserve what remains — and, eventually, to virtually 
          recreate what was lost.
        </p>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-4">
        <div className="border-t border-jungle-sand" />
      </div>

      {/* Three pillars */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-jungle-teal text-xs font-body font-bold uppercase tracking-[0.2em] mb-3 text-center">What We're Building</p>
          <h2 className="font-display text-3xl text-jungle-rust mb-10 text-center">Three Ways to Help</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '📸',
                title: 'Community Archive',
                desc: 'Photos, videos, ticket stubs, programs — if you have it, we want to preserve it.',
                href: '/gallery',
                color: 'hover:border-jungle-amber',
              },
              {
                icon: '📜',
                title: 'Park History',
                desc: "What was Jungle Land? When did it open? What rides were there? We're piecing it together.",
                href: '/history',
                color: 'hover:border-jungle-rust',
              },
              {
                icon: '🗺️',
                title: 'Virtual Recreation',
                desc: 'Our long-term goal: an interactive virtual Jungle Land built from community knowledge.',
                href: '/virtual',
                color: 'hover:border-jungle-teal',
              },
            ].map(p => (
              <Link key={p.title} href={p.href}
                className={`bg-jungle-cream border border-jungle-sand/60 rounded-2xl p-8 hover:shadow-lg transition-all group ${p.color}`}>
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="font-display text-xl text-jungle-rust mb-2 group-hover:text-jungle-amber transition-colors">{p.title}</h3>
                <p className="text-jungle-bark/60 text-sm leading-relaxed font-body">{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-jungle-rust text-jungle-cream py-16 px-4 text-center">
        <h2 className="font-display text-3xl md:text-4xl mb-4">Were you there?</h2>
        <p className="text-jungle-cream/80 mb-8 max-w-lg mx-auto font-body text-lg leading-relaxed">
          Every photo, every story, every blurry home video — it all matters. 
          Help us rebuild this piece of NC history before it fades away.
        </p>
        <Link href="/submit"
          className="bg-jungle-cream text-jungle-rust font-body font-bold px-10 py-4 rounded-full hover:bg-jungle-sand transition-colors text-sm uppercase tracking-widest inline-block shadow-lg">
          Submit Your Memory →
        </Link>
      </section>
    </div>
  )
}
