import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Main from './containers/Layout/Main'
import ErrorBoundary from './components/ErrorBoundary'
import './App.scss'
import '@progress/kendo-theme-material/dist/all.css'

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
)

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <ErrorBoundary>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route
                path="/"
                name="Home"
                render={(props) => <Main {...props} />}
              />
            </Switch>
          </React.Suspense>{' '}
        </ErrorBoundary>
      </Router>
    </Provider>
  )
}

export default App
