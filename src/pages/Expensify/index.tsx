import React from 'react'
import { ConnectedProps, connect } from 'react-redux'
import { RootState, addExpense, filterExpenses, store } from '../../store'

interface Props extends PropsFromRedux {}
class Expensify extends React.Component<Props> {
  state = {
    open: false,
    unsubscribe: store.subscribe(() => {
      console.log(store.getState())
    })
  }

  componentWillUnmount(): void {
    this.state.unsubscribe()
  }

  getTime = (time) => {
    const date1 = new Date(time).getTime()
    const date2 = new Date().getTime()
    const diff = Math.abs(date2 - date1)
    const diffTime = {
      s: Math.floor(diff / 1000),
      m: Math.floor(diff / (1000 * 60)),
      h: Math.floor(diff / (1000 * 60 * 60))
    }

    if (diffTime.h > 1) {
      return `${diffTime.h} hour ago`
    } else if (diffTime.m > 1) {
      return `${diffTime.m} minutes ago`
    } else {
      return `${diffTime.s} seconds ago`
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { text, sort } = event.target
    console.log(text.value, sort.value)
    this.props.filterExpenses({
      startDate: null,
      endDate: null,
      text: 'cxzc',
      sortBy: 'createdAt asc'
    })
  }

  render() {
    return (
      <div className="pageContainer">
        <button
          onClick={() =>
            this.props.addExpense({
              note: 'fsfsdfs',
              description: 'dsadsadasdsa',
              amount: 20
            })
          }
        >
          add expense
        </button>

        <form onSubmit={this.handleSubmit}>
          <input name="text" />
          <select name="sort">
            <option value="amount asc">amount asc</option>
            <option value="amount desc">amount desc</option>
            <option value="description asc">description asc</option>
            <option value="description desc">description desc</option>
            <option value="createdAt asc">createdAt asc</option>
            <option value="createdAt desc">createdAt desc</option>
          </select>
          <button type="submit">send</button>
        </form>

        <div className="expensesList">
          {this.props.data.map((expense) => (
            <div key={expense.id} className="expenseContainer">
              <span>Description: {expense.description}</span>
              <span>Amount: {expense.amount}</span>
              <span>Note: {expense.note}</span>
              <span>{this.getTime(expense.createdAt)}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const conector = connect((state: RootState) => state.expenses, {
  addExpense,
  filterExpenses
})

type PropsFromRedux = ConnectedProps<typeof conector>

export default conector(Expensify)
