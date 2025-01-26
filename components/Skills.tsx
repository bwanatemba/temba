import { Skill } from './Skills'
import AnimatedSkillBars from './AnimatedSkillBars'

interface SkillsProps {
  skills: Skill[]
  onEdit: () => void
}

export default function Skills({ skills, onEdit }: SkillsProps) {
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