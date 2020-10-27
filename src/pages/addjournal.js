import React from 'react'
import AddJournalEntryForm from '../components/Journals/AddJournalEntryForm'
import Tabbar from '../components/Tabbar/Tabbar'

export const AddJournal = () => {
  return (
    <div className="grid">
      <AddJournalEntryForm />
      <Tabbar />
    </div>
  )
}

export default AddJournal
