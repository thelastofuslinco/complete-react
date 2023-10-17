import React from 'react'
import Counter from '../../components/Counter'

interface Props {}

interface State {
  options: Array<string>
  selectedOption: number
}

class Playground extends React.Component<Props, State> {
  render() {
    return (
      <div style={{ padding: '1rem' }}>
        <Counter message="simple message" />
      </div>
    )
  }
}

export default Playground
