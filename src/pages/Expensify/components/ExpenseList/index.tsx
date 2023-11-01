import { ConnectedProps, connect } from 'react-redux'
import { RootState } from '../../../../store'
import ExpenseItem from '../ExpenseItem'

const ExpenseList = ({ data, filters }: PropsFromRedux) => {
  const filteredExpenses = data.filter((expense) => {
    const textMatch = expense.description.includes(filters.text)

    return textMatch
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
