import { ConnectedProps, connect } from 'react-redux'
import { RootState, filterExpenses } from '../../../../store'
import Input from '../../../../components/Input'
import Select from '../../../../components/Select'

const FilterForm = ({ filters, filterExpenses }: PropsFromRedux) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    const { text, sort } = event.target

    filterExpenses({
      startDate: null,
      endDate: null,
      text: text.value,
      sortBy: sort.value
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input name="text" value={filters.text} />
      <Select name="sort" value={filters.sortBy}>
        <option value="amount asc">amount asc</option>
        <option value="amount desc">amount desc</option>
        <option value="description asc">description asc</option>
        <option value="description desc">description desc</option>
        <option value="createdAt asc">createdAt asc</option>
        <option value="createdAt desc">createdAt desc</option>
      </Select>
      <button type="submit">send</button>
    </form>
  )
}

const conector = connect((state: RootState) => state.expenses, {
  filterExpenses: filterExpenses
})

type PropsFromRedux = ConnectedProps<typeof conector>

export default conector(FilterForm)
