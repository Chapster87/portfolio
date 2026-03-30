export const prerender = false;

import React from 'react';
import { useCompletion } from '@ai-sdk/react';

export default function GenerateCoverLetter({ homepageData, employmentData }) {
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

  const prompt = `You are applying for a job as a senior software engineer. Use the following data as your resume and write a cover letter: ${JSON.stringify(resume)}`

  return (
    <div className='col-12'>
      <div className="row prose dark:prose-invert max-w-full">
        <div className="col-12 mb-4">
          <p className="text-lg font-bold mb-2">SubTitle</p>
          <p>Desc</p>
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
            >Analyze Resume & Generate Cover Letter</button>
          </div>
        </div>
      </div>

      <div className="mockup-code w-full">
        <pre className="text-warning"><span className="prefix">{`$`}</span><code className="code">system: {`Act as a senior software engineer applying for a job. Analyze the provided data and write a high-level cover letter to the hiring manager.`}</code></pre>
        <pre><span className="prefix">{`$`}</span><code className="code">prompt: {`Use this data to craft a cover letter for a senior software engineer position:: [resume_object]`}</code></pre>
        {completion && 
          <>
            <pre className="mt-1"><span className="prefix">{`>`}</span><code className="code">{completion}</code></pre>
          </>
        }
      </div>
    </div>
  )
}