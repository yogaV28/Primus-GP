import { NextResponse } from 'next/server'
import { processDocument, summarizeText, makeDecision, extractProjectDetails } from '@/lib/ai-services'
import { AI_LoadAPIKeyError } from 'ai'

export async function POST(req: Request) {
  const formData = await req.formData()
  const file = formData.get('file') as File

  if (!file) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
  }

  try {
    // Process the document (extract text)
    const text = await processDocument(file)

    // Summarize the text
    const summary = await summarizeText(text)

    // Make a decision based on the summary
    const decision = await makeDecision(summary)

    // Extract project details
    const projectDetails = await extractProjectDetails(text)

    return NextResponse.json({ summary, decision, projectDetails })
  } catch (error) {
    console.error('Error processing proposal:', error)
    if (error instanceof AI_LoadAPIKeyError) {
      return NextResponse.json({ error: 'AI service configuration error: API key not found' }, { status: 500 })
    }
    if (error instanceof Error) {
      return NextResponse.json({ error: `Error processing proposal: ${error.message}` }, { status: 500 })
    }
    return NextResponse.json({ error: 'Unknown error occurred while processing the proposal' }, { status: 500 })
  }
}

