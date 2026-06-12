'use client'

import { useState } from 'react'
import MemoryCard from '@/components/MemoryCard'
import { memories, categories, type MemoryCategory } from '@/data/memories'

type Filter = 'All' | MemoryCategory

export default function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>('All')

  const filtered = filter === 'All' ? memories : memories.filter(m => m.category === filter)
  const tabs: Filter[] = ['All', ...categories]
  const countFor = (tab: Filter) =>
    tab === 'All' ? memories.length : memories.filter(m => m.category === tab).length

  return (
    <div>
      {/* PLACEHOLDER — example cards; replace with real submissions when live */}
      <p className="text-center text-jungle-bark/50 italic text-sm mb-8">
        No submissions are published yet — these cards are examples of what you could contribute.
      </p>

      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
              filter === tab
                ? 'bg-jungle-amber text-jungle-bark border-jungle-amber font-bold'
                : 'bg-jungle-cream text-jungle-bark/60 border-jungle-sand hover:border-jungle-amber hover:text-jungle-amber'
            }`}
          >
            {tab} <span className="opacity-60">({countFor(tab)})</span>
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(m => (
          <MemoryCard key={m.name + m.year} {...m} example />
        ))}
      </div>
    </div>
  )
}
