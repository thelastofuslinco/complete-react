interface Props {
  title: string
  subtitle: string
}

const Header = ({ title, subtitle }: Props) => {
  return (
    <header className="header_container">
      <h1>{title}</h1>
      <span>{subtitle}</span>
    </header>
  )
}

export default Header
