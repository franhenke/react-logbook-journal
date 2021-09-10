import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { GlobalProvider } from './context/GlobalContext'
import * as ROUTES from './constants/routes'
import { HomeScreenComponent } from './pages/home'
import { JournalsScreenComponent } from './pages/journals'
import { AddJournalScreenComponent } from './pages/addjournal'
import { BookmarksScreenComponent } from './pages/bookmarks'
import { NotFoundScreenComponent } from './pages/notfound'
import { ExploreScreenComponent } from './pages/explore'
import { JournalDetailsComponent } from './components/JournalDetails/JournalDetails'

const App = () => {
  return (
    <>
      <GlobalProvider>
        <Switch>
          <Redirect exact from="/" to={ROUTES.HOME} />
          <Route
            exact
            path={ROUTES.HOME}
            component={() => <HomeScreenComponent />}
          />
          <Route
            exact
            path={ROUTES.JOURNALS}
            component={() => <JournalsScreenComponent />}
          />
          <Route
            path={'/journals/:entryId'}
            component={() => <JournalDetailsComponent />}
          />
          <Route
            exact
            path={ROUTES.JOURNALFORM}
            component={() => <AddJournalScreenComponent />}
          />
          <Route
            exact
            path={ROUTES.BOOKMARKS}
            component={() => <BookmarksScreenComponent />}
          />
          <Route
            exact
            path={ROUTES.EXPLORE}
            component={() => <ExploreScreenComponent />}
          />
          <Route component={NotFoundScreenComponent} />
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
