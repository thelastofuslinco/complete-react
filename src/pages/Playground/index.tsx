import React from 'react'
import { Unsubscribe } from '@reduxjs/toolkit'
import { ConnectedProps, connect } from 'react-redux'
import Counter from './components/Counter'
import Modal from '../../components/Modal'
import Navigation from '../../components/Navigation'
import {
  RootState,
  increment,
  incrementByAmount,
  store,
  addExpense
} from '../../store'

interface Props extends PropsFromRedux {}

interface State {
  open: boolean
  unsubscribe: Unsubscribe
}

class Playground extends React.Component<Props, State> {
  state = {
    open: false,
    unsubscribe: store.subscribe(() => {
      console.log(store.getState())
    })
  }

  componentDidMount(): void {
    this.props.increment()
    this.props.increment()
    this.props.incrementByAmount(10)
  }

  componentWillUnmount(): void {
    this.state.unsubscribe()
  }

  render() {
    console.log(this)

    return (
      <div className="pageContainer">
        <button onClick={() => this.setState({ open: true })}>
          Open modal
        </button>
        {this.props.counter.data}
        <button onClick={() => this.props.increment()}>click</button>
        <button
          onClick={() =>
            this.props.addExpense({
              id: '1',
              note: 'fsfsdfs',
              description: 'dsadsadasdsa',
              amount: 20,
              createdAt: new Date().toISOString()
            })
          }
        >
          click
        </button>

        <Counter message="simple message" />
        <Navigation />

        {Array(9)
          .fill('')
          .map((item, index) => (
            <p key={index}>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum. Why do we use it? It is a long
              established fact that a reader will be distracted by the readable
              content of a page when looking at its layout. The point of using
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here', making
              it look like readable English. Many desktop publishing packages
              and web page editors now use Lorem Ipsum as their default model
              text, and a search for 'lorem ipsum' will uncover many web sites
              still in their infancy. Various versions have evolved over the
              years, sometimes by accident, sometimes on purpose (injected
              humour and the like).
            </p>
          ))}

        {this.state.open && (
          <Modal onClose={() => this.setState({ open: false })}>aaaaaa</Modal>
        )}
      </div>
    )
  }
}

const connector = connect((state: RootState) => ({ counter: state.counter }), {
  increment,
  incrementByAmount,
  addExpense
})

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Playground)
