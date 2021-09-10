import React from 'react'
import { BookmarksList } from '../components/Bookmarks/BookmarksList'
import Frame from '../components/UI/frame'

export const BookmarksScreenComponent = () => {
  return (
    <Frame screenName="Saved">
      <BookmarksList />
    </Frame>
  )
}

