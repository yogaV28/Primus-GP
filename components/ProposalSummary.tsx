'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

interface ProposalSummaryProps {
  summary: string
  decision: string
  projectDetails: {
    title: string
    budget: number
    timeline: string
    carbonReduction: number
  }
}

export default function ProposalSummary({ summary, decision, projectDetails }: ProposalSummaryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="mt-8 bg-gradient-to-br from-blue-100 to-purple-100">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-purple-700">{projectDetails.title} - Evaluation Results</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Summary</h3>
            <p className="text-gray-700">{summary}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Project Details</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Budget: ${projectDetails.budget.toLocaleString()}</li>
              <li>Timeline: {projectDetails.timeline}</li>
              <li>Expected Carbon Reduction: {projectDetails.carbonReduction}%</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Decision</h3>
            <p className={`text-lg font-bold ${decision === 'Approved' ? 'text-green-600' : 'text-red-600'}`}>
              {decision}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

