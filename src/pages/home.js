import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Frame from '../components/UI/frame'
import WeatherWidget from '../components/Weather/WeatherWidget'
import { GlobalContext } from '../context/GlobalContext'

export const HomeScreenComponent = () => {
   const { journalEntries } = useContext(GlobalContext)

   const recentJournals = journalEntries.slice(0, 3)

  return (
    <Frame screenName="Your recent journals">
      <div className="journal-list__container">
        {recentJournals.map((entry) => (
          <Link to={`/journals/${entry.caption}`} key={entry.caption}>
            <div
              className="journal-list__item"
              style={
                entry.image
                  ? {
                      backgroundImage: `url(${entry.image})`,
                    }
                  : undefined
              }
            >
              <div className="journal-list__item__body">
                <p className="journal-list__item__body__place">
                  {entry.place}
                </p>
                <h4 className="journal-list__item__body__caption">
                  {entry.caption}
                </h4>
                <h3 className="journal-list__item__body__date">
                  {entry.date}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Frame>
  )
}
