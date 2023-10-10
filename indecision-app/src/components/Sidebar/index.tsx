import Link from '../Link'
import { SidebarContainer } from './style'

const Sidebar = ({ links }) => {
  return (
    <SidebarContainer>
      {links.map((link) => (
        <Link to={link.to} key={link.label}>
          {link.label}
        </Link>
      ))}
    </SidebarContainer>
  )
}

export default Sidebar
