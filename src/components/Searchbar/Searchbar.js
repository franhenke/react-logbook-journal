import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { animated, useSpring } from 'react-spring'
import searchIcon from '../../assets/icons/search.svg'
import cross from '../../assets/icons/cross.svg'

const Searchbar = ({ searchInput, setSearchTerm }) => {
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false)
  const searchField = useRef()

  const animateWidth = useSpring({
    width: isSearchBarVisible ? '190px' : '0px',
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
        <img src={cross} alt="" onClick={endSearch} />
      ) : (
        <img src={searchIcon} alt="" onClick={openSearchBar} />
      )}
      <animated.div
        className="searchbar-formfield"
        style={animateWidth}
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          className="searchbar-inputfield"
          ref={searchField}
          type="text"
          placeholder="search for an entry"
          value={searchInput}
          onChange={handleSearch}
        />
      </animated.div>
    </div>
  )
}

Searchbar.propTypes = {
  searchInput: PropTypes.string,
  setSearchTerm: PropTypes.func,
}

export default Searchbar
