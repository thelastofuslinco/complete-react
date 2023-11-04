import { reset } from '../../../store'

describe('Actions', () => {
  test('should reset', () => {
    const action = reset()

    expect(action).toEqual({ payload: undefined, type: 'app/reset' })
  })
})
