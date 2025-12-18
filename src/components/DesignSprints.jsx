import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import './DesignSprints.css'

const sprintImages = [
  {
    id: 1,
    src: '/images/ebd16608-52da-487f-9ca2-8b7da5c4aaf5.jpg',
    alt: 'Design Sprint Presentation - The Masterminds',
    title: 'Design Sprint Presentation',
    description: 'Presenting design solutions during a collaborative sprint session'
  },
  {
    id: 2,
    src: '/images/346816285_905071400551882_5363126743439029711_n.jpg',
    alt: 'Design Sprint Team - Group of six diverse team members',
    title: 'Design Sprint Team',
    description: 'Working with a diverse team of designers and developers'
  },
  {
    id: 3,
    src: '/images/346456059_565180138837821_6511002244991400697_n.jpg',
    alt: 'Design Sprint Group Photo - Large group of participants',
    title: 'Design Sprint Participants',
    description: 'Collaborative design sprint with multiple participants'
  }
]

const DesignSprints = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section id="design-sprints" className="design-sprints section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Design Sprints</h2>
          <p className="section-subtitle">Collaborative design thinking and problem-solving sessions</p>
          
          <div className="sprints-grid">
            {sprintImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="sprint-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedImage(image)}
              >
                <div className="sprint-image-wrapper">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="sprint-image"
                    onError={(e) => {
                      const wrapper = e.target.parentElement;
                      if (wrapper) {
                        wrapper.innerHTML = `
                          <div style="display: flex; align-items: center; justify-content: center; height: 100%; background: var(--bg-tertiary); color: var(--text-secondary);">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                              <circle cx="8.5" cy="8.5" r="1.5"/>
                              <polyline points="21 15 16 10 5 21"/>
                            </svg>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
                <div className="sprint-info">
                  <h3 className="sprint-title">{image.title}</h3>
                  <p className="sprint-description">{image.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {selectedImage && (
        <motion.div
          className="image-modal-overlay"
          onClick={() => setSelectedImage(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <button 
              className="modal-close-btn"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="modal-image"
            />
            <div className="modal-caption">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default DesignSprints

