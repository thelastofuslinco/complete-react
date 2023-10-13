import Link from '../Link'
import { SidebarContainer } from './style'

const Sidebar = ({ links }) => {
  return (
    <SidebarContainer>
      {links.map((link) => {
        const capitalizedLabel =
          link.label.charAt(0).toUpperCase() + link.label.slice(1)

        return (
          <Link to={link.to} key={link.label}>
            {capitalizedLabel}
          </Link>
        )
      })}
    </SidebarContainer>
  )
}

export default Sidebar
