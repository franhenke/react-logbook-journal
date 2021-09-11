import React from 'react'
import mapStyles from './mapstyles'
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api'
import { formatRelative } from 'date-fns'
import '@reach/combobox/styles.css'

const libraries = ['places']
const mapContainerStyle = {
  width: '100vw',
  height: '50vh',
}

const center = {
  lat: 53.551086,
  lng: 9.993682,
}

const options = {
  styles: mapStyles,
}

export default function MapComponent() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  })

  if (loadError) return 'Error loading maps'
  if (!isLoaded) return 'Loading Maps'

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
      ></GoogleMap>
    </div>
  )
}
