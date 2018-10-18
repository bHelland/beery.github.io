import React, { Component } from "react";
import logo from "./logo.svg";
import Widget from "@eiendomsprofil/finn-widget-web";

import "./App.css";
import "@eiendomsprofil/finn-widget-web/dist/style.css";

const ENDPOINT =
  "https://finn-widget-api-dev.herokuapp.com/profile/getProfile?id=130782885";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Widget endpoint={ENDPOINT} />
      </div>
    );
  }
}

export default App;
