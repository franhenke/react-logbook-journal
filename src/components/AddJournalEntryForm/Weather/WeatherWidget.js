import React, { useState, useEffect } from 'react'
import { useGeoWeather, useQueryWeather } from '../../../hooks/useWeather'
import WeatherData from './WeatherData'

const WeatherWidget = () => {
  const [data, setData] = useState(null)

  let geoWeatherData = useGeoWeather()
  useEffect(() => {
    if (geoWeatherData) {
      setData(geoWeatherData)
    }
  }, [geoWeatherData])

  const [query, setQuery] = useState()
  let queryWeatherData = useQueryWeather(query)
  useEffect(() => {
    if (queryWeatherData) {
      setData(queryWeatherData)
    }
  }, [queryWeatherData])

  return (
    <>
      {data && data.cod === '200' ? (
        <WeatherData data={data} />
      ) : (
        data && <h3>{data.message.toUpperCase()}</h3>
      )}
    </>
  )
}

export default WeatherWidget
