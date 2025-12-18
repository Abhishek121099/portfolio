import { motion } from 'framer-motion'
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaFigma } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    projectsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const floatingIcons = [
    { Icon: FaReact, delay: 0, x: '10%', y: '20%' },
    { Icon: FaJs, delay: 0.2, x: '80%', y: '30%' },
    { Icon: FaHtml5, delay: 0.4, x: '20%', y: '70%' },
    { Icon: FaCss3Alt, delay: 0.6, x: '70%', y: '60%' },
    { Icon: FaFigma, delay: 0.8, x: '50%', y: '10%' }
  ]

  return (
    <section id="hero" className="hero section">
      <div className="floating-icons">
        {floatingIcons.map((item, idx) => (
          <motion.div
            key={idx}
            className="floating-icon"
            style={{ left: item.x, top: item.y }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 4 + idx,
              repeat: Infinity,
              delay: item.delay,
              ease: 'easeInOut'
            }}
          >
            <item.Icon />
          </motion.div>
        ))}
      </div>
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="hero-headline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm <span className="gradient-text">Abhishek</span> — I build clean, responsive web apps.
          </motion.h1>
          <motion.p
            className="hero-subheadline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Front-End Developer | React | JavaScript | UI/UX
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              className="cta-button primary"
              onClick={scrollToProjects}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 245, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.button>
            <motion.button
              className="cta-button secondary"
              onClick={scrollToContact}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(124, 58, 237, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

