import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import JournalList from '../components/Journals/JournalList'
import Tabbar from '../components/Tabbar/Tabbar'

const Journals = () => {
  const { journalEntries } = useContext(GlobalContext)

  return (
    <div className="grid ">
      <JournalList />
      <Tabbar />
    </div>
  )
}

export default Journals
