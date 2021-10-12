import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Frame from '../components/UI/frame'
import { GlobalContext } from '../context/GlobalContext'

export const BookmarksScreenComponent = () => {
  const { journalEntries } = useContext(GlobalContext)

  const bookmarkedJournals = journalEntries.filter(
    (bookmark) => bookmark.bookmarked === true
  )
  return (
    <Frame screenName="Saved">
      <div className="journal-entry__list">
        {bookmarkedJournals.map((bookmark) => (
          <Link to={`/journalentry/${bookmark.title}`} key={bookmark.title}>
            <div
              className="journal-entry__card"
              style={
                bookmark.image
                  ? {
                      backgroundImage: `url(${bookmark.image})`,
                    }
                  : undefined
              }
            >
              <div className="journal-entry__card__body">
                <p className="journal-entry__card__body__place">
                  {bookmark.place}
                </p>
                <h4 className="journal-entry__card__body__title">
                  {bookmark.title}
                </h4>
                <h3 className="journal-entry__card__body__date">
                  {bookmark.date}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Frame>
  )
}
