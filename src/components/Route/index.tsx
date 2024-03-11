import { NavigationContext } from '../../context/navigation'
import { ReactNode, Component, ContextType, Suspense } from 'react'
import Loading from '../Loading'
interface Props {
  path: string
  children: ReactNode
}

class Route extends Component<Props> {
  static contextType = NavigationContext
  declare context: ContextType<typeof NavigationContext>

  render() {
    const { navigationPath } = this.context
    const matchPath = navigationPath.includes(this.props.path)
    const everyPath = this.props.path.includes('*')
    const condition = matchPath || everyPath

    if (condition) {
      return (
        <Suspense fallback={<Loading className="loadingContainer" />}>
          {this.props.children}
        </Suspense>
      )
    }
  }
}

export default Route
