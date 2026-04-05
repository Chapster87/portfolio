import {
  type Employment,
  type EmploymentPosition,
} from "@customTypes/resume-data"
import Heading from "@/components/typography/heading"
import Text from "@/components/typography/text"
import Timeline from "@/components/timeline"
import clsx from "clsx"
import s from "./styles.module.css"

interface PositionItemProps {
  position: EmploymentPosition
}

function PositionItem({ position }: PositionItemProps) {
  const { title, start_date, end_date, notes } = position
  return (
    <div className={s.employmentPosition}>
      <div className={s.positionHeader}>
        {title && (
          <Heading className={s.positionTitle} level="h4" display="h5">
            {title}
          </Heading>
        )}
        {(start_date || end_date) && (
          <div className={s.badgeNeutral}>
            <span className={s.badgeIcon}>
              <svg className="feather-icon" width="16" height="16">
                <use href="/feather-sprite.svg#calendar" />
              </svg>
            </span>
            <time>
              {start_date && start_date}
              {end_date && ` - ${end_date}`}
            </time>
          </div>
        )}
      </div>
      {notes && notes.length > 0 && (
        <ul className={`prose ${s.notesList}`}>
          {notes.map((note, noteIndex) => (
            <li key={noteIndex}>{note}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

interface EmploymentItemProps {
  job: Employment
}

function EmploymentItem({ job }: EmploymentItemProps) {
  const { employer, location, remote, positions } = job
  return (
    <div className={s.employmentItem}>
      <div className={s.employer}>
        {employer && (
          <Heading
            className={s.employerName}
            level="h3"
            display="h5"
            dangerouslySetInnerHTML={{ __html: employer }}
          />
        )}
        {location && (
          <Text className={s.location}>
            <span className={s.locationDivider}>-</span>
            <span className={s.locationIcon}>
              <svg className="feather-icon" width="18" height="18">
                <use href="/feather-sprite.svg#map-pin" />
              </svg>
            </span>
            {location}
            {remote && <span className={s.remoteText}>(Remote)</span>}
          </Text>
        )}
      </div>
      {positions && positions.length > 0 && (
        <div className={s.positionsContainer}>
          {positions.map((position, posIndex) => (
            <PositionItem key={posIndex} position={position} />
          ))}
        </div>
      )}
    </div>
  )
}

interface WorkExperienceProps {
  data: Employment[]
  className?: string
}

function WorkExperience({ data, className }: WorkExperienceProps) {
  const employmentHistory = data

  return (
    <div className={clsx(s.workHistory, className)}>
      <Timeline orientation="vertical" compact={true} snapIcon={true}>
        {employmentHistory.map((job: Employment, i: number) => (
          <Timeline.Step key={i}>
            <Timeline.Middle style={{ color: "var(--color-primary)" }} />
            <Timeline.End>
              <EmploymentItem job={job} />
            </Timeline.End>
          </Timeline.Step>
        ))}
      </Timeline>
    </div>
  )
}

export default WorkExperience
