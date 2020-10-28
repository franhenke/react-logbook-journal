import React from 'react'

const WeatherDataDisplay = ({ data }) => {
  const current = data.list[0]
  return (
    <div className="weather-wrapper">
      <div className="temp">
        <img
          src={`https://openweathermap.org/img/w/${current.weather[0].icon}.png`}
          alt=""
          className="icon"
        />
        <p className="current-temp">{Math.round(current.main.temp)}&deg;</p>
      </div>
      <h3 className="weather-title">
        {data.city.name}, {data.city.country}
      </h3>
    </div>
  )
}

export default WeatherDataDisplay
