import AnimatedSkillBars from "./AnimatedSkillBars"

interface SkillsProps {
  onEdit: () => void
}

export default function Skills({ onEdit }: SkillsProps) {
  const skills = [
    { name: "Graphic Design", level: 90 },
    { name: "Video Editing", level: 85 },
    { name: "Web Development", level: 80 },
    { name: "UI/UX Design", level: 75 },
    { name: "Adobe Creative Suite", level: 95 },
    { name: "Final Cut Pro", level: 85 },
    { name: "React", level: 80 },
    { name: "Next.js", level: 75 },
  ]

  return (
    <section className="mb-4">
      <div className="d-flex justify-content-between align-items-center">
        <h3>Skills</h3>
        <button className="btn btn-sm btn-outline-primary" onClick={onEdit}>
          Edit
        </button>
      </div>
      <AnimatedSkillBars skills={skills} />
    </section>
  )
}

