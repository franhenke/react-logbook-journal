import React, { useState, useEffect } from 'react'

const EditJournalForm = ({ setEditing, selectedJournal, updateJournal }) => {
  const [editedEntry, setEditedEntry] = useState(selectedJournal)

  useEffect(() => {
    setEditedEntry(selectedJournal)
  }, [selectedJournal])

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setEditedEntry({ ...editedEntry, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    updateJournal(editedEntry.id, editedEntry)
  }

  return (
    <div className="journal-form-wrapper">
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

        <label>Caption</label>
        <input
          type="text"
          name="caption"
          value={editedEntry.caption}
          onChange={handleInputChange}
        />
        <label>Entry</label>
        <input
          type="text"
          name="entry"
          value={editedEntry.entry}
          onChange={handleInputChange}
        />
        <label>Image</label>
        <input
          type="text"
          name="lastName"
          value={editedEntry.image}
          onChange={handleInputChange}
        />
        <div className="button-container">
          <button className="journal-button-update">Update Journal</button>
          <button
            className="contact-button-cancel"
            onClick={() => setEditing(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditJournalForm
