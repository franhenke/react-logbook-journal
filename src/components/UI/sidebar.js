import React from 'react'
import { NavLink } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'

export default function SidebarComponent({ expanded, toggleSidebar }) {
  return (
    <>
      <div className="sidebar__toggle" onClick={toggleSidebar}>
        {expanded ? (
          <svg className="sidebar__toggle__icon" viewBox="0 0 24 24">
            <g
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 17l-5-5l5-5" />
              <path d="M18 17l-5-5l5-5" />
            </g>
          </svg>
        ) : (
          <svg className="sidebar__toggle__icon" viewBox="0 0 24 24">
            <g
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M13 17l5-5l-5-5" />
              <path d="M6 17l5-5l-5-5" />
            </g>
          </svg>
        )}
      </div>
      <div className={`sidebar ${expanded ? 'sidebar--expanded' : ''}`}>
        <NavLink
          className="sidebar__link"
          to={ROUTES.HOME}
          activeClassName="sidebar__link--selected"
        >
          <svg className="sidebar__link__icon" viewBox="0 0 24 24">
            <g
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <path d="M9 22V12h6v10" />
            </g>
          </svg>
          <span className="sidebar__link__route">Home</span>
        </NavLink>
        <NavLink
          className="sidebar__link"
          to={ROUTES.JOURNALS}
          activeClassName="sidebar__link--selected"
        >
          <svg className="sidebar__link__icon" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </g>
          </svg>
          <span className="sidebar__link__route">Journals</span>
        </NavLink>
        <NavLink
          className="sidebar__link"
          to={ROUTES.BOOKMARKS}
          activeClassName="sidebar__link--selected"
        >
          <svg className="sidebar__link__icon" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21l-7-5l-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </g>
          </svg>
          <span className="sidebar__link__route">Saved</span>
        </NavLink>
        <NavLink
          className="sidebar__link"
          to={ROUTES.EXPLORE}
          activeClassName="sidebar__link--selected"
        >
          <svg className="sidebar__link__icon" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </g>
          </svg>
          <span className="sidebar__link__route">Explore</span>
        </NavLink>
      </div>
    </>
  )
}
