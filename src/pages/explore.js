import React from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import Frame from '../components/UI/frame'

export const ExploreScreenComponent = () => {
  return (
    <Frame screenName="Explore">
      <div className="grid under-construction-container">
        <div className="under-construction">
          <h1>Nothing to explore, yet</h1>
          <p>This site is still under construction</p>
          <Link className="not-found-link" to={ROUTES.HOME}>
            Go back Home
          </Link>
        </div>
      </div>
    </Frame>
  )
}
