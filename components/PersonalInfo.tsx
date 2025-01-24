interface PersonalInfoProps {
  onEdit: () => void
}

export default function PersonalInfo({ onEdit }: PersonalInfoProps) {
  return (
    <section className="mb-4">
      <div className="d-flex justify-content-between align-items-center">
        <h1>John Doe</h1>
        <button className="btn btn-sm btn-outline-primary" onClick={onEdit}>
          Edit
        </button>
      </div>
      <h2>Graphic Designer | Video Editor | Web Developer</h2>
      <p>Email: john.doe@example.com | Phone: (123) 456-7890</p>
    </section>
  )
}

