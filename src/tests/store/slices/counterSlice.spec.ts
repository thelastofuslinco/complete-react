import { decrement, increment, incrementByAmount } from '../../../store'

describe('Counter slice', () => {
  test('should increment', () => {
    const action = increment()

    expect(action).toEqual({ payload: undefined, type: 'counter/increment' })
  })

  test('should increment by amount', () => {
    const action = incrementByAmount(10)

    expect(action).toEqual({ payload: 10, type: 'counter/incrementByAmount' })
  })

  test('should decrement', () => {
    const action = decrement()

    expect(action).toEqual({ payload: undefined, type: 'counter/decrement' })
  })
})
