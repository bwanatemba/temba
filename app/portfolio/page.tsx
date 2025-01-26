import Image from 'next/image'

export default function PortfolioPage() {
  const portfolioItems = [
    { 
      id: 1, 
      title: "Branding Project", 
      description: "Comprehensive brand identity design", 
      image: "/portfolio1.jpg",
      category: "Graphic Design"
    },
    { 
      id: 2, 
      title: "Web Development", 
      description: "Responsive e-commerce website", 
      image: "/portfolio2.jpg",
      category: "Web Design"
    }
  ]

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4" style={{color: '#FFA500'}}>My Portfolio</h1>
      <div className="row">
        {portfolioItems.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <Image 
                src={item.image} 
                alt={item.title} 
                width={400} 
                height={300} 
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text text-muted">{item.description}</p>
                <span className="badge bg-secondary">{item.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}