import React from 'react'
import { Link } from 'react-router-dom'

const BookmarkedJournal = ({ bookmark }) => {
  const { image, place, date, caption, entry } = bookmark
  return (
    <div className="journal-content-container">
      <div className="image-container">
        <img src={image} alt="" />
      </div>
      <Link to={`/journals/${caption}`}>
        <div>
          <p className="journal_place">{place}</p>
          <h4 className="journal_caption">{caption}</h4>
          <p className="journal_entry"> {entry}</p>
          <h3 className="journal_date">{date}</h3>
        </div>
      </Link>
    </div>
  )
}
export default BookmarkedJournal
