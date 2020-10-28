import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { animated, useSpring } from 'react-spring'
import searchIcon from '../../assets/icons/search.svg'
import crossIcon from '../../assets/icons/cross.svg'

const Searchbar = ({ searchInput, setSearchTerm }) => {
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false)
  const searchField = useRef()
  const animateWidth = useSpring({
    width: isSearchBarVisible ? '0px' : '150px',
  })

  function handleSearch(event) {
    setSearchTerm(event.target.value)
  }

  function openSearchBar() {
    setIsSearchBarVisible(true)
    searchField.current.focus()
  }

  function endSearch() {
    setSearchTerm('')
    setIsSearchBarVisible(false)
    searchField.current.focus()
  }

  return (
    <div className="searchbar-container">
      {isSearchBarVisible ? (
        <img
          src={searchIcon}
          alt=""
          className="searchbar-icon"
          onClick={endSearch}
        />
      ) : (
        <img
          src={crossIcon}
          alt=""
          className="searchbar-icon"
          onClick={openSearchBar}
        />
      )}
      <animated.form
        className="searchbar-formfield"
        style={animateWidth}
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          className="searchbar-inputfield"
          ref={searchField}
          type="text"
          placeholder="search"
          value={searchInput}
          onChange={handleSearch}
        />
      </animated.form>
    </div>
  )
}

Searchbar.propTypes = {
  searchInput: PropTypes.string,
  setSearchTerm: PropTypes.func,
}

export default Searchbar
