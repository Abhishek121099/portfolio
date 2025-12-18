import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'VetConnect',
    description: 'A comprehensive veterinary management platform with authentication and dashboard UI.',
    tech: ['React', 'Vite', 'Auth', 'Dashboard UI'],
    liveDemo: 'https://vetconnectapp.netlify.app',
    github: 'https://github.com/abhishek/vetconnect',
    features: [
      'Appointment booking system',
      'Pet profile management',
      'Interactive dashboard UI',
      'User login and authentication'
    ]
  },
  {
    id: 2,
    title: 'E-Commerce Analytics Dashboard',
    description: 'Data visualization dashboard for e-commerce analytics with advanced filtering.',
    tech: ['React', 'Chart.js', 'API', 'Filtering'],
    liveDemo: 'https://ecommerce-analytics-dashboard.netlify.app',
    github: 'https://github.com/abhishek/ecommerce-analytics',
    features: [
      'Funnel & conversion tracking',
      'Dynamic filters and search',
      'Real-time data visualization',
      'Interactive charts with Chart.js'
    ]
  }
]

const ProjectCard = ({ project, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <>
      <motion.div
        ref={ref}
        className="project-card"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        onClick={() => setIsModalOpen(true)}
        whileHover={{ scale: 1.03, y: -5 }}
      >
        <div className="project-card-content">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-tech">
            {project.tech.map((tech, idx) => (
              <span key={idx} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
          <button className="project-view-btn">View Details</button>
        </div>
      </motion.div>

      {isModalOpen && (
        <ProjectModal project={project} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  )
}

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      className="modal-overlay"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
      >
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <h2 className="modal-title">{project.title}</h2>
        <p className="modal-description">{project.description}</p>
        <div className="modal-features">
          <h3>Features:</h3>
          <ul>
            {project.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="modal-tech">
          <h3>Technologies:</h3>
          <div className="tech-tags">
            {project.tech.map((tech, idx) => (
              <span key={idx} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="modal-links">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-link live-demo"
          >
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-link github"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

