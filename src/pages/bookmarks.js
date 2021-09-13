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
      <div className="journal-list__container">
        {bookmarkedJournals.map((bookmark) => (
          <Link to={`/journals/${bookmark.caption}`} key={bookmark.caption}>
            <div
              className="journal-list__item"
              style={
                bookmark.image
                  ? {
                      backgroundImage: `url(${bookmark.image})`,
                    }
                  : undefined
              }
            >
              <div className="journal-list__item__body">
                <p className="journal-list__item__body__place">{bookmark.place}</p>
                <h4 className="journal-list__item__body__caption">{bookmark.caption}</h4>
                <h3 className="journal-list__item__body__date">{bookmark.date}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Frame>
  )
}
