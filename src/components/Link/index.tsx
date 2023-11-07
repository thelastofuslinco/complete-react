import { ReactNode, Component, ContextType } from 'react'
import { NavigationContext } from '../../context/navigation'

interface Props {
  to: string
  children: ReactNode
}
class Link extends Component<Props> {
  static contextType = NavigationContext
  declare context: ContextType<typeof NavigationContext>

  handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) return
    event.preventDefault()
    this.context.navigate(this.props.to)
  }

  render() {
    return (
      <a
        className={`link_container ${
          this.context.navigationPath === this.props.to && 'active'
        }`}
        onClick={this.handleClick}
        href={this.props.to}
      >
        {this.props.children}
      </a>
    )
  }
}

export default Link
