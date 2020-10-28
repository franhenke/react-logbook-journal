import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import * as ROUTES from '../constants/routes'
import chevron from '../assets/icons/chevron-left.svg'
import { useParams, Link } from 'react-router-dom'

const JournalDetailsPage = () => {
  const { journalEntries } = useContext(GlobalContext)
  const { entryId } = useParams()
  const [selectedEntry] = journalEntries.filter(
    (journalEntries) => entryId === journalEntries.caption
  )

  const { image, place, date, category, caption, entry } = selectedEntry

  return (
    <div>
      <img src={image} alt="featured image" />
      <p>{date}</p>
      <p>{place}</p>
      <p>{category}</p>
      <p>{caption}</p>
      <p>{entry}</p>
      <Link to={ROUTES.HOME}>
        <img src={chevron} alt="go-back" />
      </Link>
    </div>
  )
}

export default JournalDetailsPage
