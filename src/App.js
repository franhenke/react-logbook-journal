import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { GlobalProvider } from './context/GlobalContext'
import * as ROUTES from './constants/routes'
import Home from './pages/homepage'
import Journals from './pages/journals'
import AddJournal from './pages/addjournal'
import JournalDetailsPage from './pages/journalDetailsPage'
import Bookmarks from './pages/bookmarks'
import NotFound from './pages/404'

const App = () => {
  return (
    <>
      <GlobalProvider>
        <Switch>
          <Redirect exact from="/" to={ROUTES.HOME} />
          <Route exact path={ROUTES.HOME} component={() => <Home />} />
          <Route exact path={ROUTES.JOURNALS} component={() => <Journals />} />
          <Route
            path={'/journals/:entryId'}
            component={() => <JournalDetailsPage />}
          />
          <Route
            exact
            path={ROUTES.JOURNALFORM}
            component={() => <AddJournal />}
          />
          <Route
            exact
            path={ROUTES.BOOKMARKS}
            component={() => <Bookmarks />}
          />
          <Route component={NotFound} />
        </Switch>
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar
          closeOnClick
          rtl={false}
        />
      </GlobalProvider>
    </>
  )
}

export default App
