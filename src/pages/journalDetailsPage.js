import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import * as ROUTES from '../constants/routes'
import chevron from '../assets/icons/chevron-left.svg'
import { useParams, Link } from 'react-router-dom'
import Tabbar from '../components/Tabbar/Tabbar'

const JournalDetailsPage = () => {
  const { journalEntries } = useContext(GlobalContext)
  const { entryId } = useParams()
  const [selectedEntry] = journalEntries.filter(
    (journalEntries) => entryId === journalEntries.caption
  )

  const { image, place, date, category, caption, entry } = selectedEntry

  return (
    <div className="grid">
      <div className="featured-image-wrapper">
        <img src={image} alt="featured image" />
      </div>
      <div className="content-container">
        <h3>{caption}</h3>
        <h3>{date}</h3>
        <h3>{place}</h3>
        <h3>{category}</h3>
        <h3>{entry}</h3>
      </div>
      <Link to={ROUTES.HOME}>
        <img src={chevron} alt="go-back" />
      </Link>
      <Tabbar />
    </div>
  )
}

export default JournalDetailsPage
