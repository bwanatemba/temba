"use client"

import { useEffect, useRef } from "react"

interface Skill {
  name: string
  level: number
}

interface AnimatedSkillBarsProps {
  skills: Skill[]
}

export default function AnimatedSkillBars({ skills }: AnimatedSkillBarsProps) {
  const skillBarsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
          }
        })
      },
      { threshold: 0.5 },
    )

    if (skillBarsRef.current) {
      const skillBars = skillBarsRef.current.querySelectorAll(".skill-bar")
      skillBars.forEach((bar) => observer.observe(bar))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={skillBarsRef}>
      {skills.map((skill, index) => (
        <div key={index} className="mb-3">
          <div className="d-flex justify-content-between">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="progress">
            <div
              className="progress-bar skill-bar"
              role="progressbar"
              style={{ width: `${skill.level}%` }}
              aria-valuenow={skill.level}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
          </div>
        </div>
      ))}
    </div>
  )
}

