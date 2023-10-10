import useNavigation from '../../hooks/useNavigation'

interface Props {
  path: string
  children: React.ReactNode
}

const Route = ({ path, children }: Props) => {
  const { navigationPath } = useNavigation()

  if (path === navigationPath) return children

  return null
}

export default Route
