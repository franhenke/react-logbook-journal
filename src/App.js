import React, { useState } from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { GlobalProvider } from './context/GlobalContext'
import * as ROUTES from './constants/routes'
import { HomeScreenComponent } from './screens/home'
import { JournalsScreenComponent } from './screens/journals'
import { AddJournalScreenComponent } from './screens/addjournal'
import { BookmarksScreenComponent } from './screens/bookmarks'
import { NotFoundScreenComponent } from './screens/notfound'
import { ExploreScreenComponent } from './screens/explore'
import { JournalDetailsComponent } from './components/JournalDetails/JournalDetails'

const App = () => {
  const [markers, setMarkers] = useState([])

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
            path={'/journalentry/:entryId'}
            component={() => <JournalDetailsComponent />}
          />
          <Route
            exact
            path={ROUTES.JOURNALFORM}
            component={() => (
              <AddJournalScreenComponent
                markers={markers}
                setMarkers={setMarkers}
              />
            )}
          />
          <Route
            exact
            path={ROUTES.BOOKMARKS}
            component={() => <BookmarksScreenComponent />}
          />
          <Route
            exact
            path={ROUTES.EXPLORE}
            component={() => (
              <ExploreScreenComponent
                markers={markers}
                setMarkers={setMarkers}
              />
            )}
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
