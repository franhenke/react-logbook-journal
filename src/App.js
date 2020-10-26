import React, { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import { loadFromLocal, saveToLocal } from './hooks/useLocalStorage'
import AddJournalEntryForm from './components/AddJournalEntryForm/AddJournalEntryForm'

const App = () => {
  const [journalEntries, setJournalEntries] = useState(
    loadFromLocal('myJournalEntries') || []
  )

  useEffect(() => {
    saveToLocal('myJournalEntries', journalEntries)
  }, [journalEntries])

  return (
    <div>
      <AddJournalEntryForm onFormSubmit={handleJournalEntry} />
    </div>
  )

  function handleJournalEntry(newJournalEntry) {
    newJournalEntry.id = uuid()
    setJournalEntries([...journalEntries, newJournalEntry])
  }
}

export default App
