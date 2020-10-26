import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import TextareaAutosize from 'react-textarea-autosize'
import 'react-toastify/dist/ReactToastify.css'
import dayjs from 'dayjs'

import useForm from '../../hooks/useForm'
import validateJournalEntry from './JournalFormValidation.js'

AddJournalEntryForm.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func,
  required: PropTypes.bool,
  error: PropTypes.string,
}

export default function AddJournalEntryForm() {
  const [
    values,
    inputErrors,
    handleChange,
    handleSubmit,
    setUrlToValues,
  ] = useForm(validateJournalEntry)
  const [fileUrl, setFileUrl] = useState(null)
  const currentDate = dayjs().format('DD/MM/YYYY')

  const disableButton =
    !values.date ||
    !values.category ||
    !values.place ||
    !values.caption ||
    !values.entry ||
    Object.keys(inputErrors).length !== 0

  useEffect(() => {
    setUrlToValues(fileUrl)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fileUrl])

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

      <button>Add to journal</button>

      {/* <input type="file" setFileUrl={setFileUrl} /> */}

      {/* <button values={values} disabled={disableButton} /> */}
    </form>
  )
}
