import { decrement, increment, incrementByAmount, reset } from '../../../store'
import counterReducer from '../../../store/slices/counterSlice'

describe('Counter slice', () => {
  test('should setup default counter value', () => {
    const state = counterReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({ data: 0, error: null, loading: false })
  })

  test('should increment', () => {
    const state = counterReducer(undefined, increment.fulfilled)
    expect(state).toEqual({ data: 1, error: null, loading: false })
  })

  test('should decrement', () => {
    const state = counterReducer(undefined, decrement())
    expect(state).toEqual({ data: -1, error: null, loading: false })
  })

  test('should increment by amount', () => {
    const amount = 20
    const state = counterReducer(undefined, {
      type: incrementByAmount.fulfilled,
      payload: amount
    })
    expect(state).toEqual({ data: amount, error: null, loading: false })
  })

  test('should reset', () => {
    const state = counterReducer(undefined, reset())
    expect(state).toEqual({ data: 0, error: null, loading: false })
  })
})
