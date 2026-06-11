'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const links = [
  { href: '/',        label: 'Home'          },
  { href: '/history', label: 'History'       },
  { href: '/gallery', label: 'Gallery'       },
  { href: '/virtual', label: 'Virtual Tour'  },
  { href: '/submit',  label: 'Share a Memory'},
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="bg-jungle-bark text-jungle-sand shadow-lg border-b border-jungle-amber/20">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo-badge.png"
            alt="Jungle Land NC"
            width={48}
            height={44}
            className="h-10 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
          />
          <span className="font-display font-bold text-lg text-jungle-amber group-hover:text-jungle-sand transition-colors leading-tight">
            Jungle Land NC
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-6 text-sm font-body font-medium">
          {links.slice(1).map(l => (
            <Link key={l.href} href={l.href}
              className="text-jungle-sand/80 hover:text-jungle-amber transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-jungle-sand/80 hover:text-jungle-amber transition-colors text-xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-jungle-bark border-t border-jungle-amber/20 px-4 pb-4 flex flex-col gap-1">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-jungle-sand/80 hover:text-jungle-amber transition-colors py-2 text-sm font-body border-b border-jungle-sand/10 last:border-0">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
