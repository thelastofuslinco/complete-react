import Link from '../Link'

const Sidebar = ({ links }) => {
  return (
    <section className="sidebar_container">
      {links.map((link) => {
        const capitalizedLabel =
          link.label.charAt(0).toUpperCase() + link.label.slice(1)

        return (
          <Link to={link.to} key={link.label}>
            {capitalizedLabel}
          </Link>
        )
      })}
    </section>
  )
}

export default Sidebar
