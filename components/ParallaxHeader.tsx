"use client"

import { useEffect, useRef } from "react"

export default function ParallaxHeader() {
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const scrollPosition = window.pageYOffset
        headerRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      ref={headerRef}
      className="parallax-header"
      style={{
        backgroundImage: "url(/header-bg.jpg)",
        height: "300px",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container h-100 d-flex flex-column justify-content-center">
        <h1 className="text-white">John Doe</h1>
        <h2 className="text-white">Graphic Designer | Video Editor | Web Developer</h2>
      </div>
    </div>
  )
}

