"use client"

import React, { useEffect, useRef } from "react"

import s from "./styles.module.css"

interface ValuePropItem {
  number: number
  icon?: string
  name: string
}

interface ValuePropsCounterProps {
  counter: ValuePropItem[]
  className?: string
}

const ValuePropsCounter: React.FC<ValuePropsCounterProps> = ({
  counter,
  className,
}) => {
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    counterRefs.current.forEach((counterElement) => {
      if (!counterElement) return

      const value = +counterElement.getAttribute("data-valuemax")!
      let data = 0
      const speed = 900 // milliseconds for animation

      const animate = () => {
        const time = value / speed
        if (data < value) {
          data = Math.ceil(data + time)
          counterElement.innerText = data.toString()
          setTimeout(animate, 1)
        } else {
          counterElement.innerText = value.toString()
        }
      }

      animate()
    })
  }, [counter])

  return (
    <div className={`${s.counter} ${className || ""}`}>
      <div className={s.counterWrapper}>
        {counter.map((item: ValuePropItem, index: number) => (
          <div className={s.counterItem} key={index}>
            <h3 className={s.counterValue}>
              <span
                className={s.count}
                data-valuemax={item.number}
                ref={(el) => {
                  counterRefs.current[index] = el
                }}
              >
                0
              </span>
              <span className={s.counterIcon}>
                <svg
                  className={`feather-icon ${s.featherIcon}`}
                  width="20"
                  height="20"
                >
                  <use href={`/feather-sprite.svg#${item.icon ?? "plus"}`} />
                </svg>
              </span>
            </h3>
            <p className={s.counterName}>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ValuePropsCounter
