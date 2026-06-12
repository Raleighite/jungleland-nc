import Link from 'next/link'

const siteLinks = [
  { href: '/',        label: 'Home'           },
  { href: '/history', label: 'History'        },
  { href: '/gallery', label: 'Gallery'        },
  { href: '/virtual', label: 'Virtual Tour'   },
  { href: '/submit',  label: 'Share a Memory' },
]

export default function Footer() {
  return (
    <footer className="bg-jungle-bark text-jungle-sand/70 text-sm mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-3">
        {/* Brand */}
        <div className="space-y-3">
          <p className="font-display text-jungle-amber text-lg">🌿 Jungle Land NC</p>
          <p className="leading-relaxed">
            A community archive for a park that deserves to be remembered. Atlantic Beach, North Carolina.
          </p>
          <p className="text-xs text-jungle-sand/40 leading-relaxed">
            This is a community-run fan preservation project. Not affiliated with any former commercial entity.
          </p>
        </div>

        {/* Site links */}
        <div>
          <p className="font-display text-jungle-sand text-base mb-3">Explore</p>
          <ul className="space-y-2">
            {siteLinks.map(l => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-jungle-amber transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* About */}
        <div>
          <p className="font-display text-jungle-sand text-base mb-3">About the Project</p>
          <p className="leading-relaxed">
            Run entirely by volunteers who think this little park mattered. Free to browse, free to contribute — and it always will be.
          </p>
        </div>
      </div>

      <div className="border-t border-jungle-sand/10">
        <p className="max-w-6xl mx-auto px-4 py-5 text-center text-xs text-jungle-sand/40">
          © 2026 Jungle Land NC Community Archive
        </p>
      </div>
    </footer>
  )
}
