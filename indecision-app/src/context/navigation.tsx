import React from 'react'

const NavigationContext = React.createContext({
  navigationPath: '',
  navigate: (value: string) => {}
})

interface State {
  navigationPath: string
}
interface Props {
  children: React.ReactNode
}
class NavigationProvider extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.navigate = this.navigate.bind(this)

    this.state = {
      navigationPath: window.location.pathname
    }
  }

  componentDidMount() {
    const handle = () => {
      this.setState({ navigationPath: window.location.pathname })
    }

    window.addEventListener('popstate', handle)

    return () => {
      window.removeEventListener('popstate', handle)
    }
  }

  navigate = (to) => {
    window.history.pushState({}, '', to)

    this.setState({ navigationPath: to })
  }

  render(): React.ReactNode {
    return (
      <NavigationContext.Provider
        value={{
          navigationPath: this.state.navigationPath,
          navigate: this.navigate
        }}
      >
        {this.props.children}
      </NavigationContext.Provider>
    )
  }
}

export { NavigationContext, NavigationProvider as default }
