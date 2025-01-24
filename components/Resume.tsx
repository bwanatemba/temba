"use client"

import { useState } from "react"
import ParallaxHeader from "./ParallaxHeader"
import PersonalInfo from "./PersonalInfo"
import Experience from "./Experience"
import Education from "./Education"
import Skills from "./Skills"
import Portfolio from "./Portfolio"
import SocialLinks from "./SocialLinks"
import EditModal from "./EditModal"
import InteractiveTimeline from "./InteractiveTimeline"
import AnimatedSkillBars from "./AnimatedSkillBars"

export default function Resume() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "John Doe",
    title: "Graphic Designer | Video Editor | Web Developer",
    email: "john.doe@example.com",
    phone: "(123) 456-7890"
  })

  const [experiences, setExperiences] = useState([
    {
      year: "2018 - Present",
      title: "Senior Multimedia Designer",
      company: "Creative Agency XYZ",
      description: "Lead designer for various multimedia projects..."
    },
    {
      year: "2015 - 2018",
      title: "Web Developer",
      company: "Tech Solutions Inc.",
      description: "Developed responsive web applications..."
    },
    {
      year: "2013 - 2015",
      title: "Junior Graphic Designer",
      company: "Design Studio ABC",
      description: "Created visual concepts for various clients..."
    }
  ])

  const [education, setEducation] = useState([
    {
      degree: "Bachelor of Fine Arts in Graphic Design",
      school: "University of Arts",
      year: "2015"
    },
    {
      degree: "Certificate in Web Development",
      school: "Tech Institute",
      year: "2016"
    }
  ])

  const [skills, setSkills] = useState([
    { name: "Graphic Design", level: 90 },
    { name: "Video Editing", level: 85 },
    { name: "Web Development", level: 80 },
    { name: "UI/UX Design", level: 75 },
    { name: "Adobe Creative Suite", level: 95 },
    { name: "Final Cut Pro", level: 85 },
    { name: "React", level: 80 },
    { name: "Next.js", level: 75 }
  ])

  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [editSection, setEditSection] = useState("")

  const handleEdit = (section: string) => {
    setEditSection(section)
    setIsEditModalOpen(true)
  }

  const handleSave = (section: string, data: any) => {
    switch (section) {
      case "personal":
        setPersonalInfo(prevInfo => ({ ...prevInfo, ...data }))
        break
      case "experience":
        setExperiences(prevExperiences => {
          const updatedExperiences = [...prevExperiences]
          updatedExperiences[data.index] = data
          return updatedExperiences
        })
        break
      case "education":
        setEducation(prevEducation => {
          const updatedEducation = [...prevEducation]
          updatedEducation[data.index] = data
          return updatedEducation
        })
        break
      case "skills":
        setSkills(prevSkills => {
          const updatedSkills = [...prevSkills]
          updatedSkills[data.index] = data
          return updatedSkills
        })
        break
    }
    setIsEditModalOpen(false)
  }

  return (
    <>
      <ParallaxHeader />
      <div className="container my-5">
        <PersonalInfo 
          name={personalInfo.name}
          title={personalInfo.title}
          email={personalInfo.email}
          phone={personalInfo.phone}
          onEdit={() => handleEdit("personal")} 
        />
        <InteractiveTimeline items={experiences} />
        <Education 
          education={education}
          onEdit={() => handleEdit("education")} 
        />
        <Skills 
          skills={skills}
          onEdit={() => handleEdit("skills")} 
        />
        <AnimatedSkillBars skills={skills} />
        <Portfolio />
        <SocialLinks />

        {isEditModalOpen && (
          <EditModal
            section={editSection}
            onSave={handleSave}
            onClose={() => setIsEditModalOpen(false)}
          />
        )}
      </div>
    </>
  )
}