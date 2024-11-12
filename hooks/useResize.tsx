import { useState, useEffect } from 'react'

export const useResize = () => {
  const [width, setWidth] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setWidth(window.innerWidth)
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    window.innerWidth > 768 ? setIsMobile(false) : setIsMobile(true)
  }, [])

  return {
    width,
    isMobile,
  }
}
