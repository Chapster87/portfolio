export const prerender = false;

import type { APIRoute } from 'astro';

import { streamText } from 'ai';
import { createGroq } from '@ai-sdk/groq';

const groq = createGroq({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: import.meta.env.PUBLIC_GROQ_API_KEY,
});

export const POST: APIRoute = async ({ request }) => {
  const { prompt }: { system: string, prompt: string } = await request.json();

  const result = streamText({
    model: groq('llama-3.3-70b-versatile'),
    system:
    `Act as a senior software engineer applying for a job.` +
    `Analyze the provided resume and generate a cover letter to the hiring manager.` +
    `Format the cover letter in a professional manner.`,
    prompt,
  });

  return result.toDataStreamResponse();
}