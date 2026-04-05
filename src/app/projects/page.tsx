import Heading from "@/components/typography/heading"
import Text from "@/components/typography/text"
import Link from "@/components/link"

import s from "./styles.module.css"

export default function Projects() {
  return (
    <div className={s.page}>
      <div className={s.intro}>
        <Heading level="h1">My Projects</Heading>
        <Text size="lg">
          Explore my work. Wayback Machine used to present a close approximation
          to site at time of project completion.
          <br />
          (Please excuse missing styles and images.)
        </Text>
      </div>
      <div className={s.anchorRow}>
        <Link href="#work-projects">Employer Projects</Link>
        <Link href="#freelance-projects">
          Framework Studies & Freelance Projects
        </Link>
      </div>
      <div className={s.projectSection} id="work-projects">
        <div className={s.title}>
          <svg className="feather-icon" width="26" height="26">
            <use href="/feather-sprite.svg#briefcase" />
          </svg>
          <Heading level="h2" className={s.sectionHeader}>
            Employer Projects
          </Heading>
        </div>
      </div>
      <div className={s.projectSection} id="freelance-projects">
        <div className={s.title}>
          <svg className="feather-icon" width="26" height="26">
            <use href="/feather-sprite.svg#edit-3" />
          </svg>
          <Heading level="h2" className={s.sectionHeader}>
            Framework Studies & Freelance Projects
          </Heading>
        </div>
      </div>
      <div className={s.projectSection} id="honorable-mentions">
        <div className={s.title}>
          <svg className="feather-icon" width="26" height="26">
            <use href="/feather-sprite.svg#star" />
          </svg>
          <Heading level="h2" className={s.sectionHeader}>
            Honorable Mentions
          </Heading>
        </div>
      </div>
    </div>
  )
}
