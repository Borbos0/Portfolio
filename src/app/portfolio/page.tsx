import type { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: 'About Me - Portfolio',
  description: 'Personal information and skills',
  openGraph: {
    title: 'About Me - Portfolio',
    description: 'Personal information and skills',
  },
}

export default function Home() {
  return <HomeClient />
}
