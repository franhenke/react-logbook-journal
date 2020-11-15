import React from 'react'
import { Link } from 'react-router-dom'

const RecentJournals = ({ entry }) => {
  return (
    <div className="journal-content-container">
      <div className="image-container">
        <img src={entry.image} alt="" />
      </div>
      <Link to={`/journals/${entry.caption}`}>
        <div>
          <p className="journal_place">{entry.place}</p>
          <h4 className="journal_caption">{entry.caption}</h4>
          <p className="journal_entry"> {entry.entry}</p>
          <h3 className="journal_date">{entry.date}</h3>
        </div>
      </Link>
    </div>
  )
}

export default RecentJournals
