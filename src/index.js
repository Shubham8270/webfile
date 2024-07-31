import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import Login from './components/login';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <Route path="/login" component={Login} />
      <Route path="/app" component={App} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
