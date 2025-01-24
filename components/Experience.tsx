import InteractiveTimeline from "./InteractiveTimeline"

interface ExperienceProps {
  onEdit: () => void
}

export default function Experience({ onEdit }: ExperienceProps) {
  const experiences = [
    {
      year: "2018 - Present",
      title: "Senior Multimedia Designer",
      company: "Creative Agency XYZ",
      description: "Lead designer for various multimedia projects...",
    },
    {
      year: "2015 - 2018",
      title: "Web Developer",
      company: "Tech Solutions Inc.",
      description: "Developed responsive web applications...",
    },
    {
      year: "2013 - 2015",
      title: "Junior Graphic Designer",
      company: "Design Studio ABC",
      description: "Created visual concepts for various clients...",
    },
  ]

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

