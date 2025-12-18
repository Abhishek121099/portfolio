import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './Experience.css'

const experiences = [
  {
    id: 1,
    company: 'SK Precision LLP',
    position: 'Junior Web Developer',
    period: 'Aug 2025 – Present',
    description: 'Worked on WordPress-based tools, UI updates, forms, and layout improvements.',
    technologies: ['WordPress', 'HTML', 'CSS', 'JavaScript', 'PHP']
  },
  {
    id: 2,
    company: 'TechSolutions IT Services',
    position: 'Intern',
    period: 'Jun 2020 – Dec 2020',
    description: 'Created HTML/CSS/JS pages, helped test websites, assisted with debugging.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Testing', 'Debugging']
  }
]

const ExperienceCard = ({ experience, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      className="experience-card"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <div className="experience-header">
        <div>
          <h3 className="experience-position">{experience.position}</h3>
          <p className="experience-company">{experience.company}</p>
        </div>
        <span className="experience-period">{experience.period}</span>
      </div>
      <p className="experience-description">{experience.description}</p>
      <div className="experience-tech">
        {experience.technologies.map((tech, idx) => (
          <span key={idx} className="tech-badge">{tech}</span>
        ))}
      </div>
    </motion.div>
  )
}

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">My professional journey</p>
          <div className="experience-timeline">
            {experiences.map((experience, index) => (
              <ExperienceCard key={experience.id} experience={experience} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

