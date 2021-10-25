import React, { useState } from 'react'
import mapStyles from './mapstyles'
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api'
import { formatRelative } from 'date-fns'
import '@reach/combobox/styles.css'
import { useCallback } from 'react'
import { useRef } from 'react'
import MapSearch from './mapsearch'

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
  disableDefaultUI: true,
  zoomControl: true,
}

export default function MapComponent() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  })
  const [markers, setMarkers] = useState([])
  const [selectedMarker, setSelectedMarker] = useState(null)

  const onMapClick = useCallback((event) => {
    setMarkers((current) => [
      ...current,
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date(),
      },
    ])
  }, [])

  const mapRef = useRef()
  const onMapLoad = useCallback((map) => {
    mapRef.current = map
  }, [])

  const panToMap = useCallback(
    ({lat, lng}) => {
      mapRef.current.panTo({lat, lng})
      mapRef.current.setZoom(14)
    },
    [],
  )

  if (loadError) return 'Error loading maps'
  if (!isLoaded) return 'Loading Maps'

  return (
    <div className="map">
    <MapSearch panTo={panToMap} markers={markers} setMarkers={setMarkers}/>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.time.toISOString()}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
              scaledSize: new window.google.maps.Size(30, 30),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
            }}
            onClick={() => {
              setSelectedMarker(marker)
            }}
          />
        ))}
        {selectedMarker ? (
          <InfoWindow
            position={{
              lat: selectedMarker.lat,
              lng: selectedMarker.lng,
            }}
            onCloseClick={() => {
              setSelectedMarker(null)
            }}
          >
            <div>
              <h2>Your memory</h2>
              <p>Created: {formatRelative(selectedMarker.time, new Date())}</p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  )
}
