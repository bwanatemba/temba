import { FaLinkedin, FaGithub, FaBehance } from "react-icons/fa"

export default function SocialLinks() {
  return (
    <section className="mb-4">
      <h3>Connect with me</h3>
      <div className="d-flex gap-3">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
          <FaBehance size={30} />
        </a>
      </div>
    </section>
  )
}

