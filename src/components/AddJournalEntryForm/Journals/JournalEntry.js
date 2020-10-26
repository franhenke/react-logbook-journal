import React from 'react'
import plusIcon from '../../../assets/icons/plus-circle.svg'
import EditJournalForm from './EditJournalForm'

const JournalEntry = ({
  entry,
  selectedJournal,
  deleteEntry,
  editing,
  setEditing,
  editRow,
  updateJournal,
}) => {
  return (
    <>
      <div className="entry">
        {entry.image ? (
          <img src={entry.image} alt="" className=".entry-image" />
        ) : (
          <img src={plusIcon} alt="" className=".entry-image" />
        )}

        <h3>{entry.caption}</h3>
      </div>

      <div className="button-container">
        <button className="contact-button-edit" onClick={() => editRow(entry)}>
          Edit
        </button>
        <button
          className="contact-button-delete"
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
