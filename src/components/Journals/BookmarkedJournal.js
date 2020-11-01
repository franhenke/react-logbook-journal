import React from 'react'
import { Link } from 'react-router-dom'
import Truncate from 'react-truncate'

const BookmarkedJournal = ({ bookmark }) => {
  const { image, place, date, caption, entry } = bookmark
  return (
    <div className="">
      <div className="journal-content-container">
        <div className="image-container">
          <img className="journal-image" src={image} alt="" />
        </div>
        <Link to={`/journals/${caption}`}>
          <div>
            <p className="journal_place">{place}</p>
            <h4 className="journal_caption">{caption}</h4>
            <Truncate
              className="journal_truncate"
              lines={3}
              ellipsis={<span>... </span>}
            >
              {entry}
            </Truncate>
            <h3 className="journal_date">{date}</h3>
          </div>
        </Link>
      </div>
    </div>
  )
}
export default BookmarkedJournal
