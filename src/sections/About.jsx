import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import TiltCard from '../components/TiltCard'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [imageError, setImageError] = useState(false)

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            <span className="text-gradient">About Me</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass p-8 rounded-2xl h-full flex flex-col justify-center"
            >
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                I'm a Front-End Developer with a Master's degree in Information Technology and hands-on experience building responsive, user-focused web applications using React, JavaScript, HTML, and CSS.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                I enjoy turning ideas into clean, intuitive interfaces, improving user experience through thoughtful UI/UX design, and building scalable front-end components. I've worked on real-world projects including appointment management systems, analytics dashboards, and WordPress-based platforms.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center"
            >
              <TiltCard intensity={10}>
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/50">
                  {!imageError ? (
                    <img
                      src="/images/HeadshotPro Avatar 2025-02-12T03-18-46-122Z.png"
                      alt="Abhishek Dongare"
                      className="w-full h-full object-cover"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <span className="text-6xl font-bold text-white">A</span>
                    </div>
                  )}
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

