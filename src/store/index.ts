import { configureStore } from '@reduxjs/toolkit'
import counterSlice, {
  increment,
  decrement,
  incrementByAmount
} from './slices/counterSlice'
import { reset } from './actions'
import expensesSlice, {
  addExpense,
  filterExpenses,
  editExpense,
  removeExpense
} from './slices/expensesSlice'

import userSlice, { logIn, logOut } from './slices/userSlice'

const store = configureStore({
  reducer: {
    counter: counterSlice,
    expenses: expensesSlice,
    user: userSlice
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
  filterExpenses,
  editExpense,
  removeExpense,
  logIn,
  logOut
}
