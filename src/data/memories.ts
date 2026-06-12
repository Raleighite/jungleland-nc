// PLACEHOLDER — sample memories to show the vision while real submissions come in.
// Swap this array for real data (CMS / API) when the archive goes live.

export type MemoryCategory = 'Rides' | 'Signage & Entrance' | 'People & Events' | 'Aerial & Maps'
export type MemoryType = 'photo' | 'video' | 'story'

export type Memory = {
  name: string
  year: string
  category: MemoryCategory
  type: MemoryType
  story: string
}

export const memories: Memory[] = [
  {
    name: 'Sandra M.',
    year: '1988',
    category: 'Rides',
    type: 'photo',
    story: 'My dad took this the summer before I started middle school. That was the year I finally rode the big Ferris wheel alone.',
  },
  {
    name: 'Anonymous',
    year: 'early 90s',
    category: 'Signage & Entrance',
    type: 'photo',
    story: 'The entrance arch. Spent so many summers walking under that sign.',
  },
  {
    name: 'Tommy R.',
    year: '1993',
    category: 'People & Events',
    type: 'video',
    story: 'Home video from our family reunion trip. You can hear my grandma yelling from the bumper boats.',
  },
  {
    name: 'Cheryl B.',
    year: '1979',
    category: 'Rides',
    type: 'photo',
    story: 'First time I ever rode a Ferris wheel. I was terrified. My brother talked me into it.',
  },
  {
    name: 'David K.',
    year: '2001',
    category: 'Rides',
    type: 'photo',
    story: "One of the last summers it was open. We didn't know it at the time.",
  },
  {
    name: 'Anonymous',
    year: 'mid-80s',
    category: 'Aerial & Maps',
    type: 'photo',
    story: "Postcard from the gift shop. Found it in my grandmother's things.",
  },
  {
    name: 'Patricia L.',
    year: '1996',
    category: 'People & Events',
    type: 'story',
    story: 'Every July 4th weekend. Made it an annual tradition. The go-karts were the best part for the kids.',
  },
  {
    name: 'Mike T.',
    year: '1985',
    category: 'Signage & Entrance',
    type: 'photo',
    story: 'This photo was in a shoebox for 30 years. Just found it cleaning out the attic.',
  },
  {
    name: 'Rosa N.',
    year: '1991',
    category: 'Rides',
    type: 'video',
    story: 'My quinceañera celebration included a trip to Jungle Land. This was a big deal for our whole family.',
  },
]

export const categories: MemoryCategory[] = ['Rides', 'Signage & Entrance', 'People & Events', 'Aerial & Maps']
