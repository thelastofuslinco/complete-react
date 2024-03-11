import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithProviders } from '../../../utils/test-utils'
import Expensify from '../../../pages/Expensify'

describe('Expensify page', () => {
  test('should render page', () => {
    renderWithProviders(<Expensify />)
    const element = screen.getByRole('main')
    expect(element).toMatchSnapshot()
  })
})
