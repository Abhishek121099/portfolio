import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { FaMoon, FaSun, FaDownload } from 'react-icons/fa'
import './Navbar.css'

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

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    section?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleResumeDownload = () => {
    const link = document.createElement('a')
    link.href = '/AbhishekDongare_CV.pdf'
    link.download = 'AbhishekDongare_CV.pdf'
    link.click()
  }

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="nav-content">
          <div className="nav-logo" onClick={() => scrollToSection('hero')}>
            <span className="logo-gradient">Abhishek</span>
          </div>
          <ul className="nav-links">
            <li onClick={() => scrollToSection('about')}>About</li>
            <li onClick={() => scrollToSection('projects')}>Projects</li>
            <li onClick={() => scrollToSection('skills')}>Skills</li>
            <li onClick={() => scrollToSection('experience')}>Experience</li>
            <li onClick={() => scrollToSection('design-sprints')}>Design Sprints</li>
            <li onClick={() => scrollToSection('contact')}>Contact</li>
          </ul>
          <div className="nav-actions">
            <motion.button
              className="theme-toggle"
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </motion.button>
            <motion.button
              className="resume-btn"
              onClick={handleResumeDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload />
              <span className="resume-text">Resume</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar

