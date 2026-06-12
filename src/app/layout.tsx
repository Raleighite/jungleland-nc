import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jungle Land NC — Community Archive',
  description: 'Preserving and recreating the memory of Jungle Land amusement park, Atlantic Beach NC. Share your photos, videos, and stories.',
  keywords: ['Jungle Land', 'Atlantic Beach NC', 'amusement park', 'community archive', 'North Carolina'],
  openGraph: {
    title: 'Jungle Land NC',
    description: 'A community archive for Jungle Land amusement park, Atlantic Beach NC.',
    url: 'https://junglelandnc.com',
    siteName: 'Jungle Land NC',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
