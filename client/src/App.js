import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import LoginPage from "./pages/login-page";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => (!this.props.isAuthenticated && <Home /> )} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </Router>
    )
  }
}