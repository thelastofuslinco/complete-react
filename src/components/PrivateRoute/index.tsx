import { Component, ContextType, ReactNode } from 'react'
import Route from '../Route'
import { ConnectedProps, connect } from 'react-redux'
import { RootState } from '../../store'
import { NavigationContext } from '../../context/navigation'

interface State {}

interface Props extends PropsFromRedux {
  path: string
  children: ReactNode
  private?: boolean
}

class PrivateRoute extends Component<Props, State> {
  static contextType = NavigationContext
  declare context: ContextType<typeof NavigationContext>

  isAuthenticated() {
    if (!this.props.user) {
      this.context.navigate('/')
    }
  }

  componentDidMount(): void {
    this.isAuthenticated()
  }

  componentDidUpdate(): void {
    this.isAuthenticated()
  }

  render(): ReactNode {
    return <Route {...this.props} />
  }
}

const conector = connect((state: RootState) => state.user)

type PropsFromRedux = ConnectedProps<typeof conector>

export default conector(PrivateRoute)
