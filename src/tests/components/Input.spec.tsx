import { screen, render, fireEvent } from '@testing-library/react'
import Input from '../../components/Input'

describe('Input Component', () => {
  test('should render Input', async () => {
    render(<Input value="any_value" />)
    const input: HTMLInputElement = screen.getByDisplayValue('any_value')
    fireEvent.change(input, { target: { value: '23' } })
    expect(input.value).toBe('23')
  })
})
