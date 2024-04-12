import { FormHTMLAttributes } from 'react'
import { ConnectedProps, connect } from 'react-redux'
import { addExpense, editExpense } from '../../../../store'
import Input from '../../../../components/Input'
import { ExpenseModel } from '../../../../models/ExpenseModel'
interface Props
  extends PropsFromRedux,
    Partial<ExpenseModel>,
    FormHTMLAttributes<HTMLFormElement> {
  onClick?: () => void
}

const ExpenseForm = ({
  dispatch,
  description,
  amount,
  note,
  id,
  createdAt,
  onClick,
  ...props
}: Props) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    const { description, amount, note } = event.target

    if (id) {
      dispatch(
        editExpense({
          id,
          description: description.value,
          amount: amount.value,
          note: note.value,
          createdAt
        })
      )
      onClick()
    } else {
      dispatch(
        addExpense({
          id: crypto.randomUUID(),
          description: description.value,
          amount: amount.value,
          note: note.value,
          createdAt: new Date().toISOString()
        })
      )
    }

    description.value = ''
    amount.value = ''
    note.value = ''
  }

  return (
    <form onSubmit={handleSubmit} className="formExpenses" {...props}>
      <h1>Expense form</h1>
      <label htmlFor="description_id">
        description
        <Input
          id="description_id"
          name="description"
          type="text"
          value={description}
        />
      </label>
      <label htmlFor="amount_id">
        amount
        <Input id="amount_id" name="amount" type="number" value={amount} />
      </label>
      <label htmlFor="note_id">
        note
        <Input id="note_id" name="note" value={note} />
      </label>
      <button type="submit">send</button>
    </form>
  )
}

const conector = connect()

type PropsFromRedux = ConnectedProps<typeof conector>

export default conector(ExpenseForm)
