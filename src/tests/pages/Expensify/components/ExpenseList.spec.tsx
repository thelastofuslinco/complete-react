import { screen } from '@testing-library/react'
import ExpenseList from '../../../../pages/Expensify/components/ExpenseList'
import { renderWithProviders } from '../../../../utils/test-utils'
import { expenses } from '../../../fixtures/expenses'

describe('Expense list component', () => {
  test('should render expense list', () => {
    renderWithProviders(<ExpenseList />, {
      preloadedState: { expenses: { data: expenses, filters: { text: '' } } }
    })
    const element = screen.getByRole('list')
    expect(element).toMatchSnapshot()
  })
})
