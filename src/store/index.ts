import { configureStore } from '@reduxjs/toolkit'
import counterSlice, {
  increment,
  decrement,
  incrementByAmount
} from './slices/counterSlice'
import { reset } from './actions'
import expensesSlice, {
  addExpense,
  filterExpenses
} from './slices/expensesSlice'

const store = configureStore({
  reducer: {
    counter: counterSlice,
    expenses: expensesSlice
  },
  devTools: true
})

export type RootState = ReturnType<typeof store.getState>

export {
  store,
  increment,
  decrement,
  incrementByAmount,
  reset,
  addExpense,
  filterExpenses
}
