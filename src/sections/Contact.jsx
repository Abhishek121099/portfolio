import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import MagneticButton from '../components/MagneticButton'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setShowSuccess(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setShowSuccess(false), 3000)
    }, 1000)
  }

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Abhishek121099', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/abhishek-dongare-3404331ab', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:abhishekdongare99@gmail.com', label: 'Email' },
  ]

  return (
    <section id="contact" className="py-20">
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
            <span className="text-gradient">Get In Touch</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="glass p-8 rounded-2xl h-full">
                <h3 className="text-2xl font-semibold mb-6 text-primary-light">Contact Information</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Email</p>
                    <a
                      href="mailto:abhishekdongare99@gmail.com"
                      className="text-gray-200 hover:text-primary-light transition-colors"
                    >
                      abhishekdongare99@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-4">Connect with me</p>
                    <div className="flex gap-4">
                      {socialLinks.map((social, idx) => (
                        <MagneticButton
                          key={idx}
                          onClick={() => window.open(social.href, '_blank')}
                          className="p-3 glass rounded-lg hover:bg-white/10 transition-colors"
                          aria-label={social.label}
                        >
                          <social.icon size={20} className="text-primary-light" />
                        </MagneticButton>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl h-full flex flex-col">
                <div className="space-y-4 flex-grow">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg text-gray-100 focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg text-gray-100 focus:outline-none focus:border-primary transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg text-gray-100 focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  <MagneticButton
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-primary hover:bg-primary-dark rounded-lg text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </MagneticButton>
                  {showSuccess && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-400 text-sm text-center"
                    >
                      Message sent successfully!
                    </motion.p>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

