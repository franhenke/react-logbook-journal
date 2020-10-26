import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import TextareaAutosize from 'react-textarea-autosize'
import 'react-toastify/dist/ReactToastify.css'
import dayjs from 'dayjs'

import { GlobalContext } from '../../context/GlobalContext'
import useForm from '../../hooks/useForm'
import validateJournalEntry from './JournalFormValidation.js'

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

AddJournalEntryForm.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func,
  required: PropTypes.bool,
  error: PropTypes.string,
}

export default function AddJournalEntryForm() {
  const { handleJournalEntry, setEditing } = useContext(GlobalContext)
  const [values, inputErrors, handleChange, handleSubmit] = useForm(
    validateJournalEntry,
    handleLocalStorage
  )

  const currentDate = dayjs().format('DD/MM/YYYY')
  const [isLoading, setIsLoading] = useState(false)
  const [image, setImage] = useState('')

  const disableButton =
    !values.date ||
    !values.place ||
    !values.caption ||
    !values.entry ||
    Object.keys(inputErrors).length !== 0

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <h1>Create a memory</h1>
      <label htmlFor="date">Date</label>
      <input
        onChange={(event) => handleChange(event)}
        value={values.date || ''}
        setValue={values.date || ''}
        type="date"
        name="date"
        id="date"
        max={currentDate}
        required
        autofocus
      />

      <label htmlFor="category">Category</label>
      <select
        onChange={(event) => handleChange(event)}
        value={values.category || ''}
        name="category"
        id="category"
        required
      >
        <option value="Memory">Memory</option>
        <option value="Review">Review</option>
        <option value="Thoughts">Thoughts</option>
      </select>

      <label htmlFor="place">Place</label>
      <input
        onChange={(event) => handleChange(event)}
        value={values.place || ''}
        type="text"
        name="place"
        id="place"
        min="5"
        required
        placeholder="Add a place or location to your entry"
      />
      <label htmlFor="caption">Caption</label>
      <input
        onChange={(event) => handleChange(event)}
        value={values.caption || ''}
        type="text"
        name="caption"
        id="caption"
        min="5"
        required
        data-testid="caption"
        placeholder="Add a title to your entry"
      />
      <label htmlFor="Entry">Entry</label>

      <textarea
        onChange={(event) => handleChange(event)}
        value={values.entry || ''}
        type="text"
        name="entry"
        id="entry"
        min="10"
        required
        placeholder="tell your story.."
        error={inputErrors.entry}
      />
      <div>
        {image ? (
          <img src={image} alt="profile" className="form-image-preview" />
        ) : (
          <input
            type="file"
            name="image"
            onChange={uploadImage}
            value={values.image}
          />
        )}
      </div>
      {isLoading && <p>image is loading...</p>}
      <div className="button-container">
        <button className="journal-button-update" disabled={disableButton}>
          Add to journal
        </button>
        <button
          className="journal-button-cancel"
          onClick={() => setEditing(false)}
        >
          Cancel
        </button>
      </div>

      {/* <button values={values} disabled={disableButton} /> */}
    </form>
  )

  async function uploadImage(event) {
    const files = event.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', PRESET)
    setIsLoading(true)
    console.log(files)

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`,
      { method: 'POST', body: data }
    )
    const image = await response.json()
    setImage(image.secure_url)
    setIsLoading(false)
    console.log(image)
  }

  function handleLocalStorage(values) {
    handleJournalEntry(values)
    values.image = image
    console.log(values)
    return values
  }
}
