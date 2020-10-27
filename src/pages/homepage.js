import React from 'react'
import RecentJournalsList from '../components/Journals/RecentJournalsList'
import Tabbar from '../components/Tabbar/Tabbar'
import WeatherWidget from '../components/Weather/WeatherWidget'

const Home = () => {
  return (
    <div className="grid ">
      <WeatherWidget />
      <RecentJournalsList />
      <Tabbar />
    </div>
  )
}

export default Home
