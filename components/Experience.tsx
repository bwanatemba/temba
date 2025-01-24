interface Experience {
  year: string
  title: string
  company: string
  description: string
}

interface ExperienceProps {
  experiences: Experience[]
  onEdit: () => void
}

export default function Experience({ experiences, onEdit }: ExperienceProps) {
  return (
    <section className="mb-4">
      <div className="d-flex justify-content-between align-items-center">
        <h3>Experience</h3>
        <button className="btn btn-sm btn-outline-primary" onClick={onEdit}>
          Edit
        </button>
      </div>
      <InteractiveTimeline items={experiences} />
    </section>
  )
}