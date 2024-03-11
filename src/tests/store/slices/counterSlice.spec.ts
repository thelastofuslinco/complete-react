import { configureStore } from '@reduxjs/toolkit'
import { decrement, increment, incrementByAmount, reset } from '../../../store'
import counterReducer from '../../../store/slices/counterSlice'

describe('Counter slice', () => {
  let mockStore

  beforeEach(() => {
    mockStore = configureStore({
      reducer: {
        counter: counterReducer
      }
    })
  })

  test('should setup default counter value', () => {
    const { counter } = mockStore.getState()

    expect(counter).toEqual({
      data: 0,
      error: null,
      loading: false
    })
  })

  test('should increment', async () => {
    await mockStore.dispatch(increment())

    const { counter } = mockStore.getState()

    expect(counter).toEqual({
      data: 1,
      error: null,
      loading: false
    })
  })

  test('should decrement', async () => {
    await mockStore.dispatch(decrement())

    const { counter } = mockStore.getState()

    expect(counter).toEqual({
      data: -1,
      error: null,
      loading: false
    })
  })

  test('should increment by amount', async () => {
    const amount = 20
    await mockStore.dispatch(incrementByAmount(amount))

    const { counter } = mockStore.getState()

    expect(counter).toEqual({
      data: amount,
      error: null,
      loading: false
    })
  })

  test('should reset', async () => {
    await mockStore.dispatch(reset())

    const { counter } = mockStore.getState()

    expect(counter).toEqual({
      data: 0,
      error: null,
      loading: false
    })
  })
})
