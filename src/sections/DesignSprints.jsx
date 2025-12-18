import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { designSprints } from '../data/sprints'
import TiltCard from '../components/TiltCard'

const DesignSprints = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section id="design-sprints" className="py-20">
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
            <span className="text-gradient">Design Sprints</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
            {designSprints.map((sprint, index) => (
              <motion.div
                key={sprint.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              >
                <TiltCard intensity={10}>
                  <div className="glass p-6 rounded-2xl h-full flex flex-col">
                    <h3 className="text-2xl font-bold mb-3 text-primary-light">
                      {sprint.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{sprint.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      {sprint.contributions.map((cont, idx) => (
                        <p key={idx} className="text-gray-400 text-sm flex items-center gap-2">
                          <span className="text-primary">▹</span>
                          {cont}
                        </p>
                      ))}
                    </div>

                    {sprint.images && sprint.images.length > 0 && (
                      <div className="grid grid-cols-2 gap-2 mt-4">
                        {sprint.images.map((img, idx) => (
                          <div
                            key={idx}
                            onClick={() => setSelectedImage(img)}
                            className="aspect-video rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity bg-gray-800"
                          >
                            <img
                              src={img}
                              alt={`${sprint.title} - Image ${idx + 1}`}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.style.display = 'none'
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            src={selectedImage}
            alt="Design Sprint"
            className="max-w-full max-h-[90vh] rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  )
}

export default DesignSprints

