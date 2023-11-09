import { ConnectedProps, connect } from 'react-redux'
import { RootState } from '../../../../store'
import ExpenseItem from '../ExpenseItem'
import { expenseFilter } from '../../../../selectors/expenseFilter'
import { expenseOrder } from '../../../../selectors/expenseOrder'
import ExpensesSummary from '../ExpensesSummary'

const ExpenseList = ({ data, filters }: PropsFromRedux) => {
  const filteredExpenses = data
    .filter((expense) => expenseFilter(expense, filters))
    .sort((a, b) => expenseOrder(a, b, filters))

  return (
    <>
      <ExpensesSummary expenses={filteredExpenses} />

      <ul className="expenseList">
        {filteredExpenses.length === 0 ? (
          <p>No expenses</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem {...expense} key={expense.id} />
          ))
        )}
      </ul>
    </>
  )
}

const conector = connect((state: RootState) => state.expenses)

type PropsFromRedux = ConnectedProps<typeof conector>

export default conector(ExpenseList)
