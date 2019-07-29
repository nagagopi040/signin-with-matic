import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import LoginPage from "./pages/login-page";
import UserProfile from "./pages/user-profile";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginPage} />
          <Route path="/profile" component={UserProfile} />
        </Switch>
      </Router>
    )
  }
}