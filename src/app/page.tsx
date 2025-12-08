import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EcoSaaS',
  description: 'EcoSaaS provides small businesses with micro-SaaS tools designed for climate tech solutions and remote work optimization, reducing environmental impact while improving operational efficiency.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">EcoSaaS</h1>
      <p className="mt-4 text-lg">EcoSaaS provides small businesses with micro-SaaS tools designed for climate tech solutions and remote work optimization, reducing environmental impact while improving operational efficiency.</p>
    </main>
  )
}
