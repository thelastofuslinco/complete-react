import { screen, render, fireEvent } from '@testing-library/react'
import Input from '../../components/Input'

describe('Input Component', () => {
  test('should render and change the Input component', async () => {
    render(<Input type="text" />)
    const input: HTMLInputElement = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'any_value' } })
    expect(input.value).toBe('any_value')
    expect(input).toMatchSnapshot()
  })
})
