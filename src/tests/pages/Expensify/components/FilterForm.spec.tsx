import React from 'react'
import { screen } from '@testing-library/react'
import FilterForm from '../../../../pages/Expensify/components/FilterForm'
import { renderWithProviders } from '../../../../utils/test-utils'

describe('Filter form component', () => {
  test('should render filter form', () => {
    renderWithProviders(<FilterForm name="" />)
    const element = screen.getByRole('form', { name: '' })
    expect(element).toMatchSnapshot()
  })
})
