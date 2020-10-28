import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import RecentJournals from './RecentJournals'

const RecentJournalsList = () => {
  const { journalEntries } = useContext(GlobalContext)

  const recentJournals = journalEntries.slice(0, 3)
  console.log(recentJournals)

  return (
    <div className="recent-journals">
      {recentJournals.map((entry, index) => (
        <RecentJournals key={entry.index} entry={entry} />
      ))}
    </div>
  )
}

export default RecentJournalsList
