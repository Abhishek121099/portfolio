import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useMascot } from './MascotContext'
import { useSectionInView } from '../../hooks/useSectionInView'
import Mascot3D from './Mascot3D'

export default function MascotController() {
  const { state, message, targetElement, say, wave, celebrate, moveToElement, resetToHome } = useMascot()
  const isProjectsInView = useSectionInView('projects', 0.35)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Hide on mobile
  if (isMobile) {
    return null
  }

  // Home position (top-right of hero)
  const homePosition = { x: 0, y: 0 }

  // Update position when target element changes
  useEffect(() => {
    if (targetElement && state === 'moveToTarget') {
      const updatePosition = () => {
        const rect = targetElement.getBoundingClientRect()
        const viewportWidth = window.innerWidth
        const viewportHeight = window.innerHeight
        
        // Calculate position relative to viewport (fixed positioning)
        // Position mascot to the right of the card
        const cardRight = rect.right
        const cardTop = rect.top
        const cardHeight = rect.height
        
        // Position mascot to the right side of the card, vertically centered
        setPosition({
          x: cardRight - viewportWidth + 150, // 150px offset from right edge
          y: cardTop + cardHeight / 2 - viewportHeight + 100, // Center vertically on card
        })
      }

      updatePosition()
      const scrollHandler = () => requestAnimationFrame(updatePosition)
      const resizeHandler = () => requestAnimationFrame(updatePosition)

      window.addEventListener('scroll', scrollHandler, true)
      window.addEventListener('resize', resizeHandler)

      return () => {
        window.removeEventListener('scroll', scrollHandler, true)
        window.removeEventListener('resize', resizeHandler)
      }
    } else if (state === 'idle' || !targetElement) {
      setPosition(homePosition)
    }
  }, [targetElement, state])

  // Trigger when projects section comes into view
  useEffect(() => {
    if (isProjectsInView) {
      say('Projects time 🚀', 2000)
      wave()
    }
  }, [isProjectsInView, say, wave])

  // Listen for download resume button clicks
  useEffect(() => {
    const downloadBtns = document.querySelectorAll('#download-resume')
    if (downloadBtns.length === 0) return

    const handleClick = () => {
      celebrate()
      say('Nice! 🚀', 1500)
    }

    downloadBtns.forEach((btn) => {
      btn.addEventListener('click', handleClick)
    })

    return () => {
      downloadBtns.forEach((btn) => {
        btn.removeEventListener('click', handleClick)
      })
    }
  }, [celebrate, say])

  // Listen for project card hovers
  useEffect(() => {
    const projectCards = document.querySelectorAll('[data-project-card="true"]')
    
    const handleMouseEnter = (e) => {
      const card = e.currentTarget
      moveToElement(card)
      say('Check this one 👀', 1500)
      wave()
    }

    const handleMouseLeave = () => {
      resetToHome()
    }

    projectCards.forEach((card) => {
      card.addEventListener('mouseenter', handleMouseEnter)
      card.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      projectCards.forEach((card) => {
        card.removeEventListener('mouseenter', handleMouseEnter)
        card.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [moveToElement, say, wave, resetToHome])

  return (
    <motion.div
      className="fixed top-20 right-5 z-40 pointer-events-none"
      initial={homePosition}
      animate={position}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="relative">
        <Mascot3D />
        
        {/* Speech Bubble */}
        <AnimatePresence>
          {message && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              className="absolute -top-16 left-1/2 -translate-x-1/2 whitespace-nowrap"
            >
              <div className="glass-strong px-4 py-2 rounded-lg shadow-lg border border-white/20">
                <p className="text-sm font-medium text-white">{message}</p>
                {/* Speech bubble tail */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white/10"></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Particle burst for celebrate */}
        {state === 'celebrate' && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary-light rounded-full"
                initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                animate={{
                  x: Math.cos((i / 8) * Math.PI * 2) * 40,
                  y: Math.sin((i / 8) * Math.PI * 2) * 40,
                  opacity: 0,
                  scale: 0,
                }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

