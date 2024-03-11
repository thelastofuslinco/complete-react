import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithProviders } from '../../../../utils/test-utils'
import ExpenseForm from '../../../../pages/Expensify/components/ExpenseForm'
import { expenses } from '../../../fixtures/expenses'

describe('Expense form component', () => {
  test('should render expense form', () => {
    renderWithProviders(<ExpenseForm name="" />)
    const form = screen.getByRole('form', { name: '' })
    expect(form).toMatchSnapshot()
  })

  test('should render expense form with data', () => {
    renderWithProviders(<ExpenseForm name="" {...expenses[0]} />)
    const form = screen.getByRole('form', { name: '' })
    expect(form).toMatchSnapshot()
  })

  test('should change expense form', () => {
    renderWithProviders(<ExpenseForm name="" />)
    const form: HTMLFormElement = screen.getByRole('form', { name: '' })
    fireEvent.change(form, {
      target: {
        amount: { value: 90 },
        description: { value: 'any_description' },
        note: { value: 'any_note' }
      }
    })

    expect(form['amount'].value).toBe(90)
    expect(form['description'].value).toBe('any_description')
    expect(form['note'].value).toBe('any_note')
  })

  test('should change and submit expense', () => {
    renderWithProviders(<ExpenseForm name="" />)
    const form: HTMLFormElement = screen.getByRole('form', { name: '' })
    fireEvent.change(form, {
      target: {
        amount: { value: 90 },
        description: { value: 'any_description' },
        note: { value: 'any_note' }
      }
    })
    fireEvent.submit(form)

    expect(form['amount'].value).toBe('')
    expect(form['description'].value).toBe('')
    expect(form['note'].value).toBe('')
  })

  test('should edit expense', () => {
    const handleClick = jest.fn()
    renderWithProviders(
      <ExpenseForm name="" {...expenses[0]} onClick={handleClick} />
    )
    const form: HTMLFormElement = screen.getByRole('form', { name: '' })
    fireEvent.change(form, {
      target: {
        amount: { value: 90 },
        description: { value: 'any_description' },
        note: { value: 'any_note' }
      }
    })
    fireEvent.submit(form)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
