'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-[#FFA500] sticky-top shadow-sm">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <Image 
            src="/logo.svg" 
            alt="Personal Brand Logo" 
            width={50} 
            height={50} 
            className="me-2"
          />
          <span className="fw-bold text-white">John Doe</span>
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link text-white">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/portfolio" className="nav-link text-white">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link text-white">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}