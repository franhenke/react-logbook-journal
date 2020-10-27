import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalContext'
import * as ROUTES from '../../constants/routes'
import JournalEntry from './JournalEntry'

const JournalList = () => {
  const { journalEntries } = useContext(GlobalContext)
  return (
    <div className="journal-list-container">
      {journalEntries.length > 0 ? (
        journalEntries.map((entry) => <JournalEntry key={entry.id} />)
      ) : (
        <div>No entries, yet</div>
      )}
      <Link className="link-to-form" to={ROUTES.JOURNALFORM}>
        Add a new memory
      </Link>
    </div>
  )
}

export default JournalList
