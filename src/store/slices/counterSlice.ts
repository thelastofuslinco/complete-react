import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  SerializedError
} from '@reduxjs/toolkit'
import { reset } from '../actions'

interface State {
  data: number
  loading: boolean
  error: SerializedError
}

const initialState: State = {
  data: 0,
  loading: false,
  error: null
}

export const increment = createAsyncThunk(
  'counter/increment',
  async () => new Promise((resolve, reject) => setTimeout(resolve, 3000))
)

export const incrementByAmount = createAsyncThunk(
  'counter/incrementByAmount',
  async (value: number) => {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    return value
  }
)

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    decrement: (state) => {
      state.data -= 1
    }
  },
  extraReducers(builder) {
    builder.addCase(reset, (state) => {
      state.data = 0
    })

    builder.addCase(increment.pending, (state) => {
      state.loading = true
    })

    builder.addCase(increment.fulfilled, (state) => {
      state.loading = false
      state.data += 1
    })

    builder.addCase(increment.rejected, (state, action) => {
      state.loading = false
      state.error = action.error
    })

    builder.addCase(incrementByAmount.pending, (state) => {
      state.loading = true
    })

    builder.addCase(incrementByAmount.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
    })

    builder.addCase(incrementByAmount.rejected, (state, action) => {
      state.loading = false
      state.error = action.error
    })
  }
})

export const { decrement } = counterSlice.actions

export default counterSlice.reducer
