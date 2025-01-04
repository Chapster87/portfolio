import type { Testimonial } from "@/components/Testimonial.astro";
import type { LinkButton, PageType } from "@/content/page.types";
import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const zodPageConfig = z.custom<PageType>();

const pagesCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/pages" }),
  schema: zodPageConfig,
});

const indexPage = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/homepage" }),
  schema: z.intersection(
    z.object({
      hero: z.object({
        name: z.string(),
        title: z.string(),
        image: z.string(),
        action_urls: z.object({
          linkedin_url: z.string(),
          github_url: z.string(),
          email: z.string(),
          resume_url: z.string()
        }),
      }),
      summary: z.string(),
      education: z.object({
        school: z.string(),
        start_year: z.string(),
        end_year: z.string(),
        location: z.string(),
        degree: z.string(),
        concentration: z.array(z.string()),
      }),
      features: z.object({
        title: z.string(),
        description: z.string(),
        feature_list: z.array(
          z.object({
            title: z.string(),
            content: z.string(),
            icon: z.string(),
          }),
        ),
      }),
      testimonial: z.custom<Testimonial>(),
      call_to_action: z.object({
        title: z.string(),
        description: z.string(),
        button: z.custom<LinkButton>(),
      }),
    }),
    zodPageConfig,
  )
});

const workExpData = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/workExp" }),
  // schema: z.intersection(
  //   z.object({
  //     employment_history: z.object({
  //       employer: z.string(),
  //       location: z.string(),
  //       remote: z.boolean(),
  //       positions: z.array(
  //         z.object({
  //           title: z.string(),
  //           start_date: z.string(),
  //           end_date: z.string(),
  //           positions: z.array(z.string()) 
  //         }),
  //       ),
  //     }),
  //   }),
  //   zodPageConfig,
  // )
});

const projectsPage = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/projects" }),
  schema: z.intersection(
    z.object({
      projects_grid: z.object({
        project_list: z.array(
          z.object({
            image: z.string(),
            icon: z.string(),
            title: z.string(),
            company: z.string(),
            start_date: z.string(),
            end_date: z.string(),
            desc: z.string(),
            url: z.string()
          }),
        )
      }),
    }),
    zodPageConfig,
  )
});

// Export collections
export const collections = {
  pages: pagesCollection,
  homepage: indexPage,
  workExp: workExpData,
  projects: projectsPage,
};


