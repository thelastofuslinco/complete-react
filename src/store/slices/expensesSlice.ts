import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import crypto from 'crypto'
import { ExpenseModel } from '../../models/ExpenseModel'

interface Filters {
  startDate: string
  endDate: string
  text: string
  sortBy:
    | 'amount asc'
    | 'amount desc'
    | 'description asc'
    | 'description desc'
    | 'createdAt asc'
    | 'createdAt desc'
}

interface State {
  data: Array<ExpenseModel>
  filters: Filters
}

const initialState: State = {
  data: [],
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
    filterExpenses: (state, action: PayloadAction<Filters>) => {
      state.filters = { ...action.payload }
    }
  }
})

export const { addExpense, filterExpenses } = expensesSlice.actions

export default expensesSlice.reducer
