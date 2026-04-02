import Text from "@/components/typography/text"
import Link from "@/components/link"
import BusinessCard from "@/components/business-card"
import ValuePropsCounter from "@/components/value-props-counter"

import s from "./styles.module.css"

export default function Home() {
  return (
    <div className={s.page}>
      <div className={s.pageTop}>
        <BusinessCard />
        <ValuePropsCounter
          counter={[
            {
              name: "Years of Experience",
              number: 15,
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
      </div>
    </div>
  )
}
