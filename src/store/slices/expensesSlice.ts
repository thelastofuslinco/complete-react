import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import crypto from 'crypto'
import { ExpenseModel } from '../../models/ExpenseModel'
import { FilterModel } from '../../models/FilterModel'

interface State {
  data: Array<ExpenseModel>
  filters: FilterModel
}

const initialState: State = {
  data: [
    {
      id: crypto.randomBytes(20).toString('hex'),
      description: crypto.randomBytes(20).toString('hex'),
      amount: 10,
      note: crypto.randomBytes(20).toString('hex'),
      createdAt: new Date(1699061965116 * 0.99).toISOString()
    }
  ],
  filters: { startDate: null, endDate: null, text: '', sortBy: 'amount desc' }
}

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense: (
      state,
      action: PayloadAction<{
        note: string
        description: string
        amount: number
      }>
    ) => {
      state.data.push({
        id: crypto.randomBytes(20).toString('hex'),
        description: action.payload.description,
        amount: action.payload.amount,
        note: action.payload.note,
        createdAt: new Date().toISOString()
      })
    },
    editExpense: (state, action: PayloadAction<ExpenseModel>) => {
      const expenseIndex = state.data.findIndex(
        (expense) => expense.id === action.payload.id
      )

      state.data[expenseIndex] = { ...action.payload }
    },
    filterExpenses: (state, action: PayloadAction<FilterModel>) => {
      state.filters = { ...action.payload }
    }
  }
})

export const { addExpense, filterExpenses, editExpense } = expensesSlice.actions

export default expensesSlice.reducer
