import { Component, ReactNode } from 'react'
import Link from '../Link'
import { ConnectedProps, connect } from 'react-redux'
import { RootState, logOut } from '../../store'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'

interface State {}
interface Props extends PropsFromRedux {
  links: Array<{ label: string; to: string }>
}
class Sidebar extends Component<Props, State> {
  signOutApp = async () => {
    await signOut(auth)
    this.props.logOut()
  }

  render(): ReactNode {
    return (
      <section className="sidebar_container">
        <button onClick={this.signOutApp}>signOut</button>
        {this.props.links.map((link) => {
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
}

const conector = connect((state: RootState) => state.user, {
  logOut
})

type PropsFromRedux = ConnectedProps<typeof conector>

export default conector(Sidebar)
