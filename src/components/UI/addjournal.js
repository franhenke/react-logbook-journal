import React from 'react'
import { NavLink } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import addJournal from '../../assets/icons/add-journal.svg'

export default function AddJournal() {
  return (
    <div className="add-journal">
      <NavLink
        className="add-journal__link"
        to={ROUTES.JOURNALFORM}
        activeClassName="sidebar__link--selected"
      >
        <img src={addJournal} alt="submit" />
      </NavLink>
    </div>
  )
}
