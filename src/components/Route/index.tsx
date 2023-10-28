import { NavigationContext } from '../../context/navigation'
import React from 'react'
import Loading from '../Loading'
interface Props {
  path: string
  children: React.ReactNode
}

class Route extends React.Component<Props> {
  static contextType = NavigationContext
  declare context: React.ContextType<typeof NavigationContext>

  render() {
    const { navigationPath } = this.context
    const matchPath = this.props.path === navigationPath
    const everyPath = this.props.path.includes('*')

    if (matchPath || everyPath) {
      return (
        <React.Suspense fallback={<Loading className="loadingContainer" />}>
          {this.props.children}
        </React.Suspense>
      )
    }
  }
}

export default Route
