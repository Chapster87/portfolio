import Heading from "@/components/typography/heading"
import Text from "@/components/typography/text"
import Link from "@/components/link"
import BusinessCard from "@/components/business-card"
import ValuePropsCounter from "@/components/value-props-counter"
import SectionAccordion from "./_components/section-accordion"
import s from "./styles.module.css"

import resume from "@data/resume"
import { type ResumeData } from "@customTypes/resume-data"

const { businessCard, aboutMe } = resume as ResumeData

export default function Home() {
  return (
    <div className={s.page}>
      <section className={s.pageTop}>
        <BusinessCard data={businessCard} />
        <ValuePropsCounter
          counter={[
            {
              name: "Years of Experience",
              number: 16,
              icon: "plus",
            },
            {
              name: "Sites Launched",
              number: 20,
              icon: "plus",
            },
            {
              name: "Lines of Code*",
              number: 300000,
              icon: "plus",
            },
          ]}
        />
        <Text className={s.valuePropDisclaimer}>
          *Based on{" "}
          <Link
            className="link"
            href="https://medium.com/modern-stack/how-much-computer-code-has-been-written-c8c03100f459"
            openInNewTab
            rel="noopener noreferrer nofollow"
          >
            Medium.com article
          </Link>{" "}
          calculating of total lines of code in 2020, probably wildly inaccurate
        </Text>
      </section>
      <SectionAccordion
        id="about-me"
        className={s.pageSection}
        title="About Me"
        icon={
          <svg className="feather-icon" width="26" height="26">
            <use href="/feather-sprite.svg#thumbs-up" />
          </svg>
        }
      >
        {aboutMe.subtitle}
        {aboutMe.summary}
        {aboutMe.longStory}
      </SectionAccordion>

      <SectionAccordion
        id="work-experience"
        className={s.pageSection}
        title="Work Experience"
        icon={
          <svg className="feather-icon" width="26" height="26">
            <use href="/feather-sprite.svg#briefcase" />
          </svg>
        }
      >
        <Text>full-stack developer with a passion for creating</Text>
      </SectionAccordion>
    </div>
  )
}
