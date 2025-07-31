import type { Metadata } from 'next'
import ProjectsClient from './ProjectsClient'

export const metadata: Metadata = {
  title: 'Projects - Portfolio',
  description: 'A list of projects showcased in the portfolio',
  openGraph: {
    title: 'Projects - Portfolio',
    description: 'A list of projects showcased in the portfolio',
  },
}

export default function Projects() {
  return <ProjectsClient />
}
