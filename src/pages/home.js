import React from 'react'
import RecentJournalsList from '../components/Journals/RecentJournalsList'
import Frame from '../components/UI/frame'
import WeatherWidget from '../components/Weather/WeatherWidget'

export const HomeScreenComponent = () => {
  return (
    <Frame screenName="Home">
      <h1>Your recent journals</h1>
      <RecentJournalsList />
    </Frame>
  )
}
