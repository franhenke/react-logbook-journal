import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import Searchbar from '../components/Searchbar/Searchbar'
import Frame from '../components/UI/frame'
import JournalEntry from '../components/Journals/JournalEntry'

export const JournalsScreenComponent = () => {
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
    <Frame screenName="Journals">
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
        <>
        <div className="journal-list-container">
          {results.map((entry) => (
            <JournalEntry key={entry.id} entry={entry} />
          ))}
        </div>
        </>
      )}
    </Frame>
  )
}
