import React from 'react'
import { screen } from '@testing-library/react'
import ExpenseList from '../../../../pages/Expensify/components/ExpenseList'
import { renderWithProviders } from '../../../../utils/test-utils'
import { expenses } from '../../../fixtures/expenses'
import { filterExpenses } from '../../../../store'

describe('Expense list component', () => {
  test('should render expense list', () => {
    const { store } = renderWithProviders(<ExpenseList />, {
      preloadedState: {
        expenses: {
          data: expenses,
          filters: {
            text: 'a',
            sortBy: 'description desc',
            startDate: '11/04/2023',
            endDate: '11/05/2023'
          }
        }
      }
    })
    store.dispatch(
      filterExpenses({
        text: 'a',
        sortBy: 'amount desc',
        startDate: '11/04/2023',
        endDate: '11/05/2023'
      })
    )
    const element = screen.getByRole('list')
    expect(element).toMatchSnapshot()
  })
})
