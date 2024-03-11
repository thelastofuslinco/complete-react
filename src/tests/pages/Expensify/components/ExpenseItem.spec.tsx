import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { expenses } from '../../../fixtures/expenses'
import ExpenseItem from '../../../../pages/Expensify/components/ExpenseItem'
import { renderWithProviders } from '../../../../utils/test-utils'

describe('Expense item component', () => {
  test('should render expense item', () => {
    render(<ExpenseItem {...expenses[0]} />)
    const element = screen.getAllByRole('listitem')
    expect(element).toMatchSnapshot()
  })

  test('should change edit state', () => {
    const spy = jest.fn()
    renderWithProviders(<ExpenseItem {...expenses[0]} />)
    const element = screen.getByRole('button')
    element.onclick = spy
    fireEvent.click(element)
    expect(spy).toHaveBeenCalled()
  })
})
