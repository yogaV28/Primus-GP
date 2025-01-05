import ProposalUploader from '@/components/ProposalUploader'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Primus Green Finance',
  description: 'Upload and evaluate project proposals with AI-powered analysis',
}

export default function Home() {
  return (
    <main className="container mx-auto p-4 min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Project Proposal Evaluator</h1>
      <ProposalUploader />
    </main>
  )
}

