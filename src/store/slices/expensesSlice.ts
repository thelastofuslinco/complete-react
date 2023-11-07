import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ExpenseModel } from '../../models/ExpenseModel'
import { FilterModel } from '../../models/FilterModel'

interface State {
  data: Array<ExpenseModel>
  filters: FilterModel
}

const initialState: State = {
  data: [],
  filters: { startDate: null, endDate: null, text: '', sortBy: 'amount desc' }
}

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<ExpenseModel>) => {
      state.data.push(action.payload)
    },
    editExpense: (state, action: PayloadAction<ExpenseModel>) => {
      const expenseIndex = state.data.findIndex(
        (expense) => expense.id === action.payload.id
      )

      state.data[expenseIndex] = { ...action.payload }
    },
    removeExpense: (state, action: PayloadAction<{ id: string }>) => {
      const newExpenses = state.data.filter(
        (expense) => expense.id !== action.payload.id
      )

      state.data = newExpenses
    },
    filterExpenses: (state, action: PayloadAction<FilterModel>) => {
      state.filters = { ...action.payload }
    }
  }
})

export const { addExpense, filterExpenses, editExpense, removeExpense } =
  expensesSlice.actions

export default expensesSlice.reducer
