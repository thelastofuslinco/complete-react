import useNavigation from '../../hooks/useNavigation'
import { LinkContainer } from './styles'

const Link = ({ to, children }) => {
  const { navigate, navigationPath } = useNavigation()

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) return
    event.preventDefault()
    navigate(to)
  }

  return (
    <LinkContainer
      $location={navigationPath === to}
      onClick={handleClick}
      href={to}
    >
      {children}
    </LinkContainer>
  )
}

export default Link
