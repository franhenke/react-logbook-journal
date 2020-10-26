import React, { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import { Redirect, Switch, Route } from 'react-router-dom'

import * as ROUTES from './constants/routes'
import { loadFromLocal, saveToLocal } from './hooks/useLocalStorage'
import AddJournalEntryForm from './components/AddJournalEntryForm/AddJournalEntryForm'
import JournalList from './components/AddJournalEntryForm/Journals/JournalList'
import Home from './pages/homepage'

const App = () => {
  const [editing, setEditing] = useState(false)
  const initialFormState = {
    id: null,
    date: '',
    place: '',
    category: '',
    caption: '',
    entry: '',
    image: '',
  }
  const [selectedJournal, setSelectedJournal] = useState(initialFormState)
  const [journalEntries, setJournalEntries] = useState(
    loadFromLocal('myJournalEntries') || []
  )
  useEffect(() => {
    saveToLocal('myJournalEntries', journalEntries)
  }, [journalEntries])

  const deleteEntry = (id) => {
    setJournalEntries(journalEntries.filter((journal) => journal.id !== id))
    setEditing(false)
  }

  const editRow = (journal) => {
    setEditing(true)
    setSelectedJournal({
      id: journal.id,
      date: journal.date,
      place: journal.place,
      category: journal.category,
      caption: journal.caption,
      entry: journal.entry,
      image: journal.image,
    })
  }

  const updateJournal = (id, updatedJournal) => {
    setEditing(false)
    setJournalEntries(
      journalEntries.map((journal) =>
        journal.id === id ? updatedJournal : journal
      )
    )
  }

  return (
    <div>
      <Switch>
        <Redirect exact from="/" to={ROUTES.HOME} />
        <Route exact path={ROUTES.HOME} component={() => <Home />} />
        <Route
          exact
          path={ROUTES.JOURNALS}
          component={() => (
            <JournalList
              journalEntries={journalEntries}
              deleteEntry={deleteEntry}
              editRow={editRow}
              updateJournal={updateJournal}
              editing={editing}
              setEditing={setEditing}
              selectedJournal={selectedJournal}
            />
          )}
        />
        <Route
          exact
          path={ROUTES.JOURNALFORM}
          component={() => (
            <AddJournalEntryForm handleJournalEntry={handleJournalEntry} />
          )}
        />
      </Switch>
    </div>
  )

  function handleJournalEntry(newJournalEntry) {
    newJournalEntry.id = uuid()
    setJournalEntries([...journalEntries, newJournalEntry])
  }
}

export default App
