interface EducationItem {
  degree: string
  school: string
  year: string
}

interface EducationProps {
  education: EducationItem[]
  onEdit: () => void
}

export default function Education({ education, onEdit }: EducationProps) {
  return (
    <section className="mb-4">
      <div className="d-flex justify-content-between align-items-center">
        <h3>Education</h3>
        <button className="btn btn-sm btn-outline-primary" onClick={onEdit}>
          Edit
        </button>
      </div>
      {education.map((edu, index) => (
        <div key={index} className="mb-2">
          <h4>{edu.degree}</h4>
          <p>
            {edu.school}, {edu.year}
          </p>
        </div>
      ))}
    </section>
  )
}