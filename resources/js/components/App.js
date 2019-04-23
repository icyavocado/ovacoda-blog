import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import BlogIndex from "./BlogIndex";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/blog-index" component={BlogIndex} />
            <Route path="/about-me" component={AboutMe} />
            <Route path="/contact-me" component={ContactMe} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
