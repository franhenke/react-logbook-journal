import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import { GlobalProvider } from './context/GlobalContext'
import * as ROUTES from './constants/routes'
import Home from './pages/homepage'
import Journals from './pages/journals'
import AddJournal from './pages/addjournal'

const App = () => {
  return (
    <>
      <GlobalProvider>
        <Switch>
          <Redirect exact from="/" to={ROUTES.HOME} />
          <Route exact path={ROUTES.HOME} component={() => <Home />} />
          <Route exact path={ROUTES.JOURNALS} component={() => <Journals />} />
          <Route
            exact
            path={ROUTES.JOURNALFORM}
            component={() => <AddJournal />}
          />
        </Switch>
      </GlobalProvider>
    </>
  )
}

export default App
