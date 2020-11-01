import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import * as ROUTES from '../constants/routes'
import { Link } from 'react-router-dom'
import chevron from '../assets/icons/chevron-left.svg'
import JournalList from '../components/Journals/JournalList'
import Tabbar from '../components/Tabbar/Tabbar'
import Searchbar from '../components/Searchbar/Searchbar'

const Journals = () => {
  const { journalEntries } = useContext(GlobalContext)
  const [searchTerm, setSearchTerm] = useState('')

  const results = journalEntries.filter(
    (journalEntries) =>
      journalEntries.caption.toLowerCase().includes(searchTerm.toLowerCase()) ||
      journalEntries.entry.toLowerCase().includes(searchTerm.toLowerCase()) ||
      journalEntries.place.toLowerCase().includes(searchTerm.toLowerCase()) ||
      journalEntries.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="grid">
      <div className="page-header">
        <Link to={ROUTES.HOME}>
          <img className="back-home-icon" src={chevron} alt="" />
        </Link>
        <h2>Your</h2>
        <h1 className="page-headline"> journal entries</h1>
      </div>
      {journalEntries.length === 0 ? (
        <div className="message-no-entries">
          <h2>You have no journal entries, yet</h2>
          <h3>Let´s create memories</h3>
        </div>
      ) : (
        <Searchbar setSearchTerm={setSearchTerm} searchInput={searchTerm} />
      )}

      {journalEntries.length > 0 && results.length === 0 ? (
        <div>No entries found. Please change your search.</div>
      ) : (
        <JournalList searchResults={results} />
      )}
      <Tabbar />
    </div>
  )
}

export default Journals
