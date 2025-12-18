import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { skills } from '../data/skills'
import TiltCard from '../components/TiltCard'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillGroups = [
    { key: 'frontend', icon: '💻' },
    { key: 'uiux', icon: '🎨' },
    { key: 'tools', icon: '🛠️' },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-900/50">
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
            <span className="text-gradient">Skills</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
            {skillGroups.map((group, groupIndex) => {
              const skillData = skills[group.key]
              return (
                <motion.div
                  key={group.key}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.3 + groupIndex * 0.1 }}
                >
                  <TiltCard intensity={8}>
                    <div className="glass p-6 rounded-2xl h-full flex flex-col">
                      <div className="text-4xl mb-4">{group.icon}</div>
                      <h3 className="text-xl font-semibold mb-4 text-primary-light">
                        {skillData.title}
                      </h3>
                      <ul className="space-y-2">
                        {skillData.items.map((skill, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                            transition={{ duration: 0.4, delay: 0.5 + groupIndex * 0.1 + index * 0.05 }}
                            className="text-gray-300 flex items-center gap-2"
                          >
                            <span className="text-primary">▹</span>
                            {skill}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </TiltCard>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

