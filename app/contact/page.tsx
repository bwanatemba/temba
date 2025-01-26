export default function ContactPage() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card shadow-lg border-0">
            <div className="card-body p-5">
              <h2 className="text-center mb-4" style={{color: '#FFA500'}}>Contact Me</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea 
                    className="form-control" 
                    id="message" 
                    rows={4} 
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary w-100"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}