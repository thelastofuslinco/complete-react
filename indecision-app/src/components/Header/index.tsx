import { HeaderContainer } from './styles'

interface Props {
  title: string
  subtitle: string
}

const Header = ({ title, subtitle }: Props) => {
  return (
    <HeaderContainer>
      <h1>{title}</h1>
      <span>{subtitle}</span>
    </HeaderContainer>
  )
}

export default Header
