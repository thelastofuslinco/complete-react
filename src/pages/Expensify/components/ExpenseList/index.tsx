import { ConnectedProps, connect } from 'react-redux'
import { RootState } from '../../../../store'
import ExpenseItem from '../ExpenseItem'

const ExpenseList = ({ data, filters }: PropsFromRedux) => {
  const filteredExpenses = data
    .filter((expense) => {
      const textMatch = expense.description.includes(filters.text)

      return textMatch
    })
    .sort((a, b) => {
      if (filters.sortBy === 'amount asc') {
        return a.amount - b.amount
      } else if (filters.sortBy === 'amount desc') {
        return b.amount - a.amount
      } else if (filters.sortBy === 'description asc') {
        if (a.description < b.description) return -1
        else if (a.description > b.description) return 1
      } else if (filters.sortBy === 'description desc') {
        if (a.description < b.description) return 1
        else if (a.description > b.description) return -1
      } else if (filters.sortBy === 'createdAt asc') {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      } else if (filters.sortBy === 'createdAt desc') {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      }

      return 0
    })

  return (
    <div className="expenseList">
      {filteredExpenses.map((expense) => (
        <ExpenseItem {...expense} key={expense.id} />
      ))}
    </div>
  )
}

const conector = connect((state: RootState) => state.expenses)

type PropsFromRedux = ConnectedProps<typeof conector>

export default conector(ExpenseList)