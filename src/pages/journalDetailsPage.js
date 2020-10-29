import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import * as ROUTES from '../constants/routes'

import { useParams, Link } from 'react-router-dom'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import bookmark from '../assets/icons/bookmark.svg'
import bookmarkFilled from '../assets/icons/bookmark-filled.svg'
import edit from '../assets/icons/edit.svg'
import Tabbar from '../components/Tabbar/Tabbar'
import EditJournalForm from '../components/Journals/EditJournalForm'

const JournalDetailsPage = () => {
  const {
    journalEntries,
    editing,
    editRow,
    updateJournal,
    selectedJournal,
    setJournalEntries,
    setEditing,
  } = useContext(GlobalContext)

  const { entryId } = useParams()
  const [selectedEntry] = journalEntries.filter(
    (journalEntries) => entryId === journalEntries.caption
  )

  const bookmarkHandler = () => {
    setJournalEntries(
      journalEntries.map((journal) => {
        if (journal.id === selectedEntry.id) {
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

  const {
    image,
    place,
    date,
    category,
    caption,
    entry,
    bookmarked,
  } = selectedEntry

  return (
    <div className="grid">
      <div className="featured-image-wrapper">
        <img src={image} alt="featured image" />
      </div>
      <div className="content-container">
        <h3 className="details-place">{place}</h3>
        <h3 className="details-category">{category}</h3>
        <h3 className="details-caption">{caption}</h3>
        <h3 className="details-date">{date}</h3>
        <h3 className="details-entry">{entry}</h3>

        <div className="button-container">
          {bookmarked === true ? (
            <button className="bookmark-icon" onClick={bookmarkHandler}>
              <img src={bookmarkFilled} alt="" />
            </button>
          ) : (
            <button className="bookmark-icon" onClick={bookmarkHandler}>
              <img src={bookmark} alt="" />
            </button>
          )}

          <button
            className="details-button-edit"
            onClick={() => editRow(selectedEntry)}
          >
            <img src={edit} alt="" />
          </button>
        </div>
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
      <Tabbar />
    </div>
  )
}

export default JournalDetailsPage
