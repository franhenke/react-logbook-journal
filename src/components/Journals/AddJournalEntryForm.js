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
import CategoryTagsComponent from './form/categories'

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

AddJournalEntryForm.propTypes = {
  placeholder: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
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

  const hiddenFileInput = React.useRef(null)

  const currentDate = dayjs().format('DD/MM/YYYY')
  const [isLoading, setIsLoading] = useState(false)
  const [image, setImage] = useState('')
  const [category, setCategory] = useState('')

  const history = useHistory()

  const handleGoBack = useCallback(() => {
    history.goBack()
  }, [history])

  // const disableButton =
  //   !values.date ||
  //   !values.title ||
  //   !values.entry ||
  //   Object.keys(inputErrors).length !== 0

  const handleClick = (event) => {
    hiddenFileInput.current.click()
  }

  const handleCategory = (event) => {
    setCategory(event.target.value)
  }

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
    values.category = category
    return values
  }

  return (
    <>
      {/* <button className="add-button-cancel" onClick={handleGoBack}>
        <img src={cancelIcon} alt="cancel" />
      </button> */}
      <form className="form" onSubmit={handleSubmit} noValidate>
        <div className="form__body">
          <label htmlFor="date">
            Date <span className="required">*</span>
            <input
              className="form__body__input"
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
          </label>
          <label htmlFor="place">
            Place
            <input
              className="form__body__input"
              onChange={(event) => handleChange(event)}
              value={values.place || ''}
              type="text"
              name="place"
              id="place"
              min="5"
              placeholder="Add a place or location to your entry"
              data-testid="filter-input-place"
            />
          </label>
          <label htmlFor="title">
            Title <span className="required">*</span>
            <input
              className="form__body__input"
              onChange={(event) => handleChange(event)}
              value={values.title || ''}
              type="text"
              name="title"
              id="title"
              min="5"
              required
              aria-describedby="required-description"
              data-testid="title"
              placeholder="Add a title to your entry"
              error={inputErrors.title}
            />
          </label>
          <label htmlFor="Entry">
            Entry <span className="required">*</span>
            <TextareaAutosize
              className="form__body__textarea"
              style={{ boxSizing: 'border-box' }}
              minRows={3}
              maxRows={6}
              defaultValue="Just a single line..."
            />
          </label>
          <CategoryTagsComponent handleCategory={handleCategory} />
        </div>
        <div>
          {image && (
            <img
              src={image}
              alt="profile"
              className="form__body__image-preview"
            />
          )}
        </div>
        {isLoading && <p>image is loading...</p>}
        <div className="form__footer">
          <>
            <button type="button" onClick={handleClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </g>
              </svg>
            </button>
            <input
              ref={hiddenFileInput}
              type="file"
              name="image"
              onChange={uploadImage}
              value={values.image}
              style={{ display: 'none' }}
            />
          </>
          <p
            className="required-info_text"
            aria-hidden="true"
            id="required-description"
          >
            <span className="required">*</span>Required field
          </p>
          <div className="form__submit">
            <button type="submit" className="journal-button-submit">
              <img src={sendIcon} alt="submit" />
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
