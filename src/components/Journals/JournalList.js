import React from 'react'
import JournalEntry from './JournalEntry'

const JournalList = ({ searchResults }) => {
  return (
    <div className="journal-list-container">
      {searchResults.map((entry) => (
        <JournalEntry key={entry.id} entry={entry} />
      ))}
    </div>
  )
}

export default JournalList
