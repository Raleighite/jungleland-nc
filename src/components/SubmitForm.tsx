'use client'

import { useRef, useState, type DragEvent, type ChangeEvent, type FormEvent } from 'react'

const DECADES = ['1960s', '1970s', '1980s', '1990s', '2000s', 'Not sure'] as const
const CATEGORIES = ['Rides', 'Signage & Entrance', 'People & Events', 'Aerial & Maps'] as const
const STORY_MAX = 1000

const inputClasses =
  'w-full border border-jungle-sand rounded-xl px-4 py-3 text-jungle-bark bg-jungle-cream focus:outline-none focus:border-jungle-amber focus:ring-1 focus:ring-jungle-amber transition-colors'

export default function SubmitForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [decade, setDecade] = useState('')
  const [category, setCategory] = useState('')
  const [story, setStory] = useState('')
  const [files, setFiles] = useState<File[]>([])
  const [consent, setConsent] = useState(false)
  const [dragOver, setDragOver] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const addFiles = (incoming: FileList | null) => {
    if (!incoming) return
    setFiles(prev => [...prev, ...Array.from(incoming)])
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragOver(false)
    addFiles(e.dataTransfer.files)
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    addFiles(e.target.files)
    e.target.value = '' // allow re-selecting the same file
  }

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // PLACEHOLDER — no backend yet; submission is acknowledged client-side only
    setSubmitted(true)
  }

  const reset = () => {
    setName('')
    setEmail('')
    setDecade('')
    setCategory('')
    setStory('')
    setFiles([])
    setConsent(false)
    setSubmitted(false)
  }

  if (submitted) {
    return (
      <div className="bg-white/60 border border-jungle-sand rounded-3xl p-8 shadow-sm text-center">
        <div className="text-5xl mb-4">🌿</div>
        <h2 className="font-display text-2xl text-jungle-rust mb-3">Thank You for Sharing</h2>
        <p className="text-jungle-bark/60 leading-relaxed mb-6">
          Your memory is part of the archive now. Contributions like yours are how Jungle Land gets remembered.
        </p>

        <div className="bg-jungle-sand/30 border border-jungle-sand rounded-2xl p-5 text-left text-sm text-jungle-bark/70 space-y-1.5 mb-8 max-w-md mx-auto">
          <p className="font-bold text-jungle-bark uppercase tracking-wide text-xs mb-2">What you submitted</p>
          <p><span className="text-jungle-bark/40">From:</span> {name || 'Anonymous'}</p>
          {email && <p><span className="text-jungle-bark/40">Email:</span> {email}</p>}
          {decade && <p><span className="text-jungle-bark/40">Decade:</span> {decade}</p>}
          {category && <p><span className="text-jungle-bark/40">Category:</span> {category}</p>}
          {files.length > 0 && (
            <p><span className="text-jungle-bark/40">Files:</span> {files.map(f => f.name).join(', ')}</p>
          )}
          {story && <p className="italic">&ldquo;{story.length > 160 ? story.slice(0, 160) + '…' : story}&rdquo;</p>}
        </div>

        <button onClick={reset}
          className="bg-jungle-amber text-jungle-bark font-bold px-8 py-3 rounded-full hover:bg-jungle-rust hover:text-jungle-cream transition-colors text-sm uppercase tracking-wide">
          Submit Another Memory
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white/60 border border-jungle-sand rounded-3xl p-8 shadow-sm">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-jungle-bark mb-2">
          Your Name <span className="text-jungle-bark/40">(optional)</span>
        </label>
        <input id="name" type="text" placeholder="E.g. Jane Smith" value={name}
          onChange={e => setName(e.target.value)} className={inputClasses} />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-jungle-bark mb-2">
          Email <span className="text-jungle-bark/40">(optional — we&apos;ll only contact you about your submission)</span>
        </label>
        <input id="email" type="email" placeholder="your@email.com" value={email}
          onChange={e => setEmail(e.target.value)} className={inputClasses} />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="decade" className="block text-sm font-medium text-jungle-bark mb-2">Decade</label>
          <select id="decade" value={decade} onChange={e => setDecade(e.target.value)} className={inputClasses}>
            <option value="">Select a decade…</option>
            {DECADES.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-jungle-bark mb-2">Category</label>
          <select id="category" value={category} onChange={e => setCategory(e.target.value)} className={inputClasses}>
            <option value="">Select a category…</option>
            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      <div>
        <div className="flex items-baseline justify-between mb-2">
          <label htmlFor="story" className="block text-sm font-medium text-jungle-bark">Your Memory or Story</label>
          <span className={`text-xs ${story.length >= STORY_MAX ? 'text-jungle-rust font-bold' : 'text-jungle-bark/40'}`}>
            {story.length}/{STORY_MAX}
          </span>
        </div>
        <textarea id="story" rows={5} placeholder="Tell us what you remember. Any detail helps..."
          value={story} maxLength={STORY_MAX}
          onChange={e => setStory(e.target.value.slice(0, STORY_MAX))}
          className={`${inputClasses} resize-none`} />
      </div>

      <div>
        <label className="block text-sm font-medium text-jungle-bark mb-2">Upload Photos / Videos</label>
        <div
          onClick={() => fileInputRef.current?.click()}
          onDragOver={e => { e.preventDefault(); setDragOver(true) }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer ${
            dragOver ? 'border-jungle-amber bg-jungle-amber/5' : 'border-jungle-sand hover:border-jungle-amber'
          }`}
        >
          <div className="text-3xl mb-2">📎</div>
          <p className="text-jungle-bark/50 text-sm">Drag &amp; drop files here, or click to browse</p>
          <p className="text-jungle-bark/30 text-xs mt-1">JPG, PNG, GIF, MP4, MOV — up to 100MB</p>
          <input ref={fileInputRef} type="file" multiple accept="image/*,video/*"
            onChange={handleFileChange} className="hidden" />
        </div>

        {files.length > 0 && (
          <ul className="mt-3 space-y-2">
            {files.map((f, i) => (
              <li key={`${f.name}-${i}`}
                className="flex items-center justify-between bg-jungle-sand/30 border border-jungle-sand rounded-lg px-4 py-2 text-sm text-jungle-bark/70">
                <span className="truncate mr-3">📄 {f.name}</span>
                <button type="button" onClick={() => removeFile(i)} aria-label={`Remove ${f.name}`}
                  className="text-jungle-rust hover:text-jungle-amber font-bold text-lg leading-none shrink-0">
                  ×
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex items-start gap-3">
        <input type="checkbox" id="consent" checked={consent}
          onChange={e => setConsent(e.target.checked)} className="mt-1 accent-jungle-amber" />
        <label htmlFor="consent" className="text-sm text-jungle-bark/60 leading-relaxed">
          I confirm I have the right to share this content and consent to it being published on junglelandnc.com as part of the community archive.
        </label>
      </div>

      <button type="submit" disabled={!consent}
        className="w-full bg-jungle-amber text-jungle-bark font-bold py-4 rounded-full hover:bg-jungle-rust hover:text-jungle-cream transition-colors text-sm uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-jungle-amber disabled:hover:text-jungle-bark">
        Submit Your Memory →
      </button>

      <p className="text-center text-jungle-bark/30 text-xs">
        All submissions are reviewed before publishing. We respect your privacy.
      </p>
    </form>
  )
}
