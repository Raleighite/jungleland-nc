import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Share a Memory | Jungle Land NC',
  description: 'Submit your photos, videos, and memories of Jungle Land amusement park in Atlantic Beach NC.',
}

export default function SubmitPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <p className="text-jungle-amber text-sm uppercase tracking-widest mb-2 text-center">Help Preserve History</p>
      <h1 className="font-display text-4xl md:text-5xl text-jungle-bark mb-4 text-center">Share a Memory</h1>
      <p className="text-jungle-bark/60 text-center mb-12 leading-relaxed">
        Were you there? A photo, a story, a blurry home video — anything you have helps us preserve Jungle Land for everyone who couldn't be.
      </p>

      <form className="space-y-6 bg-white/60 border border-jungle-sand rounded-3xl p-8 shadow-sm">
        <div>
          <label className="block text-sm font-medium text-jungle-bark mb-2">Your Name <span className="text-jungle-bark/40">(optional)</span></label>
          <input type="text" placeholder="E.g. Jane Smith"
            className="w-full border border-jungle-sand rounded-xl px-4 py-3 text-jungle-bark bg-jungle-cream focus:outline-none focus:border-jungle-amber focus:ring-1 focus:ring-jungle-amber transition-colors" />
        </div>

        <div>
          <label className="block text-sm font-medium text-jungle-bark mb-2">Email <span className="text-jungle-bark/40">(optional — we'll only contact you about your submission)</span></label>
          <input type="email" placeholder="your@email.com"
            className="w-full border border-jungle-sand rounded-xl px-4 py-3 text-jungle-bark bg-jungle-cream focus:outline-none focus:border-jungle-amber focus:ring-1 focus:ring-jungle-amber transition-colors" />
        </div>

        <div>
          <label className="block text-sm font-medium text-jungle-bark mb-2">Approximate Year <span className="text-jungle-bark/40">(of your visit or photo)</span></label>
          <input type="text" placeholder="E.g. 1987, early 90s, not sure"
            className="w-full border border-jungle-sand rounded-xl px-4 py-3 text-jungle-bark bg-jungle-cream focus:outline-none focus:border-jungle-amber focus:ring-1 focus:ring-jungle-amber transition-colors" />
        </div>

        <div>
          <label className="block text-sm font-medium text-jungle-bark mb-2">Your Memory or Story</label>
          <textarea rows={5} placeholder="Tell us what you remember. Any detail helps..."
            className="w-full border border-jungle-sand rounded-xl px-4 py-3 text-jungle-bark bg-jungle-cream focus:outline-none focus:border-jungle-amber focus:ring-1 focus:ring-jungle-amber transition-colors resize-none" />
        </div>

        <div>
          <label className="block text-sm font-medium text-jungle-bark mb-2">Upload Photos / Videos</label>
          <div className="border-2 border-dashed border-jungle-sand rounded-xl p-8 text-center hover:border-jungle-amber transition-colors cursor-pointer">
            <div className="text-3xl mb-2">📎</div>
            <p className="text-jungle-bark/50 text-sm">Drag & drop files here, or click to browse</p>
            <p className="text-jungle-bark/30 text-xs mt-1">JPG, PNG, GIF, MP4, MOV — up to 100MB</p>
            <input type="file" multiple accept="image/*,video/*" className="hidden" />
          </div>
        </div>

        <div className="flex items-start gap-3">
          <input type="checkbox" id="consent" className="mt-1 accent-jungle-amber" />
          <label htmlFor="consent" className="text-sm text-jungle-bark/60 leading-relaxed">
            I confirm I have the right to share this content and consent to it being published on junglelandnc.com as part of the community archive.
          </label>
        </div>

        <button type="submit"
          className="w-full bg-jungle-amber text-jungle-bark font-bold py-4 rounded-full hover:bg-jungle-rust hover:text-jungle-cream transition-colors text-sm uppercase tracking-wide">
          Submit Your Memory →
        </button>

        <p className="text-center text-jungle-bark/30 text-xs">
          All submissions are reviewed before publishing. We respect your privacy.
        </p>
      </form>
    </div>
  )
}
