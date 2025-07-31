import type { Metadata } from 'next'
import ResumeClient from '../resume/ResumeClient'

export const metadata: Metadata = {
  title: 'Work Experience - Portfolio',
  description: 'Detailed resume and experience',
  openGraph: {
    title: 'Work Experience - Portfolio',
    description: 'Detailed resume and experience',
  },
}

export default function About() {
  return <ResumeClient showSkills={false} />
}
