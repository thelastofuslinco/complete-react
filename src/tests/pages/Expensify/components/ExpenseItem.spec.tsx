import { render, screen } from '@testing-library/react'
import { expenses } from '../../../fixtures/expenses'
import ExpenseItem from '../../../../pages/Expensify/components/ExpenseItem'

describe('Expense item component', () => {
  test('should render expense item', () => {
    render(<ExpenseItem {...expenses[0]} />)
    const element = screen.getAllByRole('listitem')
    expect(element).toMatchSnapshot()
  })
})
