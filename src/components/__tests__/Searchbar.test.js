import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import Searchbar from '../Searchbar/Searchbar'

describe('Searchbar-testing', () => {
  it('should render the search icon', () => {
    render(<Searchbar isSearching={false} />)
    expect(screen.getByAltText('searchIcon')).toBeInTheDocument()
  })

  it('should show the text input field when visible', () => {
    render(<Searchbar isSearching={true} />)
    expect(screen.getByTestId('search-inputField')).toBeInTheDocument()
  })
})
