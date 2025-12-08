import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EcoMindSpace',
  description: 'EcoMindSpace is a unique SaaS platform that combines mental health support with sustainable practices, offering small businesses and eco-conscious professionals tools to improve their mental well-being while reducing environmental impact.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">EcoMindSpace</h1>
      <p className="mt-4 text-lg">EcoMindSpace is a unique SaaS platform that combines mental health support with sustainable practices, offering small businesses and eco-conscious professionals tools to improve their mental well-being while reducing environmental impact.</p>
    </main>
  )
}
