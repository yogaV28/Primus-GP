'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { motion } from "framer-motion"
import Link from 'next/link'
import ProposalSummary from './ProposalSummary'

export default function ProposalUploader() {
  const [file, setFile] = useState<File | null>(null)
  const [summary, setSummary] = useState<string | null>(null)
  const [decision, setDecision] = useState<string | null>(null)
  const [projectDetails, setProjectDetails] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
      setError(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) return

    setLoading(true)
    setError(null)
    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await fetch('/api/process-proposal', {
        method: 'POST',
        body: formData,
      })
      const result = await response.json()
      if (response.ok) {
        setSummary(result.summary)
        setDecision(result.decision)
        setProjectDetails(result.projectDetails)
      } else {
        setError(result.error || `Server error: ${response.status}`)
        console.error('Server error:', result)
      }
    } catch (error) {
      console.error('Error processing proposal:', error)
      setError('An unexpected error occurred. Please check the console for more details.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-xl p-6 max-w-2xl mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="proposal" className="text-lg font-semibold text-gray-700">Upload Project Proposal (PDF or Word)</Label>
          <Input
            id="proposal"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            required
            className="mt-2 border-2 border-purple-300 focus:border-purple-500"
          />
        </div>
        <Button 
          type="submit" 
          disabled={!file || loading}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          {loading ? 'Processing...' : 'Submit Proposal'}
        </Button>
      </form>
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Alert variant="destructive" className="mt-4">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        </motion.div>
      )}
      {summary && decision && projectDetails && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ProposalSummary summary={summary} decision={decision} projectDetails={projectDetails} />
          <Link href={`/report?id=${projectDetails.title.replace(/\s+/g, '-').toLowerCase()}`} passHref>
            <Button className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              View Full Report
            </Button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  )
}

