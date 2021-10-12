import React, { useState, useEffect } from 'react'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import { toast } from 'react-toastify'
import cancelIcon from '../../assets/icons/cross.svg'

const EditJournalForm = ({ setEditing, selectedJournal, updateJournal }) => {
  const [editedEntry, setEditedEntry] = useState(selectedJournal)

  useEffect(() => {
    setEditedEntry(selectedJournal)
  }, [selectedJournal])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setEditedEntry({ ...editedEntry, [name]: value })
  }

  const Msg = () => (
    <div>
      <p>Entry successfully updated</p>
    </div>
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    updateJournal(editedEntry.id, editedEntry)
    toast(<Msg />, {
      position: 'bottom-center',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  return (
    <div className="journal-form-wrapper">
      <button className="button-cancel" onClick={() => setEditing(false)}>
        <img src={cancelIcon} alt="cancel" />
      </button>
      <h2>Edit journal entry</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label>Date</label>
        <input
          type="date"
          name="date"
          value={editedEntry.date}
          onChange={handleInputChange}
        />
        <label>Place</label>
        <input
          type="text"
          name="place"
          value={editedEntry.place}
          onChange={handleInputChange}
        />
        <label>Category</label>
        <select
          onChange={(event) => handleInputChange(event)}
          value={editedEntry.category || ''}
          name="category"
          id="category"
          required
        >
          <option value="Memory">Memory</option>
          <option value="Review">Review</option>
          <option value="Thoughts">Thoughts</option>
        </select>

        <label>title</label>
        <input
          type="text"
          name="title"
          value={editedEntry.title}
          onChange={handleInputChange}
        />
        <label>Entry</label>
        <TextareaAutosize
          className="form-textarea"
          rowsMax={7}
          aria-label="textarea"
          placeholder="Empty"
          type="text"
          name="entry"
          value={editedEntry.entry}
          onChange={handleInputChange}
        />

        <div className="button-container">
          <button className="journal-button-update">Update Journal</button>
        </div>
      </form>
    </div>
  )
}

export default EditJournalForm
