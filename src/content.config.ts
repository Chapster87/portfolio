// import type { Testimonial } from "@/components/Testimonial.astro";
import type { PageType } from "@/content/page.types";
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
        logo: z.string(),
        start_year: z.string(),
        end_year: z.string(),
        location: z.string(),
        degree: z.string(),
        concentration: z.array(z.string()),
      }),
      certifications: z.array(
        z.object({
          name: z.string(),
          issue_date: z.string(),
          logo: z.string(),
          url: z.string(),
        }),
      ),
      skills:z.object({
        hard_skills: z.array(
          z.object({
            name: z.string(),
            logo: z.string(),
            level: z.string(),
          })
        ),
        soft_skills: z.array(
          z.object({
            name: z.string(),
            logo: z.string()
          }),
        ),
      }),
      // testimonial: z.custom<Testimonial>(),
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
      project_collection: z.object({
        work_projects: z.array(
          z.object({
            image_thumb: z.string(),
            title: z.string(),
            company: z.string(),
            platform: z.string(),
            start_date: z.string(),
            end_date: z.string(),
            short_desc: z.string(),
            content_id: z.string(),
            url: z.string()
          }),
        ),
        freelance_projects: z.array(
          z.object({
            image_thumb: z.string(),
            title: z.string(),
            company: z.string(),
            platform: z.string(),
            start_date: z.string(),
            end_date: z.string(),
            short_desc: z.string(),
            content_id: z.string(),
            url: z.string()
          }),
        ),
        other_projects: z.array(
          z.object({
            image_thumb: z.string(),
            title: z.string(),
            company: z.string(),
            platform: z.string(),
            start_date: z.string(),
            end_date: z.string(),
            short_desc: z.string(),
            content_id: z.string(),
            url: z.string()
          }),
        )
      })
    }),
    zodPageConfig,
  )
});

const projectsContent = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/projectsContent" }),
});

// Export collections
export const collections = {
  pages: pagesCollection,
  homepage: indexPage,
  workExp: workExpData,
  projects: projectsPage,
  projectsContent: projectsContent
};


