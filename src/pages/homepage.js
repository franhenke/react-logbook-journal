import React from 'react'
import RecentJournalsList from '../components/Journals/RecentJournalsList'
import Tabbar from '../components/Tabbar/Tabbar'
import WeatherWidget from '../components/Weather/WeatherWidget'

const Home = () => {
  return (
    <div className="grid">
      <div className="homepage-header">
        <h2>Your recent</h2>
        <h1 className="page-headline"> journal entries</h1>
      </div>
      <WeatherWidget />
      <RecentJournalsList />
      <Tabbar />
    </div>
  )
}

export default Home
