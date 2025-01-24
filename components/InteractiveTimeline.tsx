"use client"

import { useState } from "react"

interface TimelineItem {
  year: string
  title: string
  company: string
  description: string
}

interface InteractiveTimelineProps {
  items: TimelineItem[]
}

export default function InteractiveTimeline({ items }: InteractiveTimelineProps) {
  const [activeItem, setActiveItem] = useState<number | null>(null)

  return (
    <div className="timeline">
      {items.map((item, index) => (
        <div
          key={index}
          className={`timeline-item ${activeItem === index ? "active" : ""}`}
          onClick={() => setActiveItem(index)}
        >
          <div className="timeline-content">
            <h4>{item.year}</h4>
            <h5>{item.title}</h5>
            <h6>{item.company}</h6>
            {activeItem === index && <p>{item.description}</p>}
          </div>
        </div>
      ))}
    </div>
  )
}

