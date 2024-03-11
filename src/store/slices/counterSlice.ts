import {
  createAsyncThunk,
  createSlice,
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
  async () => new Promise((resolve) => setTimeout(resolve, 3000))
)

export const incrementByAmount = createAsyncThunk(
  'counter/incrementByAmount',
  async (value: number) => {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    return value
  }
)

const loadingFunction = (state) => {
  state.loading = true
}

const errorFunction = (state, action) => {
  state.loading = false
  state.error = action.error
}

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

    builder.addCase(increment.pending, loadingFunction)
    builder.addCase(increment.rejected, errorFunction)
    builder.addCase(increment.fulfilled, (state) => {
      state.loading = false
      state.data += 1
    })

    builder.addCase(incrementByAmount.pending, loadingFunction)
    builder.addCase(incrementByAmount.rejected, errorFunction)
    builder.addCase(incrementByAmount.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
    })
  }
})

export const { decrement } = counterSlice.actions

export default counterSlice.reducer
