import React from 'react'
import { render } from 'react-dom'
import { HistoryRouter as Router } from 'redux-first-history/rr6'
import { Provider } from 'react-redux'

import { store, history } from './store'
import { App } from 'components/@shared/app'

render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
