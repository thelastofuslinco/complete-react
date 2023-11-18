import { Component } from 'react'
import FilterForm from './components/FilterForm'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import Header from '../../components/Header'

class Expensify extends Component {
  render() {
    return (
      <main className="pageContainer">
        <Header
          title="Expensify app"
          subtitle="Put your expenses in the hands of a computer"
        />
        <div>
          <ExpenseForm />
          <FilterForm />
        </div>
        <ExpenseList />
      </main>
    )
  }
}

export default Expensify
