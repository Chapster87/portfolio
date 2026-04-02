import Image from "next/image"
import Heading from "@components/typography/heading"
import Link from "@components/link"
import { BusinessCardData } from "@/types/business-card"

import s from "./styles.module.css"

interface BusinessCardProps {
  data: BusinessCardData
}

export default function BusinessCard({ data }: BusinessCardProps) {
  return (
    <div className={s.businessCard}>
      <div className={s.photo}>
        <Image
          className={s.headshot}
          src={data.image}
          alt={data.name}
          width={256}
          height={256}
        />
      </div>
      <div className={s.info}>
        <div className={s.nameTitle}>
          <Heading level="h2" className={s.name}>
            {data.name}
          </Heading>
          <Heading level="h3" display="h5" className={s.title}>
            {data.title}
          </Heading>
        </div>
        <div className={s.actions}>
          <div className={s.actionsSecondary}>
            <Link
              className={s.actionLink}
              href={data.action_urls.linkedin_url}
              openInNewTab={true}
              buttonStyle={true}
              variant="secondary"
              shape="square"
              rel="noopener noreferrer nofollow"
              aria-label="Connect with me on LinkedIn"
            >
              <svg className="feather-icon" width="20" height="20">
                <use href="../feather-sprite.svg#linkedin" />
              </svg>
            </Link>
            <Link
              className={s.actionLink}
              href={data.action_urls.github_url}
              openInNewTab={true}
              buttonStyle={true}
              variant="secondary"
              shape="square"
              rel="noopener noreferrer nofollow"
              aria-label="View my Github"
            >
              <svg className="feather-icon" width="20" height="20">
                <use href="../feather-sprite.svg#github" />
              </svg>
            </Link>
            <Link
              className={s.actionLink}
              href={`mailto:${data.action_urls.email}`}
              buttonStyle={true}
              variant="secondary"
              shape="square"
              aria-label="Email Me"
            >
              <svg className="feather-icon" width="20" height="20">
                <use href="../feather-sprite.svg#send" />
              </svg>
            </Link>
          </div>
          <Link
            className={s.resumeLink}
            href={data.action_urls.resume_url}
            openInNewTab={true}
            buttonStyle={true}
            variant="primary"
          >
            Download Resume
            <svg className="feather-icon" width="20" height="20">
              <use href="../feather-sprite.svg#download" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
