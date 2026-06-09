import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollManager() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'auto' })
      return
    }

    const element = document.querySelector(hash)
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [hash, pathname])

  return null
}

export default ScrollManager
