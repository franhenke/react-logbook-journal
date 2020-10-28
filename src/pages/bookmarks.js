import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

const Bookmarks = () => {
  const { journalEntries } = useContext(GlobalContext)

  const booksMarks = journalEntries.filter(
    (journal) => journal.bookmarked === true
  )

  console.log(booksMarks)

  return <div></div>
}

export default Bookmarks
