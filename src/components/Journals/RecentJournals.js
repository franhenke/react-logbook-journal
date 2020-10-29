import React from 'react'
import { Link } from 'react-router-dom'
import Truncate from 'react-truncate'

const RecentJournals = ({ entry }) => {
  return (
    <div className="recent-journal_container">
      <div className="recent-image_container">
        <img className="recent-image" src={entry.image} alt="" />
      </div>
      <Link to={`/journals/${entry.caption}`}>
        <div className="recent-content">
          <p className="recent_place">{entry.place}</p>
          <h4 className="recent_caption">{entry.caption}</h4>
          <Truncate
            className="recent_entry"
            lines={3}
            ellipsis={<span>...</span>}
          >
            {entry.entry}
          </Truncate>
          <h3 className="recent_date">{entry.date}</h3>
        </div>
      </Link>
    </div>
  )
}

export default RecentJournals
