import React from 'react'
import AddJournalEntryForm from '../components/Journals/AddJournalEntryForm'
import Frame from '../components/UI/frame'

export const AddJournalScreenComponent = () => {
  return (
    <Frame screenName="Create a new memory">
      <AddJournalEntryForm />
    </Frame>
  )
}
