import React from 'react'
import { Link } from 'react-router-dom'

const RecentJournals = ({ entry }) => {
  return (
    <div>
      <h3>{entry.date}</h3>
      <h4>{entry.category}</h4>
      <h4>{entry.place}</h4>
      <h4>{entry.caption}</h4>
      <p>{entry.entry}</p>
      <Link to={`/journals/${entry.caption}`}>... see more</Link>
    </div>
  )
}

export default RecentJournals
