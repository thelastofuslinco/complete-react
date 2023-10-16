import { useContext } from 'react'
import { NavigationContext } from '../context/navigation'

const useNavigation = () => {
  const context = useContext(NavigationContext)
  return context
}

export default useNavigation
