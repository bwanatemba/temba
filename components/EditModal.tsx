import { useState, useEffect } from "react"

interface EditModalProps {
  section: string
  onSave: (section: string, data: any) => void
  onClose: () => void
}

export default function EditModal({ section, onSave, onClose }: EditModalProps) {
  const [data, setData] = useState<any>({})

  useEffect(() => {
    // Initialize form based on section
    switch (section) {
      case "personal":
        setData({
          name: "John Doe",
          title: "Graphic Designer | Video Editor | Web Developer",
          email: "john.doe@example.com",
          phone: "(123) 456-7890"
        })
        break
      case "experience":
        setData({
          year: "2018 - Present",
          title: "Senior Multimedia Designer",
          company: "Creative Agency XYZ",
          description: "Lead designer for various multimedia projects..."
        })
        break
      case "education":
        setData({
          degree: "Bachelor of Fine Arts in Graphic Design",
          school: "University of Arts",
          year: "2015"
        })
        break
      case "skills":
        setData({
          name: "Graphic Design",
          level: 90
        })
        break
    }
  }, [section])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setData(prev => ({
      ...prev,
      [name]: name === "level" ? Number(value) : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(section, data)
  }

  const renderFormFields = () => {
    switch (section) {
      case "personal":
        return (
          <>
            <input 
              type="text" 
              className="form-control mb-2" 
              name="name" 
              placeholder="Name" 
              value={data.name || ''} 
              onChange={handleChange} 
            />
            <input 
              type="text" 
              className="form-control mb-2" 
              name="title" 
              placeholder="Professional Title" 
              value={data.title || ''} 
              onChange={handleChange} 
            />
            <input 
              type="email" 
              className="form-control mb-2" 
              name="email" 
              placeholder="Email" 
              value={data.email || ''} 
              onChange={handleChange} 
            />
            <input 
              type="tel" 
              className="form-control mb-2" 
              name="phone" 
              placeholder="Phone" 
              value={data.phone || ''} 
              onChange={handleChange} 
            />
          </>
        )
      case "experience":
        return (
          <>
            <input 
              type="text" 
              className="form-control mb-2" 
              name="year" 
              placeholder="Year Range" 
              value={data.year || ''} 
              onChange={handleChange} 
            />
            <input 
              type="text" 
              className="form-control mb-2" 
              name="title" 
              placeholder="Job Title" 
              value={data.title || ''} 
              onChange={handleChange} 
            />
            <input 
              type="text" 
              className="form-control mb-2" 
              name="company" 
              placeholder="Company" 
              value={data.company || ''} 
              onChange={handleChange} 
            />
            <textarea 
              className="form-control mb-2" 
              name="description" 
              placeholder="Job Description" 
              value={data.description || ''} 
              onChange={handleChange} 
            />
          </>
        )
      case "education":
        return (
          <>
            <input 
              type="text" 
              className="form-control mb-2" 
              name="degree" 
              placeholder="Degree" 
              value={data.degree || ''} 
              onChange={handleChange} 
            />
            <input 
              type="text" 
              className="form-control mb-2" 
              name="school" 
              placeholder="School" 
              value={data.school || ''} 
              onChange={handleChange} 
            />
            <input 
              type="text" 
              className="form-control mb-2" 
              name="year" 
              placeholder="Graduation Year" 
              value={data.year || ''} 
              onChange={handleChange} 
            />
          </>
        )
      case "skills":
        return (
          <>
            <input 
              type="text" 
              className="form-control mb-2" 
              name="name" 
              placeholder="Skill Name" 
              value={data.name || ''} 
              onChange={handleChange} 
            />
            <input 
              type="number" 
              className="form-control mb-2" 
              name="level" 
              placeholder="Skill Level (0-100)" 
              value={data.level || ''} 
              onChange={handleChange} 
              min="0" 
              max="100" 
            />
          </>
        )
      default:
        return null
    }
  }

  return (
    <div className="modal d-block" tabIndex={-1} role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit {section}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              {renderFormFields()}
              <button type="submit" className="btn btn-primary mt-2">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}