import { NavigationContext } from '../../context/navigation'
import React from 'react'
interface Props {
  path: string
  children: React.ReactNode
}

class Route extends React.Component<Props> {
  static contextType = NavigationContext
  declare context: React.ContextType<typeof NavigationContext>

  render() {
    const { navigationPath } = this.context

    if (this.props.path === navigationPath) return this.props.children

    return null
  }
}

export default Route
