import React from 'react'
import { LinkContainer } from './styles'
import { NavigationContext } from '../../context/navigation'

interface Props {
  to: string
  children: React.ReactNode
}
class Link extends React.Component<Props> {
  static contextType = NavigationContext
  declare context: React.ContextType<typeof NavigationContext>

  handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) return
    event.preventDefault()
    this.context.navigate(this.props.to)
  }

  render() {
    return (
      <LinkContainer
        $location={this.context.navigationPath === this.props.to}
        onClick={this.handleClick}
        href={this.props.to}
      >
        {this.props.children}
      </LinkContainer>
    )
  }
}

export default Link
