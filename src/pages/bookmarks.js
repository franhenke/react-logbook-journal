import React from 'react'
import * as ROUTES from '../constants/routes'
import { Link } from 'react-router-dom'
import chevron from '../assets/icons/chevron-left.svg'
import { BookmarksList } from '../components/Bookmarks/BookmarksList'
import Tabbar from '../components/Tabbar/Tabbar'

const Bookmarks = () => {
  return (
    <div className="grid">
      <div className="page-header">
        <Link to={ROUTES.HOME}>
          <img className="back-home-icon" src={chevron} alt="" />
        </Link>
        <h2>Your saved</h2>
        <h1 className="page-headline"> journal entries</h1>
      </div>
      <BookmarksList />
      <Tabbar />
    </div>
  )
}
export default Bookmarks
