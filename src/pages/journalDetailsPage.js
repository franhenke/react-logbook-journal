import React from 'react'
import JournalDetails from '../components/JournalDetails/JournalDetails'
import Tabbar from '../components/Tabbar/Tabbar'

const JournalDetailsPage = () => {
  return (
    <div className="grid">
      <JournalDetails />
      <Tabbar />
    </div>
  )
}

export default JournalDetailsPage
