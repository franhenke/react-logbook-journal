import React from 'react'
import { Link } from 'react-router-dom'
import Truncate from 'react-truncate'

const RecentJournals = ({ entry }) => {
  return (
    <div className="recent-journal_container">
      <div className="recent-image_container">
        <img className="recent-image" src={entry.image} alt="" />
      </div>
      <div className="recent-content">
        <p className="recent_place">{entry.place}</p>
        <h4 className="recent_caption">{entry.caption}</h4>
        <Truncate
          className="recent_entry"
          lines={3}
          ellipsis={
            <span>
              ... <Link to={`/journals/${entry.caption}`}>Read more</Link>
            </span>
          }
        >
          {entry.entry}
        </Truncate>
        <h3 className="recent_date">{entry.date}</h3>
      </div>
    </div>
  )
}

export default RecentJournals
