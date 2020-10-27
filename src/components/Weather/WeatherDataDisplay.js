import React from 'react'

const WeatherDataDisplay = ({ data }) => {
  const current = data.list[0]
  return (
    <div className="weather-wrapper">
      <div className="main">
        <div className="temp">
          <img
            src={`https://openweathermap.org/img/w/${current.weather[0].icon}.png`}
            alt=""
            className="icon"
          />
          <p>{current.main.temp}&deg;C</p>
        </div>
        <h3 className="weather-title">
          {data.city.name}, {data.city.country}
        </h3>
      </div>
    </div>
  )
}

export default WeatherDataDisplay
