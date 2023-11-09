import { ExpenseModel } from '../../../../models/ExpenseModel'

interface Props {
  expenses: Array<ExpenseModel>
}

const ExpensesSummary = ({ expenses }: Props) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })

  console.log()
  return (
    <h3>
      Viewing: {expenses.length} expenses totalling{' '}
      {formatter.format(
        expenses.reduce((prev, expense) => prev + Number(expense.amount), 0)
      )}
    </h3>
  )
}

export default ExpensesSummary
