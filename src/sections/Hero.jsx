import { motion } from 'framer-motion'
import { FaArrowDown, FaDownload, FaEnvelope } from 'react-icons/fa'
import MagneticButton from '../components/MagneticButton'
import TechBackground from '../components/TechBackground'

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleResumeDownload = () => {
    const link = document.createElement('a')
    link.href = '/AbhishekDongare_CV.pdf'
    link.download = 'AbhishekDongare_CV.pdf'
    link.click()
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <TechBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-gradient"
          >
            Front-End Developer building clean, responsive React applications
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-4"
          >
            Master's in Information Technology | React • JavaScript • UI/UX • WordPress
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto"
          >
            I design and build interactive, user-focused web experiences with modern front-end technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <MagneticButton
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-primary hover:bg-primary-dark rounded-lg text-white font-semibold flex items-center gap-2 transition-colors"
            >
              View Projects
              <FaArrowDown />
            </MagneticButton>
            
            <MagneticButton
              id="download-resume"
              onClick={handleResumeDownload}
              className="px-8 py-4 glass rounded-lg text-gray-100 font-semibold flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              <FaDownload />
              Download Resume
            </MagneticButton>
            
            <MagneticButton
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 glass rounded-lg text-gray-100 font-semibold flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              <FaEnvelope />
              Contact Me
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-20"
          >
            <motion.button
              onClick={() => scrollToSection('about')}
              className="text-gray-500 hover:text-primary-light transition-colors"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaArrowDown size={24} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

