// PLACEHOLDER — example contributions shown while the archive waits for real submissions.
// Swap this array for real data (CMS / API) when submissions go live.

export type MemoryCategory = 'Rides' | 'Signage & Entrance' | 'People & Events' | 'Aerial & Maps'
export type MemoryType = 'photo' | 'video' | 'story'

export type Memory = {
  name: string
  year: string
  category: MemoryCategory
  type: MemoryType
  story: string
}

// Each entry is an example of what someone could contribute — not a real submission.
export const memories: Memory[] = [
  {
    name: 'Your Ferris wheel photo',
    year: 'any year',
    category: 'Rides',
    type: 'photo',
    story: 'That shot of your family at the top of the wheel, ocean in the background. Even the blurry ones count.',
  },
  {
    name: 'Your shot of the entrance',
    year: 'any year',
    category: 'Signage & Entrance',
    type: 'photo',
    story: 'The arch, the ticket booth, the sign lit up at night — any angle helps us piece the entrance back together.',
  },
  {
    name: 'Your family home video',
    year: 'any year',
    category: 'People & Events',
    type: 'video',
    story: 'A few shaky minutes from a camcorder — birthdays, reunions, a cousin on the go-karts. Sound and all.',
  },
  {
    name: 'Your go-kart story',
    year: 'any year',
    category: 'Rides',
    type: 'story',
    story: "No photo needed. What you rode, who you raced, what the line felt like on a July afternoon — write it down.",
  },
  {
    name: 'Your gift-shop postcard',
    year: 'any year',
    category: 'Aerial & Maps',
    type: 'photo',
    story: 'Postcards, park maps, brochures — anything that shows the layout. Check the attic and the junk drawer.',
  },
  {
    name: 'Your day-at-the-park memory',
    year: 'any year',
    category: 'People & Events',
    type: 'story',
    story: 'A tradition, a first date, a graduation trip. The small details are exactly what we want to preserve.',
  },
]

export const categories: MemoryCategory[] = ['Rides', 'Signage & Entrance', 'People & Events', 'Aerial & Maps']
