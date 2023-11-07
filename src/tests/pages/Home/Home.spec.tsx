import { screen } from '@testing-library/react'
import { renderWithProviders } from '../../../utils/test-utils'
import Home from '../../../pages/Home'

describe('Home page', () => {
  test('should render page', () => {
    renderWithProviders(<Home />)
    const element = screen.getByRole('main')
    expect(element).toMatchSnapshot()
  })
})
