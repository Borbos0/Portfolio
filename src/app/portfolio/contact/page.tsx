import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact - Portfolio',
  description: 'Contact page to get in touch',
  openGraph: {
    title: 'Contact - Portfolio',
    description: 'Contact page to get in touch',
  },
}

export default function Contact() {
  return <ContactClient />
}
