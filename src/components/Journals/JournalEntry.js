import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalContext'
import plusIcon from '../../assets/icons/plus-circle.svg'
import { loadFromLocal, saveToLocal } from '../../hooks/useLocalStorage'
import EditJournalForm from './EditJournalForm'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'

const JournalEntry = ({ entry }) => {
  const {
    journalEntries,
    setJournalEntries,
    deleteEntry,
    editing,
    setEditing,
    editRow,
    updateJournal,
    selectedJournal,
  } = useContext(GlobalContext)

  const completeHandler = () => {
    setJournalEntries(
      journalEntries.map((journal) => {
        if (journal.id === entry.id) {
          return {
            ...journal,
            bookmarked: !journal.bookmarked,
          }
        }
        return journal
      })
    )
  }

  const handleClose = () => {
    setEditing(false)
  }

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

        <Link to={`/journals/${entry.caption}`}>... see more</Link>
      </div>

      <div className="button-container">
        <button className="journal-button-edit" onClick={completeHandler}>
          Add to bookmarks
        </button>
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

      <Dialog
        fullWidth={true}
        open={editing}
        onClose={handleClose}
        aria-labelledby="edit-form-dialog"
      >
        <DialogContent>
          <EditJournalForm
            setEditing={setEditing}
            selectedJournal={selectedJournal}
            updateJournal={updateJournal}
            handleClose={handleClose}
          />
        </DialogContent>
      </Dialog>
    </>
  )
}

export default JournalEntry
