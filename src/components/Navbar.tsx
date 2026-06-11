'use client'
import Link from 'next/link'
import { useState } from 'react'

const links = [
  { href: '/',         label: 'Home'        },
  { href: '/history',  label: 'History'     },
  { href: '/gallery',  label: 'Gallery'     },
  { href: '/virtual',  label: 'Virtual Tour'},
  { href: '/submit',   label: 'Share a Memory'},
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="bg-jungle-bark text-jungle-sand shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-display text-xl font-bold tracking-wide text-jungle-amber hover:text-jungle-sand transition-colors">
          🌿 Jungle Land NC
        </Link>
        {/* Desktop */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className="hover:text-jungle-amber transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
        {/* Mobile toggle */}
        <button className="md:hidden text-jungle-sand" onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-jungle-bark border-t border-jungle-amber px-4 pb-4 flex flex-col gap-3 text-sm">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="hover:text-jungle-amber transition-colors py-1">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
