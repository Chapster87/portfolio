export const prerender = false;

import { useCompletion } from '@ai-sdk/react';

const resume = {
  about_me: {
    name: 'Andy Chapman',
    title: 'Senior Software Engineer | Web',
    summary: "Senior Software Engineer with expertise spanning over 15 years, adept at leading innovative site implementations for high-profile clients. Leverages a unique blend of web development skills, graphic design, and advanced communication to seamlessly connect client visions with full-stack development execution. Passionate about continuous learning, consistently researching new frameworks and techniques to elevate project outcomes. Excels in fast-paced environments, balancing multiple projects and leading teams to deliver exceptional results. Seeking a new opportunity to bring my expertise to a dynamic team.",
    headshot: '/src/assets/images/headshot.webp',
    action_urls: {
      linkedin_url: 'https://www.linkedin.com/in/andrewchap/',
      github_url: 'https://github.com/Chapster87',
      email: 'achapm87@gmail.com',
      resume_url: '/AndyChapman_Resume.pdf'
    }
  },
  education: {
    school: 'Mercyhurst University',
    logo: '/src/assets/images/mercyhurst.png',
    start_year: '2004',
    end_year: '2008',
    location: 'Erie, PA',
    degree: 'Bachelor of Arts',
    concentration: [ 'Graphic Design', 'Web Production' ]
  }, 
  certifications: [
    {
      name: 'Salesforce Certified B2C Commerce Developer',
      issue_date: 'June 2015',
      logo: '/src/assets/images/sfcc-b2c-developer.png',
      url: 'https://www.linkedin.com/in/andrewchap/overlay/51088651/single-media-viewer/?profileId=ACoAAANvhjUBBM27m-zq6Eppdz-omscDxKfyMOg',
      logo_width: '122'
    },
    {
      name: 'Shopify Liquid Storefronts for Theme Developers',
      issue_date: 'Oct 2024',
      logo: '/src/assets/images/shopify.png',
      url: 'https://www.credly.com/badges/7eb5b34c-fa96-4d88-adae-51f6d0cc5147',
      logo_width: '310'
    }
  ],
  skills: {
    hard_skills: [
      {
        name: 'HTML5',
        logo: '/src/assets/images/skills/html5.png',
        level: 'Expert'
      },
      {
        name: 'CSS3/Sass',
        logo: '/src/assets/images/skills/css3.png',
        level: 'Expert'
      },
      {
        name: 'JavaScript ES6',
        logo: '/src/assets/images/skills/javascript.png',
        level: 'Expert'
      },
      {
        name: 'Salesforce Commerce Cloud',
        logo: '/src/assets/images/skills/salesforce.png',
        level: 'Expert'
      },
      {
        name: 'SFCC Page Designer',
        logo: '/src/assets/images/skills/salesforce.png',
        level: 'Expert'
      },
      {
        name: 'React',
        logo: '/src/assets/images/skills/react.png',
        level: 'Proficient'
      },
      {
        name: 'Next.js',
        logo: '/src/assets/images/skills/next-js.png',
        level: 'Proficient'
      },
      {
        name: 'Node.js',
        logo: '/src/assets/images/skills/node-js.png',
        level: 'Proficient'
      },
      {
        name: 'PHP/MySQL',
        logo: '/src/assets/images/skills/php-mysql.png',
        level: 'Proficient'
      },
      {
        name: 'Shopify Liquid',
        logo: '/src/assets/images/skills/shopify.png',
        level: 'Intermediate'
      }
    ],
    soft_skills: [
      {
        name: 'Motivated',
        logo: '/src/assets/images/skills/motivated.png'
      },
      {
        name: 'Attention to Detail',
        logo: '/src/assets/images/skills/attention-to-detail.png'
      },
      {
        name: 'Problem Solver',
        logo: '/src/assets/images/skills/problem-solver.png'
      },
      {
        name: 'Communication',
        logo: '/src/assets/images/skills/communication.png'
      },
      {
        name: 'Quick Study',
        logo: '/src/assets/images/skills/quick-study.png'
      },
      {
        name: 'Love of Challenges',
        logo: '/src/assets/images/skills/challenges.png'
      }
    ]
  },
  work_history: [
    {
      employer: 'Merkle <span class="text-gray-400">(Dentsu International)</span>',
      location: 'Columbia, MD',
      remote: true,
      positions: [ 
        {
          title: 'Technical Lead, Front-End Engineering - Commerce',
          start_date: 'Apr 2022',
          end_date: 'Feb 2025',
          notes: [
            'Role expanded to include project architecture, working directly with project administration and clients to define requirements and approach for new sites.',
            'Led front-end site development during site implementation.',
            'Utilized React.js and RESTful API interface while working within Salesforce Composable Commerce & PWAKit frameworks.',
            'Completed Shopify Liquid Storefront certification.'
          ]
        }
      ]
    },
    {
      employer: 'DEG Digital',
      location: 'Overland Park, KS',
      remote: true,
      positions: [
        {
          title: 'Team Lead, Front-End Engineering - Commerce',
          start_date: 'Jan 2021',
          end_date: 'Apr 2022',
          notes: [
            'Responsible for technical direction of front-end commerce development team.',
            'Refined internal development processes and mentored junior devs in a site performance driven development focusing on site-speed and accessibility.',
            'Architected collection of Page Designer components & enhancements for SFCC “Accelerator”.',
            'Company acquired by Dentsu International, re-aligned as Merkle in April 2022.'
          ]
        },
        {
          title: 'Front-End Technical Lead',
          start_date: 'Jul 2019',
          end_date: 'Dec 2020',
          notes: [
            'Led Front-End project teams steering development and contributing innovative solutions during new site implementations.',
            'Architected SFCC “Accelerator” to act as starting template for new implementations. Reducing go-to-market time by including common features & bug fixes out of the box.',
            'Participated in client-facing discovery meetings, and led “Accelerator” workshops for client teams.'
          ]
        },
        {
          title: 'UI Engineer',
          start_date: 'Apr 2017',
          end_date: 'Jun 2019',
          notes: [
            'Role focused on Front-End Development, utilizing HTML, CSS, and Javascript to optimize shopping experience.',
            'Collaborated with project & design team members on development of new site projects, while balancing existing client project maintenance.'
          ]
        }
      ]
    },
    {
      employer: 'We Do Commerce',
      location: 'Pittsburgh, PA',
      remote: false,
      positions: [
        {
          title: 'UX Designer/Developer',
          start_date: 'Aug 2013',
          end_date: 'Mar 2017',
          notes: [
            'Responsible for full front-end site life cycle (UX Prototyping, Wireframing, Design and Front-End Development).',
            'Handled both site implementation, and maintenance clients.',
            'Completed SFCC Dev Certification (Demandware at the time).',
            'Company acquired by DEG in March 2017.'
          ]
        }
      ]
    },
    {
      employer: 'Alliance Plastics',
      location: 'Erie, PA',
      remote: false,
      positions: [
        {
          title: 'Internet Marketing Specialist',
          start_date: 'Feb 2010',
          end_date: 'Aug 2013',
          notes: [
            "Company's sole web resource.",
            'Managed development and deployment of 6 sites, including 3 multilingual and company intranet.',
            'Boosted website sales from $0 to $1,500 daily.',
            'Build and managed complex online catalog of 12,000+ products.',
            'Collaborating with marketing dept, acquired over 10,000 new customers in 2012.'
          ]
        }
      ]
    }
  ]
};

console.log("Data Input", resume);

const prompt = `Based on this employment data, why should a company hire me? ${JSON.stringify(resume)}`;

export default function RecommendMe() {
  const { completion, complete } = useCompletion({
    api: '/api/recommend',
  });

  return (
    <div>
      <div
        onClick={async () => {
          await complete(prompt);
        }}
      >
        Generate
      </div>

      <div>
        <h1>AI Generated Resume Summary</h1>
        <div className='flex flex-col w-full max-w-md py-24 mx-auto stretch'>
          <p className="whitespace-pre-wrap">{completion}</p>
        </div>
      </div>
    </div>
  )
}