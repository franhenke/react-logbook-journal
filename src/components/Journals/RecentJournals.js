import React from 'react'

const RecentJournals = ({ entry }) => {
  return (
    <div>
      <h3>{entry.date}</h3>
      <h4>{entry.category}</h4>
      <h4>{entry.place}</h4>
      <h4>{entry.caption}</h4>
      <p>{entry.entry}</p>
    </div>
  )
}

export default RecentJournals
