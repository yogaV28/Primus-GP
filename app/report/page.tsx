'use client'

import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import ProjectReport from '@/components/ProjectReport'

export default function ReportPage() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  const [projectData, setProjectData] = useState(null)

  useEffect(() => {
    // In a real application, you would fetch the project data from an API
    // For this example, we'll use mock data
    const mockData = {
      title: id ? id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Unknown Project',
      summary: "This project aims to reduce carbon emissions through innovative technologies.",
      budget: 1000000,
      timeline: "12 months",
      carbonReduction: 30,
      monthlyProgress: [
        { month: 'Jan', progress: 10 },
        { month: 'Feb', progress: 20 },
        { month: 'Mar', progress: 35 },
        { month: 'Apr', progress: 42 },
        { month: 'May', progress: 55 },
        { month: 'Jun', progress: 70 },
      ]
    }
    setProjectData(mockData)
  }, [id])

  if (!projectData) {
    return <div>Loading...</div>
  }

  return (
    <main className="container mx-auto p-4 min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Project Report</h1>
      <ProjectReport data={projectData} />
    </main>
  )
}

