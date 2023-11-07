import { Component } from 'react'
import { store } from '../../store'
import FilterForm from './components/FilterForm'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'

class Expensify extends Component {
  state = {
    unsubscribe: store.subscribe(() => {
      console.log(store.getState())
    })
  }

  componentWillUnmount(): void {
    this.state.unsubscribe()
  }

  render() {
    return (
      <main className="pageContainer">
        <ExpenseForm />
        <FilterForm />
        <ExpenseList />
      </main>
    )
  }
}

export default Expensify
