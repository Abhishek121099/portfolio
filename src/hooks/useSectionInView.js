import { useEffect, useState } from 'react'

export function useSectionInView(sectionId, threshold = 0.35) {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const section = document.getElementById(sectionId)
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting && entry.intersectionRatio >= threshold)
      },
      { threshold }
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [sectionId, threshold])

  return isInView
}

