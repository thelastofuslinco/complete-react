import { ConnectedProps, connect } from 'react-redux'
import { addExpense, editExpense } from '../../../../store'
import Input from '../../../../components/Input'
import { ExpenseModel } from '../../../../models/ExpenseModel'

interface Props extends PropsFromRedux, Partial<ExpenseModel> {
  onClick?: () => void
}

const ExpenseForm = ({
  dispatch,
  description,
  amount,
  note,
  id,
  createdAt,
  onClick
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
          description: description.value,
          amount: amount.value,
          note: note.value
        })
      )
    }

    description.value = ''
    amount.value = ''
    note.value = ''
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <Input name="description" type="text" value={description} />
      <Input name="amount" type="number" value={amount} />
      <Input name="note" value={note} />
      <button type="submit">send</button>
    </form>
  )
}

const conector = connect()

type PropsFromRedux = ConnectedProps<typeof conector>

export default conector(ExpenseForm)
