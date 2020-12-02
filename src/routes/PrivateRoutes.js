import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';

const PrivateRoutes = () => {
  return (
    <Router>
      <Switch>
        {
          routes.map((route, idx) => (
            <Route key={idx} path={route.path} exact={route.exact}>
              <route.page />
            </Route>
          ))
        }
      </Switch>
    </Router>
  )
}

export default PrivateRoutes;
