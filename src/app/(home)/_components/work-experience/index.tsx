import {
  type Employment,
  type EmploymentPosition,
} from "@customTypes/resume-data"
import Timeline from "@/components/timeline"
import clsx from "clsx"
import s from "./styles.module.css"

interface PositionItemProps {
  position: EmploymentPosition
  isLastPosition: boolean
}

function PositionItem({ position, isLastPosition }: PositionItemProps) {
  const { title, start_date, end_date, notes } = position
  return (
    <div
      className={`${s.employmentPosition} ${!isLastPosition ? s.marginBottomSmall : ""}`}
    >
      <div className={s.positionHeader}>
        {title && <div className={s.positionTitle}>{title}</div>}
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
        <ul className={s.notesList}>
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
    <div className={`${s.employmentItem}`}>
      <div className={s.employer}>
        {employer && (
          <div
            className={s.employerName}
            dangerouslySetInnerHTML={{ __html: employer }}
          ></div>
        )}
        {location && (
          <div className={s.locationContainer}>
            <span className={`${s.locationDivider}`}>-</span>
            <span className={s.locationText}>
              <svg className="feather-icon" width="22" height="22">
                <use href="/feather-sprite.svg#map-pin" />
              </svg>
            </span>
            {location}
            {remote && <span className={s.remoteText}>(Remote)</span>}
          </div>
        )}
      </div>
      {positions &&
        positions.length > 0 &&
        positions.map((position, posIndex) => (
          <PositionItem
            key={posIndex}
            position={position}
            isLastPosition={posIndex === positions.length - 1}
          />
        ))}
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
            <Timeline.Middle />
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
