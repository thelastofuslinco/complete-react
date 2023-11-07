import { decrement, increment, incrementByAmount, reset } from '../../../store'
import counterReducer from '../../../store/slices/counterSlice'

describe('Counter slice', () => {
  test('should setup default counter value', () => {
    const state = counterReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({ data: 0 })
  })

  test('should increment', () => {
    const state = counterReducer(undefined, increment())
    expect(state).toEqual({ data: 1 })
  })

  test('should decrement', () => {
    const state = counterReducer(undefined, decrement())
    expect(state).toEqual({ data: -1 })
  })

  test('should increment by amount', () => {
    const amount = 20
    const state = counterReducer(undefined, incrementByAmount(amount))
    expect(state).toEqual({ data: amount })
  })

  test('should reset', () => {
    const state = counterReducer(undefined, reset())
    expect(state).toEqual({ data: 0 })
  })
})
