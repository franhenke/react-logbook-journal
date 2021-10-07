import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { useParams } from 'react-router-dom'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import bookmarkIcon from '../../assets/icons/bookmark.svg'
import bookmarkIconFilled from '../../assets/icons/bookmark-filled.svg'
import heroImage from '../../assets/images/hero.jpg'
import edit from '../../assets/icons/edit.svg'
import EditJournalForm from '../../components/Journals/EditJournalForm'
import Frame from '../UI/frame'

export const JournalDetailsComponent = () => {
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

  journalEntries.bookmarked = false
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

  const { image, place, date, category, caption, entry, bookmarked } =
    selectedEntry

  return (
    <Frame screenName="Details">
      <div className="journal-details">
        <div className="journal-details__featured-image-wrapper">
          {image ? <img src={image} alt="" /> : <img src={heroImage} alt="" />}
          <button
            className="journal-details__button-edit"
            onClick={() => editRow(selectedEntry)}
          >
            <img src={edit} alt="" />
          </button>
        </div>

        <div className="journal-details__content-container">
          <h3 className="journal-details__place">{place}</h3>
          <h3 className="journal-details__category">{category}</h3>
          <h3 className="journal-details__caption">{caption}</h3>
          <h3 className="journal-details__date">{date}</h3>
          <div className="journal-details__entry">
            <h3>{entry}</h3>
          </div>

          {bookmarked === true ? (
            <button
              className="journal-details__bookmark-icon"
              onClick={bookmarkHandler}
            >
              <img src={bookmarkIconFilled} alt="" />
            </button>
          ) : (
            <button
              className="journal-details__bookmark-icon"
              onClick={bookmarkHandler}
            >
              <img src={bookmarkIcon} alt="" />
            </button>
          )}
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
            />
          </DialogContent>
        </Dialog>
      </div>
    </Frame>
  )
}
