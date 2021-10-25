import React from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import Frame from '../components/UI/frame'
import MapComponent from '../components/Map/map'


export const ExploreScreenComponent = ({markers, setMarkers}) => {
  return (
    <Frame screenName="Explore">
      <MapComponent markers={markers} setMarkers={setMarkers}/>
    </Frame>
  )
}
