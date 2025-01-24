import { useState } from "react"

interface EditModalProps {
  section: string
  onSave: (section: string, data: any) => void
  onClose: () => void
}

export default function EditModal({ section, onSave, onClose }: EditModalProps) {
  const [data, setData] = useState({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(section, data)
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
              {/* Add form fields based on the section being edited */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" id="name" name="name" onChange={handleChange} />
              </div>
              <button type="submit" className="btn btn-primary">
                Save changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

