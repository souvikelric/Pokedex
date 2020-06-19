import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import DetailPage from "./DetailPage";

class Home extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <Route exact path="/" component={App} />
        <Route exact path="/DetailPage" component={DetailPage} />
      </BrowserRouter>
    );
  }
}

export default Home;
