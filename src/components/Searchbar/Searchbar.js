import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import searchIcon from '../../assets/icons/search.svg'
import crossIcon from '../../assets/icons/cross.svg'

const Searchbar = ({ searchInput, setSearchTerm }) => {
  const [isSearching, setIsSearching] = useState(false)
  const searchField = useRef()

  function handleSearch(event) {
    setSearchTerm(event.target.value)
  }

  function openSearchBar() {
    setIsSearching(true)
    searchField.current.focus()
  }

  function endSearch() {
    setSearchTerm('')
    setIsSearching(false)
    searchField.current.focus()
  }

  return (
    <div className="searchbar-container">
      {isSearching ? (
        <img
          src={crossIcon}
          alt="deleteIcon"
          className="searchbar-icon"
          onClick={endSearch}
        />
      ) : (
        <img
          src={searchIcon}
          alt="searchIcon"
          className="searchbar-icon"
          onClick={openSearchBar}
        />
      )}
      <form
        className="searchbar-formfield"
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          className="searchbar-inputfield"
          ref={searchField}
          type="text"
          value={searchInput}
          onChange={handleSearch}
          data-testid="search-inputField"
        />
      </form>
    </div>
  )
}

Searchbar.propTypes = {
  searchInput: PropTypes.string,
  setSearchTerm: PropTypes.func,
}

export default Searchbar
