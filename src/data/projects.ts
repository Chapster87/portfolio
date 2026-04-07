import { Project } from "@customTypes/project"

const projects: Project[] = [
  {
    id: "us-mint",
    type: "work",
    title: "The U.S. Mint",
    url: "https://usmint.gov",
    company: "Merkle",
    platform: "SFCC - SFRA",
    startDate: "Jan 2024",
    endDate: "Feb 2025",
    images: {
      hero: {
        url: "/images/projects/us-mint-website.webp",
        alt: "U.S. Mint website",
        width: 1169,
        height: 675,
      },
      thumb: {
        url: "/images/projects/us-mint-thumb.webp",
        alt: "U.S. Mint website",
        width: 640,
        height: 370,
      },
    },
    shortDescription:
      "Development of a high-traffic e-commerce site for the U.S. Mint, focusing on performance optimization, ADA compliance, and integration with Adobe Experience Manager.",
    longDescription: `
      <p>When we started the U.S. Mint project, it was touted regularly that the current held the record for the most transactions in a minute across all Salesforce Commerce Cloud clients. The Mint's bread-and-butter is their massive coin drops that generate a massive amount of traffic and orders. Efficiency and optimization were under the microscope. The site needed to be fast, and it needed to work every single time.</p>
      <p>In order to reduce code weight, we focused on efficient javascript, and avoided overusing CSS where we could. Since SFRA ships with Bootstrap, we leaned into the utility classes that would already be compiled with the core. This resulted in entire pages that didn't add a single line of custom CSS. Another asset we utilized was an npm package called 'purge-css'. It attached to our build scripts and removed any css entries that were not actively being used throughout the site. This helped us cut CSS bloat from the out-of-the-box SFRA product.</p>
      <p>The Mint project also included a huge focus on ADA compliance. Working alongside an agency that specialized in site accessibility, we were able to provide a Level AA solution. Many pages bordering on Level AAA compliance.</p>
      <p>Another wrinkle in this project was that that site content was almost entirely handled within Adobe Experience Manager (AEM) by a separate team. We would need to work alongside this team to deliver the final pages. In order to achieve a unified global look-and-feel, our team designed and implemented a "design system" through the use of Sass variables that allowed both sides of the projects to utilize global spacing, colors, typography styles, and some shared components.</p>
      <p>The client was extremely pleased with the website at completion, and it passed with flying colors on the first coin drop that happened just over a week after the launch.</p>
      <h2 class="h3">Notable Customizations</h2>
      <ul class="lvl-1">
        <li>Mini-Cart removed in favor of an Add-to-Cart flyout as confirmation of an added product</li>
        <li>Custom mega menu utilizing category attributes and taxonomy to achieve complex layouts</li>
        <li>
          Products & Categories
          <ul>
            <li>Custom category refinements flyout, with the first 2 refinements showing on page</li>
            <li>
              Product Schedule Category Page
              <ul>
                <li>Custom template for showing past & present coins by release date</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>Custom loading animation</li>
        <li>Subscription Ordering & Management</li>
      </ul>
    `,
  },
  {
    id: "build-a-bear",
    type: "work",
    title: "Build-A-Bear Workshop",
    url: "https://web.archive.org/web/20231019053456/https://www.buildabear.com/",
    company: "Merkle",
    platform: "SFCC - SFRA",
    startDate: "Feb 2023",
    endDate: "Oct 2023",
    images: {
      hero: {
        url: "/images/projects/build-a-bear-website.webp",
        alt: "Build-A-Bear Workshop",
        width: 1169,
        height: 675,
      },
      thumb: {
        url: "/images/projects/build-a-bear-thumb.webp",
        alt: "Build-A-Bear Workshop",
        width: 640,
        height: 370,
      },
    },
    shortDescription:
      "Front-End Architect for Build-A-Bear Workshop, responsible for the frontend approach, leading a team of offshore developers, and handling complex development tasks.",
    longDescription: `
      <p>In my first project as a Front-End Architect, I was responsible for participating in client discovery, planning the frontend approach, and leading a team of offshore (India-based) developers, while also handling some complex development tasks on my own.</p>
      <p>Leadership of the offshore team included daily standups, ticket delegation, frontend code reviews, pull requests, and mentoring of lesser experienced developers.</p>
      <p>One of the biggest complexities of the Build-A-Bear project was that all of their products resided in a single master catalog, and they would only be using a single SFCC site despite needing to represent 3 separate brands: Build-A-Bear, Bear Cave, and Heartbox. Each brand had its own unique look and feel, and the site needed to be able to switch between them seamlessly. To accomplish this, I architected a complex data model (see below) that included automatic theming based on category structure, content classification, and page contents. All theming also included the ability for manual overrides should a page require a specific theme.</p>
      <p>The latest version of our <a href="/project/sfcc-accelerator" class="link link-primary">SFCC "Accelerator"</a> was utilized as a starting point for this site implementation, which meant it started with our core-site optimizations build in, but it also rolled out with an entire suite of custom Page Design components. For these, I worked with the Merkle Design team and the client to determine specific themed components to use on content throughout the site.</p>
      <p>The clients old website also held a lot of legacy content that they wanted to port over in it's existing form to be used as-is until they were able to use Page Designer to create new updated versions of the content. To achieve this, we were able to import the old site's content assets, as well as some of the base styling to allow the content to render in it's existing form. This approach allowed easy replacement as replacement content is created and eased the burden on there internal dev team. Rather than having to meet launch as a deadline for all content on the new site, they could methodically make updates.</p>
      <p>Finally, due to the heavy use of a custom Page Designer solution, I was responsible for leading several workshops with the clients merchandising team. These session were used to "teach the teacher, explaining what Page Designer is, how it works, and how their custom solution could be used to achieve their needs.</p>
      <h2>Notable Customizations</h2>
      <ul class="lvl-1">
        <li>Data & Content Brand Theme Model (3 brands: Build-A-Bear Workshop, Heartbox, & Bear Cave)</li>
        <li>
          Page Designer
          <ul>
            <li>Custom Components & Theming</li>
            <li>Store Locator Store Landing pages</li>
            <li>
              Utilized component that allows page designer content be included within content assets and slots
              <ul>
                <li>Turns Page Designer into a "component" developer rather than only allowing full page solutions.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>Bear Builder Wizard</li>
      </ul>

      <h2>Data Model Explanation</h2>
      <p>All themed site pages can be broken in 4 main page types: Content, Category, Products, Checkout. The logic that defines what theme shows on each page has a slightly different context.</p>
      <ol class="lvl-1">
        <li>
          Content (Content Assets, Page Designer Content Pages):
          <ol>
            <li>
              Theme is set using attribute.
              <ol>
                <li>contentBrand on Content Assets</li>
                <li>brand in Page Designer (Page Settings > Attributes)</li>
              </ol>
            </li>
          </ol>
        </li>
        <li>
          Category (CLP, PLPs):
          <ol>
            <li>
              Theme is set by detecting if active category is a child category of one of a brand category (i.e. Bear Cave, Heartbox)
              <ol>
                <li>Page Designer CLP/PLPs will follow default logic, unless brand attribute is set to a specific brand override.</li>
              </ol>
            </li>
          </ol>
        </li>
        <li>
          Products (PDPs):
          <ol>
            <li>
              Product theme will first be determined by the brandTypes attribute.
              <ol>
                <li>If there is only a single brand selected (i.e. bearcave) then that brand theme will be used on the PDP.</li>
              </ol>
            </li>
            <li>
              If there are 2 brands defined, or no brand defined at all logic will look for a cgid value in the querystring
              <ol>
                <li>if this (cgid) category id is a child category of one of a brand category (i.e. Bear Cave, Heartbox) then that brand theme will be used</li>
              </ol>
            </li>
            <li>If no brandTypes value is defined, and no cgid is present brand theme will be default Build-A-Bear</li>
            <li>Page Designer PDPs will follow default logic, unless brand attribute is set to a specific brand override.</li>
          </ol>
        </li>
        <li>
          Checkout
          <ol>
            <li>If cart contains all Heartbox products then checkout will show Heartbox theme</li>
            <li>Default, Bear Cave, & Mixed carts will use Build-A-Bear core theme</li>
          </ol>
        </li>
      </ol>
    `,
  },
  {
    id: "linksys",
    type: "work",
    title: "Linksys",
    url: "https://web.archive.org/web/20220816213335/https://www.linksys.com/",
    company: "Merkle",
    platform: "SFCC - SFRA",
    startDate: "Oct 2021",
    endDate: "Aug 2022",
    images: {
      hero: {
        url: "/images/projects/linksys-website.webp",
        alt: "Linksys website",
        width: 1169,
        height: 675,
      },
      thumb: {
        url: "/images/projects/linksys-thumb.webp",
        alt: "Linksys website",
        width: 640,
        height: 370,
      },
    },
    shortDescription:
      "Front-Technical Lead for Linksys, responsible for the development of a modern e-commerce site, including parallax animation, and custom templates.",
    longDescription: `
      <p>Linksys was one of my favorite projects to work on. The client was very design forward, and wanted to embrace the most modern web trends. At first, it seemed like it would be a standard SFRA implementation, but it quickly became a project that challenged my abilities and allowed me to build some really fun solutions.</p>
      <p>As Front-Technical Lead for this project, I worked alongside the clients chosen third party design team to develop the site's theme & style guide. Once these were in place, I assisted the Product Manger in crafting tickets dividing into sprints. Each sprint, I would review tickets, clarify complexities, and delegate tickets to my front-end team. Alongside tickets I chose to take on my own, I was responsible for pull-requests and merging front-end code.</p>
      <p>Using Google's website as standard, Linksys decided they wanted to enhance their homepage solution, and approved a change request that included heavy use of parallax animation. Our team lacked any specific resources with experience in this type of work, so I jumped at opportunity to research and implement the solution myself, despite having no previous experience of my own with the technology.</p>
      <p>Utilizing GreenSock (GSAP) and ScrollMagic libraries and working alongside the clients design team, I engineered several parallax components that were not only functional, but also responsive, extending experiences across both mobile and desktop devices.</p>
      <p>In the end, the client was extremely pleased with both the site and <a class="link-primary font-bold" href="https://web.archive.org/web/20220816213335/https://www.linksys.com/" target="_blank" rel="noopener noreferrer nofollow">the homepage</a>. While I got a new skill to add to my toolkit.</p>
      <h2>Notable Customizations</h2>
      <ul class="lvl-1">
        <li>
          Parallax Animation Capabilities
          <ul>  
            <li>Created using ScrollMagic & GreenSock(GSAP) libraries</li>
            <li>Animations build to be responsive. Experiences made available for both Mobile and Desktop</li>
          </ul>
        </li>
        <li>
          SFCC Accelerator
          <ul>
            <li>Templates for Single Use CLP, PLP, PDP pages. (At the time, out-of-the-box SFRA required templates be defined category wide)</li>
            <li>Customizations to OOTB SFRA cartridge for optimization of both time and capabilities</li>
            <li>Themed suite of components and layouts.</li>
            <li>"Code Block" component compatible with parallax animation scripts</li>
            <li>Video components for use with multiple sources, auto-play capabilities tied to scroll position and page load.</li>
          </ul>
        </li>
        <li>
          Parallax Animated Homepage Template
          <ul>
            <li>Interwoven with Page Designer enabled regions for client merchandising</li>
          </ul>
        </li>
      </ul>
    `,
  },
  {
    id: "uncorked",
    type: "work",
    title: "Uncorked.com",
    url: "https://web.archive.org/web/20221127113241/https://www.uncorked.com/",
    company: "DEG Digital, Merkle",
    platform: "SFCC - SFRA",
    startDate: "Apr 2021",
    endDate: "Oct 2021",
    images: {
      hero: {
        url: "/images/projects/uncorked-website.webp",
        alt: "Uncorked.com website",
        width: 1169,
        height: 675,
      },
      thumb: {
        url: "/images/projects/uncorked-thumb.webp",
        alt: "Uncorked.com website",
        width: 640,
        height: 370,
      },
    },
    shortDescription:
      "Uncorked.com serves as the commerce platform for the Terlato Wine Group, integrating multiple Salesforce Suites to provide a seamless and informative shopping experience for wine enthusiasts.",
    longDescription: `
      <p>Uncorked.com serves as the commerce platform for the <a class=\"link link-primary\" href=\"https://terlato.com/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Terlato Wine Group</a>. Working very close with Saleforce themselves, Terlato's plan was to leverage 3 different Salesforce Suites at site launch: Marketing Cloud, Salesforce CMS, and Salesforce Commerce Cloud. Making it one of the first full Salesforce solution projects to be launched.</p>
      <p>Such a high-profile job meant we wanted to put our best foot forward. Collaborating during project discovery with both DEG Design and UX departments, we architected a site that was user-friendly, easy to navigate, and fit within the SFCC parameters. The innovative site design made for a considerable amount of platform customization, breaking the mold of OOTB SFRA templates and allowing for content creativity.</p>
      <p>One of Terlato's main goals was to appeal to all wine drinkers from the casual drinker, to the collector. This involved both educating visitors, as well as providing the utmost information about all facets of the wine industry. Our team was responsible for creating landing page templates that would allow customers to browse by wine style, winery, vintage, or appellation, while also reading about the significance of each. All wine product pages provided certified ratings, and integral information like aging, style, flavor, aroma, taste profiles.</p>
      <p>One of the most significant challenges was the integration of Salesforce CMS. CMS would be integrated into both the Terlato.com website and SFCC side of things, with the idea being that content could be created in one place and then pulled into each site as needed to build out content pages.</p>
      <p>CMS's connection point into SFRA was through Page Designer. We were responsible for developing CMS-enabled components that connected to the CMS data stream, allowing merchandisers to select data nodes and generate content. This required a data-mapping to connect CMS data-points to Page Designer fields ensuring data was displayed correctly. Alongside side the CMS-enabled components, I also created non-CMS versions of all components that allowed on-the-fly content creation. This allowed the merchandising team the ability to create SFCC specific content as needed.</p>
      <h2>Notable Customizations</h2>
      <ul class=\"lvl-1\">
        <li>Custom Style Guide Landing Page</li>
        <li>Content-enabled Mega Nav With mutli-level toggle menus</li>
        <li>Site-wide form element float labels</li>
        <li>
          Product Display Pages (PDP)
          <ul>
            <li>Wine Ratings</li>
            <li>Rich product overview & tasting notes</li>
          </ul>
        </li>
        <li>
          Page Designer
          <ul>
            <li>
              Custom Page Types
              <ul>
                <li>Featured Varietal Landing</li>
                <li>Featured Winery Landing</li>
                <li>Product List Page, Category - All pages within category use exact same layout</li>
              </ul>
            </li>
            <li>Both category-level defined and single Category, Product Grid, and Product Display custom page templates</li>
            <li>
              Custom Components
              <ul>
                <li>Hero Banner</li>
                <li>Product Carousel</li>
                <li>Content Cards</li>
                <li>Einstein Recommendation Carousels</li>
                <li>Salesforce CMS-enabled versions</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    `,
  },
  {
    id: "smith-optics",
    type: "work",
    title: "Smith Optics",
    url: "https://web.archive.org/web/20211202011725/https://www.smithoptics.com/en_US/home",
    company: "DEG Digital",
    platform: "SFCC - SFRA",
    startDate: "Nov 2019",
    endDate: "May 2021",
    images: {
      hero: {
        url: "/images/projects/smith-optics-website.webp",
        alt: "Smith Optics website",
        width: 1169,
        height: 675,
      },
      thumb: {
        url: "/images/projects/smith-optics-thumb.webp",
        alt: "Smith Optics website",
        width: 640,
        height: 370,
      },
    },
    shortDescription:
      "Smith Optics is a brand of sunglasses, goggles, and helmets for skiing, snowboarding, and biking. The project was a full site implementation of Salesforce Commerce Cloud (SFCC) using the SFRA architecture.",
    longDescription: "",
  },
  {
    id: "asu",
    type: "work",
    title: "ASU Foundations",
    url: "https://web.archive.org/web/20200226012446/https://www.asufoundation.org/world-initiatives/global-impact/",
    company: "DEG Digital",
    platform: "SFCC - SFRA",
    startDate: "Nov 2018",
    endDate: "Oct 2019",
    images: {
      hero: {
        url: "/images/projects/asu-website.webp",
        alt: "ASU Foundations",
        width: 1169,
        height: 675,
      },
      thumb: {
        url: "/images/projects/asu-thumb.webp",
        alt: "ASU Foundations",
        width: 640,
        height: 370,
      },
    },
    shortDescription:
      'ASU Foundation website was my first as a Front-End Technical Lead. I created a custom "Style Guide" landing page, modified the checkout flow to be a true 1-page checkout, and conditionalized the shipping step from checkout for donation "orders".',
    longDescription: `
      <p>Arizona State University's (ASU) Foundation website was my first as a Front-End Technical Lead. Rather than simply working through tickets, I was now involved in client-facing discovery, sprint planning, and task delegation.</p>
      <p>To implement the site's theme, I starting by creating a custom \"Style Guide\" landing page. This became a tool/method I would use on almost every new website I built afterwards. The page included a representation of every UI element to be used on the website. Colors, Typography Styles, Forms Elements, Buttons, Modals, Etc. The benefit was 2-fold, it made it really easy to demo the theme for the client, but it also pulled all the elements into one place for easy development.</p>
      <p>Instead of \"selling\" products like your standard commerce website, ASU uses SFRA to accept donations for various funds. Users can browse the website, find a fun that appeals to them, and then add the fund and a monetary denomination to the cart. To make this process smooth as possible, our team customized product pages to display denomination buttons, acting like \"variations\" as well as a \"Enter an Amount\" input for custom amounts.</p>
      <p>For checkout, ASU wanted to be able to gather all the customers information in a single-page experience, rather than the out-of-the-box method that jumps page to page as you step through the checkout. (Even if OOTB box SFRA is a faux-1-page checkout since the page \"changes\" are handled with ajax calls.) Working with guidance from the Lead BED, I heavily modified both the javascript & css that split the the checkout into \"steps\" and successfully handle all input from a single page.</p>
      <p>Finally, since the site was gather donations only, the shipping step of checkout not required. Rather than remove it entirely, we put it behind a conditional that would look for an attribute on cart items that would allows the step to show or not. This allowed the client to, in the future, tag certain funds that they may want to send a thank you or \"gift\" to the user.</p>
      <h2>Notable Customizations</h2>
      <ul class="lvl-1">
        <li>Style Guide Implemented</li>
        <li>
          Checkout
          <ul>  
            <li>Modified SFRA checkout flow to be a true 1-page checkout</li>
            <li>
              Conditionalized shipping step from checkout for donation \"orders\"
              <ul>  
                <li>Allowed customer flexibility to configure future donations to include \"gifts\" and request a shipping address</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    `,
  },
  {
    id: "traeger",
    type: "work",
    title: "Traeger Grills",
    url: "https://web.archive.org/web/20160918150920/http://www.traegergrills.com/shop/",
    company: "WeDoCommerce",
    platform: "SFCC - SFRA",
    startDate: "Nov 2015",
    endDate: "Sep 2016",
    images: {
      hero: {
        url: "/images/projects/traeger-website.webp",
        alt: "Traeger Grills website",
        width: 1169,
        height: 675,
      },
      thumb: {
        url: "/images/projects/traeger-thumb.webp",
        alt: "Traeger Grills website",
        width: 640,
        height: 370,
      },
    },
    shortDescription:
      "Traeger Grills is a brand of wood pellet grills for outdoor cooking. Projects included several complex pages that included Black Friday/Cyber Monday Deals, Meat Madness Tournament, Recipes, and Pro Profiles.",
    longDescription: "",
  },
  {
    id: "beats-by-dre",
    type: "work",
    title: "Beats by Dre - Game Before the Game Campaign",
    url: "",
    company: "WeDoCommerce",
    platform: "SFCC - Site Genesis",
    startDate: "",
    endDate: "June 2014",
    images: {
      hero: {
        url: "",
        alt: "Beats by Dre - Game Before the Game Campaign",
        width: 1169,
        height: 675,
      },
      thumb: {
        url: "",
        alt: "Beats by Dre - Game Before the Game Campaign",
        width: 640,
        height: 370,
      },
    },
    shortDescription:
      'Responsible for building the landing page that represented the "Game Before the Game" Campaign that ran parallel with the 2014 World Cup. The project included 4 versions of the page, and 8 different languages including Japanese, Mandarin, French, & Portuguese. It was visited by hundreds of people worldwide. Unfortunately, I have been unable to find an archived page.',
    longDescription: "",
  },
  {
    id: "sfcc-accelerator",
    type: "work",
    title: "SFCC Accelerator",
    url: "",
    company: "WeDoCommerce, DEG Digital, Merkle",
    platform: "SFCC - SFRA",
    startDate: "Jan 2017",
    endDate: "Ongoing",
    images: {
      hero: {
        url: "/images/projects/sfcc-accelerator-website.webp",
        alt: "SFCC Accelerator website",
        width: 1169,
        height: 675,
      },
      thumb: {
        url: "/images/projects/sfcc-accelerator-thumb.webp",
        alt: "SFCC Accelerator website",
        width: 640,
        height: 370,
      },
    },
    shortDescription:
      "The Salesforce Commerce Cloud (SFCC) Accelerator is our solution to the repetitive task of fixing the same bugs, or building the same customizations on every project, when starting from Salesforce's Storefront Reference Architecture (SFRA). Instead, using a custom, optimized codebase as our jumping off point to save time and effort.",
    longDescription: `
      <p>The Salesforce Commerce Cloud (SFCC) "Accelerator" was a concept born from the repetitive task of fixing the exact same bugs, or building the exact same customizations on every project, when starting from Salesforce's Storefront Reference Architecture (SFRA). Our answer was to introduce a codebase ("cartridge") that could be used as a jumping off point for all projects. It would save us time, effort, and offer us the opportunity to develop complex enhancements that could be maintained project to project.</p>
      <p>SFCC uses a "cartridge" approach in their platform architecture. These "cartridges" allow extension of the platform through the layering of code versions that will maintain a hierarchy of "top most" files (aka "left most" in "cartridge path") being honored as the final rendered version. Using this method, the idea was maintain a "middle" cartridge that sat between the base SFRA cartridge, and the client cartridge. Meaning that we could overwrite SFRA base files with changes from our "Accelerator" cartridge, which could then be overwritten by the client cartridge during the site implementation.</p>
      <p>Our intention with a "middle" cartridge approach was that if we made updates or developed a new feature outside of a project that it could easily be merged into any clients environment. In this way we could maintain product updates between clients. Similarly, as SFRA rolled out product updates, we could easily update our "Accelerator" cartridge as well. While our intentions were sound, the truth was that very rarely did any of our customers update their version of SFRA or the "Accelerator" and instead individual enhancements were made as needed. With this being the case, we evolved the "Accelerator" architecture to instead to act as the starting place for the "client" cartridge layered directly onto the SFRA core cartridge. This approach allows all the same bug fixes and enhancements to be maintained, but simplifies the implementation process and allows for easy education of diverse project teams.</p>
      <p>Most of the enhancements that we made to the "Accelerator" were based on the needs of the client. We would develop a feature for one client, and then roll it into the "Accelerator" for future use. By far, though, the most robust enhancement came with the suite of Page Designer custom components and the refactor of template architecture. Page Designer is Salesforce's CMS solution for clients wanted to be able to develop their own content pages within the SFCC environment, but the base offering leaves a lot to be desired. It's components are basic, and the template architecture is done in a way that encourages code redundancy. This provided us a key area for enhancements.</p>
      <p>Out-of-the-box, Page Designer allows for the ability create Product Listing (Grid) pages that integrate custom content areas as desired. However, they handle it in a way that uses one copy of template code for the Page Designer version, and a second copy that renders the normal non-Page Designer version. Any core customizations to the Product Listing Page would need to be made on both versions, as well as any other Page Designer duplicated templates within (i.e Product Tiles). To remove this code parity, we unified all Page Designer templates with their no-PD counterparts using a single template, while allowing different data-streams to be utilized within. This optimization alongside the vast collection of custom Page Types, Layouts, and Components developed (<a href="/#pd-types" class="link link-primary">Check out the full feature fist</a>), made our Accelerator all the more valuable to customers wanting to get the most out of Page Designer at site launch.</p>
      <p>The "Accelerator" has been the starting point for all of my most complex implementations. It has been a key differentiator for our team, and has allowed me to develop a reputation for being able to deliver complex customizations quickly and efficiently.</p>
      <p class="mb-2"><span class="font-bold">Sites that have launched using the Accelerator:</span></p>
      <p class="mt-1"><a href="/project/build-a-bear" class="link link-primary">Build-A-Bear Workshop</a>, Galderma, <a href="/project/linksys" class="link link-primary">Linksys</a>, <a href="/project/uncorked" class="link link-primary">Uncorked.com</a>, <a href="/project/smith-optics" class="link link-primary">Smith Optics</a>, Sylvania</p>
    `,
  },
  {
    id: "prometheus",
    type: "freelance",
    title: "TMDB.org Api - Media Site",
    url: "https://tmdb.achapman.dev/",
    company: "",
    platform: "React, React - Expo",
    startDate: "Feb 2023",
    endDate: "Active",
    images: {
      hero: {
        url: "/images/projects/prometheus-website.webp",
        alt: "TMDB.org Api - Media Site website",
        width: 1169,
        height: 675,
      },
      thumb: {
        url: "/images/projects/prometheus-thumb.webp",
        alt: "TMDB.org Api - Media Site website",
        width: 640,
        height: 370,
      },
    },
    shortDescription:
      "A Netflix style media site built using React Expo and the TMDB.org API. Built as a fun project to consume an API and learn React with a rich data source. Currently not mobile friendly, please view in a browser.",
    longDescription: `
      <p>I have been studying React in my personal for the last few years. My daily work within Salesforce Commerce Cloud hasn't afforded me the professional chance to work within the modern frameworks I would like. I decided it was pertinent for me to take the initiative myself and started working on projects for my own welfare and enjoyment.</p>
      <p>The most impressive demonstration of these efforts is the Netflix-style media site I built using React, and the <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer nofollow">TMDB.org</a> API. The API includes Movie and Show data arranged into various \"categories\", as well as tons of imagery. It was the perfect source for me to jump into the thick of it using React to consume an API, and build out a robust site.</p>
      <p>For the first iteration of the project I chose to use React Expo because I liked the concept of being able to export IOS and Android app versions of the site down the line should I choose to. It uses <a href="https://supabase.com/" target="_blank" rel="noopener noreferrer nofollow">Supabase</a> for Authentication & Database. This allows \"Watched\" and \"Favorite\" statuses to be set, and saved in the database logged to the account.</p>
      <p>A year or so later, the opportunity to export in native app formats still intrigues me, but React Expo is cumbersome, and held back by React Native constraints. Most recently, I started a complete rebuild of the project using <a href="https://tanstack.com/" target="_blank\" rel=\"noopener noreferrer nofollow\">TanStack</a> with the Router and Query packages. This will allow me to build a more robust site with better performance and more features. The new site has taken site taken shape in about a quarter of the time and is already seeing features being added, such a the use of Swiper as a carousel component, and more robust <a href="https://tmdb.achapman.dev/shows/1399">show landing pages</a>. </p>
      <p>Please keep in mind this is very much a sandbox project for me. I try not to push up broken code, but it happens. Below you will find link for both the more recent rebuild and the first iteration using React Expo</p>
      <p><a class="link link-primary" href="https://media.pixelfoundry.app" target="_blank" rel="noopener noreferrer nofollow">View React Expo Version</a> (A bit rough on mobile, best viewed in a desktop browser.</p>
      <p><a class="link link-primary" href="https://tmdb.achapman.dev">View React (TanStack) Version</a></p>
    `,
  },
  {
    id: "forge",
    type: "freelance",
    title: "Pittsburgh Forge Rugby Club",
    url: "https://www.pghrugby.com",
    company: "Freelance",
    platform: "Wordpress",
    startDate: "May 2018",
    endDate: "Ongoing",
    images: {
      hero: {
        url: "/images/projects/forge-website.webp",
        alt: "Pittsburgh Forge Rugby Club website",
        width: 1169,
        height: 675,
      },
      thumb: {
        url: "/images/projects/forge-thumb.webp",
        alt: "Pittsburgh Forge Rugby Club website",
        width: 640,
        height: 370,
      },
    },
    shortDescription:
      "A Wordpress site built for the Pittsburgh Forge Rugby Club. The site includes a custom theme, custom post types, and product management through WooCommerce. I am also responsible brand design and site merchandising.",
    longDescription: `
      <p>Back in 2018, my rugby club was founded. Using my graphic design background, I took on the task of defining the clubs brand. I designed the club's crest, handled all of the marketing, and of course developed the club website. I chose to launch the site on Wordpress so that the site could easily be handled by committee within the CMS, while at the same time offer me a ton of customization options. The club utilizes the site to handle selling tickets for fundraiser events, tournament sign-ups, and collect player dues. The basis of the commerce is handled by WooCommerce, but the complex front-end, needing to gather information form customers, as well as choose from \"product\" variation models, is heavily customized. The club's site is a bit of a passion project that I love the challenge of keeping up.</p>
    `,
  },
  {
    id: "wing-city",
    type: "freelance",
    title: "Wing City Grille",
    url: "https://web.archive.org/web/20120519223417/http://www.wingcitygrille.com/",
    company: "Freelance",
    platform: "Wordpress",
    startDate: "Dec 2011",
    endDate: "Feb 2012",
    images: {
      hero: {
        url: "/images/projects/wing-city-website.webp",
        alt: "Wing City Grille website",
        width: 1169,
        height: 675,
      },
      thumb: {
        url: "/images/projects/wing-city-thumb.webp",
        alt: "Wing City Grille website",
        width: 640,
        height: 370,
      },
    },
    shortDescription:
      "This project was one of my first experiences with WordPress. I designed and developed a custom theme to fit the client’s needs. Keep in mind this site's design has become very dated as time has passed.",
    longDescription: "",
  },
]

export default projects
