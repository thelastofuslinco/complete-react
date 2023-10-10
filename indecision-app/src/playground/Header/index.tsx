import React from 'react'
import { HeaderContainer } from './styles'
interface Props {}
interface State {}

class Header extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render(): React.ReactNode {
    return (
      <HeaderContainer>
        <h1>Indecision app</h1>
        <span>Put your life in the hands of a computer</span>
      </HeaderContainer>
    )
  }
}

export default Header
