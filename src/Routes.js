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
      <Route exact path="/" component={Main} />
    </Router>
  )
}

export default Routes;