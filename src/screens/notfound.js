import React from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import notFound from '../assets/images/notFound.svg'
import Frame from '../components/UI/frame'

export const NotFoundScreenComponent = () => {
  return (
    <Frame screenName="404">
      <div className="not-found-container">
        <h1>It seems you got lost</h1>
        <p>
          You either mistyped or the page you are looking for no longer exists
        </p>
        <Link className="not-found-link" to={ROUTES.HOME}>
          Go back Home
        </Link>
      </div>
      <img className="not-found" src={notFound} alt="" />
    </Frame>
  )
}
