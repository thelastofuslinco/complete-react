import { configureStore } from '@reduxjs/toolkit'
import counterSlice, {
  increment,
  decrement,
  incrementByAmount
} from './slices/counterSlice'
import { reset } from './actions'

const store = configureStore({
  reducer: {
    counter: counterSlice
  },
  devTools: true
})

export { store, increment, decrement, incrementByAmount, reset }
