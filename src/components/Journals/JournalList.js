import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalContext'
import * as ROUTES from '../../constants/routes'
import JournalEntry from './JournalEntry'

const JournalList = () => {
  const {
    journalEntries,
    deleteEntry,
    editing,
    setEditing,
    editRow,
    updateJournal,
    selectedJournal,
  } = useContext(GlobalContext)

  return (
    <div className="journals-wrapper">
      {journalEntries.length > 0 ? (
        journalEntries.map((entry) => (
          <JournalEntry
            key={entry.id}
            entry={entry}
            deleteEntry={deleteEntry}
            editRow={editRow}
            updateJournal={updateJournal}
            selectedJournal={selectedJournal}
            editing={editing}
            setEditing={setEditing}
          />
        ))
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
