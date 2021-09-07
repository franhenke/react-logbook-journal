import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import RecentJournals from './RecentJournals'

const RecentJournalsList = () => {
  const { journalEntries } = useContext(GlobalContext)

  const recentJournals = journalEntries.slice(0, 3)
  console.log(journalEntries)

  return (
    <div className="recent-journals-container">
      {recentJournals.map((entry) => (
        <RecentJournals key={entry.id} entry={entry} />
      ))}
    </div>
  )
}

export default RecentJournalsList
