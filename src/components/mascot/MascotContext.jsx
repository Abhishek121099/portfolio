import { createContext, useContext, useState, useCallback } from 'react'

const MascotContext = createContext(null)

export function MascotProvider({ children }) {
  const [state, setState] = useState('idle')
  const [message, setMessage] = useState('')
  const [targetElement, setTargetElement] = useState(null)

  const say = useCallback((text, durationMs = 2000) => {
    setMessage(text)
    setState('sayMessage')
    setTimeout(() => {
      setMessage('')
      setState('idle')
    }, durationMs)
  }, [])

  const wave = useCallback(() => {
    setState('wave')
    setTimeout(() => {
      setState('idle')
    }, 2000)
  }, [])

  const celebrate = useCallback(() => {
    setState('celebrate')
    setTimeout(() => {
      setState('idle')
    }, 800)
  }, [])

  const moveToElement = useCallback((element) => {
    if (element) {
      setTargetElement(element)
      setState('moveToTarget')
    }
  }, [])

  const resetToHome = useCallback(() => {
    setTargetElement(null)
    setState('idle')
  }, [])

  return (
    <MascotContext.Provider
      value={{
        state,
        message,
        targetElement,
        say,
        wave,
        celebrate,
        moveToElement,
        resetToHome,
      }}
    >
      {children}
    </MascotContext.Provider>
  )
}

export function useMascot() {
  const context = useContext(MascotContext)
  if (!context) {
    throw new Error('useMascot must be used within MascotProvider')
  }
  return context
}

