import React from 'react'
import { NavigationContext } from '../../context/navigation'

interface Props {
  children: React.JSX.Element[]
}
class Switch extends React.Component<Props> {
  static contextType = NavigationContext
  declare context: React.ContextType<typeof NavigationContext>

  render(): React.ReactNode {
    const { navigationPath } = this.context

    let isRender = false

    return this.props.children.map((node, index) => {
      const actualPath = node.props.path === navigationPath
      const notFound = this.props.children.length - 1 === index && !isRender

      if (actualPath || notFound) {
        isRender = true
        return node
      }
    })
  }
}

export default Switch
