import { useState, useEffect } from 'react'

let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 10000,
}

const useGeolocation = () => {
  const [location, setLocation] = useState(null)
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          if (location && location.accuracy === pos.coords.accuracy) return
          setLocation(pos.coords)
        },

        (err) => console.log(err),

        options
      )
    }
  }, [location])
  return location
}

export default useGeolocation
