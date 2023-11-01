import React from 'react'
import { store } from '../../store'
import FilterForm from './components/FilterForm'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'

class Expensify extends React.Component {
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
      <div className="pageContainer">
        <ExpenseForm />
        <FilterForm />
        <ExpenseList />
      </div>
    )
  }
}

export default Expensify
