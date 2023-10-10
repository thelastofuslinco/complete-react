import React from 'react'
import Template from '../Template'
import Counter from '../Counter'
import Form from '../Form'
import List from '../List'

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
