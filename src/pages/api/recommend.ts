export const prerender = false;

import type { APIRoute } from 'astro';

import { streamText } from 'ai';
import { createGroq } from '@ai-sdk/groq';

const groq = createGroq({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: import.meta.env.PUBLIC_GROQ_API_KEY,
});

export const POST: APIRoute = async ({ request }) => {
  const { prompt }: { prompt: string } = await request.json();

  const result = streamText({
    model: groq('llama-3.3-70b-versatile'),
    system:
    `Act as a job recruiter looking for high level software engineer candidates. ` +
    `Analyze the provided data and respond with reasons why this applicant would be a good hire.`,
    prompt,
  });

  return result.toDataStreamResponse();
}