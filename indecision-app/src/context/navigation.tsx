import { useEffect, useState, createContext, useMemo } from 'react'

const NavigationContext = createContext({
  navigationPath: '',
  navigate: (value: string) => {}
})

const NavigationProvider = ({ children }) => {
  const [navigationPath, setNavigationPath] = useState(window.location.pathname)

  useEffect(() => {
    const handle = () => {
      setNavigationPath(window.location.pathname)
    }

    window.addEventListener('popstate', handle)

    return () => {
      window.removeEventListener('popstate', handle)
    }
  }, [])

  const navigate = (to) => {
    window.history.pushState({}, '', to)
    setNavigationPath(to)
  }

  const value = useMemo(() => ({ navigationPath, navigate }), [navigationPath])

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  )
}

export { NavigationProvider, NavigationContext as default }
