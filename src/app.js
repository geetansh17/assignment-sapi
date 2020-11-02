import React from 'react'
import { Provider } from 'react-redux'
import { StaticRouter as Router, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';
import GlobalStyle from './styles/globalStyles';

const App = ({ store, routes, location, context = {} }) => (
  <Provider store={store}>
    <Router location={location} context={context}>
        <GlobalStyle />
        <Switch>
            {renderRoutes(routes)}
        </Switch>
    </Router>
  </Provider>
)

export default App