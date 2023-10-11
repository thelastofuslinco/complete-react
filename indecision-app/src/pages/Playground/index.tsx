import React from 'react'
import Template from '../../components/Template'
import Counter from '../../components/Counter'

interface Props {}

interface State {
  options: Array<string>
  selectedOption: number
}

class Playground extends React.Component<Props, State> {
  constructor(params) {
    super(params)

    this.state = {
      options: [],
      selectedOption: null
    }
  }

  render() {
    return (
      <div style={{ padding: '1rem' }}>
        <Template />
        <Counter message="simple message" />
      </div>
    )
  }
}

export default Playground
