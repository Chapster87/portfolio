import projects from "@data/projects"
import { parseHtmlToReact } from "@helpers/parse-html-to-react"
import { Project } from "@customTypes/project"
import Image from "next/image"
import Heading from "@components/typography/heading"
import Text from "@components/typography/text"
import Link from "@components/link"
import clsx from "clsx"
import s from "./styles.module.css"

// Generates all static paths for projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

interface ProjectDetailPageProps {
  params: {
    id: string
  }
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { id } = await params
  const project: Project | undefined = projects.find((p) => p.id === id)

  if (!project) {
    return <div>Project not found.</div>
  }

  const {
    title,
    url,
    startDate,
    endDate,
    company,
    platform,
    images,
    longDescription,
  } = project

  return (
    <div className={s.page}>
      <div className={s.pageTop}>
        <div className={s.topInner}>
          <div className={s.breadcrumbs}>Breadcrumbs {">"} Placeholder</div>
          <figure className={s.heroImgContainer}>
            {images?.hero && (
              <Image
                className={s.heroImg}
                src={images.hero.url}
                alt={images.hero.alt || title || ""}
                width={images.hero.width}
                height={images.hero.height}
              />
            )}
          </figure>
        </div>
      </div>
      <div className={s.projectMain}>
        <div className={s.projectMainTop}>
          <div className={s.titleBar}>
            <Heading level="h1" className={s.title}>
              {title}
            </Heading>
            {url && (
              <Link className={s.websiteUrl} href={url} openInNewTab nofollow>
                View Website
              </Link>
            )}
          </div>
          <div className={s.detailsRow}>
            <div className={clsx(s.detail, s.projectDate)}>
              <Text variant="span" size="lg">
                <strong>Project Date:</strong>
              </Text>
              <Text variant="span" size="lg">
                {startDate}
                {endDate && startDate && " - "}
                {endDate}
              </Text>
            </div>
            <div className={clsx(s.detail, s.employer)}>
              <Text variant="span" size="lg">
                <strong>Employer:</strong>
              </Text>
              <Text variant="span" size="lg">
                {company}
              </Text>
            </div>
            <div className={clsx(s.detail, s.platform)}>
              <Text variant="span" size="lg">
                <strong>Platform:</strong>
              </Text>
              <Text variant="span" size="lg" className={s.platformBadge}>
                {platform}
              </Text>
            </div>
          </div>
        </div>
        {longDescription && (
          <div className={clsx("prose", s.longDescription)}>
            {parseHtmlToReact(longDescription, s)}
          </div>
        )}
      </div>
    </div>
  )
}
