'use client'

import { useState, type FormEvent } from 'react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    // PLACEHOLDER — no backend yet; wire to a mailing list service later
    setJoined(true)
  }

  if (joined) {
    return (
      <p className="text-jungle-amber font-bold text-lg" role="status">
        🌿 You&apos;re on the list.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={e => setEmail(e.target.value)}
        aria-label="Email address"
        className="flex-1 border border-jungle-sand/40 rounded-full px-5 py-3 bg-jungle-cream/10 text-jungle-sand placeholder:text-jungle-sand/40 focus:outline-none focus:border-jungle-amber transition-colors"
      />
      <button type="submit"
        className="bg-jungle-amber text-jungle-bark font-bold px-7 py-3 rounded-full hover:bg-jungle-gold transition-colors text-sm uppercase tracking-widest shrink-0">
        Keep Me Posted
      </button>
    </form>
  )
}
