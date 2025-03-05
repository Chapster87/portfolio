export const prerender = false;

import React from 'react';
import { useCompletion } from '@ai-sdk/react';;

export default function RecommendMe({ homepageData, employmentData }) {
  const { completion, complete } = useCompletion({
    api: '/api/recommend',
  });

  const resume = {
    about_me: homepageData.hero,
    summary: homepageData.about_me.summary,
    education: homepageData.education, 
    certifications: homepageData.certifications,
    skills: homepageData.skills,
    work_history: employmentData.employment_history
  };

  const prompt = `Why should a company hire me? Base your response on this data: ${JSON.stringify(resume)}`

  return (
    <div className='col-12'>
      <div className="row prose dark:prose-invert max-w-full">
        <div className="col-12 mb-4">
          <p className="text-lg font-bold mb-2">Still on the fence about hiring me? Don't take my word for it. Ask the AI!</p>
          <p>Clicking the button below will trigger the AI provider to analyze my resume information and provide recommendations as to why I would be a great member of your team.</p>
          <p className="text-lg font-bold mb-2">AI (LLM) Stack:</p>
          <ul>
            <li><a href="https://sdk.vercel.ai/" target="_blank" rel="noopener noreferrer nofollow">AI SDK by Vercel</a></li>
            <li>Provider: <a href="https://groq.com/" target="_blank" rel="noopener noreferrer nofollow">Groq</a></li>
            <li>Model: <a href="https://www.llama.com/docs/overview/" target="_blank" rel="noopener noreferrer nofollow">LLama 3.3</a> (llama-3.3-70b-versatile)</li>
          </ul>
          <div className="">
            <button
              className="btn btn-primary"
              onClick={async () => {
                await complete(prompt);
              }}
            >Analyze Resume & Generate Recommendation</button>
          </div>
        </div>
      </div>

      <div className="mockup-code w-full">
        <pre className="text-warning"><span className="prefix">{`$`}</span><code className="code">system: {`Act as a job recruiter looking for high level software engineer candidates. Analyze the provided data and respond with reasons why this applicant would be a good hire.`}</code></pre>
        <pre><span className="prefix">{`$`}</span><code className="code">prompt: {`Why should a company hire me? Base your response on this data: [resume_object]`}</code></pre>
        {completion && 
          <>
            <pre className="text-warning"><span className="prefix">{`>`}</span><code className="code">analyzing...</code></pre>
            <pre className="text-success"><span className="prefix">{`>`}</span><code className="code">Done!</code></pre>
            <pre className="mt-1"><span className="prefix">{`>`}</span><code className="code">{completion}</code></pre>
          </>
        }
      </div>
    </div>
  )
}