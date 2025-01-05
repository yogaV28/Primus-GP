import { generateText } from 'ai'
import { openai } from '@ai-sdk/openai'

// Ensure the API key is properly set in the environment variables
const apiKey = process.env.OPENAI_API_KEY
if (!apiKey) {
  throw new Error('OPENAI_API_KEY is not set in the environment variables')
}

// Configure the OpenAI client with the API key
const openaiClient = openai(apiKey)

export async function processDocument(file: File): Promise<string> {
  try {
    // In a real-world scenario, you would use a document processing library or API
    // For this example, we'll simulate document processing by returning the file content
    const text = await file.text()
    return text
  } catch (error) {
    console.error('Error processing document:', error)
    throw new Error('Failed to process document')
  }
}

export async function summarizeText(text: string): Promise<string> {
  try {
    const { text: summary } = await generateText({
      model: openaiClient('gpt-4o'),
      prompt: `Summarize the following project proposal in 3-4 sentences:\n\n${text}`,
    })
    return summary
  } catch (error) {
    console.error('Error summarizing text:', error)
    throw new Error('Failed to summarize text')
  }
}

export async function makeDecision(summary: string): Promise<string> {
  try {
    const { text: decision } = await generateText({
      model: openaiClient('gpt-4o'),
      prompt: `Based on the following project proposal summary, decide whether to approve or reject the project. Respond with only "Approved" or "Rejected":\n\n${summary}`,
    })
    return decision.trim()
  } catch (error) {
    console.error('Error making decision:', error)
    throw new Error('Failed to make decision')
  }
}

export async function extractProjectDetails(text: string): Promise<{
  title: string
  budget: number
  timeline: string
  carbonReduction: number
}> {
  try {
    const { text: details } = await generateText({
      model: openaiClient('gpt-4o'),
      prompt: `Extract the following details from the project proposal:
      1. Project title
      2. Total budget (as a number)
      3. Project timeline
      4. Expected carbon reduction percentage (as a number)
      
      Respond in JSON format:
      {
        "title": "Project Title",
        "budget": 1000000,
        "timeline": "Timeline description",
        "carbonReduction": 30
      }
      
      Project proposal:
      ${text}`,
    })
    
    return JSON.parse(details)
  } catch (error) {
    console.error('Error extracting project details:', error)
    throw new Error('Failed to extract project details')
  }
}

