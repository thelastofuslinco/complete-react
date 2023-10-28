import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { reset } from '../actions'

interface State {
  data: number
}

const initialState: State = {
  data: 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.data += 1
    },
    decrement: (state) => {
      state.data -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.data += action.payload
    }
  },
  extraReducers(builder) {
    builder.addCase(reset, (state) => {
      state.data = 0
    })
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
