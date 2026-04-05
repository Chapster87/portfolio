"use client"

import React from "react"
import * as Accordion from "@radix-ui/react-accordion"
import clsx from "clsx"
import Heading from "@/components/typography/heading"
import { useViewportSize } from "@/hooks/browser/use-viewport-size" // Import useViewportSize
import { parseHtmlToReact } from "@/helpers/parse-html-to-react" // Import HTML parser
import s from "./styles.module.css"

interface SectionAccordionProps {
  id: string
  className?: string
  title: string
  icon?: React.ReactNode
  children: React.ReactNode | string // Children can now be ReactNode or string (for HTML)
}

function SectionAccordion({
  id,
  className,
  title,
  icon,
  children,
}: SectionAccordionProps): React.JSX.Element {
  const { large, small } = useViewportSize()

  const isDesktop = large
  const isMobile = small

  const [accordionValue, setAccordionValue] = React.useState(
    isDesktop ? id : undefined
  )

  React.useEffect(() => {
    setAccordionValue(isDesktop ? id : undefined)
  }, [isDesktop, id])

  const accordionCollapsible = isMobile

  return (
    <Accordion.Root
      className={clsx(s.root, className)}
      id={id}
      type="single"
      value={accordionValue}
      onValueChange={(val) => {
        if (accordionCollapsible) {
          setAccordionValue(val)
        }
      }}
      collapsible={accordionCollapsible}
    >
      <Accordion.Item className={s.item} value={id}>
        <Accordion.Trigger className={s.trigger}>
          <div className={s.title}>
            {icon && <span className={s.icon}>{icon}</span>}
            <Heading level="h2" className={s.sectionHeader}>
              {title}
            </Heading>
          </div>

          <svg className={`feather-icon ${s.plusIcon}`} aria-hidden>
            <use href="/feather-sprite.svg#plus" />
          </svg>
          <svg className={`feather-icon ${s.minusIcon}`} aria-hidden>
            <use href="/feather-sprite.svg#minus" />
          </svg>
        </Accordion.Trigger>

        <Accordion.Content className={s.content}>
          <div className={s.contentText}>
            {React.Children.map(children, (child) =>
              typeof child === "string" ? parseHtmlToReact(child, s) : child
            )}
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  )
}

export default SectionAccordion
