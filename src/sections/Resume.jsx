import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaDownload } from 'react-icons/fa'
import MagneticButton from '../components/MagneticButton'

const Resume = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/AbhishekDongare_CV.pdf'
    link.download = 'AbhishekDongare_CV.pdf'
    link.click()
  }

  return (
    <section id="resume" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="text-gradient">Resume</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-300 mb-8"
          >
            Download a detailed PDF version of my resume for full education, certifications, and experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <MagneticButton
              id="download-resume"
              onClick={handleDownload}
              className="px-8 py-4 bg-primary hover:bg-primary-dark rounded-lg text-white font-semibold flex items-center gap-3 mx-auto"
            >
              <FaDownload />
              Download Resume
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume

