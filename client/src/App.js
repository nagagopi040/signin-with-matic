import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import LoginPage from "./pages/login-page";
import UserProfile from "./pages/user-profile";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/common.css";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4 offset-4">
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={LoginPage} />
                <Route path="/profile" component={UserProfile} />
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    )
  }
}