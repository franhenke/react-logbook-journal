/* eslint-disable no-undef */
import React from 'react'
import { NavLink } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'

export default function NavLinkComponent({route, routeName, children}) {
  return (
    <NavLink
      className="sidebar__link"
      to={route}
      activeClassName="sidebar__link--selected"
    >
      <svg className="sidebar__link__icon" viewBox="0 0 24 24">
        {children}
      </svg>
      <span className="sidebar__link__route">{routeName}</span>
    </NavLink>
  )
}
