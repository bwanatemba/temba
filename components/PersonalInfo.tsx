interface PersonalInfoProps {
  name: string
  title: string
  email: string
  phone: string
  onEdit: () => void
}

export default function PersonalInfo({ 
  name, 
  title, 
  email, 
  phone, 
  onEdit 
}: PersonalInfoProps) {
  return (
    <section className="mb-4">
      <div className="d-flex justify-content-between align-items-center">
        <h1>{name}</h1>
        <button className="btn btn-sm btn-outline-primary" onClick={onEdit}>
          Edit
        </button>
      </div>
      <h2>{title}</h2>
      <p>Email: {email} | Phone: {phone}</p>
    </section>
  )
}