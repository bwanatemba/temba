"use client"

import { useState } from "react"
import Image from "next/image"

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("graphic")

  const portfolioItems = {
    graphic: [
      { id: 1, title: "Brand Identity", image: "/placeholder.svg" },
      { id: 2, title: "Poster Design", image: "/placeholder.svg" },
    ],
    video: [
      { id: 1, title: "Commercial Ad", video: "/placeholder.mp4" },
      { id: 2, title: "Music Video", video: "/placeholder.mp4" },
    ],
    web: [
      { id: 1, title: "E-commerce Site", link: "https://example.com" },
      { id: 2, title: "Portfolio Website", link: "https://example.com" },
    ],
  }

  return (
    <section className="mb-4">
      <h3>Portfolio</h3>
      <ul className="nav nav-tabs mb-3">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "graphic" ? "active" : ""}`}
            onClick={() => setActiveTab("graphic")}
          >
            Graphic Design
          </button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === "video" ? "active" : ""}`} onClick={() => setActiveTab("video")}>
            Video Editing
          </button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === "web" ? "active" : ""}`} onClick={() => setActiveTab("web")}>
            Web Development
          </button>
        </li>
      </ul>
      <div className="row">
        {activeTab === "graphic" &&
          portfolioItems.graphic.map((item) => (
            <div key={item.id} className="col-md-6 mb-3">
              <div className="card">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={300}
                  height={200}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                </div>
              </div>
            </div>
          ))}
        {activeTab === "video" &&
          portfolioItems.video.map((item) => (
            <div key={item.id} className="col-md-6 mb-3">
              <div className="card">
                <video controls width="100%" height="auto">
                  <source src={item.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                </div>
              </div>
            </div>
          ))}
        {activeTab === "web" &&
          portfolioItems.web.map((item) => (
            <div key={item.id} className="col-md-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}

