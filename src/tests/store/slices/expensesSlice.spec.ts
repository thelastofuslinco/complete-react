import { FilterModel } from '../../../models/FilterModel'
import expensesReducer, {
  addExpense,
  editExpense,
  filterExpenses,
  removeExpense
} from '../../../store/slices/expensesSlice'
import { expenses } from '../../fixtures/expenses'

const filters: FilterModel = {
  startDate: null,
  endDate: null,
  text: '',
  sortBy: 'amount desc'
}
const data = expenses
const newExpense = {
  ...expenses[0],
  description: 'new_description'
}

describe('Expenses Slice', () => {
  test('should setup default expenses value', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
      data: [],
      filters: {
        endDate: null,
        sortBy: 'amount desc',
        startDate: null,
        text: ''
      }
    })
  })

  test('should addExpense', () => {
    const state = expensesReducer(undefined, addExpense(expenses[0]))
    expect(state.data[0]).toEqual(expenses[0])
  })

  test('should edit expense', () => {
    const state = expensesReducer({ data, filters }, editExpense(newExpense))
    expect(state.data[0]).toEqual(newExpense)
  })

  test('should add filter to expense', () => {
    const filters: FilterModel = {
      startDate: null,
      endDate: null,
      text: 'b',
      sortBy: 'description asc'
    }
    const state = expensesReducer(undefined, filterExpenses(filters))
    expect(state.filters).toEqual(filters)
  })

  test('should remove expense', () => {
    const state = expensesReducer({ data, filters }, removeExpense({ id: '1' }))

    expect(state.data).not.toContain(expenses[0])
  })
})
