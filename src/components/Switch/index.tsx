import { JSX, Component, ContextType } from 'react'
import { NavigationContext } from '../../context/navigation'

interface Props {
  children: JSX.Element[]
}
class Switch extends Component<Props> {
  static contextType = NavigationContext
  declare context: ContextType<typeof NavigationContext>

  render() {
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
