import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { projects } from '../data/projects'
import TiltCard from '../components/TiltCard'
import MagneticButton from '../components/MagneticButton'
import ProjectModal from '../components/ProjectModal'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            <span className="text-gradient">Projects</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              >
                <TiltCard intensity={12}>
                  <div 
                    data-project-card="true"
                    className="glass p-6 rounded-2xl h-full flex flex-col cursor-pointer hover:bg-white/10 transition-colors"
                    onClick={() => setSelectedProject(project)}
                  >
                    <h3 className="text-2xl font-bold mb-3 text-primary-light">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary/20 text-primary-light rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4 flex-grow">
                      {project.description[0]}
                    </p>
                    <div className="flex gap-3 mt-auto">
                      <MagneticButton
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(project.liveLink, '_blank')
                        }}
                        className="flex-1 px-4 py-2 bg-primary hover:bg-primary-dark rounded-lg text-white font-medium flex items-center justify-center gap-2"
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </MagneticButton>
                      <MagneticButton
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(project.githubLink, '_blank')
                        }}
                        className="flex-1 px-4 py-2 glass rounded-lg text-gray-100 font-medium flex items-center justify-center gap-2 hover:bg-white/10"
                      >
                        <FaGithub />
                        GitHub
                      </MagneticButton>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

export default Projects

