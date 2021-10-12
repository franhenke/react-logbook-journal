import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Frame from '../components/UI/frame'
import { GlobalContext } from '../context/GlobalContext'

export const HomeScreenComponent = () => {
   const { journalEntries } = useContext(GlobalContext)

   const recentJournals = journalEntries.slice(0, 3)

  return (
    <Frame screenName="Your recent journals">
      <div className="journal-entry__list">
        {recentJournals.map((entry) => (
          <Link to={`/journalentry/${entry.title}`} key={entry.title}>
            <div
              className="journal-entry__card"
              style={
                entry.image
                  ? {
                      backgroundImage: `url(${entry.image})`,
                    }
                  : undefined
              }
            >
              <div className="journal-entry__card__body">
                <p className="journal-entry__card__body__place">{entry.place}</p>
                <h4 className="journal-entry__card__body__title">
                  {entry.title}
                </h4>
                <h3 className="journal-entry__card__body__date">{entry.date}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Frame>
  )
}
