export const prerender = false;

import type { APIRoute } from 'astro';

import { streamText } from 'ai';
import { createGroq } from '@ai-sdk/groq';

const groq = createGroq({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: import.meta.env.PUBLIC_GROQ_API_KEY,
});

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export const POST: APIRoute = async ({ request }) => {
  const { messages } = await request.json();

  const result = streamText({
    model: groq('llama-3.3-70b-versatile'),
    system: 'You are a helpful assistant.',
    messages,
    onError({ error }) {
      console.error(error); // your error logging logic here
    },
  });

  return result.toDataStreamResponse();
}