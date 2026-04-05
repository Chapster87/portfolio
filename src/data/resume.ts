const resume = {
  businessCard: {
    name: "Andy Chapman",
    title: "Senior Software Engineer | Web",
    image: "/images/headshot.webp",
    action_urls: {
      linkedin_url: "https://www.linkedin.com/in/andrewchap/",
      github_url: "https://github.com/Chapster87",
      email: "achapm87@gmail.com",
      resume_url: "/AndyChapman_Resume.pdf",
    },
  },

  aboutMe: {
    subtitle: `<h3 class="h5">TL;DR (a.k.a Resume version)</h3>`,
    summary:
      "<p>Senior Software Engineer with expertise spanning over 16 years, adept at leading innovative site implementations for high-profile clients. Leverages a unique blend of web development skills, graphic design, and advanced communication to seamlessly connect client visions with full-stack development execution. Passionate about continuous learning, consistently researching new frameworks and techniques to elevate project outcomes. Excels in fast-paced, collaborative environments, with a proven track record of delivering high-quality, timely solutions.</p>",
    longStory: `
      <h3 class="h5">...now that that's out of the way.</h3>
      <p>Hi, I'm Andy! I live with my wife, Hannah, and my two giant dogs, Mance & Beorn, in the city of champions - Pittsburgh, PA. While I can nerd it up with the best of them<sup>1</sup>, I find plenty of time away from the computer. I've been an athlete all my life. Since 2009, I have been spending my Saturdays bashing heads (including my own) playing competitive rugby. Recently, I have been spending time with a clipboard in my hand, embracing the coaching side of things for my rugby club, the <a href="https://www.pghrugby.com/" target="_blank">Pittsburgh Forge Rugby Club</a><sup>2</sup>. It's been a great experience, and a natural transition as my playing days dwindle. Despite my aging body's protests, I still try to put the boots on every weekend and compete with teams all over the midwest.</p>
      <p>Like the robot above said, I'm a Front-End Engineer that's been working in the web industry for 15 years (11.5 of which were technically the same "job", two acquisitions later). It's cliche, but I'm a firm believer in the saying, "if you love what you do, you'll never work a day in your life". Coding, to me, is a hobby (that I'm lucky enough to get paid for). Some people like to read; I like to click-clack away on the keys. Every component, page, or new syntax is a puzzle waiting to be solved.</p>
      <p>I have been working with Salesforce Commerce Cloud since 2013, back when it was still Demandware. I know Controllers (remember pipelines?), ISML, and the Business Manager like the back of my hand. I have spent 100s of hours buried in Page Designer, optimizing, customizing and architecting a full suite of custom components and templates. Despite being a "front-end engineer" there is very little in the SFCC world I have not spent time working with, and comfortably consider myself full-stack.</p>
      <p>Though SFCC has been the main focus of my career, I'm very open to exploring other web technologies and commerce platforms. Last year, I received my Shopify Liquid Storefronts for Theme Developers cert just as a way of familiarizing myself with the platform. I built a <a href="/project/prometheus">TMDB.org API Media Site</a>, and the website of the <a href="/project/forge" target="_blank">Pittsburgh Forge Rugby Club</a>, both projects developed entirely for my own enjoyment and curiosity of new web technologies. In fact, this portfolio site was created and designed in a month using <a href="https://astro.build/" target="_blank" rel="noopener noreferrer">Astro</a>, a new framework that I was only briefly acquainted with, and React.</p>
      <h3 class="h5">Wow. Still here? Good on you.</h3>
      <p>Thank you for taking the time to visit my site, and learn a bit about me and the work I have proudly taken part in. I count myself very lucky to have the career I do. If you'd like to chat, feel free to send me a message on LinkedIn, or shoot me an email.</p>
      <ol class="footnotes">
        <li>Love me some Star Wars. Have strong opinions about the sequel series that may surprise you, and I paid the absurd amount to build a lightsaber in Disney World. I enjoy D&D (paladin main), and I'm an avid PC gamer.</li>
        <li>Yes, I <a href="/project/forge">built the site</a>. It's the best rugby website in the United States.</li>
      </ol>
    `,
  },

  employmentHistory: [
    {
      employer: "Hydrow",
      location: "Boston, MA",
      remote: true,
      positions: [
        {
          title: "eCommerce Engineer",
          start_date: "Feb 2025",
          notes: [
            "Professional debut as React engineer on a headless architecture commerce platform.",
          ],
        },
      ],
    },
    {
      employer:
        'Merkle <span style="color: var(--color-grey-600)">(Dentsu International)</span>',
      location: "Columbia, MD",
      remote: true,
      positions: [
        {
          title: "Technical Lead, Front-End Engineering - Commerce",
          start_date: "Apr 2022",
          end_date: "Feb 2025",
          notes: [
            "Role expanded to include project architecture, working directly with project administration and clients to define requirements and approach for new sites.",
            "Led front-end site development during site implementation.",
            "Utilized React.js and RESTful API interface while working within Salesforce Composable Commerce & PWAKit frameworks.",
            "Completed Shopify Liquid Storefront certification.",
          ],
        },
      ],
    },
    {
      employer: "DEG Digital",
      location: "Overland Park, KS",
      remote: true,
      positions: [
        {
          title: "Team Lead, Front-End Engineering - Commerce",
          start_date: "Jan 2021",
          end_date: "Apr 2022",
          notes: [
            "Responsible for technical direction of front-end commerce development team.",
            "Refined internal development processes and mentored junior devs in a site performance driven development focusing on site-speed and accessibility.",
            "Architected collection of Page Designer components & enhancements for SFCC “Accelerator”.",
            "Company acquired by Dentsu International, re-aligned as Merkle in April 2022.",
          ],
        },
        {
          title: "Front-End Technical Lead",
          start_date: "Jul 2019",
          end_date: "Dec 2020",
          notes: [
            "Led Front-End project teams steering development and contributing innovative solutions during new site implementations.",
            "Architected SFCC “Accelerator” to act as starting template for new implementations. Reducing go-to-market time by including common features & bug fixes out of the box.",
            "Participated in client-facing discovery meetings, and led “Accelerator” workshops for client teams.",
          ],
        },
        {
          title: "UI Engineer",
          start_date: "Apr 2017",
          end_date: "Jun 2019",
          notes: [
            "Role focused on Front-End Development, utilizing HTML, CSS, and Javascript to optimize shopping experience.",
            "Collaborated with project & design team members on development of new site projects, while balancing existing client project maintenance.",
          ],
        },
      ],
    },
    {
      employer: "We Do Commerce",
      location: "Pittsburgh, PA",
      remote: false,
      positions: [
        {
          title: "UX Designer/Developer",
          start_date: "Aug 2013",
          end_date: "Mar 2017",
          notes: [
            "Responsible for full front-end site life cycle (UX Prototyping, Wireframing, Design and Front-End Development).",
            "Handled both site implementation, and maintenance clients.",
            "Completed SFCC Dev Certification (Demandware at the time).",
            "Company acquired by DEG in March 2017.",
          ],
        },
      ],
    },
    {
      employer: "Alliance Plastics",
      location: "Erie, PA",
      remote: false,
      positions: [
        {
          title: "Internet Marketing Specialist",
          start_date: "Feb 2010",
          end_date: "Aug 2013",
          notes: [
            "Company's sole web resource.",
            "Managed development and deployment of 6 sites, including 3 multilingual and company intranet.",
            "Boosted website sales from $0 to $1,500 daily.",
            "Build and managed complex online catalog of 12,000+ products.",
            "Collaborating with marketing dept, acquired over 10,000 new customers in 2012.",
          ],
        },
      ],
    },
  ],

  education: {
    school: "Mercyhurst University",
    logo: "/src/assets/images/mercyhurst.png",
    start_year: "2004",
    end_year: "2008",
    location: "Erie, PA",
    degree: "Bachelor of Arts",
    concentration: ["Graphic Design", "Web Production"],
  },

  certifications: [
    {
      name: "Salesforce Certified B2C Commerce Developer",
      issue_date: "June 2015",
      logo: "/src/assets/images/sfcc-b2c-developer.png",
      logo_width: "122",
      url: "https://www.linkedin.com/in/andrewchap/overlay/51088651/single-media-viewer/?profileId=ACoAAANvhjUBBM27m-zq6Eppdz-omscDxKfyMOg",
    },
    {
      name: "Shopify Liquid Storefronts for Theme Developers",
      issue_date: "Oct 2024",
      logo: "/src/assets/images/shopify.png",
      logo_width: "310",
      url: "https://www.credly.com/badges/7eb5b34c-fa96-4d88-adae-51f6d0cc5147",
    },
  ],

  skills: {
    hard_skills: [
      {
        name: "HTML5",
        logo: "/src/assets/images/skills/html5.png",
        level: "Expert",
      },
      {
        name: "CSS3/Sass",
        logo: "/src/assets/images/skills/css3.png",
        level: "Expert",
      },
      {
        name: "JavaScript ES6",
        logo: "/src/assets/images/skills/javascript.png",
        level: "Expert",
      },
      {
        name: "Salesforce Commerce Cloud",
        logo: "/src/assets/images/skills/salesforce.png",
        level: "Expert",
      },
      {
        name: "SFCC Page Designer",
        logo: "/src/assets/images/skills/salesforce.png",
        level: "Expert",
      },
      {
        name: "React",
        logo: "/src/assets/images/skills/react.png",
        level: "Proficient",
      },
      {
        name: "Next.js",
        logo: "/src/assets/images/skills/next-js.png",
        level: "Proficient",
      },
      {
        name: "GenAI (LLM)",
        logo: "/src/assets/images/skills/genai.png",
        level: "Intermediate",
      },
      {
        name: "Node.js",
        logo: "/src/assets/images/skills/node-js.png",
        level: "Proficient",
      },
      {
        name: "PHP/MySQL",
        logo: "/src/assets/images/skills/php-mysql.png",
        level: "Proficient",
      },
      {
        name: "Shopify Liquid",
        logo: "/src/assets/images/skills/shopify.png",
        level: "Novice",
      },
    ],
    soft_skills: [
      {
        name: "Motivated",
        logo: "/src/assets/images/skills/motivated.png",
      },
      {
        name: "Attention to Detail",
        logo: "/src/assets/images/skills/attention-to-detail.png",
      },
      {
        name: "Problem Solver",
        logo: "/src/assets/images/skills/problem-solver.png",
      },
      {
        name: "Communication",
        logo: "/src/assets/images/skills/communication.png",
      },
      {
        name: "Quick Study",
        logo: "/src/assets/images/skills/quick-study.png",
      },
      {
        name: "Love of Challenges",
        logo: "/src/assets/images/skills/challenges.png",
      },
    ],
  },
}

export default resume
