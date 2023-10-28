import { configureStore } from '@reduxjs/toolkit'
import counterSlice, {
  increment,
  decrement,
  incrementByAmount
} from './slices/counterSlice'
import { reset } from './actions'
import booksSlice, { addBook } from './slices/booksSlice'

const store = configureStore({
  reducer: {
    counter: counterSlice,
    books: booksSlice
  },
  devTools: true
})

export { store, increment, decrement, incrementByAmount, reset, addBook }
