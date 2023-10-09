import { useEffect, useRef, useState } from 'react'
import { NavigationContainer, NavigationItem } from './styles'
import { GoPlay } from 'react-icons/go'

const Navigation = () => {
  const navigationRef = useRef(null)
  const [active, setActive] = useState<boolean>(false)

  const handleClick = (event) => {
    if (active) {
      event.stopPropagation()
    }
  }

  useEffect(() => {
    const handler = (event) => {
      if (!navigationRef.current) return
      if (!navigationRef.current.contains(event.target)) setActive(false)
    }

    document.addEventListener('click', handler, true)

    return () => document.removeEventListener('click', handler)
  }, [])

  const navigationItems = Array(9)
    .fill('')
    .map((item, index) => {
      const calc = 'calc(100% - 1rem - 2rem)'
      let $location
      if (index === 0) {
        $location = 'left: 1rem; top: 1rem;'
      } else if (index === 1) {
        $location = 'top: 1rem;'
      } else if (index === 2) {
        $location = `left: ${calc}; top: 1rem;`
      } else if (index === 3) {
        $location = `left: ${calc};`
      } else if (index === 5) {
        $location = 'left: 1rem;'
      } else if (index === 6) {
        $location = `left: 1rem; top: ${calc};`
      } else if (index === 7) {
        $location = `top: ${calc};`
      } else if (index === 8) {
        $location = `left: ${calc}; top: ${calc};`
      }

      return (
        <NavigationItem
          key={index}
          className={active && 'active'}
          $location={$location}
          onClick={handleClick}
        >
          <GoPlay />
        </NavigationItem>
      )
    })

  return (
    <NavigationContainer
      ref={navigationRef}
      className={active && 'active'}
      onClick={() => setActive((prevState) => !prevState)}
    >
      {navigationItems.map((item) => item)}
    </NavigationContainer>
  )
}

export default Navigation
