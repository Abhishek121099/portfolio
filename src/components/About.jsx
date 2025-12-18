import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import './About.css'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [imageError, setImageError] = useState(false)

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          ref={ref}
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="about-wrapper">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="about-bio">
                I'm a Junior Front-End Developer based in Brisbane with a Master's in IT from James Cook University. I build user-friendly, accessible, and responsive web apps using React, JavaScript, HTML, CSS, and WordPress. I enjoy designing clean UIs, working on real-world problems, and constantly learning new tools.
              </p>
            </motion.div>
            <motion.div
              className="about-avatar"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="avatar-container">
                {!imageError ? (
                  <img 
                    src="/images/HeadshotPro Avatar 2025-02-12T03-18-46-122Z.png" 
                    alt="Abhishek - Front-End Developer"
                    className="about-image"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="avatar-placeholder">
                    <span className="avatar-initials">A</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

