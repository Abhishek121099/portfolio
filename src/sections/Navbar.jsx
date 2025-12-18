import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaMoon, FaSun, FaDownload } from 'react-icons/fa'
import { useTheme } from '../hooks/useTheme'
import MagneticButton from '../components/MagneticButton'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'design-sprints', label: 'Design Sprints' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-strong py-3 shadow-lg' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <motion.button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold text-gradient cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            Abhishek
          </motion.button>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-gray-300 hover:text-primary-light transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-light group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <MagneticButton
              onClick={toggleTheme}
              className="p-2 glass rounded-lg text-primary-light hover:text-primary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
            </MagneticButton>
            <MagneticButton
              onClick={handleResumeDownload}
              className="px-4 py-2 glass rounded-lg text-sm font-medium text-gray-100 hover:text-primary-light transition-colors flex items-center gap-2"
            >
              <FaDownload size={14} />
              <span className="hidden sm:inline">Resume</span>
            </MagneticButton>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar

