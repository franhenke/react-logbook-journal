import React from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import Truncate from 'react-truncate'
import Tabbar from '../Tabbar/Tabbar'

const BookmarkedJournal = ({ bookmark }) => {
  const { image, place, date, caption, entry } = bookmark
  return (
    <div className="">
      <div className="bookmarked-journal_container">
        <div className="bookmarked-image_container">
          <img className="bookmarked-image" src={image} alt="" />
        </div>
        <Link to={`/journals/${caption}`}>
          <div className="bookmarked-content">
            <p className="bookmarked_place">{place}</p>
            <h4 className="bookmarked_caption">{caption}</h4>
            <Truncate
              className="bookmarked_entry"
              lines={3}
              ellipsis={<span>... </span>}
            >
              {entry}
            </Truncate>
            <h3 className="bookmarked_date">{date}</h3>
          </div>
        </Link>
      </div>
    </div>
  )
}
export default BookmarkedJournal
