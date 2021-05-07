import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Main from "./pages/main/Main"

function Routes(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/시장" component={Main} />
      </Switch>
    </Router>
  )
}

export default Routes;