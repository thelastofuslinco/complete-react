import { Component, ContextType, ReactNode } from 'react'
import Route from '../Route'
import { ConnectedProps, connect } from 'react-redux'
import { RootState } from '../../store'
import { NavigationContext } from '../../context/navigation'

interface Props extends PropsFromRedux {
  path: string
  children: ReactNode
  private?: boolean
}

class PublicRoute extends Component<Props> {
  static contextType = NavigationContext
  declare context: ContextType<typeof NavigationContext>

  isAuthenticated() {
    if (this.props.user) {
      this.context.navigate('/home')
    }
  }

  componentDidMount(): void {
    this.isAuthenticated()
  }

  componentDidUpdate(): void {
    this.isAuthenticated()
  }

  render() {
    return <Route {...this.props} />
  }
}

const conector = connect((state: RootState) => state.user)

type PropsFromRedux = ConnectedProps<typeof conector>

export default conector(PublicRoute)
