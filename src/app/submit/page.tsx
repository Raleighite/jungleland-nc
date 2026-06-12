import type { Metadata } from 'next'
import SubmitForm from '@/components/SubmitForm'

export const metadata: Metadata = {
  title: 'Share a Memory | Jungle Land NC',
  description: 'Submit your photos, videos, and memories of Jungle Land amusement park in Atlantic Beach NC.',
}

const tips = [
  'Specific years or context help a lot — even "the summer after I graduated" narrows things down.',
  "Tell us who's in the photo (with their permission) — names put faces to the park's story.",
  'Note which ride or area it was — it helps us rebuild the park layout piece by piece.',
  "Share the story behind the moment — why you were there, who you were with, what you remember feeling.",
]

export default function SubmitPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 animate-fade-in">
      <p className="text-jungle-amber text-sm uppercase tracking-widest mb-2 text-center">Help Preserve History</p>
      <h1 className="font-display text-4xl md:text-5xl text-jungle-bark mb-4 text-center">Share a Memory</h1>
      <p className="text-jungle-bark/60 text-center mb-12 leading-relaxed max-w-2xl mx-auto">
        Were you there? A photo, a story, a blurry home video — anything you have helps us preserve Jungle Land for everyone who couldn&apos;t be.
      </p>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2">
          <SubmitForm />
        </div>

        {/* Tips — sidebar on desktop, below form on mobile */}
        <aside className="bg-jungle-sand/30 border border-jungle-sand rounded-3xl p-6 lg:sticky lg:top-6">
          <h2 className="font-display text-xl text-jungle-rust mb-4">What Makes a Great Submission</h2>
          <ul className="space-y-4">
            {tips.map(tip => (
              <li key={tip} className="flex gap-3 text-sm text-jungle-bark/70 leading-relaxed">
                <span className="text-jungle-amber shrink-0" aria-hidden="true">🌿</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-jungle-bark/40 italic mt-5 pt-4 border-t border-jungle-sand">
            Not sure about details? Submit anyway. Fuzzy memories are still memories — the community helps fill in the gaps.
          </p>
        </aside>
      </div>
    </div>
  )
}
