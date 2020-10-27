import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import plusIcon from '../../assets/icons/plus-circle.svg'
import EditJournalForm from './EditJournalForm'

const JournalEntry = () => {
  const {
    entry,
    deleteEntry,
    editing,
    setEditing,
    editRow,
    updateJournal,
    selectedJournal,
  } = useContext(GlobalContext)
  return (
    <>
      <div className="entry">
        {entry.image ? (
          <img src={entry.image} alt="" className="entry-image" />
        ) : (
          <img src={plusIcon} alt="" className="entry-image" />
        )}
        <p>{entry.date}</p>
        <p>{entry.place}</p>
        <h3>{entry.caption}</h3>
        <p>{entry.entry}</p>
      </div>

      <div className="button-container">
        <button className="journal-button-edit" onClick={() => editRow(entry)}>
          Edit
        </button>
        <button
          className="journal-button-delete"
          onClick={() => deleteEntry(entry.id)}
        >
          Delete
        </button>
      </div>

      {editing ? (
        <div>
          <h2>Edit journal entry</h2>
          <EditJournalForm
            setEditing={setEditing}
            selectedJournal={selectedJournal}
            updateJournal={updateJournal}
          />
        </div>
      ) : null}
    </>
  )
}

export default JournalEntry
