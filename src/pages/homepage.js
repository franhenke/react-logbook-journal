import React from 'react'
import Tabbar from '../components/Tabbar/Tabbar'
import WeatherWidget from '../components/Weather/WeatherWidget'

const Home = () => {
  return (
    <div className="grid-2col ">
      <WeatherWidget />
      <Tabbar />
    </div>
  )
}

export default Home
