import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalContext'
import plusIcon from '../../assets/icons/plus-circle.svg'
import trashIcon from '../../assets/icons/trash.svg'

const JournalEntry = ({ entry }) => {
  const { deleteEntry } = useContext(GlobalContext)
  return (
    <>
      <div className="journal-entry__grid-card">
        {entry.image ? (
          <img src={entry.image} alt="" className="journal-entry__grid-card__preview" />
        ) : (
          <img src={plusIcon} alt="" className="journal-entry__grid-card__preview" />
        )}
        <div className="journal-entry__grid-card__body">
          <Link to={`/journals/${entry.title}`}>
            <p className="journal-entry__grid-card__body__place">{entry.place}</p>
            <h4 className="journal-entry__grid-card__body__title">{entry.title}</h4>
            <p className="journal-entry__grid-card__body__entry">{entry.entry}</p>
            <p className="journal-entry__grid-card__body__date">{entry.date}</p>
          </Link>
          <button
            className="journal-entry__grid-card__delete"
            onClick={() => deleteEntry(entry.id)}
          >
            <img src={trashIcon} alt="delete" />
          </button>
        </div>
      </div>
    </>
  )
}

export default JournalEntry
