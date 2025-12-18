import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { experience } from '../data/experience'
import { FaBriefcase } from 'react-icons/fa'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-20 bg-gray-900/50">
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
            <span className="text-gradient">Experience</span>
          </motion.h2>

          <div className="max-w-6xl mx-auto space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                className="relative"
              >
                <div className="glass p-6 rounded-2xl relative pl-12 md:pl-16">
                  <div className="absolute left-6 top-6">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <FaBriefcase className="text-primary-light" size={20} />
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary-light mb-1">
                        {exp.position}
                      </h3>
                      <p className="text-xl text-gray-300 mb-2">{exp.company}</p>
                    </div>
                    <div className="text-left md:text-right">
                      <p className="text-gray-400 text-sm mb-1">{exp.period}</p>
                      <p className="text-gray-500 text-sm">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mt-4">
                    {exp.responsibilities.map((resp, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.2 + idx * 0.1 }}
                        className="text-gray-300 flex items-start gap-2"
                      >
                        <span className="text-primary mt-1.5">▹</span>
                        <span>{resp}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

