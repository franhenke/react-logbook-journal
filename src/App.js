import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import { GlobalProvider } from './context/GlobalContext'
import * as ROUTES from './constants/routes'
import AddJournalEntryForm from './components/Journals/AddJournalEntryForm'
import JournalList from './components/Journals/JournalList'
import Home from './pages/homepage'
import Tabbar from './components/Tabbar/Tabbar'

const App = () => {
  return (
    <div className="grid">
      <GlobalProvider>
        <Switch>
          <Redirect exact from="/" to={ROUTES.HOME} />
          <Route exact path={ROUTES.HOME} component={() => <Home />} />
          <Route
            exact
            path={ROUTES.JOURNALS}
            component={() => <JournalList />}
          />
          <Route
            exact
            path={ROUTES.JOURNALFORM}
            component={() => <AddJournalEntryForm />}
          />
        </Switch>
      </GlobalProvider>
    </div>
  )
}

export default App
