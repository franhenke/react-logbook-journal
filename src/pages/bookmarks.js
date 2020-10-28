import React from 'react'
import { BookmarksList } from '../components/Journals/BookmarksList'
import Tabbar from '../components/Tabbar/Tabbar'

const Bookmarks = () => {
  return (
    <div className="grid">
      <BookmarksList />
      <Tabbar />
    </div>
  )
}
export default Bookmarks
