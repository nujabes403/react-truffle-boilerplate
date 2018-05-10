import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

import getWeb3 from 'ethereum/getWeb3'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import store from './store'

import './index.scss'

const history = syncHistoryWithStore(browserHistory, store)

getWeb3(store)
  .then(console.log)
  .catch(console.log)

export const renderRoutes = (rootComponent) => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={rootComponent} />
    </Router>
  </Provider>
)

ReactDOM.render(renderRoutes(App), document.getElementById('root'))
registerServiceWorker()

if (module.hot) {
  module.hot.accept('./App.js', () => {
    const NextApp = require('./App').default
    ReactDOM.render(renderRoutes(NextApp), document.getElementById('root'))
    console.log('Hot module replaced..')
  })
}
