import React, { useState, useContext, useCallback } from 'react'
import PropTypes from 'prop-types'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import 'react-toastify/dist/ReactToastify.css'
import dayjs from 'dayjs'
import { useHistory } from 'react-router-dom'
import cancelIcon from '../../assets/icons/cross.svg'
import sendIcon from '../../assets/icons/send.svg'
import { GlobalContext } from '../../context/GlobalContext'
import useForm from '../../hooks/useForm'
import validateJournalEntry from './JournalFormValidation.js'

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

AddJournalEntryForm.propTypes = {
  placeholder: PropTypes.string,
  date: PropTypes.string,
  caption: PropTypes.string,
  entry: PropTypes.string,
  place: PropTypes.string,
  handleChange: PropTypes.func,
  required: PropTypes.bool,
  error: PropTypes.string,
}

export default function AddJournalEntryForm() {
  const { handleJournalEntry } = useContext(GlobalContext)
  const [values, inputErrors, handleChange, handleSubmit] = useForm(
    validateJournalEntry,
    handleLocalStorage
  )

  const currentDate = dayjs().format('DD/MM/YYYY')
  const [isLoading, setIsLoading] = useState(false)
  const [image, setImage] = useState('')

  const history = useHistory()

  const handleGoBack = useCallback(() => {
    history.goBack()
  }, [history])

  const disableButton =
    !values.date ||
    !values.caption ||
    !values.entry ||
    Object.keys(inputErrors).length !== 0

  return (
    <>
      <button className="add-button-cancel" onClick={handleGoBack}>
        <img src={cancelIcon} alt="cancel" />
      </button>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <div className="form-header">
          <h2>Create</h2>
          <h1 className="form-headline"> a new memory</h1>
        </div>
        <label htmlFor="date">
          Date <span className="required">*</span>
        </label>
        <input
          onChange={(event) => handleChange(event)}
          value={values.date || ''}
          type="date"
          name="date"
          id="date"
          max={currentDate}
          required
          aria-describedby="required-description"
          autoFocus
          error={inputErrors.date}
          data-testid="filter-input-date"
        />

        <label htmlFor="category">Category</label>
        <select
          onChange={(event) => handleChange(event)}
          value={values.category || ''}
          name="category"
          id="category"
        >
          <option value="" defaultValue disabled hidden>
            Select a Category
          </option>
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
          placeholder="Add a place or location to your entry"
          data-testid="filter-input-place"
        />
        <label htmlFor="caption">
          Caption <span className="required">*</span>
        </label>
        <input
          onChange={(event) => handleChange(event)}
          value={values.caption || ''}
          type="text"
          name="caption"
          id="caption"
          min="5"
          required
          aria-describedby="required-description"
          data-testid="caption"
          placeholder="Add a title to your entry"
          error={inputErrors.caption}
        />
        <label htmlFor="Entry">
          Entry <span className="required">*</span>
        </label>

        <TextareaAutosize
          className="form-textarea"
          aria-describedby="required-description"
          rowsMax={7}
          aria-label="textarea"
          onChange={(event) => handleChange(event)}
          value={values.entry || ''}
          type="text"
          name="entry"
          id="entry"
          min="10"
          required
          placeholder="tell your story.."
          error={inputErrors.entry}
          data-testid="filter-input-entry"
        />

        <div>
          {image ? (
            <img src={image} alt="profile" className="form-image-preview" />
          ) : (
            <label htmlFor="image">
              Image
              <input
                type="file"
                name="image"
                onChange={uploadImage}
                value={values.image}
              />
            </label>
          )}
        </div>
        {isLoading && <p>image is loading...</p>}

        <button className="journal-button-submit" disabled={disableButton}>
          <img src={sendIcon} alt="submit" />
        </button>
        <p
          className="required-info_text"
          aria-hidden="true"
          id="required-description"
        >
          <span className="required">*</span>Required field
        </p>
      </form>
    </>
  )

  async function uploadImage(event) {
    const files = event.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', PRESET)
    setIsLoading(true)

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`,
      { method: 'POST', body: data }
    )
    const image = await response.json()
    setImage(image.secure_url)
    setIsLoading(false)
  }

  function handleLocalStorage(values) {
    handleJournalEntry(values)
    values.image = image
    return values
  }
}
