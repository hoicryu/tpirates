import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Main from "./pages/main/Main"
import StoreDetail from "./pages/main/StoreDetail"

function Routes(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/store/:store" component={StoreDetail} />
      </Switch>
    </Router>
  )
}

export default Routes;