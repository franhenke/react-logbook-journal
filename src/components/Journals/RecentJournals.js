import React from 'react'
import { Link } from 'react-router-dom'
import Truncate from 'react-truncate'

const RecentJournals = ({ entry }) => {
  return (
    <div className="journal-content-container">
      <div className="image-container">
        <img className="journal-image" src={entry.image} alt="" />
      </div>
      <Link to={`/journals/${entry.caption}`}>
        <div>
          <p className="journal_place">{entry.place}</p>
          <h4 className="journal_caption">{entry.caption}</h4>
          <Truncate
            className="journal_truncate"
            lines={3}
            ellipsis={<span>...</span>}
          >
            {entry.entry}
          </Truncate>
          <h3 className="journal_date">{entry.date}</h3>
        </div>
      </Link>
    </div>
  )
}

export default RecentJournals
